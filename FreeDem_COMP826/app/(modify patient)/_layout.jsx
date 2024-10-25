import { View, Text } from 'react-native';
import { Tabs, Redirect, Stack } from 'expo-router';
import { Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';

const ModifyLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name="modify-patient"
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="add-patient"
          options={{
            headerShown: false
          }}
        />
      </Stack>

      <StatusBar backgroundColor="161622" style="light"/>
    </>
  )
}

export default ModifyLayout