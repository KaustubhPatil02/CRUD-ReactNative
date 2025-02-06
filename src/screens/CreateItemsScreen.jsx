import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AllItemsScreen from './AllItemsScreen'

const CreateItemsScreen = ({groceryData}) => {
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("")
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Item Name ...'
        style={styles.input}
        value={item}
        onChangeText={(item) => setItem(item)}
      />
      <TextInput
        placeholder='Enter Quantity ...'
        style={styles.input}
        value={quantity}
        keyboardType='numeric'
        onChangeText={(quantity) => setQuantity(quantity)}
      />
      <TextInput
        placeholder='Enter units i.e.kg or ltrs'
        style={styles.input}
        value={unit}
        onChangeText={(unit) => setUnit(unit)}
      />
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Add Item in stock</Text>
      </Pressable>
      {/* <AllItemsScreen/> */}
      <View style={{marginTop: 20}}>
      <View style={styles.headingContainer}>
        <Text style={[styles.headingTxt, styles.column]}>Items</Text>
        <Text style={[styles.headingTxt, styles.column]}>Quantity</Text>
        <Text style={[styles.headingTxt, styles.column]}>Units</Text>
      </View>
      <FlatList
        data={groceryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.quantity <= 20 ? "#FFCCCC" : "#D7F6BF"}]}>
            <Text style={[styles.itemText, styles.column]}>{item.name}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.quantity}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.unit}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
    </View>
  )
}

export default CreateItemsScreen

const styles = StyleSheet.create({
    container:{
        paddingVertical:"4%",
        gap: 15,
    },
    input:{
      borderWidth: 1,
      borderColor:"#d1d1d1",
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 7,
    },
    btn:{
      backgroundColor: "green",
      paddingVertical: 15,
      alignItems: 'center',
      // Text
      borderRadius: 7,
    },
    btnText:{
      color: "white",
      fontWeight: 600,
      fontSize: 15,
    },
    headingContainer: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between",
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    headingTxt:{
      fontWeight:"700",
      fontSize: 16,
      textAlign: 'center',
    },
    itemContainer:{
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20,
      paddingVertical: 7,
      borderRadius: 10,
    },
    itemText:{
      fontWeight:"500",
      fontSize: 15,
      textAlign: 'center',
    },
    column: {
      width: '33%',
    }
})