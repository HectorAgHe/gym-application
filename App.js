
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, ScrollView, ActivityIndicator, FlatList, Pressable, TextInput } from 'react-native';
import { Link } from 'expo-router';
import logo from "./assets/WhatsApp Image 2024-10-07 at 12.38.12 PM.jpeg"

// import Entypo from '@expo/vector-icons/Entypo';


export default function Welcome() {


  return (
    <View style={styles.containerMain} >
       <Image source={logo}
              style={{ width: 200, height: 200 }}
             />
      <Text style={{color:"white", fontSize:25}} >Power GYM</Text>
      <Text  style={{color:"white"}} >Rutinas de entrenamiento</Text>
      <Text  style={{color:"orange", fontSize:20}} >Bienvenido a Power GYM</Text>
      <Text  style={{color:"white"}} >La solucion ideal para tus entrenamiento</Text>
    <View style={styles.containerButtons} >
      <Link asChild href="/formRegister" >
      <Pressable style={styles.buttonStart} >
        <Text style={styles.textStart} >Comenzar</Text>
      </Pressable>
      </Link>
     <Link asChild href="/formSignIn" >
     <Pressable style={styles.buttonSignIn} >
        <Text style={styles.textSignIn} >Ya tengo una cuenta</Text>
      </Pressable></Link>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerMain:{
    // marginTop: 20,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap:20,
    backgroundColor: 'black',
    opacity: 1

    
  },
  containerButtons:{
    marginTop: 80,
    gap:15
  },
  buttonStart:{
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    width:280,
    height:40,
    borderRadius:20
  },
  textStart:{
    color: 'white',
    textAlign:'center',
  },
  buttonSignIn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth:2,
    borderColor:'orange',
    width:280,
    height:40,
    borderRadius:20
  },
  textSignIn:{
    color: 'black',
    textAlign:'center',
  }


})