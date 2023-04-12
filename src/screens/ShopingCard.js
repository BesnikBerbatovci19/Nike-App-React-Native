import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View, Pressable } from 'react-native';

import { CardListItem } from '../components';
import { useSelector } from 'react-redux';
import { selectSubtotal, selectDeliveryPrice, selectTotal } from '../store/cartSlice';

const ShoppingCartTotals = () => {
    const subtotal = useSelector(selectSubtotal);
    const deliveryFee = useSelector(selectDeliveryPrice);
    const total = useSelector(selectTotal);

    return (
        <View style={styles.totalsContainer}>
            <View style={styles.row}>
                <Text>Subtotal</Text>
                <Text>{subtotal} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryFee} US$</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total} US$</Text>
            </View>
        </View>
    )
}
const ShopingCard = () => {
    const cartItems = useSelector(state => state.cart.items);


    return (
        <>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CardListItem cartItem={item} />}
                ListFooterComponent={ShoppingCartTotals}
            />
            {/* Add to cart button */}
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Checkout</Text>
            </Pressable>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    totalsContainer: {
        margin: 20,
        paddingTop: 10,
        borderColor: 'gainsboro',
        borderTopWidth: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2,
    },
    text: {
        fontSize: 16,
        color: 'gray',
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500',
    },

    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
    },
});
export default ShopingCard