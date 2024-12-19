import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import BlogForm from '../components/BlogForm'
import { Context } from '../Context/BlogContext'

export default function CreatePage() {
    // le addBlogPost cree au debut sera ramene ici pour utilise
    // et aussi le onSubmit est appele ici pour executer 
    const { addBlogPost } = useContext(Context)
    return (
        <View>
            <BlogForm onSubmit={(titre, contenu) => {
                addBlogPost(titre, contenu)
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})