import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
// import { Backgrounds } from '../../Assets'
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import * as GeneralAction from '../../store/actions/courseAction';
import MyCarousel from '../../components/Carousel';
import Header from '../../components/Header';
import ItemInfo from '../../components/ItemInfo';

const {width, height} = Dimensions.get('window');
const Home = props => {
  const dispatch = useDispatch();
  const CourseData = useSelector(state => state.Courses.CourseData);
  useEffect(() => {
    
    try {
      GetData();
      console.log(CourseData);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const GetData = async () => {
    try {
      dispatch(GeneralAction.getData());
    } catch (err) {
      console.log(err);
    }
  };
  console.log('CourseData', CourseData);
  return (
    <View style={{position: 'relative'}}>
      <Header />
      <MyCarousel images={CourseData.img} height={height * 0.4} />
      <ScrollView style={{marginBottom: height * 0.4 }}>
        <ItemInfo
          interesttitle={CourseData.interest}
          title={CourseData.title}
          date={CourseData.date}
          address={CourseData.address}
        />
        <ItemInfo
          trainerInfo={{
            trainerImg: CourseData.trainerImg,
            trainerInfo: CourseData.trainerInfo,
            trainerName: CourseData.trainerName,
          }}
        />
        <ItemInfo title="عن الدورة" details={CourseData.occasionDetail} />
        <ItemInfo title="تكلفة الدورة" List={CourseData.reservTypes} NoBorder />
      </ScrollView>
    </View>
  );
};

export default Home;
