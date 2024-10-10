import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, Pressable } from "react-native";
import axios from "axios";
import { ArrowIcon } from "../../components/Icons";

export default function Exercises() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`https://api.api-ninjas.com/v1/exercises`, {
          headers: {
            "X-Api-Key": "G4k19+PbzCvNOhWGjTFX8Q==s7fuD6DMdeiAfseD",
          },
        });
        setData(res.data);
        setIsLoading(false);
        console.log(res.data);
      } catch (error) {
        console.log("Ocurrió el siguiente error: " + error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.content}>
          {data &&
            data.map((exercise, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.title}>{exercise.name}</Text>
                <View style={styles.separator} />
                <Text style={styles.subTitle}>Difficulty: {exercise.difficulty}</Text>
                <Text style={styles.description}>Targeted Muscle: {exercise.muscle}</Text>
                <Text style={styles.instructions}>Instructions: {exercise.instructions}</Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Ver detalles</Text>
                  <ArrowIcon color="orange" />
                </Pressable>
              </View>
            ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212", // Fondo oscuro
    paddingHorizontal: 16, // Añadir padding horizontal para margen
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#1e1e1e", // Fondo de las tarjetas más oscuro
    borderRadius: 12, // Bordes redondeados
    padding: 20, // Añadir más padding para mejor separación de contenido
    marginVertical: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4, // Mayor opacidad en la sombra
    shadowRadius: 4,
    elevation: 4, // Sombra en Android
  },
  title: {
    fontSize: 20, // Texto más grande para el título
    fontWeight: "bold",
    color: "orange", // Título en color naranja para destacar
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ddd", // Subtítulo en gris claro
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    color: "#aaa", // Descripción en gris más oscuro
    marginBottom: 10,
  },
  instructions: {
    fontSize: 14,
    color: "#888",
    marginBottom: 12,
    lineHeight: 20, // Más espacio entre líneas para mejor lectura
  },
  separator: {
    height: 1,
    backgroundColor: "#333", // Separador sutil entre el título y los detalles
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#292929", // Fondo del botón con un tono ligeramente diferente
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "orange", // Texto en naranja para el botón
    fontWeight: "bold",
  },
});
