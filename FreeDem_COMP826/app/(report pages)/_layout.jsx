import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const ReportLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="report-page"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="161622" style="light"/>
    </>
  )
}

export default ReportLayout