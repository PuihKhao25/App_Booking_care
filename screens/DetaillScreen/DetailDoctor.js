import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import HomeHeader from '../../components/HomeHeader';
import axios from 'axios';
import { Icon } from 'react-native-elements'

export default function DetailDoctor({ route, navigation }) {

    const [doctor, setDoctor] = useState([])
    const { email, firstName, address, id, image,
        positionData, Markdown, valueVi, description,
        contentHTML, lastName, Doctor_infor, nameClinic
    }
        = route.params.item
    console.log('---',Markdown);
    useEffect(() => {

        async function getDetailDoctor() {

            const res = await axios.get('http://192.168.148.114:8080/api/get-detail-doctor-id/' + id)
            return res
        }
        getDetailDoctor().then((response) => {
            const result = response.data
            setDoctor(result.data)
        })
    }, [0])

    return (
        <>

            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.container}>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                        <View style={styles.header}>
                            <Text style={styles.textName}> {'<'}  {lastName}  {firstName}</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Text >{positionData.valueVi} {lastName}  {firstName}</Text>
                    </View>
                    <View>
                        <Text> Hiện tại đang sống  ở {address}</Text>
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

