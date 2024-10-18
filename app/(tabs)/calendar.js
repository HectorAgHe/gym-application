import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function MyCalendar  ()  {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.calendarContainer}>
        <Calendar
          theme={{
            calendarBackground: '#1c1c1c', // Fondo oscuro para el calendario
            dayTextColor: '#fff', // Texto de los días en blanco
            monthTextColor: '#fff', // Texto del mes en blanco
            arrowColor: '#F0A500', // Flechas en color naranja coral
            selectedDayBackgroundColor: '#F0A500', // Día seleccionado en naranja coral
            selectedDayTextColor: '#fff', // Texto del día seleccionado en blanco
            todayTextColor: '#F0A500', // Texto del día actual en naranja coral
            textDayFontWeight: 'bold', // Texto de los días en negrita
            textMonthFontSize: 20, // Tamaño de la fuente del mes
            textMonthFontWeight: 'bold', // Mes en negrita
          }}
          onDayPress={(day) => {
            setSelectedDate(day.dateString);
          }}
          markedDates={{
            [selectedDate]: {
              selected: true,
              marked: true,
              selectedColor: '#F0A500', // Fondo del día seleccionado en naranja coral
            },
          }}
        />
      </View>
      {selectedDate ? (
        <Text style={styles.selectedDateText}>Fecha seleccionada: {selectedDate}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fondo negro para toda la pantalla
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'center', // Centrar horizontalmente
    padding: 20,
  },
  calendarContainer: {
    borderRadius: 15, // Bordes redondeados para el calendario
    overflow: 'hidden',
    elevation: 5, // Sombra en Android
    shadowColor: '#fff', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
  selectedDateText: {
    color: '#F0A500', // Texto naranja coral
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold', // Negrita para la fecha seleccionada
  },
});


