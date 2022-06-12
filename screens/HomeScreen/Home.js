import React, { useEffect, useState } from 'react';

import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet, ScrollView } from 'react-native';

import HomeHeader from '../../components/HomeHeader';
import axios from 'axios';
import { colors } from 'react-native-elements';
import listDoctor from './listDoctor';
import { useNavigation } from '@react-navigation/native';
var Buffer = require("@craftzdog/react-native-buffer").Buffer;


export default function Home() {
    const navigation = useNavigation();
    const [specialty, setSpecialty] = useState([]);
    const [doctor, setDoctor] = useState([])
    const [itemCategory, setItemCategory] = useState("1")

    // const url_category = '/api/get-all-doctors'

    // /api/top-doctor-home
    useEffect(() => {
        async function getSpecialty() {
            const res = await axios.get('http://192.168.148.114:8080/api/get-specialty')
            return res
        }
        getSpecialty().then((response) => {
            const result = response.data
            setSpecialty(result.data)
        })
        async function getDoctor() {
            const res = await axios.get('http://192.168.148.114:8080/api/top-doctor-home')
            return res
        }
        getDoctor().then((response) => {
            const result = response.data
            // console.log('data :', result.data);
            setDoctor(result.data)

        })

    }, [itemCategory])
    return (
        <>
            <HomeHeader />
            <ScrollView
                stickyHeaderIndices={[0]}
                showsVerticalScrollIndicator={true}
            >
                <Image
                    style={{ height: 250 }}
                    source={require('../../assets/img/logo.jpg_wh860.jpg')}
                />
                <View >

                    <View >
                        <View >
                            <Text style={styles.topicName}> Chuyên khoa</Text>
                        </View>
                        <ListSpecialty />
                    </View>
                    <View >
                        <View >
                            <Text style={styles.topicName}>Bác sĩ nổi bật</Text>
                        </View>
                        <ListDoctor />
                    </View>
                </View>
            </ScrollView>
        </>
    )
    function ListSpecialty() {
        const renderItem = ({ item, index }) => {
            // console.log(item);
            return (
                <View style={{ width: 80, marginLeft: 15, marginTop: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('DetailSpecialty', { item })}>
                        <Image
                            style={{ height: 80, width: 80, borderRadius: 60 }}
                            source={{ uri: `${item.image}` }}
                        />
                        <View >
                            <View>
                                <Text style={styles.textName} >{item.name}</Text>
                                {/* <Text >{item.price} </Text> */}
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        };
        return (
            <View >
                <FlatList
                    horizontal
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={specialty}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        )
    }
    // list doctor
    function ListDoctor() {
        const renderItem = ({ item, index }) => {
            // console.log(JSON.stringify(item.image));
            let imageBase64 = '';
            if (item.image) {
                imageBase64 = Buffer.from(item.image, 'base64').toString('binary');
            }
            return (
                <View style={{ width: 80, marginLeft: 15, marginTop: 5 }}>
                    <TouchableOpacity  onPress={() => navigation.navigate('DetailDoctor', { item })} >
                        <Image
                            style={{ height: 80, width: 80, borderRadius: 60 }}
                            source={{ uri: `${imageBase64}` }}
                        />

                        <View >
                            <View>
                                <Text style={styles.textName} >{item.firstName}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        };
        return (
            <View >
                <FlatList
                    horizontal
                    nestedScrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    data={doctor}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}

arrayBufferToBase64 = buffer => {
    let binary = '';
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textName: {
        fontSize: 14,
        textAlign: 'center'
    },
    topicName: {
        fontSize: 20,
        marginLeft:10

    }
});
