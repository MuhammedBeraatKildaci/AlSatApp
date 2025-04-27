import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  SplashScreen: undefined;
  PersonalizedScreen: undefined;
  ProductAddScreen: undefined;
  ServiceScreen: undefined;
  SearchScreen: undefined;
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default Props;