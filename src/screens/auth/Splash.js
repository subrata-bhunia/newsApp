import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {LOTTIE} from '../../themes/Themes';
import LottieView from 'lottie-react-native';
const {height, width} = Dimensions.get('screen');
import {useDispatch} from 'react-redux';
import {
  allSourcesRequest,
  fetchAllHeadlineNewsRequest,
  fetchAllNewsRequest,
} from '../../redux/reducers/NewsReducer';
import constants from '../../utils/helpers/constants';
import Rive, {Alignment, Fit} from 'rive-react-native';
const Splash = props => {
  const dispatch = useDispatch();
  const resourceName = 'basketball';
  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchAllNewsRequest());
      dispatch(allSourcesRequest({apiKey: constants.API_KEY, country: 'in'}));
      dispatch(
        fetchAllHeadlineNewsRequest({apiKey: constants.API_KEY, country: 'in'}),
      );
    }, 3000);
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={'dark-content'}
      />

      <View style={{flex: 1, justifyContent: 'center'}}>
        {/* <LottieView
          source={LOTTIE.splash}
          autoPlay
          loop={false}
          onAnimationFinish={() => props.navigation.navigate('Home')}
        /> */}
        <Rive
          fit={Fit.Fill}
          alignment={Alignment.Center}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
          }}
          resourceName={resourceName}
          // stateMachineName={'Jellyfish'}
          // autoplay={true}
          onLoopEnd={() => props.navigation.navigate('Home')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({});
