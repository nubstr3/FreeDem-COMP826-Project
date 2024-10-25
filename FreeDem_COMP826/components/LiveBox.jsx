import { View, Text, FlatList } from 'react-native'
import React from 'react'

const LiveBox = ({ posts }) => {
  return (
    <FlatList
    data={[ 
        { id : "12 Patients, 0 Wandered - 5 seconds ago" }, 
        { id : "12 Patients, 0 Wandered - 293 seconds ago" },
        { id : "12 Patients, 0 Wandered - 2364 seconds ago" },
        { id : "12 Patients, 0 Wandered - 8862 seconds ago" },
        { id : "11 Patients, 5 Wandered - 5 seconds ago" }, 
        { id : "9 Patients, 0 Wandered - 293 seconds ago" },
        { id : "9 Patients, 2 Wandered - 2364 seconds ago" },
        { id : "5 Patients, 1 Wandered - 8862 seconds ago" },
        
    ]}
    keyExtractor={(item) => item.$id}
    renderItem={( { item }) => (
      <Text className="text-1xl text-white text-center">{item.id}</Text>
    )}
    />
  )
}

export default LiveBox