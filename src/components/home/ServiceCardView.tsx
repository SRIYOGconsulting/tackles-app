import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import {
  Bookmark,
  Calendar,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
} from 'lucide-react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export interface ServiceCardProps {
  imageUri: any;
  title: string;
  category: string;
  rating: number;
  joinedDate: string;
  location: string;
  availability: string;
  price: number;
  onBookingPress: () => void;
}

const ServiceCardView: React.FC<ServiceCardProps> = ({
  imageUri,
  title,
  category,
  rating,
  joinedDate,
  location,
  availability,
  price,
  onBookingPress,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = useCallback(() => {
    // Custom animation configuration for a smoother feel
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: 'easeInEaseOut', property: 'opacity' },
      update: { type: 'spring', springDamping: 0.7 },
      delete: { type: 'easeInEaseOut', property: 'opacity' },
    });
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.innerCard}>
        {/* Image Section */}
        <View style={styles.imageContainer}>
          <Image
            source={typeof imageUri === 'number' ? imageUri : { uri: imageUri }}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity 
            style={styles.bookmark} 
            activeOpacity={0.7}
            accessibilityLabel="Save service"
          >
            <Bookmark size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.details}>
          <View style={styles.headerRow}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            <View style={styles.ratingBox}>
              <Star size={14} color="#FFB800" fill="#FFB800" />
              <Text style={styles.ratingText}>{rating.toFixed(1)}</Text>
            </View>
          </View>
          
          <Text style={styles.category}>{category}</Text>

          {/* Collapsible Info Section */}
          <TouchableOpacity 
            style={styles.dropdownToggle} 
            onPress={toggleDropdown}
            activeOpacity={0.6}
          >
            <Text style={styles.dropdownLabel}>View Service Details</Text>
            {isExpanded ? (
              <ChevronUp size={20} color="#FF7A30" />
            ) : (
              <ChevronDown size={20} color="#FF7A30" />
            )}
          </TouchableOpacity>

          {isExpanded && (
            <View style={styles.infoList}>
              <View style={styles.infoRow}>
                <Calendar size={16} color="#666" />
                <Text style={styles.infoText}>Joined {joinedDate}</Text>
              </View>
              <View style={styles.infoRow}>
                <MapPin size={16} color="#666" />
                <Text style={styles.infoText}>{location}</Text>
              </View>
              <View style={styles.infoRow}>
                <Clock size={16} color="#666" />
                <Text style={styles.infoText}>{availability}</Text>
              </View>
            </View>
          )}

          {/* Footer Action Area */}
          <View style={styles.footer}>
            <View>
              <Text style={styles.priceLabel}>Starting from</Text>
              <Text style={styles.priceValue}>${price}/H</Text>
            </View>
            <TouchableOpacity 
              style={styles.button} 
              onPress={onBookingPress}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp('100%'),
    alignItems: 'center',
    paddingVertical: 10,
  },
  innerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 16,
    width: wp('92%'),
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    // Android Shadow
    elevation: 6,
  },
  imageContainer: {
    height: 180,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 14,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bookmark: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    padding: 8,
    borderRadius: 12,
  },
  details: {
    paddingHorizontal: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  title: {
    fontSize: 19,
    fontWeight: '800',
    color: '#1A1A1A',
    flex: 1,
    marginRight: 8,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFB800',
    marginLeft: 4,
  },
  category: {
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
    marginBottom: 4,
  },
  dropdownToggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    padding: 12,
    borderRadius: 14,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  dropdownLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4B5563',
  },
  infoList: {
    gap: 10,
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 13,
    color: '#4B5563',
    marginLeft: 10,
    fontWeight: '400',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
    paddingTop: 16,
  },
  priceLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  priceValue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#111827',
  },
  button: {
    backgroundColor: '#FF7A30',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 16,
    shadowColor: '#FF7A30',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default ServiceCardView;