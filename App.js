import { StatusBar } from "expo-status-bar";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexPage from "./screens/IndexPage";
import CreatePage from "./screens/CreatePage";
import { Provider } from "./Context/BlogContext";
import GosterPage from "./screens/GosterPage";
import Feather from '@expo/vector-icons/Feather';
import EditPage from "./screens/EditPage";
import Entypo from '@expo/vector-icons/Entypo';
import BlogTab from "./BlogTab";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>

        <Stack.Navigator screenOptions={{ headerTitle: "Blog Uygulaması" }}>
          {/* <Stack.Screen name="BlogTab" component={BlogTab} /> */}
          <Stack.Screen name="Index" component={IndexPage} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Entypo name="plus" size={30} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreatePage} />
          <Stack.Screen name="Goster" component={GosterPage} options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Edit" component={EditPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
