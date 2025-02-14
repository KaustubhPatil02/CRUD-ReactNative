import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AllItemsScreen from './AllItemsScreen'
import CreateItemsScreen from './CreateItemsScreen'
import groceryData from '../utils/data'

const HomeScreen = () => {
    const [view, setView] = useState(0)
    const getFilteredData = () => {
        const filteredItems = groceryData.filter(item => item.quantity <= 20);
        // console.log("Filtered Items: ", filteredItems); // checking if the filter is working or not
        return filteredItems;
    };

    const [groceryData, setgroceryData] = useState(    [
        {
          id: 1,
          name: "Rice",
          quantity: 10,
          unit: "kg"
        },
        {
          id: 2,
          name: "Sugar",
          quantity: 50,
          unit: "kg"
        },
        // {
        //   id: 3,
        //   name: "Milk",
        //   quantity: 240,
        //   unit: "litr"
        // },
        // {
        //   id: 4,
        //   name: "Flour",
        //   quantity: 70,
        //   unit: "kg"
        // },
        // {
        //   id: 5,
        //   name: "Salt",
        //   quantity: 50,
        //   unit: "kg"
        // },
        {
          id: 6,
          name: "Cooking Oil",
          quantity: 2,
          unit: "litr"
        },
        {
          id: 7,
          name: "Lentils",
          quantity: 10,
          unit: "kg"
        },
        {
          id: 8,
          name: "Coffee Powder",
          quantity: 100,
          unit: "kg"
        }
      ])
           
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
                        Low Stock Items
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
    
            </View>
                {view === 0 && <AllItemsScreen groceryData={groceryData} />} 
                {view === 1 && <AllItemsScreen groceryData={getFilteredData()}/>}
                {view === 2 && <CreateItemsScreen groceryData={groceryData} setgroceryData={setgroceryData}/>}
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
        paddingVertical: 3.5,
        paddingHorizontal: 10,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 10,
    },

    btnText: {
        color: "green",
        fontWeight: 'bold',
        fontSize: 16,
    },
    activeButton: {
        backgroundColor: 'green',
    },
    activeText: {
        color: 'white',
    },
})