import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as GeneralAction from '../../store/actions/courseAction';
import MyCarousel from '../../components/Carousel';
import Header from '../../components/Header';
import ItemInfo from '../../components/ItemInfo';
import Colors from '../../assets/globals/Colors';
import LinearGradient from 'react-native-linear-gradient';

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
    <ScrollView style={{position: 'relative'}}>
      <MyCarousel images={CourseData.img} height={height * 0.4} />
      <Header />
      <View>
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
        <ItemInfo subtitle="عن الدورة" details={CourseData.occasionDetail} />
        <ItemInfo subtitle="تكلفة الدورة" List={CourseData.reservTypes} NoBorder />

        <TouchableOpacity activeOpacity={0.7}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}}
            end={{x: 1.0, y: 1.0}}
            colors={[Colors.primary, Colors.lightPrimary]}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>قم بالحجز الان</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.light,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default Home;
