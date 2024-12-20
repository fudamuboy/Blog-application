import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../Context/BlogContext'
import BlogForm from '../components/BlogForm';

export default function EditPage({ navigation, route }) {
    const { state, editBlogPost } = useContext(Context);
    const id = route.params.id;
    console.log(route.params.id);

    const blogPost = state.find((blogPost) => blogPost.id === route.params.id);


    return (
        <BlogForm
            isEditable={true}
            initiaValues={{ title: blogPost.title, contenu: blogPost.contenu }}
            onSubmit={(title, contenu) => {
                editBlogPost(id, title, contenu, () => navigation.navigate('Index'))
            }} />
    )
}

const styles = StyleSheet.create({})