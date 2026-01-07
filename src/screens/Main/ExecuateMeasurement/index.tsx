import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import { CommonActions } from '@react-navigation/native';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import { appStyles } from '../../../utils/GlobalStyles';
import { icons } from '../../../assets/icons';

const ExecuateMeasurementScreen = ({ navigation }: any) => {

      useEffect(() => {
        setTimeout(() => {
          navigation.navigate('MeasurementResultScreen');
        }, 2000);
      }, []);
    
  return (
    <>
  <StatusBar 
          backgroundColor="transparent"

  translucent barStyle="light-content" />

    <ImageBackground
  source={images.mearurement_background}
  style={StyleSheet.absoluteFill}
  resizeMode="cover"
>

   <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          gap: sizeHelper.calHp(30),
        }}
      >
       

        <ActivityIndicator size={'large'} color={theme.colors.white} />
        <View
          style={{
            gap: sizeHelper.calHp(15),
            paddingHorizontal: sizeHelper.calWp(100),
            alignItems: 'center',
          }}
        >
          <CustomText
            text={'Processando Medições'}
            size={45}
            fontWeight="600"
            color={theme.colors.white}
            fontFam={fonts.Lato_SemiBold}
          />

          <CustomText
            style={{ textAlign: 'center' }}
            text={
              'A nossa IA está a analisar as suas fotos para calcular medidas corporais precisas...'
            }
            size={22}
            color={theme.colors.white + '90'}
          />
        </View>

        <View
          style={{
            gap: sizeHelper.calHp(35),
            paddingTop: sizeHelper.calHp(20),
            // paddingHorizontal: sizeHelper.calWp(100),
            alignItems: 'center',
          }}
        >
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                tintColor: theme.colors.green,
              }}
              source={icons.tick}
            />

            <CustomText
              style={{ textAlign: 'center' }}
              text={'Detecção do contorno corporal'}
              size={22}
              color={theme.colors.white}
            />
          </View>

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <ActivityIndicator size={'small'} color={theme.colors.white} />

            <CustomText
              style={{ textAlign: 'center' }}
              text={'Cálculo de proporções'}
              size={22}
              color={theme.colors.white}
            />
          </View>

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <Image
              style={{
                width: sizeHelper.calWp(35),
                height: sizeHelper.calWp(35),
              }}
              source={icons.generation}
            />

            <CustomText
              style={{ textAlign: 'center' }}
              text={'Geração de medidas'}
              size={22}
              color={theme.colors.white}
            />
          </View>

          {/* <CustomText
          text={"Processando Medições"}
          size={45}
          fontWeight="600"
          color={theme.colors.white}
          fontFam={fonts.Lato_SemiBold}
          /> */}
        </View>
        {/* <View
        style={styles.centerView}
        >
        <Image 
        source={images.logo}
        style={{width:"66%",height:sizeHelper.calWp(600),resizeMode:"contain"}}
        />
        </View>
        <View 
        style={styles.centertext}
        >
          <CustomText
          text={"Bem-vindo(a)!"}
          size={60}
          fontWeight="700"
          fontFam={fonts.PlayfairDisplay_Bold}
          />
          <CustomText
          text={"A sua jornada de medição corporal começa aqui — simples, inteligente e precisa."}
          size={20}
          color={theme.colors.greytext}
          style={styles.text}
          fontFam={fonts.Lato_Medium}
          />
          <CustomButton
          width={"100%"}
          text="Começar"
          onPress={() => navigation.navigate("Purpose")}
          />
        </View> */}
      </View>
  {/* Your content */}
</ImageBackground>
     
    </>
  );
};

export default ExecuateMeasurementScreen;

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: '30%',
  },
  centertext: {
    alignItems: 'center',
    marginBottom: sizeHelper.calHp(70),
    gap: sizeHelper.calWp(46),
  },
  text: {
    textAlign: 'center',
  },
});
