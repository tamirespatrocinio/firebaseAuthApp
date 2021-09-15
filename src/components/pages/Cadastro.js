import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase from "../../FirebaseConfig";
import cadastroImg from "../../assets/cadastro.png";

export default function Cadastro({ navigation }) {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  function cadastrar() {
    Firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(() => {
        Alert.alert("Dados cadastrados com sucesso! Faça Login...");
        navigation.navigate("Login", { email });
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode == "auth/email-already-in-use") {
          Alert.alert("Atenção", "Este e-mail já tem cadastro.");
        } else if (errorCode == "auth/weak-password") {
          Alert.alert("Senha", "Digite uma senha com no mínimo 6 caracteres.");
        } else if (errorCode == "auth/invalid-email") {
          Alert.alert("E-mail", "Digite um e-mail válido.");
        }
        Alert.alert(errorCode);
      });
  }

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={cadastroImg} />
        <Text style={styles.title}>Criar conta</Text>
        <View style={styles.emailContainer}>
          <MaterialCommunityIcons name="email" color="#000" size={20} />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <View style={styles.passwordContainer}>
          <MaterialCommunityIcons name="lock" color="#000" size={20} />
          <TextInput
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry={true}
            placeholder="Senha"
            value={senha}
            onChangeText={(senha) => setSenha(senha)}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              cadastrar();
            }}>
            <Text style={styles.btn}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadastroContainer}>
          <Text style={styles.txt}>Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.txtLogin}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  title: {
    fontSize: 16,
    color: "#000",
    marginVertical: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cadastroContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 40,
  },
  btn: {
    fontSize: 16,
    color: "#fff",
    textTransform: "uppercase",
    marginTop: 40,
    paddingHorizontal: 65,
    backgroundColor: "#0404B4",
    paddingVertical: 10,
  },
  img: {
    marginTop: 80,
    marginBottom: 20,
    width: 90,
    height: 90,
  },
  passwordContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingTop: 10,
    alignItems: "center",
  },
  emailContainer: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingTop: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    height: 30,
    fontSize: 18,
  },
  txtLogin: {
    borderBottomWidth: 1,
    borderColor: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  txt: {
    fontSize: 16,
  },
});
