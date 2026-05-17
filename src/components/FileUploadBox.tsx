import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import ArrowDownIcon from '../assets/icons/contact/downarrow.png'
import { Image } from 'react-native';
type FileItem = {
  uri: string;
  fileName?: string;
};

type Props = {
  value: FileItem[];
  onChange: (files: FileItem[]) => void;
};

const FileUploadBox: React.FC<Props> = ({ value, onChange }) => {
  const pickImages = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 0,
        quality: 0.7,
      },
      response => {
        if (response.didCancel || response.errorCode) return;

        const newFiles =
          response.assets?.map(asset => ({
            uri: asset.uri!,
            fileName: asset.fileName || 'Unnamed file',
          })) || [];

        onChange([...value, ...newFiles]);
      },
    );
  };

  const removeFile = (uri: string) => {
    const updated = value.filter(item => item.uri !== uri);
    onChange(updated);
  };

  return (
    <View style={styles.container}>

      {/* Upload Area */}
      {value.length === 0 && (
        <TouchableOpacity style={styles.box} onPress={pickImages}>
          <View style={styles.emptyState}>
            <Image
              source={ArrowDownIcon}
              style={{ width: 28, height: 28 }}
            />

            <Text style={styles.placeholder}>
              Tap to add photos
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* File List */}
      {value.length > 0 && (
        <View style={styles.box}>
          <View style={styles.list}>
            {value.map(item => (
              <View key={item.uri} style={styles.item}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.fileName}
                </Text>

                <TouchableOpacity onPress={() => removeFile(item.uri)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* Add more */}
            <TouchableOpacity style={styles.addMore} onPress={pickImages}>
              <Text style={styles.addText}>+ Add more photos</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default FileUploadBox;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },

  box: {
    minHeight: 110,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#fff',
  },
 emptyState: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},

  placeholder: {
    textAlign: 'center',
    color: '#666',
    fontWeight: '600',
    marginTop: 5,
  },

  list: {
    gap: 10,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3',
    padding: 8,
    borderRadius: 8,
  },

  name: {
    flex: 1,
    fontSize: 13,
    color: '#333',
  },

  remove: {
    color: 'red',
    fontWeight: '600',
    marginLeft: 10,
  },

  addMore: {
    marginTop: 5,
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
    alignItems: 'center',
  },

  addText: {
    color: '#333',
    fontWeight: '600',
  },
});