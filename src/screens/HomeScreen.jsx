import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
    return (
        <View style={styles.homescr}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.btnContainer}>
                <Pressable style={styles.buttons}>
                    <Text style={styles.btnText}>All items</Text>
                </Pressable>

                <Pressable style={styles.buttons}>
                    <Text style={styles.btnText}>Items 2</Text>
                </Pressable>

                <Pressable style={styles.buttons}>
                    <Text style={styles.btnText}>Items #3</Text>
                </Pressable>

            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescr: {
        width: '100%',
        height: '100%',
        backgroundColor: 'smokewhite',
        padding: "4%",
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
        // textAlign: 'center',
        // padding: 10,
    },
    btnContainer: {
        flexDirection: 'row',
        gap: 10,
        marginVertical: 10,

    },
    buttons: {
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
    },

    btnText: {
        color: "green",
        fontSize: 12,


    }
})