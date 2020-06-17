import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../../assets/globals/Colors';

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

export default styles;