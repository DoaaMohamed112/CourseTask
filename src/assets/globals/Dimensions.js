/*
 * platform/application wide metrics for proper styling
*/
import {Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? 54 : 66
};

export const calcWidth=(target)=>{
    return metrics.screenWidth*(target/360)
}

export const calcHeight=(target)=>{
    return metrics.screenHeight*(target/640)
}

export default metrics;
