import { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, ScrollView, Text, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../api/axios";
import { ArrowBack, DeleteIcon, FitnessIcon } from "../components/Icons";
import { useRouter } from "expo-router";


export default function CompletedExercises() {
  const [completedEvents, setCompletedEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter()


  async function deleteEvent (id){
    try {
      const res = await axios.delete(`/completed/${id}`)
      if(res.status === 201){
        setCompletedEvents(completedEvents.filter((e)=>{
          return e._id !== id
        }))
        console.log('Se elimino correctamente el ejercicio')
      }
    } catch (error) {
      console.log('Ocurrio el siguiente error', error.response)
    }
  }

  useEffect(() => {
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
        setIsLoading(false);
      } catch (error) {
        console.error("Ocurrió el siguiente error:", error);
      }
    };

    getCompletedEvents();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f4a261" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.iconArrowBack} >
            <Pressable onPress={()=>{
                router.push('/home')
            }} >
            <ArrowBack color='orange' />
            </Pressable>
        </View>
        {completedEvents.length === 0 && !isLoading ? (
          <Text style={styles.noDataText}>¡Aún no tienes algun ejercicio completado!</Text>
        ) : (
          <View style={styles.listContainer}>
            {completedEvents.map((exercise) => (
              <View key={exercise._id} style={styles.card}>
                <FitnessIcon color='orange' />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{exercise.description}</Text>
                  <Text style={styles.cardSubtitle}>{`Fecha: ${exercise.date}`}</Text>
                </View>
               <Pressable onPress={async()=>{
                   await deleteEvent(exercise._id)
               }} >
               <DeleteIcon color='orange' />
               </Pressable>
              </View>
            ))}
          </View>
        )}
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
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  loadingContainer: {
    flex: 1, // Ocupa toda la pantalla
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
    backgroundColor: "#121212", // Fondo oscuro consistente
  },
  listContainer: {
    width: "100%",
    marginTop: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    gap:20,
    // width:150
  },
  icon: {
    marginRight: 16,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    color: "#f4a261",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardSubtitle: {
    color: "#f4f2ee",
    fontSize: 14,
  },
  noDataText: {
    color: "#f4a261",
    fontSize: 18,
    textAlign: "center",
    marginTop: 32,
  },
});
