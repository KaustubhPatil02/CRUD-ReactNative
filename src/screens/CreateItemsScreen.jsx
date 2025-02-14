import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import AllItemsScreen from './AllItemsScreen'

const CreateItemsScreen = ({ groceryData, setgroceryData }) => {
  const [item, setItem] = useState('')
  const [quantity, setQuantity] = useState("")
  const [unit, setUnit] = useState("")
  const [isEdit, setIsEdit] = useState(false)
  const [itemId, setitemId] = useState(null)

  const addgroceryhandler = () => {
    const newitem = {
      id: Date.now(),
      name: item,
      quantity: quantity,
      unit: unit
    }
    setgroceryData([...groceryData, newitem])
    setItem('')
    setQuantity('')
    setUnit('')
    setIsEdit(false)  // Reset the isEdit state to false

  }

  const handleDelete = (id) => {
    setgroceryData(groceryData.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    setIsEdit(true)
    setitemId(itemId)
    setItem(groceryData.find(item => item.id === id).name)
    setQuantity(groceryData.find(item => item.id === id).quantity)
    // setUnit(groceryData.find(item => item.id === id).unit)
  }

  // const updateItemHandler = () =>{
  //   setgroceryData(groceryData.map(item => {}))
  // }

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
      <Pressable style={styles.btn} onPress={() => isEdit ? updateItemHandler() : addgroceryhandler()}> 
        <Text style={styles.btnText}>{isEdit ? 'Edit Item in stock' : 'Add Item in stock'}</Text>
      </Pressable>
      {/* <AllItemsScreen/> */}
      <View style={{ marginTop: 20 }}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headingTxt, styles.column]}>Items</Text>
          <Text style={[styles.headingTxt, styles.column]}>Quantity</Text>
          <Text style={[styles.headingTxt, styles.column]}>Actions</Text>
        </View>
        <FlatList
          data={groceryData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemWrapper}>
              <View style={[styles.itemContainer, { backgroundColor: item.quantity <= 20 ? "#FFCCCC" : "#D7F6BF" }]}>
                <Text style={[styles.itemText, styles.column]}>{item.name}</Text>
                <Text style={[styles.itemText, styles.column]}>{item.quantity}</Text>
                {/* <Text style={[styles.itemText, styles.column]}>{item.unit}</Text> */}
                <View style={styles.actionContainer}>
                  <Pressable
                    onPress={() => handleEdit(item.id)}
                  >
                    <Text style={styles.actionbtn}>Edit</Text>
                  </Pressable>

                  <Pressable onPress={() => handleDelete(item.id)}>
                    <Text style={styles.actionbtn}>
                      Delete
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>

          )}
          contentContainerStyle={{ gap: 7 }}
        />
      </View>
    </View>
  )
}

export default CreateItemsScreen

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: "4%",
    gap: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d1d1",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 7,
  },
  btn: {
    backgroundColor: "green",
    paddingVertical: 15,
    alignItems: 'center',
    // Text
    borderRadius: 7,
  },
  btnText: {
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
  headingTxt: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
  },
  itemText: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: 'center',
  },
  column: {
    width: '33%',
  },
  actionbtn: {
    justifyContent: 'space-between',
    fontWeight: 500,
    fontSize: 15,
  },
  itemWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  // buttonContainer: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  //   gap: 10,
  //   padding: 8,
  //   backgroundColor: '#f5f5f5',
  // },
  // actionBtn: {
  //   paddingHorizontal: 15,
  //   paddingVertical: 5,
  //   borderRadius: 5,
  //   minWidth: 70,
  //   alignItems: 'center',
  // },
  // editBtn: {
  //   backgroundColor: '#4CAF50',
  // },
  // deleteBtn: {
  //   backgroundColor: '#f44336',
  // },
  // actionBtnText: {
  //   color: 'white',
  //   fontSize: 14,
  //   fontWeight: '500',
  // }
})