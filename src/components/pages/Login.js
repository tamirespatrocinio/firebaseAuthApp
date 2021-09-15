import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Firebase from "../../FirebaseConfig";
import loginImg from "../../assets/login.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState(email);
  const [senha, setSenha] = useState(null);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function dados(user) {
    setUser;
    if (initializing) setInitializing(false);
  }

  function logar() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        if (user) {
          alert("Usuário não existe.");
          return;
        }
        navigation.navigate("Home", { email });
      })
      .catch((error) => {
        alert(error);
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error);
        navigation.navigate("Login");
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function (user) {
      const uid = user.uid;
      const email = user.email;
    });
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Image style={styles.img} source={loginImg} />
        <Text style={styles.title}>Faça login para continuar</Text>
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
              logar();
            }}>
            <Text style={styles.btn}>Entre</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cadastroContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={styles.txtCadastro}>Criar nova conta</Text>
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
    paddingHorizontal: 90,
    backgroundColor: "#0404B4",
    paddingVertical: 10,
  },
  txtCadastro: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginTop: 40,
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#000",
  },
  img: {
    marginTop: 80,
    marginBottom: 20,
    width: 100,
    height: 100,
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
    marginBottom: 10,
    alignItems: "center",
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    height: 30,
    fontSize: 18,
  },
});
