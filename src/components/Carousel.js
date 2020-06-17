import React, {useState, useEffect} from 'react';
import {View, ImageBackground, Text, ScrollView, Image,  Dimensions,} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Colors from '../assets/globals/Colors';



const MyCarousel = props => {
  const [width, setWidth] =  useState(Dimensions.get('window').width);
  const [height, setHeight] =  useState(Dimensions.get('window').height);

  useEffect(() => {
    const updatLayout = () => {
      const { width, height } = Dimensions.get('window');
      setWidth(width < height ? width : height);
      setHeight(width < height ? height : width);
    };

    Dimensions.addEventListener('change', updatLayout);
    return () => {
      Dimensions.removeEventListener('change', updatLayout);
    };
  })

  return (
    <View style={{width: width, minHeight: height*0.4}}>
      <SliderBox
        images={props.images}
        sliderBoxHeight={props.height}
        paginationBoxStyle={{alignSelf:'flex-start'}}
        ImageComponentStyle={{borderRadius: 0, width: '100%',resizeMode: 'stretch'}}
        dotColor={Colors.activeDot}
        inactiveDotColor={Colors.inactiveDot}
        dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 12
          }}
          disableOnPress={true}
      />
      </View>
  );
};

export default MyCarousel;
