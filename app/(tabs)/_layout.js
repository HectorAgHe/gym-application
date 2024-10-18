import { Tabs } from "expo-router";
import { View } from "react-native";
import { HomeIcon, ExcerciceIcon, UserIcon, CalendarIcon } from "../../components/Icons";

/*Este layout renderiza las pestañas, los archivos que este dentro de tabs contaran como una pestaña*/
export default function TabsLayout (){
    return   <Tabs
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "black", // Color del fondo del tab bar
        borderTopWidth: 0, // Quitar el borde superior
        borderTopColor: "transparent", // Asegura que el borde superior no tenga color
        elevation: 0, // Elimina la sombra (en dispositivos Android)
        shadowOpacity: 0, // Elimina la sombra (en dispositivos iOS)
      }, /*Color de la barra de navegacion inferior*/ 
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
      name="exercises"
      options={{
        title: "Ejercicios",
        tabBarIcon: ({ color }) => <ExcerciceIcon color={color} />,
      }}
    />
    <Tabs.Screen
    name="calendar"
    options={{
      title:"Calendario",
      tabBarIcon:({color})=> <CalendarIcon color={color} />
    }}
    />
     <Tabs.Screen
      name="profile"
      options={{
        title: "Perfil",
        tabBarIcon: ({ color }) => <UserIcon color={color} />,
      }}
    />
  </Tabs>
}