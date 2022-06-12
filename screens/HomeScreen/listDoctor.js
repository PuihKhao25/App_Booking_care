import React, { useEffect, useState } from 'react';

import { Text, View, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

import HomeHeader from '../../components/HomeHeader';
import axios from 'axios';

export default function listDoctor() {

    const [doctor, setDoctor] = useState([])
    const [itemCategory, setItemCategory] = useState("1")

    // const url_category = '/api/get-all-doctors'


    useEffect(() => {
        async function getDoctor() {
            const res = await axios.get('http://192.168.1.4:8080/api/get-specialty')
            return res
        }
        getDoctor().then((response) => {
            const result = response.data
            setDoctor(result.data)
        }) 

    }, [itemCategory])

    function listDoctor() {
        const renderItem = ({ item, index }) => {
            // console.log(JSON.stringify(item.image));
            return (
                <View style={{width: 80, marginLeft: 15 , marginTop:5} }>
                    <TouchableOpacity >
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
                    data={doctor}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textName:{
        fontSize:14,
        textAlign:'center'
    },
    topicName:{
        fontSize:20,
        
    },
    bgDoctor:{
        backgroundColor: 'blue'
    }
});
