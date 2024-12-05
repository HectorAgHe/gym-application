import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
// import { data } from '../../utils/data';
import { AddIcon } from "../../components/Icons";
import axios from "../../api/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ejerciciosData from "../../Ejercicios";
import { ArrowBack } from "../../components/Icons";
// import { configureLayoutAnimationBatch } from "react-native-reanimated/lib/typescript/core";
export default function ExerciseDetails() {
  const [exerciseData, setExerciseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [token, setToken] = useState(null)
  const { id } = useLocalSearchParams();

  const router = useRouter()

  useEffect(() => {
    const loadData = async () => {
      // const authToken = await AsyncStorage.getItem("authToken");
      // console.log(authToken)
      // setToken(authToken);

      setExerciseData(
        ejerciciosData.ejercicios.find((exercise) => exercise.id == id)
      );
      // try {
      //   const res = await axios.get(`/excercise/${id}`)
      //   setExerciseData(res.data)
      //   console.log(res.data)
      // } catch (error) {
      //   console.log('ocurrio el siguiente error')
      // }
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
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.iconArrowBack}>
            <Pressable
              onPress={() => {
                router.push("/exercises");
              }}
            >
              <ArrowBack color="orange" />
            </Pressable>
          </View>
           <Image
            source={exerciseData.url}
            style={{ width: 200, height: 200 }}
          /> 
          <Text style={styles.name}>{exerciseData.name}</Text>
          {exerciseData.instructions.map((data, index) => {
            return (
              <View key={data.id} style={styles.instructionContainer}>
                <Text style={styles.stepNumber}>{index + 1}.</Text>
                <Text style={styles.instructionText}>{data.texto}</Text>
              </View>
            );
          })}

          <View style={styles.icon}>
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
                    "/excercises",
                    exerciseData,
                    config
                  );

                  console.log("El ejercicio se guardo con exito");
                } catch (error) {
                  console.log("Ocurrió el siguiente error:", error.message);
                }
              }}
            >
              <AddIcon color="orange" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  iconArrowBack:{
    marginTop:20
  },
  container: {
    flex: 1,
    backgroundColor: "#f4f2ee",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    textAlign: "center"
  },
  icon: {
    marginTop: 15,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    textAlign: "justify"
  },
  content: {
    alignItems: "center",
    backgroundColor: "white", // Fondo oscuro detrás del texto para destacar
    padding: 20,
    borderRadius: 10,
  },
  name: {
    color: "#FFA500", // Naranja para el nombre del ejercicio
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    textShadowColor: "#333",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  description: {
    color: "black", // Blanco para la descripción
    fontSize: 18,
    lineHeight: 26,
    textAlign: "center",
  },
  instructionContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  stepNumber: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FF6F00", // Un color naranja para destacar
    marginRight: 10,
  },
  instructionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333", // Un color neutro para el texto principal
    textAlign: "justify",
    
  },
});
