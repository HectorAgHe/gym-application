import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react"
import {View,Image,Text,TextInput, StyleSheet, Pressable} from "react-native"
// import  SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';


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
        // alert(error.response)
        // console.log(error)
        // return
    }
   }

    return (
        <>
      

        
        <View style={styles.containerInputs} >
            <Image source={{uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen.jpg?ts=1589533347'}}
              style={{ width: 200, height: 200 }}
             />
            <TextInput
            placeholder="Ingresa tu nombre de usuario"
            style={[styles.inputUser, { borderColor: borderColorUser }]}
            onFocus={() => setBorderColorUser('orange')}
            onChangeText={(text) => {
                setUsername(text)
            }}
            />
              <TextInput
            placeholder="Ingresa tu contraseña"
            style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('orange')}
            onChangeText={(text)=>setPassword(text)}
            />
            <View style={styles.containerRegister} >
               <Pressable onPress={async()=>{
                await signIn()
               }} style={styles.buttonRegister} >
                <Text style={styles.textButtonRegister} >Iniciar Sesion</Text>
               </Pressable>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    containerInputs:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:'20px'
    },
    inputUser:{
        width:250,
        height:35,
        borderWidth:2,
        borderColor:'orange',
        borderRadius:10,
        textAlign: 'center',
    },
    inputPassword:{
        width:250,
        height:35,
        borderWidth:2,
        borderColor:'orange',
        borderRadius:10,
        textAlign: 'center',
    },
    containerRegister:{
        marginTop:10,
    },
    buttonRegister:{
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor:'orange',
       borderWidth:2,
       borderColor:'orange',
       borderRadius:20,
       width:230,
       height:40,      
    },
    textButtonRegister:{
        color:'white',
    }
})