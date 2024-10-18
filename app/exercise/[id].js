import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
export default function ExerciseDetails(){
    const [exerciseData,setExerciseData] = useState(null)
   const {id} = useLocalSearchParams()
   
}