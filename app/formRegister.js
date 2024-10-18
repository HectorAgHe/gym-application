import { StyleSheet,TextInput,View,Image, Pressable,Text } from "react-native";
// import { Stack } from "expo-router";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import logo from "../assets/WhatsApp Image 2024-10-07 at 12.38.12 PM.jpeg"
import { ArrowIcon } from "../components/Icons";


export default function FormRegister(){
    const [username,setUsername] = useState(null)
    const[email,setEmail] = useState(null)
    const [password1,setPassword1] = useState(null)
    const [password2,setPassword2] = useState(null)
    const [borderColorUser, setBorderColorUser] = useState('#f4f2ee');
  const [borderColorPassword, setBorderColorPassword] = useState('#f4f2ee');
  /*Hook para usar la navegacion*/
  const router = useRouter()
  




  const registerUser = async()=>{
    try {
       const res= await axios.post('http://localhost:4000/api/register',{
            username,
            email,
            password1,
            password2
        })
        if(res.status === 201){
         alert(res.data.message)
         /*router.push es para navegar entre pantallas, y la ruta es el nombre del archivo dentro del directorio app*/
         router.push('/formSignIn')
         return 
        }
    } catch (error) {
         alert(error.response.data.error)
         return
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
            <Text style={{color:"white"}} >Email:</Text>
           <TextInput
            // placeholder="Ingresa un nombre de usuario"
            style={[styles.inputUser, { borderColor: borderColorUser }]}
            onFocus={() => setBorderColorUser('#f4f2ee')}
            onChangeText={(text) => {
                setEmail(text)
            }}
            />
            
            <Text style={{color:"white"}} >Ingresa una contraseña</Text>
              <TextInput
            // placeholder="Ingresa una contraseña"
            style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('#f4f2ee')}
            onChangeText={(text)=>setPassword1(text)}
            />
            <Text style={{color:"white"}} >Confirma la contraseña</Text>
              <TextInput
            // placeholder="Confirma la contraseña"
             style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('#f4f2ee')}
            onChangeText={(text)=>setPassword2(text)}
            />
            <View style={styles.containerRegister} >
               <Pressable onPress={async()=>{
                await registerUser()
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
        gap:'20px',
        backgroundColor:"black"
    },
    logo:{
        width: 200,
        height: 200,
        marginTop:40,
    },
    inputsContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        height: "50%",
        backgroundColor:"black",
        // marginTop: 5,
        width: "100%",
        gap: 10,
        borderTopStartRadius: 35,
        borderTopEndRadius:35,
        marginTop: 20
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