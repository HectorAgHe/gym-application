import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { data } from '../../utils/data';
import { AddIcon } from '../../components/Icons';
import axios from 'axios';

export default function ExerciseDetails() {
    const [exerciseData, setExerciseData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const loadData = () => {
            setExerciseData(data.find((exercise) => exercise.id == id));
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
                <Text style={styles.name}>{exerciseData.name}</Text>
                <Text style={styles.description}>{exerciseData.description}</Text>
                <View style={styles.icon} >
                <Pressable onPress={async()=>{
                  try {
                    const res=await axios.post('http://localhost:4000/api/excercises',{
                        name:exerciseData.name,
                        description:exerciseData.description
                    })
                    console.log(res.data.message)
                  } catch (error) {
                    console.log('ocurrio el siguiente erro', error)
                  }
                }} >
                <AddIcon color='orange' />
                </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
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
        backgroundColor: '#1A1A1A', // Fondo oscuro detrás del texto para destacar
        padding: 20,
        borderRadius: 10,
        shadowColor: '#FFA500',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
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
        color: '#FFF', // Blanco para la descripción
        fontSize: 18,
        lineHeight: 26,
        textAlign: 'center',
    },
});
