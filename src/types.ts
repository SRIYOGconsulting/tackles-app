// types.ts or in your navigation setup file

export type RootStackParamList = {
  tab: undefined;
  ServicesScreen: undefined; // ServicesScreen doesn't expect any parameters
  SingleScreen: { service: any }; // SingleScreen receives the service object
  ViewBooking: undefined;

  Booking: {
    screen: 'ServiceBookingScreen' | 'AdminOtp' | 'AdminOtpVerify';
    params?: {
      service?: any;
    };
  };
};
