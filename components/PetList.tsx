import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreedCell = ({ breed, data }) => {
  const keys = Object.keys(data).filter(key => key != "breed")
  const desc = keys.map(key => `${key}: ${data[key]}`)

  return (
    <View style={styles.container}>
      <Text style={styles.breed}>{breed}</Text>
      {desc.map((item) => (
        <Text style={styles.desc}>{item}</Text>
      ))}
    </View>
  )
}

const renderItems = ({ item }) => {
  return (
    <BreedCell
      data={item}
      breed={item.breed}
    />
  )
}

const PetList = ({ data }) => (
  <FlatList 
    data={data}
    renderItem={renderItems}
    style={{ backgroundColor: '#fff' }}
    keyExtractor={(item, index) => `${index}-${item.breed}`}
  />
)

export default PetList

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 20,
    marginLeft: 10,
    marginRight: 10
  },
  breed: {
    fontSize: 24,
    marginBottom: 10
  },
  desc: {
    marginTop: 5,
    fontSize: 16
  }
})