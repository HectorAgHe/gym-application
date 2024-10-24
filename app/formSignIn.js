import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react"
import {View,Image,Text,TextInput, StyleSheet, Pressable} from "react-native"
// import  SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logo from "../assets/WhatsApp Image 2024-10-07 at 12.38.12 PM.jpeg"
import { ArrowIcon } from "../components/Icons";


export default function FormSignIn(){
       const [username,setUsername] = useState(null)
       const [password,setPassword] = useState(null)
       const [borderColorUser, setBorderColorUser] = useState('orange');
       const [borderColorPassword, setBorderColorPassword] = useState('orange');
       const router = useRouter()

   const signIn  = async ()=>{
    try {
        const res = await axios.post('http://localhost:4000/api/signIn',{
            username,
            password
        })
        if(res.status === 200){
            alert(res.data.message)
            console.log('Token recibido: ', res.data.token)
            /*Establece el token que viene en la data de la respuesta de la peticion*/
            await AsyncStorage.setItem('authToken',res.data.token)
            const storedToken = await AsyncStorage.getItem('authToken')
            if(storedToken){
                router.push('/home')
                return
            }else{
                console.log('El token no se guardo')
            }
            return
        }
    } catch (error) {
        console.log(error.response.data.error)
        alert(error.response.data.error)
        // console.log(error)
        // return
    }
   }

   return (
    <>
      

        
        <View style={styles.mainContainer} >
            <Image source={logo}
              style={styles.logo}
             />
           <View style={styles.inputsContainer} >
            <Text style={{color:"white"}} >Nombre de usuario:</Text>
           <TextInput
            // placeholder="Ingresa un nombre de usuario"
            style={[styles.inputUser, { borderColor: borderColorUser }]}
            onFocus={() => setBorderColorUser('#f4f2ee')}
            onChangeText={(text) => {
                setUsername(text)
            }}
            />
            <Text style={{color:"white"}} >Ingresa una contraseña</Text>
              <TextInput
            // placeholder="Ingresa una contraseña"
            style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('#f4f2ee')}
            onChangeText={(text)=>setPassword(text)}
            />
            <View style={styles.containerRegister} >
               <Pressable onPress={async()=>{
                await signIn()
                console.log('Se esta ejecutando el pressable')
               }} style={styles.buttonRegister} >
                <ArrowIcon/>
               </Pressable>
            </View>
           </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"black"
    },
    logo:{
        width: 200,
        height: 200,
        marginTop:70,
    },
    inputsContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: "50%",
        backgroundColor:"black",
        width: "100%",
        gap: 10,
        borderTopStartRadius: 35,
        borderTopEndRadius:35,
        marginTop: 40
    },
    inputUser:{
        width:250,
        height:35,
        borderWidth:2,
        borderColor:"#f4f2ee",
        borderRadius:10,
        textAlign: 'center',
        backgroundColor:"#f4f2ee"
    },
    inputPassword:{
        width:250,
        height:35,
        borderWidth:2,
        borderColor:'#f4f2ee',
        borderRadius:10,
        textAlign: 'center',
        backgroundColor:"#f4f2ee"
    },
    containerRegister:{
        marginTop:20,
    },
    buttonRegister:{
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor:'orange',
       borderWidth:2,
       borderColor:'orange',
       borderRadius:20,
       width:200,
       height:40,      
    },
    textButtonRegister:{
        color:'white',
    }
})