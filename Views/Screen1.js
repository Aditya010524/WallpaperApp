import { FlatList, StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { inputtextwallpaper } from "../atoms/wallpaperinputtext";
import Navbar from './Navbar';
const Screen1 = ({navigation}) => {
  const access_key = "qDdro2702BKA7sw_rfeCWmEghCAjsNVtNT8_gjcBsMw";
  const [searchInput, setsearchInput] = useRecoilState(inputtextwallpaper);
const [ImageCollection, setImageCollection] = useState([])
  useEffect(() => {
    const getimagecollection = async () => {
      let data = await fetch(
        `https://api.unsplash.com/search/collections?page=1&per_page=30&query=${searchInput}%3E&client_id=${access_key}`
      );
      let jsondata = await data.json()
   setImageCollection (jsondata);
    };
    getimagecollection();

  }, [searchInput]);

  ImageCollection.total == 0 && setsearchInput('All')
const showWallpaper=(item)=>{
  navigation.navigate('S2',{ clickedimage : `${JSON.stringify(item)}`})
}
  return (
    <SafeAreaView>
      <View style = {styles.Navbarcss}><Navbar/></View>
      
      <View style= {styles.Container}>
      <Text style={styles.text}>Showing Results for '{searchInput}'</Text>
     <FlatList data={ImageCollection.results}
     numColumns={2}
     renderItem={({item})=>
   <TouchableOpacity style = {styles.imageContainer} onPress={()=>showWallpaper(item)}>
     <View style = {styles.imageContainer}>
     
     <Image source = {{uri: item.cover_photo.urls.regular}} style = {styles.image}></Image>
   </View>
   </TouchableOpacity>
    
    }
     
     />
    </View>
    </SafeAreaView>
  );
};

export default Screen1;

const styles = StyleSheet.create({

  Container:{
    alignItems:'center',
  },
text:{
  
},
  imageContainer:{
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:2,
  },
image:{
height:400,
width:200,
padding:20,
borderColor:'black',
borderWidth:2,
borderRadius:5,
elevation:10

}
});
