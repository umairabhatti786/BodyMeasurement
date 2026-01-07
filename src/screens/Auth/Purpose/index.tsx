import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, StatusBar, Platform } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import { CommonActions } from '@react-navigation/native';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';

const Purpose = ({ navigation }: any) => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.black}
        barStyle={'light-content'}
      />
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Image source={images.body_scan} />
        </View>
        <View style={styles.cardcontainer}>
          <CustomText
            text={
              'A sua viagem de medição corporal começa aqui — simples, inteligente e precisa. A sua viagem de medição corporal começa aqui — simples, inteligente e precisa.'
            }
            size={28}
            color={theme.colors.white}
            fontWeight="600"
            fontFam={fonts.Lato_SemiBold}
            style={styles.text}
            lineHeight={sizeHelper.calHp(40)}
          />
          <CustomButton
            text="Próxima"
            onPress={() => navigation.navigate('Permissions')}
          />
        </View>
      </View>
    </>
  );
};

export default Purpose;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:sizeHelper.calHp(150)
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: sizeHelper.calWp(50),
  },
  cardcontainer: {
    borderRadius: sizeHelper.calWp(32),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    shadowColor: theme.colors.white,
    shadowOpacity: 0.4,
    shadowRadius: sizeHelper.calWp(10),
    elevation: sizeHelper.calWp(10),
    backgroundColor: theme.colors.black,
    padding: sizeHelper.calWp(36),
    // height: sizeHelper.calHp(420),
       marginBottom: sizeHelper.calHp(70),

    alignContent: 'center',
    gap: sizeHelper.calWp(50),
  },
  text: {
    textAlign: 'center',
  },
});
