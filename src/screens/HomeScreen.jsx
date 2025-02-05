import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CheckItemsScreen from './CheckItemsScreen'
import CreateItemsScreen from './CreateItemsScreen'

const HomeScreen = () => {
    const [view, setView] = useState(0)





    
    return (
        <View style={styles.homescr}>
            <Text style={styles.title}>Dashboard</Text>
            <View style={styles.btnContainer}>
                <Pressable 
                    style={[
                        styles.buttons, 
                        view === 0 && styles.activeButton
                    ]}
                    onPress={() => setView(0)}
                >
                    <Text style={[styles.btnText, view === 0 && styles.activeText]}>
                        All items
                    </Text>
                </Pressable>
    
                <Pressable 
                    style={[
                        styles.buttons, 
                        view === 1 && styles.activeButton
                    ]}
                    onPress={() => setView(1)}
                >
                    <Text style={[styles.btnText, view === 1 && styles.activeText]}>
                        Check
                    </Text>
                </Pressable>
    
                <Pressable 
                    style={[
                        styles.buttons, 
                        view === 2 && styles.activeButton
                    ]}
                    onPress={() => setView(2)}
                >
                    <Text style={[styles.btnText, view === 2 && styles.activeText]}>
                        Create Items
                    </Text>
                </Pressable>
    
                {view === 0 && <CheckItemsScreen/>} 
                {view === 1 && <CheckItemsScreen/>} 
                {view === 2 && <CreateItemsScreen/>}
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescr: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'smokewhite',
        padding: "4%",
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#444',
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
        fontSize: 14,
    },
    activeButton: {
        backgroundColor: 'green',
    },
    activeText: {
        color: 'white',
    },
})