import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  SafeAreaView
} from 'react-native';
import Colors from '../assets/globals/Colors';
import {Icons} from '../assets/icons';
import moment from 'moment';

const {width, height} = Dimensions.get('window');

const ItemInfo = props => {
  return (
    <View
      style={{
        ...styles.container,
        ...{borderBottomWidth: !props.NoBorder ? 1 : 0},
      }}>
      {props.interesttitle != undefined && (
        <Text style={styles.interesttitle}>#{props.interesttitle}</Text>
      )}
      {props.title != undefined && (
        <Text style={styles.title}>{props.title}</Text>
      )}
      {props.details != undefined && (
        <Text style={styles.details}>{props.details}</Text>
      )}
      {props.date != undefined && (
        <View style={styles.contactContainer}>
          <Image source={Icons.dateIcon} style={styles.iconStyle} />
          <Text style={styles.contactDetail}>
            {moment(props.date).format('dddd, D MMMM, HH:mm A')}
          </Text>
        </View>
      )}
      {props.address != undefined && (
        <View style={styles.contactContainer}>
          <Image source={Icons.addressIcon} style={styles.iconStyle} />
          <Text style={styles.contactDetail}>{props.address}</Text>
        </View>
      )}
      {props.trainerInfo != undefined && (
        <View>
          <View style={styles.personInfo}>
            <Image
              source={{uri: props.trainerInfo.trainerImg}}
              style={styles.avatar}
            />
            <Text style={styles.contactDetail}>
              {props.trainerInfo.trainerName}
            </Text>
          </View>
          <Text style={styles.details}>{props.trainerInfo.trainerInfo}</Text>
        </View>
      )}
      {props.List != undefined && (
        <SafeAreaView>
          <FlatList
            data={props.List}
            renderItem={({item}) =>  
            <View style={styles.listContainer}>
            <Text style={{...styles.details,...styles.itemleft}}>{item.price}</Text>
            <Text style={[styles.details,styles.itemright]}>{item.name}</Text>
          </View>
          }
            keyExtractor={item => item.id+""}
          />
        </SafeAreaView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    borderBottomColor: Colors.lightGray,
  },
  title: {
    fontSize: 20,
    color: Colors.secondary,
  },
  interesttitle: {
    fontSize: 20,
    color: Colors.lightGray,
  },
  details: {
    fontSize: 20,
    color: Colors.lightGray,
  },
  iconStyle: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  contactContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contactDetail: {
    fontSize: 15,
    color: Colors.lightGray,
    paddingHorizontal: 15,
  },
  personInfo: {
    flexDirection: 'row',
    marginTop: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    resizeMode: 'stretch',
    borderRadius: 15,
  },
  listContainer: {
    flexDirection: 'row',
    width:'100%',
  },
  itemright:{
    textAlign: 'right',
    width:'50%'
},
  itemleft:{
    textAlign: 'left',
    width: '50%'
  }
});
export default ItemInfo;
