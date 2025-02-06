import { FlatList, StyleSheet, Text, View } from 'react-native'
import groceryData from '../utils/data'

const AllItemsScreen = () => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingTxt}> Items</Text>
        <Text style={styles.headingTxt}>Quantity</Text>
      </View>
      <FlatList
        data={groceryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.quantity <= 20 ? "#FFCCCC" : "#D7F6BF"}]}>
            <Text styles={styles.itemText}>{item.name}</Text>
            <Text styles={styles.itemText}>{item.quantity}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  )
}

export default AllItemsScreen

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingTxt:{
    fontWeight:"700",
    fontSize: 16,
  },
  itemContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
  },
  itemText:{
    fontWeight:"400",
    fontSize: 18,
  },
  
})