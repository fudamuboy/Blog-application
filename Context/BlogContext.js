import DataContext from "./DataContext";

// Reducer pour gérer les actions du blog
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, {
                id: Math.floor(Math.random() * 999999),
                // lions du title et contenu cree ds blogForm et ensuite pour save 
                title: action.payload.titre,
                content: action.payload.contenu,
            }];

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
const addBlogPost = (dispatch) => {
    return (titre, contenu) => {
        dispatch({ type: "add_blogpost", payload: { titre, contenu } });
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: "delete_blogpost", payload: id });
    };
}
// Configuration du contexte et du fournisseur
export const { Context, Provider } = DataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    [] // État initial
);
