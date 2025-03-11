import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../Context/BlogContext'
import BlogForm from '../components/BlogForm';

export default function EditPage({ navigation, route }) {
    const { state, editBlogPost } = useContext(Context);

    // route.params veya id kontrolü
    if (!route.params || !route.params.id) {
        return (
            <View style={styles.centered}>
                <Text>Hata: Blog ID bulunamadı.</Text>
            </View>
        );
    }

    const id = route.params.id;
    const blogPost = state.find((blogPost) => blogPost.id === id);

    // // burda bi hata mesaj verdi ki hatayi yakalayimm
    // if (!blogPost) {
    //     return (
    //         <View style={styles.centered}>
    //             <ActivityIndicator size="large" color="blue" />
    //             <Text>Blog yükleniyor veya bulunamadı...</Text>
    //         </View>
    //     );
    // }

    return (
        <BlogForm
            isEditable={true}
            initiaValues={{ title: blogPost.title, contenu: blogPost.contenu }}
            onSubmit={(title, contenu) => {
                editBlogPost(id, title, contenu, () => navigation.navigate('Index'))
            }} />
    )
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
