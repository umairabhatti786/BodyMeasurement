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

const ViewMeasurementScreen = ({ navigation }: any) => {
  const UserCard = () => {
    return (
      <>
        <View style={styles.card}>
          <View style={appStyles.rowjustify}>
            <View style={{ gap: sizeHelper.calHp(4) }}>
              <CustomText
                text={'Cameron Williamson'}
                size={25}
                color={theme.colors.textblack}
                fontWeight="700"
                fontFam={fonts.Lato_Bold}
              />

              <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
                <CustomText text={'178 cm'} color={theme.colors.greytext} />
                <View
                  style={{
                    width: sizeHelper.calWp(8),
                    height: sizeHelper.calWp(8),
                    borderRadius: sizeHelper.calWp(10),
                    backgroundColor: theme.colors.primary,
                  }}
                />
                <CustomText text={'Masculino'} color={theme.colors.greytext} />
              </View>
            </View>

            <CustomButtom
              height={72}
              paddingHorizontal={30}
              borderRadius={15}
              bgColor={theme.colors.white}
            >
              <Image
                source={icons.edit}
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                  resizeMode: 'contain',
                }}
              />
            </CustomButtom>
          </View>

          <View
            style={{
              ...appStyles.row,
              gap: sizeHelper.calWp(15),
              paddingTop: sizeHelper.calHp(50),
            }}
          >
            <CustomText
              text={'Created:'}
              size={22}
              color={theme.colors.greytext}
            />

            <CustomText
              text={'09/12/2025 at 11:30 am'}
              fontFam={fonts.Lato_SemiBold}
              size={22}
              fontWeight="600"
              color={theme.colors.textblack}
            />
          </View>
        </View>
      </>
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
        <MainHeader text={'Ver medições'} />
        <View style={{ flex: 1, gap: sizeHelper.calHp(30) }}>
          <UserCard />
          <View
            style={{
              ...styles.card,
              backgroundColor: theme.colors.white,
              borderWidth: 1,
              borderColor: theme.colors.greydot,
              gap: sizeHelper.calHp(20),
            }}
          >
            <CustomText
              text={'Medidas'}
              size={25}
              style={{ marginBottom: sizeHelper.calHp(10) }}
              color={theme.colors.textblack}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />
            <View style={{ gap: sizeHelper.calHp(20) }}>
              <View style={appStyles.rowjustify}>
                <MeasurementsCard title="45" label="Pescoço (cm)" />
                <MeasurementsCard title="110" label="Peito (cm)" />
              </View>
              <View style={styles.line} />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <View style={appStyles.rowjustify}>
                <MeasurementsCard title="90" label="Cintura (cm)" />
                <MeasurementsCard title="95" label="Quadril (cm)" />
              </View>
              <View style={styles.line} />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <View style={appStyles.rowjustify}>
                <MeasurementsCard title="90" label="Manga (cm))" />
                <MeasurementsCard title="95" label="Interior da perna (cm)" />
              </View>
              <View style={styles.line} />
            </View>

            <View style={{ gap: sizeHelper.calHp(20) }}>
              <View style={appStyles.rowjustify}>
                <MeasurementsCard title="60" label="Cabeça (cm)" />
                <MeasurementsCard title="180" label="Altura (cm))" />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
    marginBottom: sizeHelper.calHp(Platform.OS=="ios"?20: 70),
            gap: sizeHelper.calHp(20),
          }}
        >
          <CustomButtom 
          onPress={()=>navigation.navigate("StartNewMeasurementScreen")}
          text="Perfil de nova medição" width={'100%'}>
            <Image
              source={icons.scan}
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                resizeMode: 'contain',
                tintColor: theme.colors.white,
              }}
            />
          </CustomButtom>
        </View>
      </ScreenLayout>
    </>
  );
};

export default ViewMeasurementScreen;

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
