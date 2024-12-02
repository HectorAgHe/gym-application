import React, { useState, useEffect, useCallback } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../../api/axios";
import { useRouter } from "expo-router";
import { useFocusEffect } from 'expo-router';




export default function Home() {
  const [userName, setUserName] = useState("");
  const [isLoading,setIsLoading] = useState(true)
  const[completedEvents,setCompletedEvents] = useState([])
  const router = useRouter()

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("authToken");
        if (storedName) {
          const res = await axios.get("/verifyToken", {
            headers: {
              authorization: "Bearer " + storedName,
            },
          });
          setUserName(res.data.user.username);
          setIsLoading(false)
        }
      } catch (error) {
        console.error("Error loading user data", error);
      }
    };

    loadUserData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const getCompletedEvents = async () => {
        try {
          const currentToken = await AsyncStorage.getItem("authToken");
          if (!currentToken) {
            console.log("No se encontró ningún token");
            return;
          }

          const config = {
            headers: {
              Authorization: `Bearer ${currentToken}`,
            },
          };

          const res = await axios.get("/completed", config);
          setCompletedEvents(res.data);
        } catch (error) {
          console.error("Ocurrió el siguiente error:", error);
        }
      };

      getCompletedEvents();
    }, []) // Se ejecuta cada vez que la pantalla recibe el enfoque
  );

  return (
    
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header con bienvenida al usuario */}
        <View style={styles.header}>
          <Text style={styles.welcomeText}>{userName && !isLoading ? `Bienvenido de nuevo, ${userName}!` : "Bienvenido!"}</Text>
          {/* Avatar del usuario */}
          <Image
            source={{ uri: "./assets/iconPerfi.jpeg" }} // Placeholder para el avatar
            style={styles.avatar}
          />
        </View>

        {/* Progreso y métricas del usuario */}
        <View style={styles.progressSection}>
          <Text style={styles.sectionTitle}>Tu Progreso</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressCard}>
              <Text style={styles.progressNumber}>{completedEvents ? completedEvents.length : '0'}</Text>
              <Text style={styles.progressLabel}>Dias de rutina completados</Text>
            </View>
            <View style={styles.progressCard}>
              <Text style={styles.progressNumber}>0</Text>
              <Text style={styles.progressLabel}>Horas totales</Text>
            </View>
          </View>
        </View>

        {/* Sección de botones para navegar */}
        <View style={styles.buttonSection}>
          <Pressable style={styles.navButton} onPress={()=>{
            router.push('/routines')
          }} >
            <Text style={styles.navButtonText}>Ejercicios favoritos</Text>
          </Pressable>
          <Pressable style={styles.navButton} onPress={()=>{
            router.push('/completedExercises')
          }} >
            <Text style={styles.navButtonText}>Dias completados</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // Fondo oscuro más suave
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black", // Fondo oscuro
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24, // Tamaño de fuente más grande para destacar el nombre del usuario
    fontWeight: "bold",
    color: '#F0A500', // Color naranja para resaltar
    flexShrink: 1, // Evita que el texto se salga de la pantalla
  },
  avatar: {
    width: 66,
    height: 66,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'white', // Borde del avatar con color naranja
  },
  progressSection: {
    marginBottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#F0A500',
    marginBottom: 15,
    textAlign: "center",
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  progressCard: {
    backgroundColor: "rgba(255, 102, 0, 0.15)", // Fondo con opacidad para destacar
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
    width: "45%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Sombra para Android
  },
  progressNumber: {
    fontSize: 28,
    fontWeight: "bold",
    color: '#F0A500', // Color del número en naranja
    marginBottom: 10,
  },
  progressLabel: {
    fontSize: 16,
    color: "#FFFFFF", // Color blanco para el texto en tema oscuro
  },
  buttonSection: {
    marginBottom: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: '#F0A500', // Fondo naranja para los botones
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#FF6600", // Sombra del botón en el mismo color
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6, // Sombra en Android
  },
  navButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
