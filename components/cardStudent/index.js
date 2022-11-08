import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image, } from "react-native";

export default function CardStudents({
    nome,
    idade,
    nota1,
    nota2,
    nota3,
    imgPerfil
}) {

    return (
        <TouchableOpacity style={styles.card}>
            <Image style={{ width: 200, height: 250 }} source={{ uri: imgPerfil }}></Image>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>1° Nota: {nota1}</Text>
            <Text>2° Nota: {nota2}</Text>
            <Text>3° Nota: {nota3}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#e8eaea",
        borderRadius: 8,
        padding: 15,
        justifyContent: "space-between",
        marginVertical: 10,
    },
    dataPost: {
        fontSize: 13,
        fontWeight: "300",
        textAlign: "right",
        marginVertical: 2,
    },
    userDatail: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
    },
    userText: {
        marginLeft: 10,
        justifyContent: "center",
    },
    name: {
        textTransform: "uppercase",
        color: "#0e52b2",
        fontSize: 16,
        fontWeight: "800",
    },
    cidade: {
        textTransform: "capitalize",
        color: "#0e52b2",
        fontSize: 16,
        fontWeight: "700",
    },
    titulo: {
        fontSize: 18,
        fontWeight: "700",
        textTransform: "uppercase",
        marginVertical: 5,
    },
    description: {
        width: "100%",
        marginBottom: 10,
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 60,
        borderWidth: 2,
        borderColor: "#0e52B2",
    },
    ViewBtn: {
        width: "100%",
        alignItems: "center",
    },
    button: {
        width: "70%",
        backgroundColor: "#38B6FF",
        borderRadius: 25,
        padding: 15,
        alignItems: "center",
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 1,
    },
    status: {
        color: "#38B6FF",
        fontWeight: "bold",
        fontSize: 18,
        textDecorationLine: "underline",
        textTransform: "uppercase",
        marginBottom: 5,
    },
    boxImages: {
        padding: 5,
    },
    img: {
        width: 70,
        height: 70,
        margin: 10,
    },
});
