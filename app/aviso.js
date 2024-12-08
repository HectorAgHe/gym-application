import React from 'react'; 
import { ImageBackground, StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const image = {uri: '../../fondoPantalla/fondo3.jpg'};

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.textTitle}>
          Aviso de Privacidad
          </Text>
          <Text style={styles.text}>
            

            En Power Gym, nos comprometemos a proteger la privacidad y seguridad de tus datos personales. Este aviso explica cómo recopilamos, usamos y protegemos la información que proporcionas al utilizar nuestra aplicación.

           <text styles="styles.textTitle"></text>
            Recopilamos información personal que proporcionas directamente, como tu nombre, correo electrónico, información de pago, y datos relacionados con tu entrenamiento (como historial de ejercicios y metas).

            Uso de la información
            Utilizamos tu información para personalizar tu experiencia, ofrecerte recomendaciones, procesar pagos y mantenerte informado sobre nuevas funciones o servicios. También podemos utilizar tus datos para mejorar la app y ofrecer soporte.

            Protección de tu información
            Implementamos medidas de seguridad para proteger tus datos contra accesos no autorizados. No compartimos tu información personal con terceros, excepto en los casos necesarios para el funcionamiento de los servicios (como procesadores de pagos).

            Tus derechos
            Puedes acceder, corregir o eliminar tu información personal en cualquier momento desde la configuración de la app. Si tienes preguntas o inquietudes sobre tu privacidad, contáctanos a través de [correo electrónico o contacto].

            Al utilizar nuestra aplicación, aceptas los términos de este Aviso de Privacidad.
          </Text>
         
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    margin: "50",
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  scrollContainer: {
    paddingHorizontal: 20, // Añade espacio alrededor del texto
    paddingVertical: 20, // Añade espacio vertical
  },
  text: {
    color: 'white',
    fontSize: 15,
    lineHeight: 24,
    fontWeight: '',
    textAlign: 'justify', // Justifica el texto
    backgroundColor: '#000000c0',
    padding: 10, // Espaciado interno para el texto
    borderRadius: 10, // Redondea las esquinas
  },
  textTitle: {
    color: "orange",
    fontSize: 15,
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Justifica el texto
    backgroundColor: '#000000c0',
    padding: 10, // Espaciado interno para el texto
    borderRadius: 10,
    
  }
});

export default App;
