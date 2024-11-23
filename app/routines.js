import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, Pressable } from "react-native";
import { DeleteIcon } from "../components/Icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Routines() {
    const [listExercises, setListExercises] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
        const currentToken = await AsyncStorage.getItem("authToken");
        if(!currentToken){
           console.log('No se encontro ningun token')
           return
        }else{
            try {
                const config = {
                    headers: {
                      Authorization: `Bearer ${currentToken}`,
                    },
                  };
                const res = await axios.get("http://localhost:4000/api/excercises", config);
                console.log(res.data)
                setListExercises(res.data);
                setIsLoading(false);
            } catch (error) {
                console.log("Ocurrió el siguiente error", error.response);
            }
        }
        };
        getData();
    }, []);

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#f4a261" />
            </View>
        );
    }

    return (
       <ScrollView>
         <View style={styles.container}>
            {listExercises.length === 0 ? (
                <Text style={styles.noDataText}>¡Aún no tienes alguna rutina agregada!</Text>
            ) : (
                <View style={styles.listContainer}>
                    {listExercises.map((exercise) => (
                        <View key={exercise._id} style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{exercise.name}</Text>
                            <Text style={styles.itemDescription}>{exercise.description}</Text>
                            <View style={styles.containerIcon} >
                            <Pressable onPress={async()=>{
                               try {
                                 const res= await axios.delete(`http://localhost:4000/api/ecxercises/${exercise._id}`)
                                 if(res.status === 201){
                                    setListExercises(listExercises.filter((e)=>{
                                        return e._id !== exercise._id
                                    }))
                                    console.log('Se elimino correctamente el ejercicio')
                                    
                                 }
                               } catch (error) {
                                console.log('Ocurrio el siguiente error', error)
                               }
                            }} >
                            <DeleteIcon color='orange' />
                            </Pressable>
                            </View>
                        </View>
                    ))}
                </View>
            )}
        </View>
       </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    noDataText: {
        color: "#f4f2ee",
        fontSize: 18,
        textAlign: "center",
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
    containerIcon:{
        marginTop:20
    }
});
