import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

import ArrowDownIcon from '../assets/icons/contact/downarrow.png';
import DelIcon from '../assets/icons/contact/deleteicon.png';

const { width, height } = Dimensions.get('window');

type FileItem = {
  uri: string;
  fileName?: string;
  sizeMB?: number;
};

type Props = {
  value: FileItem[];
  onChange: (files: FileItem[]) => void;
};

const FileUploadBox: React.FC<Props> = ({ value, onChange }) => {
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

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
            sizeMB: asset.fileSize
              ? +(asset.fileSize / (1024 * 1024)).toFixed(2)
              : 0,
          })) || [];

        onChange([...value, ...newFiles]);
      },
    );
  };

  const removeFile = (uri: string) => {
    const updated = value.filter(item => item.uri !== uri);
    onChange(updated);

    // close preview if deleted item is active
    if (previewIndex !== null) {
      const newLength = updated.length;
      if (newLength === 0) setPreviewIndex(null);
      else if (previewIndex >= newLength) setPreviewIndex(newLength - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* EMPTY */}
      {value.length === 0 && (
        <TouchableOpacity style={styles.box} onPress={pickImages}>
          <View style={styles.emptyState}>
            <Image source={ArrowDownIcon} style={{ width: 28, height: 28 }} />
            <Text style={styles.placeholder}>
              Drop files/photos here
            </Text>
          </View>
        </TouchableOpacity>
      )}

      {/* GRID PREVIEW */}
      {value.length > 0 && (
        <View style={styles.box}>
          <View style={styles.previewList}>
            {value.map((item, index) => (
              <TouchableOpacity
                key={item.uri}
                onPress={() => setPreviewIndex(index)}
                style={styles.previewCard}
              >
                <Image source={{ uri: item.uri }} style={styles.previewImage} />

                <View style={styles.previewInfo}>
                  <Text style={styles.name} numberOfLines={1}>
                    {item.fileName}
                  </Text>
                  <Text style={styles.size}>
                    {item.sizeMB ? `${item.sizeMB} MB` : ''}
                  </Text>
                </View>

                <TouchableOpacity onPress={() => removeFile(item.uri)}>
                  <Image source={DelIcon} style={{ width: 16, height: 16 }} />
                </TouchableOpacity>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.addMore} onPress={pickImages}>
              <Text style={styles.addText}>+ Add more</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* INSTAGRAM STYLE FULL SCREEN PREVIEW */}
      <Modal visible={previewIndex !== null} transparent={true}>
        <View style={styles.modalContainer}>

          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeBtn}
            onPress={() => setPreviewIndex(null)}
          >
            <Text style={{ color: '#fff', fontSize: 18 }}>✕</Text>
          </TouchableOpacity>

          {/* Image */}
          {previewIndex !== null && (
            <Image
              source={{ uri: value[previewIndex].uri }}
              style={styles.fullImage}
              resizeMode="contain"
            />
          )}

          {/* Delete from preview */}
          {previewIndex !== null && (
            <TouchableOpacity
              style={styles.deleteFromPreview}
              onPress={() => removeFile(value[previewIndex].uri)}
            >
              <Text style={{ color: 'white', fontWeight: '600' }}>
                Delete
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
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
    minHeight: 120,
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
    marginTop: 8,
    fontWeight: '600',
    color: '#666',
  },

  /* GRID */
  previewList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  previewCard: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 8,
    borderRadius: 10,
  },

  previewImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 8,
  },

  previewInfo: {
    flex: 1,
  },

  name: {
    fontSize: 12,
    color: '#333',
  },

  size: {
    fontSize: 11,
    color: '#777',
  },

  addMore: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#999',
  },

  addText: {
    fontWeight: '600',
  },

  /* 🔥 FULL SCREEN PREVIEW */
  modalContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fullImage: {
    width,
    height: height * 0.8,
  },

  closeBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },

  deleteFromPreview: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'rgba(255,0,0,0.7)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});