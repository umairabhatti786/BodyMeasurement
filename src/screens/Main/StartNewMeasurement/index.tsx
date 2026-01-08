
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Keyboard,
  Image,
  ScrollView,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/Text';
import { appStyles } from '../../../utils/GlobalStyles';
import MainHeader from '../../../components/MainHeader';
import { icons } from '../../../assets/icons';
import { images } from '../../../assets/images';
import { BlurView } from '@react-native-community/blur';

const StartNewMeasurementScreen = ({ navigation }: any) => {
  const PreparationSteps = [
    { title: 'Fundo', label: 'Stand in front of a plain, single-color wall' },
    {
      title: 'Posição da câmera',
      label:
        'Coloque o telemóvel à altura da cintura, a 2-3 metros de distância.',
    },
    {
      title: 'Iluminação',
      label: 'Garanta uma boa e uniforme iluminação, sem sombras.',
    },
    {
      title: 'Postura',
      label:
        'Coloque-se de pé, com a coluna direita e os braços ligeiramente afastados do corpo.',
    },
    {
      title: 'Pés visíveis',
      label:
        'Certifique-se de que os seus pés estão totalmente visíveis no enquadramento.',
    },
    {
      title: 'Roupas',
      label: 'Use roupas justas para obter resultados precisos.',
    },
  ];

  const CorrectData = [
    { title: 'Fundo simples' },
    { title: 'Boa iluminação' },
    { title: 'Fique em pé' },
    { title: 'Fique quieto' },
  ];



  const InCorrectData = [
    { title: 'Fundo obstruído' },
    { title: 'Sombras' },
    { title: 'Em movimento durante a captação' },
    { title: 'Movendo-se' },
  ];
  const UserCard = () => {
    return (
      <>
        <View
          style={{
            ...styles.card,
            backgroundColor: theme.colors.black,
            height: sizeHelper.calHp(350),
            overflow: 'hidden',
          }}
        >
          <Image
            source={images.body_scan}
            style={{
              width: '100%',
              height: sizeHelper.calWp(700),
              resizeMode: 'contain',
              marginTop: sizeHelper.calHp(-20),
              //   flex:1,
            }}
          />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)', // ✅ Android substitute
              flex: 1,
              position: 'absolute',
              bottom: 0,
              right: 0,
              left: 0,
              padding: sizeHelper.calWp(30),
              alignItems: 'center',
              borderTopLeftRadius: sizeHelper.calWp(40),
              borderTopRightRadius: sizeHelper.calWp(40),
              borderColor: theme.colors.primary,
              borderWidth: 1,
            }}
          >
            <CustomText
              text={
                'Será orientado a tirar 5 a 6 fotografias de ângulos diferentes. Siga as instruções no ecrã para cada foto.'
              }
              size={22}
              color={theme.colors.white}
              style={{ textAlign: 'center' }}
              fontFam={fonts.Lato_SemiBold}
            />
          </View>
         
        </View>
      </>
    );
  };

  const PreparationStepsCard = ({ title, label, step }: any) => {
    return (
      <View style={{ ...styles.card, gap: sizeHelper.calHp(15) }}>
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
          <View style={styles.circle}>
            <CustomText
              text={step}
              //   size={27}
              color={theme.colors.white}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />
          </View>
          <CustomText
            text={title}
            size={27}
            color={theme.colors.textblack}
            fontWeight="600"
            fontFam={fonts.Lato_SemiBold}
          />
        </View>

        <CustomText text={label} color={theme.colors.greytext} />
      </View>
    );
  };

  const MeasurementsCard = ({ title, label }: any) => {
    return (
      <View style={{ gap: sizeHelper.calHp(5), width: '48%' }}>
        <CustomText
          text={title}
          size={27}
          color={theme.colors.textblack}
          fontWeight="700"
          fontFam={fonts.Lato_Bold}
        />

        <CustomText text={label} size={23} color={theme.colors.primary} />
      </View>
    );
  };

  return (
    <>
      <ScreenLayout>
        <MainHeader text={'Iniciar nova medição'} />
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            gap: sizeHelper.calHp(30),
            paddingBottom: sizeHelper.calHp(80),
          }}
          showsVerticalScrollIndicator={false}
        >
          <UserCard />

          <CustomText
            text={'Etapas de preparação'}
            color={theme.colors.textblack}
            size={30}
            fontWeight={'700'}
            fontFam={fonts.Lato_Bold}
          />
          <View style={{ gap: sizeHelper.calHp(20) }}>
            {PreparationSteps.map((item, index) => {
              return (
                <PreparationStepsCard
                  key={index.toString()}
                  title={item?.title}
                  step={index + 1}
                  label={item?.label}
                />
              );
            })}
          </View>

          <CustomText
            text={'Correto'}
            color={theme.colors.textblack}
            size={30}
            fontWeight={'700'}
            fontFam={fonts.Lato_Bold}
          />

          <View
            style={{
              ...styles.card,
              backgroundColor: theme.colors.green + '10',
              borderWidth: 1,
              borderColor: theme.colors.green,
              gap: sizeHelper.calHp(20),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(20) }}>
              {CorrectData.map((item, index) => {
                return (
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <View
                      style={{
                        ...styles.circle,
                        backgroundColor: theme.colors.green,
                      }}
                    >
                      <Image
                source={icons.tick}
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                  resizeMode: 'contain',
                }}
              />
                    </View>
                    <CustomText
                      text={item.title}
                      size={27}
                      color={theme.colors.textblack}
                      fontWeight="600"
                      fontFam={fonts.Lato_SemiBold}
                    />
                  </View>
                );
              })}
            </View>
          </View>


            <CustomText
            text={'Incorreto'}
            color={theme.colors.textblack}
            size={30}
            fontWeight={'700'}
            fontFam={fonts.Lato_Bold}
          />

          <View
            style={{
              ...styles.card,
              backgroundColor: theme.colors.red + '10',
              borderWidth: 1,
              borderColor: theme.colors.red,
              gap: sizeHelper.calHp(20),
            }}
          >
            <View style={{ gap: sizeHelper.calHp(20) }}>
              {InCorrectData.map((item, index) => {
                return (
                  <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
                    <View
                      style={{
                        ...styles.circle,
                        backgroundColor: theme.colors.red,
                      }}
                    >
                      <Image
                source={icons.light_cross}
                style={{
                  width: sizeHelper.calWp(25),
                  height: sizeHelper.calWp(25),
                  resizeMode: 'contain',
                }}
              />
                    </View>
                    <CustomText
                      text={item.title}
                      size={27}
                      color={theme.colors.textblack}
                      fontWeight="600"
                      fontFam={fonts.Lato_SemiBold}
                    />
                  </View>
                );
              })}
            </View>
          </View>

           <CustomButtom 
           onPress={()=>navigation.navigate("ScanMeasurmentScreen")}
           text="Confirmar e próximo" width={'100%'}/>
           
    
        </ScrollView>

       
      </ScreenLayout>
    </>
  );
};

export default StartNewMeasurementScreen;

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
  circle: {
    width: sizeHelper.calWp(50),
    height: sizeHelper.calWp(50),
    borderRadius: sizeHelper.calWp(50),
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
