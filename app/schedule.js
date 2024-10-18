import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Schedule() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");



  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <Text style={styles.title}>Agenda con un entrenador</Text> */}

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Tu nombre"
            placeholderTextColor="#AAA"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha (DD/MM/AAAA)"
            placeholderTextColor="#AAA"
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Hora (HH:MM)"
            placeholderTextColor="#AAA"
            value={time}
            onChangeText={(text) => setTime(text)}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Notas adicionales"
            placeholderTextColor="#AAA"
            value={notes}
            onChangeText={(text) => setNotes(text)}
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Agendar Cita</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Fondo negro
    justifyContent: "center",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    paddingVertical: 50, // Aumenta el espacio superior e inferior
  },
  title: {
    fontSize: 24,
    color: '#F0A500', // Naranja para el título
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  form: {
    width: "90%",
    padding: 20,
    backgroundColor: "#222", // Fondo oscuro para el formulario
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6, // Sombra en Android
  },
  input: {
    backgroundColor: "#333", // Fondo gris oscuro para los inputs
    color: "#fff", // Texto blanco
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#555", // Borde sutil para los inputs
  },
  textArea: {
    height: 100, // Área de texto más grande para las notas
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: '#F0A500', // Botón naranja
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#f4f2ee", // Texto del botón en negro
    fontSize: 18,
    fontWeight: "bold",
  },
});
