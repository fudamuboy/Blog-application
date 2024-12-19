import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogForm from '../components/BlogForm'
import { Context } from '../Context/BlogContext'

export default function CreatePage({ navigation }) {
    /* le addBlogPost cree au debut sera ramene ici pour utilise
    et aussi le onSubmit est appele ici pour executer */
    const { addBlogPost } = useContext(Context)
    return (
        <View>
            <BlogForm onSubmit={(titre, contenu) => {
                addBlogPost(titre, contenu, () => navigation.navigate('Index'))
            }} />
        </View>
    )
}
/*ds le view after save direkt il doit a la page d'accueil garve navigate('Index')
 j'ai ajoute ue fonction callback pr le retour after clique sur save button*/

const styles = StyleSheet.create({})