package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/ruslan-tatur/gift-genius/internal/api"
	"github.com/ruslan-tatur/gift-genius/internal/pkg/amazon"
	"github.com/ruslan-tatur/gift-genius/internal/pkg/chatgpt"
)

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file, using environment variables")
	}

	// Initialize Amazon client
	amazonClient := amazon.NewClient(
		os.Getenv("AMAZON_ACCESS_KEY"),
		os.Getenv("AMAZON_SECRET_KEY"),
		os.Getenv("AMAZON_ASSOCIATE_TAG"),
		os.Getenv("AMAZON_REGION"),
	)

	// Initialize ChatGPT client
	chatgptClient := chatgpt.NewClient(
		os.Getenv("OPENAI_API_KEY"),
	)

	// Initialize API handler
	handler := api.NewHandler(amazonClient, chatgptClient)

	// Define HTTP routes
	http.HandleFunc("/api/gift-ideas", handler.HandleGiftIdeas)

	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Server running on :%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
