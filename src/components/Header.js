import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Colors from '../assets/globals/Colors';
import {Icons} from '../assets/icons';


const Header = props => {
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
    <View style={[styles.container,{height: height*0.1,marginTop: 10}]}>
      {/* star icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={Icons.saveIcon} style={styles.iconStyle} />
      </TouchableOpacity>

      {/* share icon */}
      <TouchableOpacity style={styles.iconContainer}>
        <Image source={Icons.shareIcon} style={styles.iconStyle} />
      </TouchableOpacity>

      {/* back Icon */}
      <TouchableOpacity style={styles.iconRightContainer}>
        <Image source={Icons.leftArrowIcon} style={styles.iconRightStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.transparent,
    elevation: 1000,
    zIndex: 1000,
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  iconStyle: {
    width: 25,
    height: 25 ,
    resizeMode: 'contain'
  },
  iconContainer: {
    marginHorizontal: 10,
  },
  iconRightContainer:{
    marginHorizontal: 10,
    padding:5,
    marginLeft: 'auto'
  },
  iconRightStyle: {
    width: 25,
    height: 25 ,
    resizeMode: 'contain'

  },
});

export default Header;
