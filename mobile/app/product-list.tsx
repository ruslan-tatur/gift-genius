import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAppStyles } from '@/hooks/useAppStyles';

const products = [
    {
        id: 1,
        name: 'Wireless Earbuds',
        price: 79.99,
        image: require('../assets/images/wireless-earbuds.png'),
    },
    {
        id: 2,
        name: 'Smartwatch',
        price: 199.99,
        image: require('../assets/images/smartwatch.png'),
    },
    {
        id: 3,
        name: 'Portable Speaker',
        price: 59.99,
        image: require('../assets/images/portable-speaker.png'),
    },
];

const ProductList = () => {
    const appStyles = useAppStyles();
    const navigation = useNavigation();

    return (
        <ScrollView style={[{ backgroundColor: appStyles.backgroundColor }, styles.container]}>
            {products.map((product) => (
                <View key={product.id} style={styles.productCard}>
                    <Image source={product.image} style={styles.productImage} />
                    <View style={styles.productInfo}>
                        <Text style={styles.productName}>{product.name}</Text>
                        <Text style={styles.productPrice}>${product.price}</Text>
                        <TouchableOpacity style={styles.buyButton}>
                            <Text style={styles.buyButtonText}>Buy on Amazon</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    productCard: {
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        backgroundColor: '#2a2a2a',
    },
    productImage: {
        height: 200,
        width: '100%',
        resizeMode: 'cover',
    },
    productInfo: {
        padding: 16,
    },
    productName: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productPrice: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 12,
    },
    buyButton: {
        backgroundColor: '#000000',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buyButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductList;
