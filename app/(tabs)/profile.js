import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateIcon, EmailIcon, LogoutIcon, UserIcon } from "../../components/Icons";
import { useRouter } from 'expo-router'; // Importar el hook useRouter

export default function Profile() {
  const [userData, setUserData] = useState("");
  const router = useRouter(); // Hook para navegar

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("authToken");
        if (storedName) {
          const res = await axios.get("http://localhost:4000/api/verifyToken", {
            headers: {
              authorization: "Bearer " + storedName,
            },
          });
          setUserData(res.data.user);
        }
      } catch (error) {
        console.error("Error loading user data", error);
      }
    };

    loadUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {/* Avatar */}
      <Image
        style={styles.avatar}
        source={{
          uri:  "https://via.placeholder.com/150" 
        }}
      />

      {/* Sección del Nombre de Usuario */}
      <View style={styles.infoContainer}>
        <UserIcon style={styles.icon} />
        <View>
          <Text style={styles.label}>Nombre de usuario:</Text>
          <Text style={styles.userText}>
            {userData ? `${userData.username}` : "Cargando usuario..."}
          </Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <EmailIcon style={styles.icon} />
        <View>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.userText}>
            {userData ? `${userData.email}` : "Cargando email..."}
          </Text>
        </View>
      </View>

      {/* Sección de la Fecha de Creación */}
      <View style={styles.infoContainer}>
        <DateIcon style={styles.icon} />
        <View>
          <Text style={styles.label}>El usuario fue creado el:</Text>
          <Text style={styles.dateText}>
            {userData
              ? new Date(userData.date).toLocaleDateString('es-MX', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : "Cargando fecha..."}
          </Text>
        </View>
      </View>

      {/* Botón para redirigir a Home */}
      <Pressable style={styles.homeButton} onPress={() => router.push('/formSignIn')}>
        <LogoutIcon/>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1E1E1E",
    padding: 20,
    gap:10
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderColor: '#F0A500',
    borderWidth: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    maxWidth: 350,
  },
  icon: {
    marginRight: 15,
  },
  label: {
    color: '#F0A500',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  userText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 5,
  },
  dateText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 5,
  },
  homeButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    // width:100,
    // height:5
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
