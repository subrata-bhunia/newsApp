import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, ICONS} from '../../themes/Themes';
import Loader from '../../utils/helpers/Loader';
import {useSelector} from 'react-redux';
import normalize from '../../utils/helpers/normalize';
import {TextInput} from 'react-native-element-textinput';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const Home = () => {
  const [darkMode, setDarkmode] = useState(false);
  const {status, allNewsResponse, allSourceResponse, allHeadlineNewsResponse} =
    useSelector(state => state.NewsReducer);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setData] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date.toLocaleDateString());
    hideDatePicker();
    setData(moment(date).format('DD-MM-YYYY'));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'transparent'}
        translucent
        barStyle={darkMode ? 'light-content' : 'dark-content'}
      />
      <Loader visible={status == 'NewsReducer/fetchAllNewsRequest1'} />
      <ScrollView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight,
          padding: normalize(10),
        }}>
        <Text
          style={{
            fontFamily: FONTS.Poppins_500,
            color: COLORS.blue,
            fontSize: normalize(20),
          }}>
          List of Sources:
        </Text>

        {/* <View>
          <TouchableOpacity onPress={showDatePicker}>
            <TextInput
              value={date}
              style={styles.input}
              inputStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              placeholderStyle={styles.placeholderStyle}
              textErrorStyle={styles.textErrorStyle}
              label="Date"
              placeholder="Placeholder"
              placeholderTextColor="gray"
              focusColor="blue"
              // onChangeText={text => {
              //   setValue(text);
              // }}
              editable={false}
              renderLeftIcon={() => {
                return (
                  <Image
                    source={ICONS.left_arrow}
                    style={{
                      height: normalize(20),
                      width: normalize(20),
                      resizeMode: 'contain',
                      marginRight: normalize(10),
                    }}
                  />
                );
              }}
              renderRightIcon={() => {
                return (
                  <TouchableOpacity onPress={showDatePicker}>
                    <Image
                      source={ICONS.schedule}
                      style={{
                        height: normalize(20),
                        width: normalize(20),
                        resizeMode: 'contain',
                      }}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date('01-01-2020')}
          />
        </View> */}

        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          horizontal
          data={allSourceResponse}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  height: normalize(40),
                  padding: normalize(10),
                  shadowColor: 'rgba(56,89,123,1)',
                  margin: normalize(5),
                  borderRadius: normalize(12),
                  shadowOffset: {
                    height: 0,
                    width: 1,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                  elevation: 4,
                }}>
                <Text
                  style={{
                    fontFamily: FONTS.Poppins_600,
                    color: COLORS.black,
                  }}>
                  {item?.name}
                </Text>
              </View>
            );
          }}
        />
        <Text
          style={{
            fontFamily: FONTS.Poppins_500,
            color: COLORS.blue,
            fontSize: normalize(18),
          }}>
          Top Headlines
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          // horizontal
          data={allHeadlineNewsResponse}
          scrollEnabled={false}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  padding: normalize(10),
                  shadowColor: 'rgba(56,89,123,1)',
                  margin: normalize(5),
                  borderRadius: normalize(12),
                  shadowOffset: {
                    height: 0,
                    width: 1,
                  },
                  shadowOpacity: 1,
                  shadowRadius: 20,
                  backgroundColor: '#fff',
                  elevation: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}>
                  <View
                    style={{
                      width: item?.urlToImage == null ? '100%' : '70%',
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.Poppins_600,
                        color: COLORS.black,
                        fontSize: normalize(10),
                      }}>
                      {item?.title.replace('', '')}
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONTS.Poppins_300,
                        color: COLORS.black,
                        fontSize: normalize(10),
                      }}>
                      {item?.description?.replace('', '')}
                    </Text>
                  </View>
                  {item?.urlToImage !== null ? (
                    <Image
                      source={{
                        uri: item?.urlToImage,
                      }}
                      style={{
                        height: '100%',
                        width: '30%',
                        resizeMode: 'contain',
                      }}
                    />
                  ) : null}
                </View>
                {/* <TouchableOpacity>
                  <Text>Buy</Text>
                </TouchableOpacity> */}
              </View>
            );
          }}
        />

        <View style={{height: normalize(20)}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    // width: '50%',
    borderWidth: 1,
    paddingHorizontal: normalize(7),
    borderRadius: normalize(14),
    borderColor: '#999',
    // shadowColor: 'red',
    // shadowOffset: {
    //   height: 10,
    //   width: 10,
    // },
    // shadowOpacity: 2,
    // shadowRadius: 20,
    // elevation: 5,
    backgroundColor: '#fff',
  },
  animation: {
    width: '100%',
    height: normalize(300),
  },
});
