import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateItemsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Create Items</Text>
    </View>
  )
}

export default CreateItemsScreen

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        // height: '100%',
        // width: '100%',
    }
})