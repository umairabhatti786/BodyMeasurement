import React, { Children, useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Text,
  FlatList,
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
import PermissionCard from '../../../components/PermissionCard';
import { icons } from '../../../assets/icons';

const Permissions = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout>
        <View
          style={{
            flex: 1,
            paddingHorizontal: sizeHelper.calWp(10),
          }}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.shieldContainer}>
              <Image
                source={images.shield}
                style={{
                  width: sizeHelper.calWp(55),
                  height: sizeHelper.calWp(55),
                }}
              />
            </View>
            <CustomText
              text={'Permissões Necessárias'}
              size={45}
              fontWeight="700"
              fontFam={fonts.PlayfairDisplay_Bold}
              style={{
                marginTop: sizeHelper.calHp(30),
              }}
            />
            <CustomText
              text={
                'Para captar as suas medidas, precisamos de acesso à câmara e aos sensores de movimento do seu dispositivo.'
              }
              size={20}
              fontWeight="600"
              color={theme.colors.greytext}
              fontFam={fonts.Lato_Medium}
              style={{
                marginTop: sizeHelper.calHp(30),
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <PermissionCard
              image={images.camera}
              title={'Câmera'}
              sentence={'Para captar fotos do seu corpo'}
            />
            <PermissionCard
              image={images.motion_sensor}
              title={'Motion Sensor'}
              sentence={'Para detetar o ângulo da câmara'}
            />
          </View>
          <View style={styles.buttonView}>
            <CustomButton
              text="Permitir o acesso"
              onPress={() => navigation.navigate('GDPR')}
            />

              <View
           
          >
            <Text style={styles.text}>
              Ao continuar, você concorda com nossos
              <CustomText
                size={18}
                text={' Termos de Serviço '}
                color={theme.colors.primary}
                textDecorationLine="underline"
                fontFam={fonts.Lato_Medium}
                fontWeight="600"
              />
              e
              <CustomText
                size={18}
                text={'  Política de Privacidade. '}
                color={theme.colors.primary}
                fontWeight="600"
                textDecorationLine="underline"
                fontFam={fonts.Lato_Medium}
              />
            </Text>
          </View>
          </View>
        
        </View>
      </ScreenLayout>
    </>
  );
};

export default Permissions;

const styles = StyleSheet.create({
  text: {
    color: theme.colors.greytext,
    fontSize: sizeHelper.calHp(18),
    fontWeight: '600',
    fontFamily: fonts.Lato_Medium,
    textAlign: 'center',
    marginTop: sizeHelper.calHp(24),
    lineHeight:sizeHelper.calHp(30)
  },
  shieldContainer: {
    backgroundColor: theme.colors.primary,
    width: sizeHelper.calWp(130),
    height: sizeHelper.calWp(130),
    borderRadius: sizeHelper.calWp(999),
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.primary,
    elevation: 20,
    shadowRadius:5,
    shadowOpacity: 1,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: sizeHelper.calHp(20),
  },
  buttonView: {
    marginBottom: sizeHelper.calHp(Platform.OS=="ios"?20: 70),
  },
});
