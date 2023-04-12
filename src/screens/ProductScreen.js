import { StyleSheet, View, FlatList, Image, SafeAreaView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productSlice } from "../store/productSlice";
const ProductScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <Pressable style={styles.itemContainer} onPress={() => {
                        // update selected product
                        dispatch(productSlice.actions.setSelectedProduct(item.id))
                        navigation.navigate('Products Details')
                    }}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.image}
                        />
                    </Pressable>
                )}
                numColumns={2}
            />
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1,
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    }
});


export default ProductScreen;