import React, {useState, useRef} from 'react';
import {
  View,
  Animated,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import SlidingItem from './SlidingItem';
import Paginator from './Paginator';
import PropTypes from 'prop-types';
import normalize from '../utils/helpers/normalize';

const Sliding = props => {
  const scrollX = useRef(new Animated.Value(10)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const slidesRef = useRef(null);
  return (
    <View style={{}}>
      <FlatList
        data={props.slides}
        renderItem={({item}) => <SlidingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={item => item.id}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
      />
      <View
        style={{
          marginVertical: normalize(20),
          alignSelf: 'center',
        }}>
        <Paginator data={props.slides} scrollX={scrollX} />
      </View>
    </View>
  );
};

Sliding.propTypes = {
  slides: PropTypes.array,
};

Sliding.defaultProps = {
  slides: [1, 2, 3, 4],
};
export default Sliding;
