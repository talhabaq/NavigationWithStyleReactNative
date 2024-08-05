import { View, Text,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack=createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer >
      
      <Stack.Navigator>
      <Stack.Screen name='LOG IN' component={LOG} 
       options={{
        title:'USER LOG IN',
        headerStyle:{
        backgroundColor:'blue',
        },
        headerTitleStyle:{
          fontSize:25
        },
        headerTintColor:'white'
        }}/>
      <Stack.Screen name='HOME' component={Home} />
     
      </Stack.Navigator>

    </NavigationContainer>
  )
}
const Home=()=>{
 return( 
 <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Text style={{fontSize:30}}>HOME</Text>
  </View>
 )
}
const LOG=(props)=>{
  return( 
  <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
     <Text style={{fontSize:30}}>LOG IN </Text>
     <Button title='go to home page' onPress={()=>props.navigation.navigate("HOME")}/>
   </View>
  )
 }

export default App
