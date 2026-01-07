import React, { Children, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { images } from '../../../assets/images';
import { CommonActions } from '@react-navigation/native';
import CustomText from '../../../components/Text';
import ScreenLayout from '../../../components/ScreenLayout';
import { theme } from '../../../utils/Themes';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButton from '../../../components/Button';
import CustomCheckbox from '../../../components/CheckBox';

const GDPR = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={images.logo}
            style={{
              width: sizeHelper.calWp(220),
              height: sizeHelper.calWp(150),
              resizeMode: 'contain',
            }}
          />
        </View>
        <ScrollView
          overScrollMode="always"
          style={styles.centeredView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: sizeHelper.calHp(200) }}
        >
          <View>
            <CustomText
              text={'Introdução'}
              size={28}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />
            <Text style={styles.text}>
              Bem-vindo(a) à aplicação
              <CustomText
                text={' Body Measurement Mobile. '}
                fontWeight="700"
                fontFam={fonts.Lato_Bold}
                color={theme.colors.textblack}
              />
              Para lhe fornecer medições corporais precisas e informações
              personalizadas, necessitamos da sua autorização para recolher e
              tratar determinados dados pessoais. A sua privacidade é
              extremamente importante para nós. Esta página explica que dados
              recolhemos, porque os recolhemos, como os utilizamos e os seus
              direitos de acordo com o Regulamento Geral sobre a Proteção de
              Dados (RGPD).
            </Text>
            <CustomText
              text={
                'Ao fornecer o seu consentimento abaixo, concorda que podemos tratar os seus dados conforme descrito.'
              }
              size={22}
              color={theme.colors.greytext}
              lineHeight={sizeHelper.calWp(34)}
            />
            <CustomText
              text={'Que dados recolhemos'}
              size={28}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
              style={{
                marginTop: sizeHelper.calWp(50),
              }}
            />
            <CustomText
              text={'A. Informações pessoais'}
              size={22}
              color={theme.colors.primary}
              style={{
                marginTop: sizeHelper.calHp(20),
              }}
            />
            <CustomText
              text={'Nome'}
              color={theme.colors.greytext}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
            />
            <CustomText
              text={'Endereço de e-mail'}
              color={theme.colors.greytext}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
            />
            <CustomText
              text={'Idade'}
              color={theme.colors.greytext}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
            />
            <CustomText
              text={'Sexo (opcional)'}
              color={theme.colors.greytext}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
            />
            <CustomText
              text={'B. Dados de medição corporal'}
              size={22}
              color={theme.colors.primary}
              style={{
                marginTop: sizeHelper.calHp(30),
              }}
            />
            <CustomText
              text={'Altura'}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={'Peso'}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={
                'Circunferência da cintura, do peito e da anca Medidas corporais completas captadas manualmente ou através de fotos (se utilizar o recurso de digitalização). Estimativas de composição corporal, se aplicável.'
              }
              size={22}
              lineHeight={sizeHelper.calHp(30)}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={'C. Device & Usage Data'}
              size={22}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={
                'Tipo de dispositivo, sistema operacionalInterações de utilização de aplicações Cookies and tracking preferences (apenas site)'
              }
              lineHeight={sizeHelper.calHp(30)}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={'3. Why We Collect Your Data'}
              size={22}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
            <CustomText
              text={
                'Processamos os seus dados pessoais e relacionados com o corpo para as seguintes razões: To calculate and display accurate body measurements To track size muda ao longo do tempo Para fornecer recomendações e insights personalizados To improve app performance and user experience To ensure account security and user authentication To comply with legal requirements Nunca vendemos os seus dados'
              }
              lineHeight={sizeHelper.calHp(30)}
              style={{
                marginTop: sizeHelper.calHp(5),
              }}
              color={theme.colors.greytext}
            />
          </View>
        </ScrollView>
      </ScreenLayout>
      <View style={styles.bottomView}>
        <View style={styles.row}>
          <CustomCheckbox />
          <CustomText
            text={'Concordo com o termo de consentimento do utilizador.'}
            size={21}
            fontWeight="600"
            fontFam={fonts.Lato_Medium}
            color={theme.colors.greytext}
          />
        </View>
        <CustomButton
          text="Confirmar"
          onPress={() => navigation.navigate('OnbordingScreen')}
        />
      </View>
    </>
  );
};

export default GDPR;

const styles = StyleSheet.create({
  text: {
    color: theme.colors.greytext,
    fontSize: sizeHelper.calHp(20),
    fontWeight: '600',
    fontFamily: fonts.Lato_Medium,
    marginTop: sizeHelper.calHp(18),
    lineHeight: sizeHelper.calWp(34),
  },
  centeredView: {
    marginTop: sizeHelper.calHp(10),
  },
  bottomView: {
    backgroundColor: theme.colors.white,
    padding: sizeHelper.calWp(30),
    gap: sizeHelper.calWp(30),
    shadowColor:
      Platform.OS == 'ios' ? theme.colors.black + '40' : theme.colors.black,
    elevation: 10,
    shadowRadius: 1,
    shadowOpacity: 3,
    borderRadius: sizeHelper.calWp(32),
    paddingBottom: sizeHelper.calHp(70),
    position: 'absolute',
    bottom: 0,

    // height:sizeHelper.calHp(220),
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
  },
});
