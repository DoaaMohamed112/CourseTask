import React, {useState, useEffect} from 'react';
import {View, Dimensions,} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../assets/globals/Colors';

/* Image Slider component:
   Props: images urls, height of image
*/
const MyCarousel = props => {
  const [width, setWidth] =  useState(Dimensions.get('window').width);
  const [height, setHeight] =  useState(Dimensions.get('window').height);

  useEffect(() => {
    // event listener for landscape or portrait detection 
    const updatLayout = () => {
      const { width, height } = Dimensions.get('window');
      setWidth(width);
      setHeight(height);
    };

    Dimensions.addEventListener('change', updatLayout);
    return () => {
      Dimensions.removeEventListener('change', updatLayout);
    };
  })

  return (
    <View  style={{width: width, minHeight: height*0.4}}>
      <SliderBox
        images={props.images}
        sliderBoxHeight={props.height}
        paginationBoxStyle={{alignSelf:'flex-start'}}
        ImageComponentStyle={{borderRadius: 0, width: '100%',resizeMode: 'stretch'}}
        dotColor={Colors.activeDot}
        inactiveDotColor={Colors.inactiveDot}
        parentWidth={width}
        autoplay
        dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 12,
            marginHorizontal: 0
          }}
          disableOnPress={true}
      />
      </View>
  );
};

export default MyCarousel;
