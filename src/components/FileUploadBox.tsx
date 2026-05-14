import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

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
            <Text style={styles.icon}>📁</Text>

            <Text style={styles.title}>
              Drop file here or browse
            </Text>

            <Text style={styles.subtitle}>
              JPG, PNG supported
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
    height: 150,
    borderWidth: 2,
    borderStyle: 'dashed', // dashed border effect
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },

  icon: {
    fontSize: 30,
    marginBottom: 5,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  subtitle: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});

export default FileUploadBox;