import { View, Text, SafeAreaView, FlatList, Image, RefreshControl } from 'react-native'
import React, { useState } from 'react'

import { images } from '../../constants';
import LiveBox from '../../components/LiveBox';
import { useGlobalContext } from "../../context/GlobalProvider";

const Home = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true);

    setRefreshing(false);
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList 
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-l font-psemibold text-white">
                  {user?.email}
                </Text>
              </View>

              <View className="mt-1.5">
                <Image 
                  source={images.logo}
                  className="w-40 h-10"
                  resizeMode='contain'
                />
              </View>
            </View>

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3 text-center">
                Live Updates
              </Text>

              <LiveBox posts={[ { id : 1}, { id : 2}, { id : 3} ] ?? []} />
            </View>
          </View>
        )}

        ListEmptyComponent={() => (
          <Text>Empty</Text>
        )}

        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}

      />
    </SafeAreaView>
  )
}

export default Home