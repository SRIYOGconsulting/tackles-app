import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import MapView, { Marker, MapMarkerProps } from 'react-native-maps';

type Props = {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  zoom?: number;
  showUserLocation?: boolean;
  markerProps?: Partial<MapMarkerProps>;
};

const GoogleMapComponent: React.FC<Props> = ({
  latitude,
  longitude,
  title = 'Location',
  description = '',
  showUserLocation = false,
}) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={Platform.OS === 'android' ? 'google' : undefined}
        showsUserLocation={showUserLocation}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <Marker
          coordinate={{ latitude, longitude }}
          title={title}
          description={description}
        />
      </MapView>
    </View>
  );
};

export default GoogleMapComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250, // you can change this or make it dynamic
    borderRadius: 12,
    overflow: 'hidden',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});