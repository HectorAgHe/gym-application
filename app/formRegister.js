import { StyleSheet,TextInput,View,Image, Pressable,Text } from "react-native";
// import { Stack } from "expo-router";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";


export default function FormRegister(){
    const [username,setUsername] = useState(null)
    const [password1,setPassword1] = useState(null)
    const [password2,setPassword2] = useState(null)
    const [borderColorUser, setBorderColorUser] = useState('orange');
  const [borderColorPassword, setBorderColorPassword] = useState('orange');
  /*Hook para usar la navegacion*/
  const router = useRouter()


  const registerUser = async()=>{
    try {
       const res= await axios.post('http://localhost:4000/api/register',{
            username,
            password1,
            password2
        })
        if(res.status === 201){
         alert(res.data.message)
         /*router.push es para navegar entre pantallas, y la ruta es el nombre del archivo dentro del directorio app*/
         router.push('/FormSignIn')
         return 
        }
    } catch (error) {
         alert(error.response.data.error)
         return
    }
  }

    return (
    <>
      

        
        <View style={styles.containerInputs} >
            <Image source={{uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/gym-fitness-center-video-logo-social-media-design-template-f9566537b0445b719d2c9ae5b4264d3c_screen.jpg?ts=1589533347'}}
              style={{ width: 200, height: 200 }}
             />
            <TextInput
            placeholder="Ingresa un nombre de usuario"
            style={[styles.inputUser, { borderColor: borderColorUser }]}
            onFocus={() => setBorderColorUser('orange')}
            onChangeText={(text) => {
                setUsername(text)
            }}
            />
              <TextInput
            placeholder="Ingresa una contraseña"
            style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('orange')}
            onChangeText={(text)=>setPassword1(text)}
            />
              <TextInput
            placeholder="Confirma la contraseña"
             style={[styles.inputPassword, { borderColor: borderColorPassword }]}
            secureTextEntry={true}
            onFocus={() => setBorderColorPassword('orange')}
            onChangeText={(text)=>setPassword2(text)}
            />
            <View style={styles.containerRegister} >
               <Pressable onPress={async()=>{
                await registerUser()
                console.log('Se esta ejecutando el pressable')
               }} style={styles.buttonRegister} >
                <Text style={styles.textButtonRegister} >Registrarme</Text>
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