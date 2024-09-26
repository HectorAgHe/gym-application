import { View,Text,Image } from "react-native";
import {useState,useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";


export default function Home(){
    const [name,setName] = useState(null)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        const getUserData = async ()=>{
           try {
            /*AsyncStorage.getItem trae el token llamado authToken*/
            const savedToken = await AsyncStorage.getItem('authToken')
            /*En el campo Authorization de headers se manda el token que se obtuvo*/
            const res =  await axios.get('http://localhost:4000/api/verifyToken',{
             headers: {
                 Authorization: `Bearer ${savedToken}`
             }
            })
            setName(res.data.user.username)
            setIsLoading(false)
            console.log(res.data.user.username)
 
           } catch (error) {
            console.log('Ocurrio el siguiente error: ' + error)
           }
        }
        getUserData()
    },[])
    return (
        <View>
            {name && !isLoading && (
                <Text>Hola {name}</Text>
            )}
        </View>
    )
}