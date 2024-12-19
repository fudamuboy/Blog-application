import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../Context/BlogContext'

export default function GosterPage({ route }) {

    const { state } = useContext(Context);
    console.log(route.params.id);
    // Rechercher l'article correspondant
    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);

    return (
        <View>
            <Text>{blogPost.titre}</Text>
            <Text>{blogPost.contenu}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})