import axios from "../api/axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Pressable } from "react-native";
import { DeleteIcon, ArrowBack } from "../components/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export default function Routines() {
  const [listExercises, setListExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      try {
        const currentToken = await AsyncStorage.getItem("authToken");
        if (!currentToken) {
          console.log("No se encontró ningún token");
          setIsLoading(false);
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        };

        const res = await axios.get("/excercises", config);
        setListExercises(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.log("Ocurrió el siguiente error", error.response);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="orange" />
      </View>
    );
  }

  if (!isLoading && listExercises.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <Pressable onPress={() => router.push("/home")}>
          <ArrowBack color="orange" />
        </Pressable>
        <Text style={styles.noDataText}>¡Aún no tienes alguna rutina agregada!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.iconArrowBack}>
          <Pressable onPress={() => router.push("/home")}>
            <ArrowBack color="orange" />
          </Pressable>
        </View>
        <View style={styles.listContainer}>
          {listExercises.map((exercise) => (
            <View key={exercise._id} style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{exercise.name}</Text>
              <Text style={styles.itemDescription}>{exercise.description}</Text>
              <View style={styles.containerIcon}>
                <Pressable
                  onPress={async () => {
                    try {
                      const res = await axios.delete(`/excercises/${exercise._id}`);
                      if (res.status === 201) {
                        setListExercises(listExercises.filter((e) => e._id !== exercise._id));
                        console.log("Se eliminó correctamente el ejercicio");
                      }
                    } catch (error) {
                      console.log("Ocurrió el siguiente error", error);
                    }
                  }}
                >
                  <DeleteIcon color="orange" />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  noDataText: {
    color: "orange",
    fontSize: 18,
    textAlign: "center",
    marginTop: 16,
  },
  listContainer: {
    width: "100%",
    paddingTop: 16,
  },
  itemContainer: {
    backgroundColor: "#1e1e1e",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 5,
  },
  itemTitle: {
    color: "#f4a261",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemDescription: {
    color: "#f4f2ee",
    fontSize: 16,
  },
  containerIcon: {
    marginTop: 20,
  },
  iconArrowBack: {
    marginTop: 20,
  },
});
