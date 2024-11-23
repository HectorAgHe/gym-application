import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TextInput, Button, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyCalendar() {
  const [selectedDate, setSelectedDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState({});

  const handleAddEvent = async () => {
    // Guardamos el evento en el estado
    setEvents({
      ...events,
      [selectedDate]: { selected: true, marked: true, dotColor: '#F0A500', event: eventText },
    });
    const currentToken = await AsyncStorage.getItem("authToken");
    if(!currentToken){
      console.log('No hay ningun token')
      return
    }
    const config = {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    };
   try {
    await axios.post('http://localhost:4000/api/calendary',{
      description: eventText,
      date:selectedDate
     }, config)
     console.log('Los datos se enviaron correctamente al servidor')
   } catch (error) {
    console.log('Ocurrio el siguiente error', error)
   }
    setEventText('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          theme={{
            calendarBackground: '#1c1c1c',
            dayTextColor: '#fff',
            monthTextColor: '#fff',
            arrowColor: '#F0A500',
            selectedDayBackgroundColor: '#F0A500',
            selectedDayTextColor: '#fff',
            todayTextColor: '#F0A500',
            textDayFontWeight: 'bold',
            textMonthFontSize: 20,
            textMonthFontWeight: 'bold',
          }}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
            setModalVisible(true); // Mostrar el modal al seleccionar una fecha
          }}
          markedDates={{
            ...events,
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: '#F0A500',
            },
          }}
        />
      </View>

      {/* Modal para agregar eventos */}
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
              onChangeText={(text)=>setEventText(text)}
            />
            <Button title="Guardar Evento" onPress={handleAddEvent} color="#F0A500" />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  calendarContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  modalDate: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#F0A500',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#F0A500',
  },
});