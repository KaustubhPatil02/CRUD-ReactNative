import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.view}>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 view:{
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center'
 }
})