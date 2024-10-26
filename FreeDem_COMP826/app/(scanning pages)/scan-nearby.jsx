import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomButton from '../../components/CustomButton';

import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const ScanNearby = () => {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      Alert.alert('Permission Needed', 'Please allow access to the camera')

    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === "back" ? "front" : "back"));
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <CameraView className="flex-1" facing={facing}>
        <View className="flex-1 flex-row bg-transparent m-64">
          <CustomButton 
            title="Flip Camera"
            handlePress={toggleCameraFacing}
            containerStyles="mt-7"
          />
        </View>
      </CameraView>
      <CustomButton 
          title="Try Again"
          handlePress={requestPermission}
          containerStyles="mt-7"
        />
    </SafeAreaView>
  )


}

export default ScanNearby