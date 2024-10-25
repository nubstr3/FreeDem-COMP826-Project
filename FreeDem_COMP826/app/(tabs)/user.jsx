import { View, Text, SafeAreaView, FlatList, RefreshControl, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getAllPatients, getUserPatients, signOut } from '../../lib/appwrite';
import useAppwrite from '../../lib/useAppwrite';
import PatientCard from '../../components/PatientCard';

import { icons } from '../../constants';
import { router } from 'expo-router';
import { useGlobalContext } from "../../context/GlobalProvider";

const UserMgmt = () => {
  
  const { data: patients } = useAppwrite(() => getUserPatients(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null)
    setIsLoggedIn(false)

    router.replace('/sign-in')
  }

  const addPatient = () => {
    router.push('/add-patient')
  }

  const modifyPatient = () => {
    router.push('/modify-patient')
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        data={patients}
        keyExtractor={(item) => item.$id}
        renderItem={( { item }) => (
          <PatientCard 
            name={item.name}
            photo={item.photo}
          />
        )}

        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <Text className="text-white font-pregular">{user?.email}</Text>
            <TouchableOpacity className="w-full flex items-end mb-10" onPress={logout}>
              <Image source={icons.logout} resizeMode="contain" className="w-6 h-6"/>
            </TouchableOpacity>
            <TouchableOpacity className="w-full flex items-start mb-10" onPress={addPatient}>
              <Image source={icons.plus} resizeMode="contain" className="w-6 h-6"/>
            </TouchableOpacity>
          </View>
        )}

      />
    </SafeAreaView>
  )
}

export default UserMgmt