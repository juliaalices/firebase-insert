import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import CardStudents from '../../components/cardStudent';

import firebase from '../../config/firebaseConnection';
import db from '../../config/firebaseConnection'

import { ref, get, getDatabase } from 'firebase/database';
import { useEffect, useState } from 'react';

export default function Students() {

    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        async function buscarAlunos() {
            const database = getDatabase();
            const snapshot = await get(ref(database, 'Alunos/'));
            snapshot.forEach((childItem) => {
                var data = {
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade,
                    nota1: childItem.val().nota1,
                    nota2: childItem.val().nota2,
                    nota3: childItem.val().nota3,
                    imagem: childItem.val().link
                }
                setAlunos(alunos => [...alunos, data]);
            })
        }
        buscarAlunos();
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.titulo}>ALUNOS</Text>

            <ScrollView>

                <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center", flex: 1, justifyContent: "center" }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={alunos}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item }) => {
                            return (
                                <CardStudents
                                    nome={item.nome}
                                    idade={item.idade}
                                    nota1={item.nota1}
                                    nota2={item.nota2}
                                    nota3={item.nota3}
                                    imgPerfil={item.imagem}
                                />
                            )
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
    },
});