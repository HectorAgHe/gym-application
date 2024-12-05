import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Calendar } from "react-native-calendars";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CheckIcon } from "../../components/Icons";

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [eventText, setEventText] = useState("");
  const [events, setEvents] = useState({});
  const [eventsList, setEventsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleAddEvent = async () => {
    setEvents({
      ...events,
      [selectedDate]: {
        selected: true,
        marked: true,
        dotColor: "#F0A500",
        event: eventText,
      },
    });
    const currentToken = await AsyncStorage.getItem("authToken");
    if (!currentToken) {
      console.log("No hay ningún token");
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };
    try {
      await axios.post(
        "/calendary",
        {
          description: eventText,
          date: selectedDate,
        },
        config
      );
      const res = await axios.get(
        "/calendary",
        config
      );
      setEventsList(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Ocurrió el siguiente error", error);
    }
    setEventText("");
    setModalVisible(false);
  };

  const deleteEvent = async (id) => {
    try {
      const res = await axios.delete(
        `/calendary/${id}`
      );
      if (res.status === 200) {
        setEventsList(eventsList.filter((event) => event._id !== id));
      }
    } catch (error) {}
  };

  const completedEvent = async (event) => {
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
        "/completed",
        {
          description: event.description,
          date: event.date,
        },
        config
      );
    } catch (error) {
      console.log("Ocurrio el siguiente error", error);
    }
  };

  useEffect(() => {
    async function getEvents() {
      const currentToken = await AsyncStorage.getItem("authToken");
      if (!currentToken) {
        console.log("No hay ningún token");
        return;
      }
      const config = {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      };
      try {
        const res = await axios.get(
          "/calendary",
          config
        );
        setEventsList(res.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Ocurrió el siguiente error", error.response);
      }
    }
    getEvents();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.calendarContainer}>
          <Calendar
            theme={{
              calendarBackground: "black",
              dayTextColor: "#fff",
              monthTextColor: "#fff",
              arrowColor: "#F0A500",
              selectedDayBackgroundColor: "#F0A500",
              selectedDayTextColor: "#fff",
              todayTextColor: "#F0A500",
              textDayFontWeight: "bold",
              textMonthFontSize: 20,
              textMonthFontWeight: "bold",
            }}
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
              setModalVisible(true);
            }}
            markedDates={{
              ...events,
              [selectedDate]: {
                selected: true,
                marked: true,
                selectedColor: "#F0A500",
              },
            }}
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Agregar Rutina</Text>
              <Text style={styles.modalDate}>Fecha: {selectedDate}</Text>
              <TextInput
                style={styles.input}
                placeholder="Descripción del ejercicio"
                placeholderTextColor="#888"
                value={eventText}
                onChangeText={(text) => setEventText(text)}
              />
              <Button
                title="Guardar Evento"
                onPress={handleAddEvent}
                color="#F0A500"
              />
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {!isLoading && eventsList.length > 0 && (
          <View style={styles.eventsContainer}>
            {eventsList.map((event) => (
              <View key={event._id} style={styles.card}>
                <View style={styles.textContainer}>
                  <View>
                    <Text style={styles.cardTitle}>{event.description}</Text>
                    <Text style={styles.cardDate}>
                      Se programo para el: {event.date}
                    </Text>
                  </View>
                  <Pressable
                    onPress={async () => {
                      await deleteEvent(event._id);
                      await completedEvent(event);
                      const currentToken = await AsyncStorage.getItem(
                        "authToken"
                      );
                      if (!currentToken) {
                        console.log("No hay ningún token");
                        return;
                      }
                      const config = {
                        headers: {
                          Authorization: `Bearer ${currentToken}`,
                        },
                      };
                      try {
                        const res = await axios.get(
                          "/calendary",
                          config
                        );
                        setEventsList(res.data);
                        setIsLoading(false);
                      } catch (error) {
                        console.log(
                          "Ocurrió el siguiente error",
                          error.response
                        );
                      }
                    }}
                  >
                    <CheckIcon color="orange" />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
  },
  calendarContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#1c1c1c",
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  modalDate: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#F0A500",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: "#fff",
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 10,
    alignItems: "center",
  },
  closeButtonText: {
    color: "#F0A500",
  },
  eventsContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  card: {
    flex: 1,
    display: "flex",
    backgroundColor: "#1c1c1c",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: "#F0A500",
    borderWidth: 1,
  },
  textContainer: {
    flexDirection: "row", // Elementos en línea horizontal
    justifyContent: "space-between", // Espacio entre el texto y el ícono
    alignItems: "center", // Alinea verticalmente
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  cardDate: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  cardDate: {
    fontSize: 14,
    color: "#888",
  },
});
