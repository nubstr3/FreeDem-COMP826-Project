import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useGlobalContext } from "../../context/GlobalProvider";
import { addPatient } from '../../lib/appwrite';

const AddPatient = () => {
  const [uploading, setUploading] = useState(false);
  const { user } = useGlobalContext();
  const [form, setForm] = useState({
    name: '',
    details: '',
    photo: null,


  });

  const openPicker = async (selectType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if(!result.canceled) {
      if(selectType === 'image') {
        setForm({ ...form, photo: result.assets[0] });
      }
    }
  };

  const submit = async () => {
    if(
      (form.name === "") |
      (form.details == "") |
      !form.photo
    ) {
      return Alert.alert('Please fill in all the fields');
    }

    setUploading(true);

    try {
      await addPatient({
        ...form, 
        userId: user.$id,
      });

      Alert.alert('Success', 'Patient added successfully');
      router.replace('/user');

    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setForm({
        name: "",
        details: "",
        photo: null,
      });

      setUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">
          Add Patient
        </Text>

        <FormField 
          title="Name"
          value={form.name}
          placeholder="Name of Patient"
          handleChangeText={(e) => setForm({...form, name: e})}
          otherStyles="mt-10"
        />

        <FormField 
          title="Details"
          value={form.details}
          placeholder="Age, Sex, Notes"
          handleChangeText={(e) => setForm({...form, details: e})}
          otherStyles="mt-10"
        />


        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload Profile Photo
          </Text>

          <TouchableOpacity onPress={() => openPicker('image')}>
            {form.photo ? (
              <Image 
                source={{ uri: form.photo.uri }}
                resizeMode='cover'
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-60 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <CustomButton 
          title="Add Patient"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddPatient;