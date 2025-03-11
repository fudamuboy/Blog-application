import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../Context/BlogContext'

export default function GosterPage({ route }) {
    const { state } = useContext(Context);

    console.log("Route Params:", route.params);
    console.log("State:", state);

    const blogPost = state.find((blogPost) => blogPost.id === route.params?.id);

    if (!blogPost) {
        return (
            <View style={styles.container}>
                <Text style={styles.titre}>Veri bulunamadı</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.baslik}>
                <Text style={styles.titre}>TITRE</Text>
                <Text style={styles.titre}>{blogPost.title}</Text>
            </View>

            <View style={styles.icerigi}>
                <Text style={styles.context}>CONTENU</Text>
                <Text style={styles.context}>{blogPost.contenu}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 10,
    },
    baslik: {
        borderWidth: 1,
        marginBottom: 10,
        textAlign: 'center',
        width: '90%',
        paddingVertical: 10,
        borderRadius: 10,

    },
    icerigi: {
        borderWidth: 1,
        paddingVertical: 10,
        width: '90%',
        height: '70%',
        borderRadius: 10,

    },
    titre: {
        textAlign: 'center',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',

    },
    context: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
    },

})