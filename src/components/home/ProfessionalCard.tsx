import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface ProProps {
  image: any;
  name: string;
  description: string;
}

const ProfessionalCard: React.FC<ProProps> = ({ image, name, description }) => {
  return (
    <View style={styles.cardContainer}>
      {/* Top Blue Section */}
      <View style={styles.topSection}>
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.avatar} />
        </View>
      </View>

      {/* Bottom White Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
        
        <TouchableOpacity style={styles.viewMoreBtn}>
          <Text style={styles.viewMoreText}>View More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp('42%'), // Smaller than the main service card
    backgroundColor: '#FFF',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginHorizontal: 8,
  },
  topSection: {
    backgroundColor: '#4169E1', // Royal Blue
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50, // Creates that slight wave look
    borderBottomRightRadius: 50,
  },
  imageWrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#FFF',
    overflow: 'hidden',
    backgroundColor: '#DDD',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  bottomSection: {
    padding: 12,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  description: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    lineHeight: 14,
    marginBottom: 10,
  },
  viewMoreBtn: {
    backgroundColor: '#4169E1',
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 4,
  },
  viewMoreText: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default ProfessionalCard;