import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const Screen2 = ({ route }) => {
  const { clickedimage } = route.params;
  const [imagedata, setimagedata] = useState(null);

  useEffect(() => {
    setimagedata(JSON.parse(clickedimage));
  }, []);

  const handleDownload = async () => {
    try {
      const imageUrl = imagedata?.cover_photo?.urls?.regular;
      if (!imageUrl) return;

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Allow media permissions to save images.');
        return;
      }

      const fileUri = FileSystem.documentDirectory + 'wallpaper.jpg';
      const downloadObj = FileSystem.createDownloadResumable(imageUrl, fileUri);
      const { uri } = await downloadObj.downloadAsync();

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync('MyWallpapers', asset, false);

      Alert.alert('Downloaded', 'Image saved to gallery!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Something went wrong during download.');
    }
  };

  const handleNext = async () => {
    try {
      const response = await fetch('https://api.unsplash.com/photos/random?client_id=qDdro2702BKA7sw_rfeCWmEghCAjsNVtNT8_gjcBsMw');
      const json = await response.json();
     setimagedata({ cover_photo: { urls: json.urls } });
 // match structure like initial
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch new image.');
    }
  };

  return (
    <View style={styles.imageContainer}>
      {imagedata && (
        <Image
          source={{ uri: imagedata.cover_photo.urls.regular }}
          style={styles.image}
        />
      )}

      <TouchableOpacity style={styles.downloadbtn} onPress={handleDownload}>
        <Text style={styles.downloadbtntxt}>Download</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.nextbtn} onPress={handleNext}>
        <Text style={styles.nextbtntxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  downloadbtn: {
    position: 'absolute',
    bottom: 20,
    left: 70,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  downloadbtntxt: {
    color: 'white',
    fontWeight: 'bold',
  },
  nextbtn: {
    position: 'absolute',
    bottom: 20,
    right: 70,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  nextbtntxt: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 23,
  },
});
