import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Audio } from 'expo-av';
//Hola
const WorkoutTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isResting, setIsResting] = useState(false);
  const [seriesLeft, setSeriesLeft] = useState(3);
  const [isRunning, setIsRunning] = useState(false);

  const [workoutTime, setWorkoutTime] = useState(30);
  const [restTime, setRestTime] = useState(15);
  const [totalSeries, setTotalSeries] = useState(3);

  const [sound, setSound] = useState();

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      if (seriesLeft > 1) {
        playSound(); // Sonido al cambiar de estado
        setIsResting(!isResting);
        setTimeLeft(isResting ? workoutTime : restTime);
        if (!isResting) setSeriesLeft((prev) => prev - 1);
      } else {
        setIsRunning(false);
        playSound(); // Sonido al finalizar todas las series
      }
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isResting, seriesLeft]);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/notification.mp3') // Cambia por la ruta a tu archivo de sonido
    );
    setSound(sound);
    await sound.playAsync();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); // Descarga el sonido al desmontar
        }
      : undefined;
  }, [sound]);

  const startTimer = () => {
    setTimeLeft(workoutTime);
    setSeriesLeft(totalSeries);
    setIsRunning(true);
    playSound(); // Sonido al iniciar el cronómetro
  };

  const resetTimer = () => {
    setTimeLeft(0);
    setSeriesLeft(totalSeries);
    setIsResting(false);
    setIsRunning(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cronómetro de Rutina</Text>

      {/* Selección de tiempo de ejercicio */}
      <Text style={styles.label}>Duracion del ejercicio (segundos):</Text>
      <Picker
        selectedValue={workoutTime}
        onValueChange={(value) => setWorkoutTime(value)}
        style={styles.picker}
      >
        {[15, 30, 45, 60].map((time) => (
          <Picker.Item key={time} label={`${time} seconds`} value={time} />
        ))}
      </Picker>

      {/* Selección de tiempo de descanso */}
      <Text style={styles.label}>Descanso (segundos):</Text>
      <Picker
        selectedValue={restTime}
        onValueChange={(value) => setRestTime(value)}
        style={styles.picker}
      >
        {[10, 20, 30, 40].map((time) => (
          <Picker.Item key={time} label={`${time} seconds`} value={time} />
        ))}
      </Picker>

      {/* Selección de series */}
      <Text style={styles.label}>Repeticiones a trabajar:</Text>
      <Picker
        selectedValue={totalSeries}
        onValueChange={(value) => setTotalSeries(value)}
        style={styles.picker}
      >
        {[1, 2, 3, 4, 5].map((series) => (
          <Picker.Item key={series} label={`${series}`} value={series} />
        ))}
      </Picker>

      <Text style={styles.timer}>
        {isResting ? 'Descansa' : 'Tiempo'}: {timeLeft}s
      </Text>
      <Text style={styles.series}>Repeticiones restantes: {seriesLeft}</Text>
{/* 
      <Button 
        title={isRunning ? 'Reiniciar¿?' : '¡Vamos!'}
        onPress={isRunning ? resetTimer : startTimer  }
        color="#F0A500"
        accessibilityLabel="Click" 
        
      /> */}
      <Pressable style={styles.buttonClock}  onPress={isRunning ? resetTimer : startTimer  } >
        <Text style={styles.buttonTextClock} >{isRunning ? 'Reiniciar' : '¡Vamos!'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 20,
    
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white",
    margin:"15"
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "white",
    margin:5,
    
  },
  picker: {
    color: "#F0A500",
    height: 50,
    width: 200,
    
    marginTop: 5
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    color: 'gold'
  },
  series: {
    fontSize: 18,
    marginBottom: 20,
    color: "white",
  },
  buttonClock:{
    backgroundColor:'orange',
    borderRadius:5,
    width:120,
    height:30,
    display:"flex",
    justifyContent:'center',
    alignItems:'center'
  },
  buttonTextClock:{
    color:'white'
  }
  
});

export default WorkoutTimer;