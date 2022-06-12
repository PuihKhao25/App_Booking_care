import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, withBadge } from 'react-native-elements'

export default function HomeHeader() {
    const BadgeIcon = withBadge(0)(Icon)
    return (
        <View style={styles.header}>
            <View style={{ alignItems: "center", justifyContent: 'center', marginLeft: 15 }}>
                <Icon
                    type='material-community'
                    name='menu'
                    color='white'
                    size={32}
                />
            </View>

            <View style={{ alignItems: "center", justifyContent: 'center' }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>
                    Appointment
                </Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: 'center', marginRight: 15 }}>
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>

                </Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: '#6495ed',
        height: 60,
        justifyContent: 'space-between',
    }
})