import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import downarrowbtn from '../assets/icons/contact/downarrow.png';

const FileUploadBox = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      (response) => {
        if (response.didCancel || response.errorCode) return;

        const uri = response.assets?.[0]?.uri;
        if (uri) setImage(uri);
      }
    );
  };

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>

        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <>
            <Image source={downarrowbtn} style={styles.icon}/>

            <Text style={styles.title}>
              Drop file here or browse
            </Text>
          </>
        )}

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },

  uploadBox: {
    height: 100,
    borderWidth: 1,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  icon: {
    fontSize: 30,
    marginBottom: 5,
    height:'30%',
    aspectRatio:1
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode:'cover'
  },
});

export default FileUploadBox;