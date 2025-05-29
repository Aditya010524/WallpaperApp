import { StyleSheet, Text, View , Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { useRecoilState } from 'recoil';
import { inputtextwallpaper } from '../atoms/wallpaperinputtext';

const Navbar = () => {
  const [searchInput, setsearchInput] = useRecoilState(inputtextwallpaper)

  return (
    <View style = {styles.container}>
      <View style = {styles.searchContainer}>
        <Image source = {logo} style = {styles.logo}></Image>
        <TextInput placeholder='Search Here' style = {styles.txtinput} onChangeText={(text)=>setsearchInput(text)}></TextInput>
        
        
      </View>
    <View>
   
    </View>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container:{
    width:'100%',
    backgroundColor:'white',
  alignItems:'center',
    paddingVertical:10,
    
    },
    logo:{
      marginLeft:10,
      height:20,
      width:20,
      
      
      
    },
    searchContainer:{
      width:'95%',
   borderWidth:2,
      borderRadius:10,
flexDirection:'row',
alignItems:'center',




    },
    txtinput:{
      padding:10,
      fontSize:15,
      width:'95%',
      }
})