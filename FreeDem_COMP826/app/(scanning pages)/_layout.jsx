import { View, Text } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ScanningLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="scan-radar"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="scan-nearby"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="161622" style="light"/>
    </>
  )
}

export default ScanningLayout