import React, { Children, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import ScreenLayout from '../ScreenLayout';
import { images } from '../../assets/images';
import sizeHelper from '../../utils/Helpers';
import Logo from '../../assets/svg/logo.svg';

const CustomHeader = ({ navigation }: any) => {
  return (
    <>
      <View style={styles.headerStyle}>
        <Logo/>
          {/* source={images.logo}
          style={{
            width: sizeHelper.calWp(140),
            height: sizeHelper.calWp(100),
            resizeMode:"contain"
          }}
        /> */}
        <View style={{ width: '60%' }} />
        <Image
          source={images.ignore}
          style={{
            width: sizeHelper.calWp(90),
            height: sizeHelper.calWp(50),
          }}
        />
      </View>
    </>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: sizeHelper.calHp(100),
    marginTop: sizeHelper.calHp(20),
    paddingHorizontal: sizeHelper.calWp(35),

  },
});
