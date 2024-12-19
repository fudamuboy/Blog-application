import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../Context/BlogContext'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function IndexPage({ navigation }) {

    // blogPosts tetiklemek icin bi buton ekldik  view icinide 
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View>

            {/* <Button title='EKLE' onPress={addBlogPost} /> */}
            {/* <Text>IndexPage</Text> */}
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        // ds cette partie en cliquant sur le btn le texte affiche sera ds une  autre page 
                        // il fait cela en focntion de item avec id 
                        <TouchableOpacity onPress={() => navigation.navigate("Goster", { id: item.id })}>
                            <View style={styles.Context}>
                                <Text style={styles.title}>{item.title} </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <FontAwesome5 name="trash" size={24} color="black" />
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>

                    );
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    Context: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: 'gray',

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})