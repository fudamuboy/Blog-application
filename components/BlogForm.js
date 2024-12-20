import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogForm({ onSubmit, initiaValues, isEditable }) {
    const [title, setTitle] = useState(initiaValues ? initiaValues.title : '')
    const [contenu, setContenu] = useState(initiaValues ? initiaValues.contenu : '')
    return (
        <View>
            <Text style={styles.titre}>Enter ur title:</Text>
            <TextInput style={styles.input} placeholder='Titre'
                value={title}
                onChangeText={(text) => setTitle(text)} />
            <Text style={styles.titre}>Enter ur content:</Text>
            <TextInput style={styles.input2} placeholder='Contenu'
                value={contenu}
                onChangeText={(text) => setContenu(text)} />
            <TouchableOpacity onPress={() => onSubmit(title, contenu)}>
                <View>
                    {isEditable ? (<Text style={styles.btn} >UPDATE</Text>) : (<Text style={styles.btn} >SAVE</Text>)}
                </View>
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
        paddingVertical: 20,
        margin: 10,
        fontSize: 18,

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
    input2: {
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        marginBottom: 5, // Correction de "bottom" en "marginBottom"
        height: '50%',
        textAlign: 'justify',
        padding: 10,
        textAlignVertical: 'top',
        fontSize: 18,
    },

})