import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon,CircleInfoIcon, ExcerciceIcon } from "../../components/Icons";

/*Este layout renderiza las pestañas, los archivos que este dentro de tabs contaran como una pestaña*/
export default function TabsLayout (){
    return   <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: "white" }, /*Color de la barra de navegacion inferior*/ 
      tabBarActiveTintColor: "orange", /*Color del icono activo (el icono que se presiono)*/
    }}
  >
    <Tabs.Screen
    /*en name va el nombre de la pestaña que esta dentro de (tabs)*/
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => <HomeIcon color={color} />,
      }}
    />
    <Tabs.Screen
      name="excercices"
      options={{
        title: "Ejercicios",
        tabBarIcon: ({ color }) => <ExcerciceIcon color={color} />,
      }}
    />
  </Tabs>
}