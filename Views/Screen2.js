import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen2 = ({route}) => {
   const {clickedimage} = route.params
    const [imagedata, setimagedata] = useState()
    useEffect(()=>{
        setimagedata(JSON.parse(clickedimage))
    },[])
  return (

    
       <View style = {styles.imageContainer}>
         
         { typeof (imagedata) == 'object' &&  <Image source = {{uri: imagedata.cover_photo.urls.regular}} style = {styles.image}></Image>}
 
         <TouchableOpacity style = {styles.downloadbtn}>
           <Text style = {styles.downloadbtntxt}>Download</Text>
         </TouchableOpacity>
         <TouchableOpacity style = {styles.nextbtn}>
           <Text style = {styles.nextbtntxt}>next</Text>
         </TouchableOpacity>
        </View>
     

  )
}

export default Screen2

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
   
      },
    image:{
    height:'100%',
    width:'100%',
    padding:20,
    borderColor:'black',

    
    },
    downloadbtn:{
      position:'absolute',
      bottom:20,
      left:70,
      backgroundColor:'black',
      padding:'10',
      borderRadius:10
    },
    downloadbtntxt:{
      color:'white',
      fontWeight:'bold'
    },
    nextbtn:{
      position:'absolute',
      bottom:20,
      right:70,
      backgroundColor:'black',
      padding:'10',
      borderRadius:10
    },
    nextbtntxt:{
      color:'white',
      fontWeight:'bold',
      paddingHorizontal:23,
    },
})