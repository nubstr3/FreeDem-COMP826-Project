import { View, Text } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { Image } from 'react-native';

import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`} style={{ color:color }}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#D4B18D',
          tabBarInactiveTintColor: '#CDCEE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232522',
            height: 84,
          }
        }}
      >
        <Tabs.Screen 
          name="home"
          options={{
            title:'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen 
          name="user"
          options={{
            title:'User',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon  
                icon={icons.profile}
                color={color}
                name="User"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="maps"
          options={{
            title:'Maps',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.maps}
                color={color}
                name="Maps"
                focused={focused}
              />
            )
          }}
        />
        <Tabs.Screen
          name="incidence-report"
          options={{
            title:'Incidence',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                icon={icons.incidence}
                color={color}
                name="Incidence"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    
    </>
  )
}

export default TabsLayout