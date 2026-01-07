import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Image, Platform, StatusBar } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import { images } from '../../../assets/images';
import ScreenLayout from '../../../components/ScreenLayout';
import AppIntroSlider from 'react-native-app-intro-slider';
import CustomText from '../../../components/Text';
import CustomHeader from '../../../components/CustomHeader';
import ScreenLayoutOnboard from '../../../components/ScreenLayoutOnboard';

const Slides = [
  {
    key: 'One',
    image: images.body,
    title: 'Adote a postura correta',
    des: 'Para uma leitura mais precisa, mantenha o corpo relaxado e centrado.',
  },
  {
    key: 'Two',
    image: images.wallpaper,
    title: 'Escolha um espaço limpo e bem iluminado.',
    des: 'Um fundo limpo ajuda o sistema a detetar o seu corpo com precisão.',
  },
  {
    key: 'Three',
    image: images.connect,
    title: 'Siga os passos de digitalização',
    des: 'Iremos orientá-lo(a) numa rápida inspeção frontal e lateral.',
  },
];

const OnbordingScreen = ({ navigation }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<AppIntroSlider>(null);

  const onSlideChange = (index: any) => {
    setCurrentIndex(index);
  };

  const renderItem = ({ item }: any) => {
    return (
      <View
      style={{
            paddingHorizontal: sizeHelper.calWp(35),

      }}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center',  }}>
          <StatusBar hidden={true} />
          {item?.image}
          <Image
            source={item.image}
            style={{ width: '95%', marginTop: sizeHelper.calHp(100) }}
            resizeMode="contain"
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: sizeHelper.calHp(90),
              gap: sizeHelper.calWp(20),
            }}
          >
            <CustomText
              text={item?.title}
              size={45}
              style={{ textAlign: 'center' }}
              fontFam={fonts.Lato_Medium}
              color={theme.colors.primary}
              fontWeight={'600'}
            />
            <CustomText
              text={item?.des}
              style={{ textAlign: 'center' }}
              size={18}
              color={theme.colors.greytext}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
      <ScreenLayoutOnboard>

        <View style={{ flex: 1, marginTop: sizeHelper.calHp(-40) }}>

          <CustomHeader />
          <AppIntroSlider
            renderItem={renderItem}
            data={Slides}
            //   onDone={onDone}
            ref={flatListRef}
            onSlideChange={onSlideChange}
            showNextButton={false}
            showDoneButton={false}
            renderPagination={() => null} 
          />
          <View
          style={{
                paddingHorizontal: sizeHelper.calWp(35),

          }}
          >
            <CustomButtom
              textColor={theme.colors.white}
              text={'Confirmar'}
              width={'100%'}
              onPress={() => {
                if (currentIndex < Slides.length - 1) {
                  flatListRef.current?.goToSlide(currentIndex + 1, true);
                } else {
                  navigation.navigate('LoginScreen');
                }
              }}
            />
          </View>

          <View
            style={{
              ...styles.dotsContainer,
              marginBottom: sizeHelper.calHp(Platform.OS == 'ios' ? 30 : 100),
            }}
          >
            {Slides.map((it, ind) => {
              return (
                <View
                  key={ind.toString()}
                  // Adjust colors to your needs
                  style={{
                    width:
                      currentIndex == ind
                        ? sizeHelper.calWp(16)
                        : sizeHelper.calWp(16),
                    height:
                      currentIndex == ind
                        ? sizeHelper.calWp(16)
                        : sizeHelper.calWp(16),
                    borderRadius:
                      currentIndex == ind
                        ? sizeHelper.calWp(20)
                        : sizeHelper.calWp(16),

                    backgroundColor:
                      currentIndex == ind
                        ? theme.colors.green
                        : theme.colors.greydot,
                    borderWidth: currentIndex == ind ? 1 : 0,
                    borderColor:
                      currentIndex == ind ? theme.colors.primary : 'transperant',
                    marginTop: sizeHelper.calHp(23),
                  }}
                />
              );
            })}
          </View>
        </View>
      </ScreenLayoutOnboard>
  );
};

export default OnbordingScreen;

const styles = StyleSheet.create({
  dots: {
    width: sizeHelper.calWp(16),
    height: sizeHelper.calWp(16),
    borderRadius: sizeHelper.calWp(16),
  },
  dotsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(10),
    alignSelf: 'center',
  },
});
