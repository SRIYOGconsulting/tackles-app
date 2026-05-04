// types.ts or in your navigation setup file

export type RootStackParamList = {
  ServicesScreen: undefined; // ServicesScreen doesn't expect any parameters
  SingleScreen: {service: any}; // SingleScreen receives the service object
  ViewBooking: undefined;
};
