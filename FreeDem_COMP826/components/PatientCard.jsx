import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '../constants';

const PatientCard = ({name, details, location, manager, photo}) => {
    
  return (
    <View className="flex-col items-center px-4 mb-14">
        <View className="flex-row gap-3 items-start">
            <View className="flex-row flex-1">
                <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
                    <Image source={{ uri: photo }}
                        className="w-full h-full rounded-lg" resizeMode='cover'
                    /> 
                </View>

                <View className="justify-center flex-1 ml-3 gap-y-1">
                    <Text href='' className="text-white font-psemibold text-sm" numberOfLines={1}>
                        {name}
                    </Text>
                </View>
            </View>
            <View className="pt-2 flex-row gap-4" >
                <Image href='' source={icons.edit} className="w-5 h-5" resizeMode='contain'/>
                <Image href='' source={icons.search} className="w-5 h-5" resizeMode='contain'/>
            </View>
        </View>
    </View>
  )
}

export default PatientCard