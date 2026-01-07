import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, Image, Platform } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/Text';
import { appStyles } from '../../../utils/GlobalStyles';
import MainHeader from '../../../components/MainHeader';
import { icons } from '../../../assets/icons';
import CustomCheckbox from '../../../components/CheckBox';

const SubmitMeasurementsScreen = ({ navigation }: any) => {


  return (
    <>
      <ScreenLayout>
        <MainHeader text={'Etapa final – Enviar medidas'} />
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <CustomText
            text={'Opção de envio de e-mail'}
            size={25}
            color={theme.colors.textblack}
            fontWeight="700"
            fontFam={fonts.Lato_Bold}
          />

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <CustomCheckbox />
            <CustomText
              text={'Sim, enviar automaticamente'}
              size={22}
              fontWeight="600"
              fontFam={fonts.Lato_Medium}
              color={theme.colors.greytext}
            />
          </View>

          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
            <CustomCheckbox />
            <CustomText
              text={'Não, enviarei manualmente.'}
              size={22}
              fontWeight="600"
              fontFam={fonts.Lato_Medium}
              color={theme.colors.greytext}
            />
          </View>
        </View>

        <View
          style={{
    marginBottom: sizeHelper.calHp(Platform.OS=="ios"?20: 70),
          }}
        >
          <CustomButtom
            onPress={() => navigation.navigate('ExecuateMeasurementScreen')}
            text="Enviar e próximo"
            width={'100%'}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default SubmitMeasurementsScreen;

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: sizeHelper.calWp(24),
    backgroundColor: theme.colors.grey,
    padding: sizeHelper.calWp(30),
  },
  line: {
    width: '100%',
    height: 1.2,
    backgroundColor: theme.colors.greydot,
  },
});
