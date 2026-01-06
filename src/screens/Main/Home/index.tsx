import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/Text';
import { icons } from '../../../assets/icons';
import { appStyles } from '../../../utils/GlobalStyles';
import { images } from '../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import CustomSearch from '../../../components/Search';

const HomeScreen = ({ navigation }: any) => {
  const Header = () => {
    return (
      <View style={appStyles.rowjustify}>
        <Image
          source={images.logo}
          style={{
            width: sizeHelper.calWp(180),
            height: sizeHelper.calWp(100),
          }}
        />
        <View style={{ ...appStyles.row, gap: sizeHelper.calWp(20) }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.setting_container}
          >
            <Image
              source={icons.setting}
              style={{
                width: sizeHelper.calWp(30),
                height: sizeHelper.calWp(30),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <Image
            source={images.user_placeholder}
            style={{
              width: sizeHelper.calWp(80),
              height: sizeHelper.calWp(80),
              resizeMode: 'contain',
              borderRadius: sizeHelper.calWp(80),
            }}
          />
        </View>
      </View>
    );
  };

  const ProfileCard = () => {
    return (
      <>
        <View
          style={{
            width: '100%',
            borderRadius: sizeHelper.calWp(25),
            borderWidth: 1,
            borderColor: theme.colors.greydot,
            padding: sizeHelper.calWp(30),
          }}
        >
          <View style={appStyles.rowjustify}>
            <CustomText
              text={'Cameron Williamson'}
              size={25}
              color={theme.colors.textblack}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />

            <CustomButtom
              text="Sem medições"
              paddingHorizontal={30}
              borderRadius={14}
              size={21}
              height={52}
              textColor={theme.colors.primary}
              bgColor={theme.colors.grey}
            />
          </View>
          <View style={{ ...appStyles.row, gap: sizeHelper.calWp(15) }}>
            <CustomText
              text={'178 cm'}
              color={theme.colors.greytext}
            />
            <View
              style={{
                width: sizeHelper.calWp(8),
                height: sizeHelper.calWp(8),
                borderRadius: sizeHelper.calWp(10),
                backgroundColor: theme.colors.primary,
              }}
            />
            <CustomText
              text={'Masculino'}
              color={theme.colors.greytext}
            />
          </View>

          <View
            style={{ ...appStyles.rowjustify, marginTop: sizeHelper.calHp(20) }}
          >
            <CustomButtom
              height={72}
              paddingHorizontal={30}
              borderRadius={15}
              bgColor={theme.colors.grey}
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

            <CustomButtom
              text="Iniciar nova medição"
              width={'80%'}
              borderWidth={1}
              borderRadius={14}
              size={21}
              height={72}
              textColor={theme.colors.primary}
              borderColor={theme.colors.greydot}
              bgColor={theme.colors.white}
            >
              <Image
                source={icons.scan}
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                  resizeMode: 'contain',
                  marginRight: sizeHelper.calWp(10),
                }}
              />
            </CustomButtom>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <ScreenLayout>
        <Header />

        <LinearGradient
          colors={['#2F68CE30', '#92D40030']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ borderRadius: sizeHelper.calWp(30) }}
        >
          <View
            style={{
              gap: sizeHelper.calHp(30),
              padding: sizeHelper.calWp(40),
              // paddingVertical: sizeHelper.calHp(50),
            }}
          >
            <CustomText
              text={'Bem-vindo à aplicação de medição corporal.'}
              size={40}
              lineHeight={sizeHelper.calHp(50)}
              style={{ textAlign: 'center' }}
              color={theme.colors.textblack}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />

            <CustomText
              text={
                'Fotografe as suas medidas corporais em isolamento, utilizando a câmara do seu smartphone.'
              }
              size={21}
              style={{ textAlign: 'center' }}
              color={theme.colors.greytext}
            />
            <CustomButtom
              style={{ marginTop: sizeHelper.calHp(20) }}
              text="Nova Medição"
            >
              <Image
                source={icons.camera}
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                  resizeMode: 'contain',
                }}
              />
            </CustomButtom>
          </View>
        </LinearGradient>

        <View style={appStyles.rowjustify}>
          <View>
            <CustomText
              text={'Lista de perfis'}
              size={30}
              color={theme.colors.textblack}
              fontWeight="700"
              fontFam={fonts.Lato_Bold}
            />

            <CustomText
              text={'Pode guardar até 30 perfis.'}
              size={22}
              color={theme.colors.greytext}
            />
          </View>
          <CustomButtom
            text="Novo perfil"
            paddingHorizontal={40}
            borderWidth={1}
            borderRadius={14}
            size={21}
            height={72}
            textColor={theme.colors.primary}
            borderColor={theme.colors.greydot}
            bgColor={theme.colors.white}
          >
            <Image
              source={icons.plus}
              style={{
                width: sizeHelper.calWp(20),
                height: sizeHelper.calWp(20),
                resizeMode: 'contain',
              }}
            />
          </CustomButtom>
        </View>
        <CustomSearch />

        <FlatList
          data={[1, 2, 3, 4, 5]}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: any, index: any) => index.toString()}
          renderItem={({ item, index }) => {
            return <ProfileCard />;
          }}
          contentContainerStyle={{
            gap: sizeHelper.calWp(20),
            paddingBottom: sizeHelper.calHp(30),
          }}
        />
      </ScreenLayout>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  setting_container: {
    width: sizeHelper.calWp(75),
    height: sizeHelper.calWp(75),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizeHelper.calWp(75),
    backgroundColor: theme.colors.grey,
  },
});
