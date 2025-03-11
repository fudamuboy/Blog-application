import { Alert } from "react-native";
import DataContext from "./DataContext";

// Reducer pour gérer les actions du blog
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                title: action.payload.title,
                contenu: action.payload.contenu,
            }];
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ?
                    action.payload : blogPost;
            })

        case "delete_blogpost":
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
};
// // Data aliveriş ve iletişim sağlamak için bunu kullandım 
// // export const BlogProvider = ({ children }) => {

// //     const [blogPosts, dispatch] = useReducer(blogReducer, [{ title: 'React Native' }, { title: 'Javascript' }])

//     // const addBlogPost = () => {
//     //     dispatch({ type: 'add_blogpost' })
//     // }

//     // bunula useState ile Ekleme islemi oldu 
//     // const [blogPosts, setBlogPosts] = useState([{ title: 'React Native' }, { title: 'Javascript' }])
//     // const addBlogPost = () => {
//     //     // setBlogPosts([...blogPosts, { title: 'HTML VE CSS' }]) ve 
//     // }
//     // return (
//     //     <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
//     //         {children}
//     //     </BlogContext.Provider>
//     // );
// };
// burasi ekleme kismindir 

// Fonction pour ajouter un article de blog
const addBlogPost = (dispatch) => {
    return (title, contenu, callback) => {
        dispatch({ type: "add_blogpost", payload: { title, contenu } });
        if (callback) {
            callback();
        }
    };
};
// Fonction pour modifier un article de blog
const editBlogPost = (dispatch) => {
    return (id, title, contenu, callback) => {
        dispatch({ type: "edit_blogpost", payload: { id, title, contenu } });
        if (callback) {
            callback();
        }
    };
};

// Fonction pour supprimer un article de blog
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: id });

        Alert.alert("Başlık", "Silindi!")
    };
}
// Configuration du contexte et du fournisseur
export const { Context, Provider } = DataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [] // État initial
);
