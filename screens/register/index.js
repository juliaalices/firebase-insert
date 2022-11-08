import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Campo, Btn } from './style';
import firebase from '../../config/firebaseConnection';
import db from '../../config/firebaseConnection'
import { ref, getDatabase, push, child } from 'firebase/database';
import { useState } from 'react';

export default function Register() {

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [nota1, setNota1] = useState("");
    const [nota2, setNota2] = useState("");
    const [nota3, setNota3] = useState("");
    const [link, setLink] = useState("")

    const cadastrarAluno = async () => {
        if (nome == "" || idade == "" || nota1 == "" || nota2 == "" || nota3 == "" || link == "") {
            alert("Preencha todos os campos!")
        } else {

            const novoAluno = {
                nome: nome,
                idade: idade,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                link: link,
            };

            const database = getDatabase();

            const students = ref(database, 'Alunos')

            const key = push(students, novoAluno).key;
            child(students, key)

            setNome("")
            setIdade("")
            setNota1("")
            setNota2("")
            setNota3("")
            setLink("")

            alert("Aluno cadastrado!")
        }
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulo}>Cadastro de Alunos</Text>
            <StatusBar style="auto" />

            <ScrollView contentContainerStyle={{ width: '100%', alignItems: 'center' }}>
                <Campo placeholder="Digite o nome do Aluno" title="Nome:" keyboardType="text" value={nome} onChangeText={setNome} />
                <Campo placeholder="Digite a idade do Aluno" title="Idade:" keyboardType="numeric" value={idade} onChangeText={setIdade} />
                <Campo placeholder="Digite a Nota 1 do Aluno " title="Nota1:" keyboardType="numeric" value={nota1} onChangeText={setNota1} />
                <Campo placeholder="Digite a Nota 2 do Aluno" title="Nota2:" keyboardType="numeric" value={nota2} onChangeText={setNota2} />
                <Campo placeholder="Digite a Nota 3 do Aluno" title="Nota3:" keyboardType="numeric" value={nota3} onChangeText={setNota3} />
                <Campo placeholder="Digite o link com a foto do Aluno" title="Imagem" keyboardType="text" value={link} onChangeText={setLink} />

                <Btn Title="CADASTRAR" onPress={cadastrarAluno} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    },
});