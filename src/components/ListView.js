import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/*
  ListView Component for displaying list of data,
  props needed: ListData, style (of text) 
*/

const ListView = props => {
  return (
    <View>
      {props.ListData.map((item, index) => {
         return(  <View style={styles.listContainer} key={index}>
            <Text style={[props.style, styles.itemleft]}>
              {item.price}
            </Text>
            <Text style={[props.style, styles.itemright]}>
              {item.name}
            </Text>
          </View>); 
        })
      }
    </View>
  );
};
const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  itemright: {
    textAlign: 'right',
    width: '50%',
  },
  itemleft: {
    textAlign: 'left',
    width: '50%',
  },
});

export default ListView;
