import React, {useState, useEffect} from 'react';
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
import ListView from './ListView';

/*
  ItemInfo Component:
  General component for each section of data displayed on screen
  props: NoBorder (bolean if no need for bottom border)
         interesttitle (text for the interest field if needed)
         title (text for title field if needed)
         subtitle (text for subtitle field if needed)
         details (text for details field if needed)
         date (date for date field if needed)
         address (text for address field if needed)
         trainerInfo (object for trainer data field if needed)
         List (array for List of data field if needed)
 */

const ItemInfo = props => {
  return (
    <View
      style={{
        ...styles.container,
        ...{borderBottomWidth: !props.NoBorder ? 1 : 0},
      }}>
      
      {/* interesttitle */}
      {props.interesttitle != undefined && (
        <Text style={styles.interesttitle}>#{props.interesttitle}</Text>
      )}

      {/* title */}
      {props.title != undefined && (
        <Text style={styles.title}>{props.title}</Text>
      )}

      {/* subtitle */}
      {props.subtitle != undefined && (
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      )}

      {/* details */}
      {props.details != undefined && (
        <Text style={styles.details}>{props.details}</Text>
      )}

      {/* date */}
      {props.date != undefined && (
        <View style={styles.contactContainer}>
          <Image source={Icons.dateIcon} style={styles.iconStyle} />
          <Text style={styles.contactDetail}>
            {moment(props.date).format('dddd, D MMMM, HH:mm A')}
          </Text>
        </View>
      )}

      {/* address */}
      {props.address != undefined && (
        <View style={styles.contactContainer}>
          <Image source={Icons.addressIcon} style={styles.iconStyle} />
          <Text style={styles.contactDetail}>{props.address}</Text>
        </View>
      )}

      {/* trainerInfo */}
      {props.trainerInfo != undefined && (
        <View>
          <View style={styles.personInfo}>
            {/* trainer image */}
           <View style={styles.avatarContainer}> 
              <Image
              source={{uri: props.trainerInfo.trainerImg.replace('https:','http:') }}
              style={styles.avatar}
            /></View>
            {/* trainer name */}
            <Text style={styles.contactDetail}>
              {props.trainerInfo.trainerName}
            </Text>
          </View>
          {/* trainer information */}
          <Text style={styles.details}>{props.trainerInfo.trainerInfo}</Text>
        </View>
      )}

      {/* List */}
      {props.List != undefined && (
       <ListView ListData={props.List} style={styles.details}></ListView>
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
  subtitle: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: 'bold'

  },
  title: {
    fontSize: 25,
    color: Colors.secondary,
    fontWeight: 'bold'
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
    fontSize: 20,
    color: Colors.lightGray,
    paddingHorizontal: 15,
    fontWeight: 'bold'
  },
  personInfo: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems:'center'
  },
  avatarContainer:{
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: Colors.lightGray,
    borderWidth:2
  },
  avatar: {
      width:'100%',
      height: '100%',
      resizeMode: 'stretch',
  },
});
export default ItemInfo;
