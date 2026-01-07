import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import { images } from '../../assets/images';
import { icons } from '../../assets/icons';
import sizeHelper from '../../utils/Helpers';
import { theme } from '../../utils/Themes';

const CheckMeasurement = () => {

  return (
    <TouchableOpacity style={styles.main}>
      <View
        style={{
          width: sizeHelper.calWp(100),
          height: sizeHelper.calWp(100),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.green,
              borderRadius: 999,

        }}
      >
       
        <View style={{ ...styles.main, backgroundColor: 'transparent',padding:sizeHelper.calWp(3) }}>

              <Image
          source={icons.check}
          style={{
            width: sizeHelper.calWp(35),
            height: sizeHelper.calWp(35),
          }}
        />

        </View>
      
      </View>
    </TouchableOpacity>
  );
};

export default CheckMeasurement;
const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    backgroundColor: theme.colors.primary,
    borderColor:theme.colors.white,
    borderRadius: 999,
    padding: sizeHelper.calWp(6),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:"center"
  },
  box: {
    width: sizeHelper.calWp(36),
    height: sizeHelper.calWp(36),
    borderRadius: sizeHelper.calWp(8),
    alignItems: 'center',
    justifyContent: 'center',
  },

  unchecked: {
    borderWidth: sizeHelper.calWp(2),
    borderColor: theme.colors.greyborder,
  },

  checked: {
    backgroundColor: theme.colors.primary,
  },
});
