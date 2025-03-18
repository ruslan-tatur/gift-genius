package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/ruslan-tatur/gift-genius/internal/pkg/amazon"
	"github.com/ruslan-tatur/gift-genius/internal/pkg/chatgpt"
)

// Handler contains dependencies for API handlers
type Handler struct {
	AmazonClient  *amazon.Client
	ChatGPTClient *chatgpt.Client
}

// NewHandler creates a new API handler
func NewHandler(amazonClient *amazon.Client, chatgptClient *chatgpt.Client) *Handler {
	return &Handler{
		AmazonClient:  amazonClient,
		ChatGPTClient: chatgptClient,
	}
}

// HandleGiftIdeas processes gift idea requests
func (h *Handler) HandleGiftIdeas(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	// Parse request body
	var requestBody struct {
		RecipientDescription string `json:"recipientDescription"`
	}

	if err := json.NewDecoder(r.Body).Decode(&requestBody); err != nil {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return
	}

	// Generate gift ideas using ChatGPT
	suggestion, err := h.ChatGPTClient.GenerateGiftIdeas(requestBody.RecipientDescription)
	if err != nil {
		log.Printf("Error generating gift ideas: %v", err)
		http.Error(w, "Failed to generate gift ideas", http.StatusInternalServerError)
		return
	}

	// Search for products on Amazon
	products, err := h.AmazonClient.SearchProducts(suggestion.Keywords)
	if err != nil {
		log.Printf("Error searching Amazon products: %v", err)
		http.Error(w, "Failed to search products", http.StatusInternalServerError)
		return
	}

	// Prepare and send response
	response := struct {
		Suggestion chatgpt.GiftSuggestion `json:"suggestion"`
		Products   []amazon.Product       `json:"products"`
	}{
		Suggestion: suggestion,
		Products:   products,
	}

	w.Header().Set("Content-Type", "application/json")
	if err := json.NewEncoder(w).Encode(response); err != nil {
		log.Printf("Error encoding response: %v", err)
		http.Error(w, "Failed to encode response", http.StatusInternalServerError)
		return
	}
}
