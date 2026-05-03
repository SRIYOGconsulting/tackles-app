import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

type Props = {
  name: string;
  description: string;
  image: any;
  onPress?: any;
  answer?: string;
  question?: string;
  id?: any;
  navigation?: any;
};

// Function to limit the text to 8 words for description
const truncateDescription = (description: string) => {
  const words = description.split(' '); // Split the string into words
  if (words.length > 9) {
    return words.slice(0, 9).join(' ') + '...'; // If more than 8 words, truncate and add ellipsis
  }
  return description; // Return the full description if 8 words or less
};

const ServicesCards = ({
  name,
  description,
  image,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.image}
          resizeMode="cover" // Ensure nice scaling of images
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>
          {truncateDescription(description)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',

    height: wp(26),
    marginBottom: hp(2), // Responsive bottom margin
  },
  imageContainer: {
    flex: 1,
    width: wp(50), // Makes the image container 50% of the screen width
  },
  image: {
    width: '100%', // Use full width of the container for responsiveness
    height: wp(25), // Height based on screen width (adjustable)
    borderRadius: 8, // Rounded corners
  },
  textContainer: {
    marginLeft: wp(3), // Add some space between the image and text
    width: wp(42), // Text container width set to a percentage of screen width
    
  },
  title: {
    fontSize: wp(4.1), // Responsive font size based on screen width
    fontWeight: '600',
    // Responsive margin
    color: '#000',
    paddingBottom:3
    
  },
  description: {
    fontSize: wp(3.5), // Responsive description font size
    fontWeight: '400',
    color: '#000000',
    letterSpacing:-0.3,
    lineHeight:17
  },
});

export default ServicesCards;
