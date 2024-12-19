import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogForm({ onSubmit }) {
    const [titre, setTitre] = useState('')
    const [contenu, setContenu] = useState('')
    return (
        <View>
            <Text style={styles.titre}>Enter ur title:</Text>
            <TextInput style={styles.input} placeholder='Titre'
                value={titre}
                onChangeText={(text) => setTitre(text)} />
            <Text style={styles.titre}>Enter ur content:</Text>
            <TextInput style={styles.input} placeholder='Contenu'
                value={contenu}
                onChangeText={(text) => setContenu(text)} />
            <TouchableOpacity onPress={() => onSubmit(titre, contenu)}>
                <Text style={styles.btn} >SAVE</Text>
            </TouchableOpacity>

        </View>
    )
}
// enusite on va vers la page pour declarer onSubmit creer ici 

const styles = StyleSheet.create({
    titre: {
        fontSize: 19,
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        margin: 10,
        bottom: 5,
    },
    btn: {
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        color: 'white',
    },

})