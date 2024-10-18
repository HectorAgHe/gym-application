import { StyleSheet, View,Text } from "react-native";


export default function Routines(){
    return <View style={styles.Container} >
        <Text style={styles.Text} >¡Aun no tienes alguna rutina agregada!</Text>
    </View>
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
    },
    Text:{
        color:"#f4f2ee",
        fontSize: 18
    }
})