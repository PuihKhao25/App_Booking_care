import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator={true}
            >
               
                <View style={styles.headerTextView}>
                    <Text style={styles.headerText} >Bác sĩ nổi bật tuần qua</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTextView: {
        marginTop: 10,
    },
    headerText: {

    }
});

