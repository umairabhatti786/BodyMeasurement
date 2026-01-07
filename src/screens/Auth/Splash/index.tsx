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

const SplashScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View style={styles.centerView}>
          <Image
            source={images.logo}
            style={{
              width: '66%',
              height: sizeHelper.calWp(600),
              resizeMode: 'contain',
            }}
          />
        </View>
        <View style={styles.centertext}>
          <CustomText
            text={'Bem-vindo(a)!'}
            size={60}
            fontWeight="700"
            fontFam={fonts.PlayfairDisplay_Bold}
          />
          <CustomText
            text={
              'A sua jornada de medição corporal começa aqui — simples, inteligente e precisa.'
            }
            size={20}
            color={theme.colors.greytext}
            style={styles.text}
            fontFam={fonts.Lato_Medium}
          />
          <CustomButton
            width={'100%'}
            text="Começar"
            onPress={() => navigation.navigate('Purpose')}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },
  centertext: {
    alignItems: 'center',
    marginBottom: sizeHelper.calHp(Platform.OS=="ios"?20: 70),
    gap: sizeHelper.calWp(46),
  },
  text: {
    textAlign: 'center',
  },
});
