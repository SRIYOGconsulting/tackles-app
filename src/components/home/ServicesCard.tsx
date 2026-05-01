import React from 'react';
import ServiceCardView, { ServiceCardProps } from './ServiceCardView';

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return <ServiceCardView {...props} />;
};

export default ServiceCard;