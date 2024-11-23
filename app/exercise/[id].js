import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Pressable,Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
// import { data } from '../../utils/data';
import { AddIcon } from '../../components/Icons';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ejerciciosData from '../../Ejercicios';
export default function ExerciseDetails() {
    const [exerciseData, setExerciseData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    // const [token, setToken] = useState(null)
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const loadData = async () => {
            // const authToken = await AsyncStorage.getItem("authToken");
            // console.log(authToken)
            // setToken(authToken); 
          
            setExerciseData(ejerciciosData.ejercicios.find((exercise) => exercise.id == id));
            setIsLoading(false);
        };
        loadData();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#FFA500" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={exerciseData.url}  style={{ width: 200, height: 200 }} />
                <Text style={styles.name}>{exerciseData.nombre}</Text>
                <Text style={styles.description} >{exerciseData.descripcion}</Text>
               
                <View style={styles.icon} >
                <Pressable
  onPress={async () => {
    try {
      // Obtén el token almacenado en AsyncStorage
      const currentToken = await AsyncStorage.getItem("authToken");

      if (!currentToken) {
        console.log("No se encontró ningún token");
        return;
      }

      // Configura los encabezados con el token
      const config = {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      };

      // Realiza la solicitud POST
      const res = await axios.post(
        "http://localhost:4000/api/excercises",
        exerciseData,
        config
      );

      console.log("El ejercicio se guardo con exito")
    } catch (error) {
      console.log("Ocurrió el siguiente error:", error.message);
    }
  }}
>
  <AddIcon color="orange" />
</Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f2ee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    icon:{
    marginTop:15
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    content: {
        alignItems: 'center',
        backgroundColor: 'white', // Fondo oscuro detrás del texto para destacar
        padding: 20,
        borderRadius: 10,
   
    },
    name: {
        color: '#FFA500', // Naranja para el nombre del ejercicio
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
    },
    description: {
        color: 'black', // Blanco para la descripción
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
    },
});
