import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { images } from '../../constants';
import { router } from 'expo-router';

const Maps = () => {

  const scanRadar = () => {
    router.push('/scan-radar')
    // Open up a Loading Page, then redirects you to the Incidence Report page
  }

  const scanNearby = () => {
    router.push('/scan-nearby')
    // Open up the camera
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="w-full justify-center min-h-[65vh] px-2 my-6 gap-5 flex-col">
        
        <View>
          <Image source={images.radar} className="mx-auto h-20" resizeMode='contain'/>
          <CustomButton
            title="Full Scan"
            handlePress={scanRadar}
          />
        </View>
        
        <View>
        <Image source={images.scan} className="mx-auto h-20" resizeMode='contain'/>
          <CustomButton
            title="Scan Nearby"
            handlePress={scanNearby}
          />
        </View>
        
        
      </View>
      
    </SafeAreaView>
  )
}

export default Maps