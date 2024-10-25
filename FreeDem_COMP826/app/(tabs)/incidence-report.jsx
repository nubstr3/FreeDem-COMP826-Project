import { View, Text, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router';

const IncidenceReport = () => {
  const reportPageView = () => {
    router.push('/report-page')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <Text className="text-white">Hey likkle man</Text>
      <CustomButton 
        title="Report Page"
        handlePress={reportPageView}
      />
    </SafeAreaView>
  )
}

export default IncidenceReport