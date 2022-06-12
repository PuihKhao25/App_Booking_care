import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { WebView } from 'react-native-webview';
import HomeHeader from '../../components/HomeHeader';
import axios from 'axios';

export default function DetailSpecialty({ route, navigation }) {
    const [specialty, setSpecialty] = useState([])
    const { createdAt, descriptionHTML, descriptionMarkdown, id, image, name } = route.params.item
    console.log(descriptionHTML);
    useEffect(() => {

        async function getDetailSpecialty() {

            const res = await axios.get('http://192.168.148.114:8080/api/get-detail-specialty-by-id/' + id + 'location=ALL')
            return res
        }
        getDetailSpecialty().then((response) => {
            const result = response.data
            // console.log('hello: ')
            setSpecialty(result.data)
        })
    }, [0])

    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                <View style={styles.header}>
                    <Text style={styles.textName}> {'<'} {name}</Text>
                </View>
            </TouchableOpacity>
            <ScrollView

            >
                <View>
                    <View style={{ margin: 20 }}>
                        <HTMLView
                            value={descriptionHTML}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    )
}




const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: '#6495ed',
        height: 50,
    },
    textName: {
        marginLeft: 10,
        fontSize: 25,
        marginTop: 5,
        color: 'white'
    }
})

