import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import sizeHelper from '../../utils/Helpers';
import { appStyles } from '../../utils/GlobalStyles';
import { theme } from '../../utils/Themes';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../assets/icons';
import CustomText from '../Text';
import { fonts } from '../../utils/Themes/fonts';

const MainHeader = ({ text }: any) => {
  const navigation: any = useNavigation();
  return (
    <>
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
          style={styles.back_container}
        >
          <Image
            source={icons.back_arrow}
            style={{
              width: sizeHelper.calWp(40),
              height: sizeHelper.calWp(40),
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
        <CustomText
          text={text}
          color={theme.colors.textblack}
          size={30}
          fontWeight={'700'}
          fontFam={fonts.Lato_Bold}
        />
        <View style={{ width: 40 }} />
      </View>
    </>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  back_container: {
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizeHelper.calWp(80),
    backgroundColor: theme.colors.primary,
  },
});
