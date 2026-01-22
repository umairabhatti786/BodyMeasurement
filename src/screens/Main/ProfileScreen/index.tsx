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
  TouchableOpacity,
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
import MainHeader from '../../../components/MainHeader';
import { icons } from '../../../assets/icons';
import CustomModal from '../../../components/CustomModal';

const ProfileDetails = ({ text, image, text2, margin }: any) => {
  return (
    <>
      <View style={styles.justify}>
        <CustomText
          text={text}
          size={24}
          fontWeight="600"
          fontFam={fonts.Lato_SemiBold}
        />
        <View style={styles.view} />
        <View style={styles.alignedContent}>
          <Image
            source={image}
            style={{
              width: sizeHelper.calWp(32),
              height: sizeHelper.calWp(32),
            }}
          />
          <CustomText
            text={text2}
            size={24}
            fontWeight="600"
            fontFam={fonts.Lato_SemiBold}
          />
        </View>
      </View>
    </>
  );
};

const ProfileScreen = ({ navigation }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <ScreenLayout>
        <View>
          <MainHeader text={'Perfil'} />
          <View>
            <Image
              source={images.user_placeholder}
              style={{
                width: sizeHelper.calWp(150),
                height: sizeHelper.calWp(150),
                borderRadius: 999,
                alignSelf: 'center',
                marginTop: sizeHelper.calHp(30),
              }}
            />
            <View style={styles.editView}>
              <Image
                source={icons.white_edit}
                style={{
                  width: sizeHelper.calWp(30),
                  height: sizeHelper.calWp(30),
                }}
              />
            </View>
          </View>

          <View style={styles.textView}>
            <CustomText
              size={28}
              text={'Cameron Williamson'}
              fontFam={fonts.Lato_Bold}
              fontWeight="700"
            />
            <CustomText
              text={'cameronwilliamson@gmail.com'}
              size={21}
              color={theme.colors.greytext}
            />
          </View>
          <View style={styles.profileDetailsStyle}>
            <View style={styles.justify}>
              <CustomText
                text={'Idioma'}
                size={24}
                fontWeight="600"
                fontFam={fonts.Lato_SemiBold}
              />
              <View style={{ width: '50%' }} />
              <View style={styles.alignedContent}>
                <Image
                  source={images.flag}
                  style={{
                    width: sizeHelper.calWp(32),
                    height: sizeHelper.calWp(32),
                  }}
                />
                <CustomText
                  text={'Portuguese'}
                  size={24}
                  fontWeight="600"
                  fontFam={fonts.Lato_SemiBold}
                />
              </View>
            </View>
            <View style={styles.customLine} />
            <ProfileDetails
              text={'Política de Privacidade'}
              image={icons.next_arrow}
            />
            <View style={styles.customLine} />
            <ProfileDetails text={'Consentimento'} image={icons.next_arrow} />
            <View style={styles.customLine} />
            <ProfileDetails
              text={'Sobre o Aplicativo'}
              image={icons.next_arrow}
            />
          </View>
          <View style={styles.zonestyle}>
            <CustomText
              text={'Zona de Perigo'}
              size={24}
              fontFam={fonts.Lato_Bold}
              fontWeight="700"
            />
            <View style={styles.align}>
              <TouchableOpacity
                onPress={() => setIsModalVisible(true)}
                style={styles.selectionZonestyle}
              >
                <CustomText
                  text={'Limpar dados da aplicação'}
                  size={26}
                  fontFam={fonts.Lato_SemiBold}
                  fontWeight="600"
                  color={theme.colors.red}
                  style={{
                    textAlign: 'center',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.selectionZonestyle}>
                <CustomText
                  text={'Apagar conta'}
                  size={26}
                  fontFam={fonts.Lato_SemiBold}
                  fontWeight="600"
                  color={theme.colors.red}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <CustomModal
          onPress={() => setIsModalVisible(false)}
          isVisible={isModalVisible}
          setIsVisible={setIsModalVisible}
        />
      </ScreenLayout>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  editView: {
    backgroundColor: theme.colors.primary,
    width: sizeHelper.calWp(60),
    height: sizeHelper.calWp(60),
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: sizeHelper.calHp(-25),
    borderWidth: 1.5,
    borderColor: theme.colors.white,
  },
  textView: {
    alignItems: 'center',
    marginTop: sizeHelper.calHp(30),
    gap: sizeHelper.calWp(10),
  },
  view: {
    width: '40%',
  },
  customLine: {
    width: '100%',
    backgroundColor: theme.colors.greydot,
    height: 1,
  },
  profileDetailsStyle: {
    width: '100%',
    borderWidth: 1,
    borderColor: theme.colors.greydot,
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: theme.colors.white,
    alignSelf: 'center',
    marginTop: sizeHelper.calHp(50),
  },
  justify: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHelper.calWp(8),
    marginBottom: sizeHelper.calWp(8),
    marginLeft: sizeHelper.calWp(20),
    padding: sizeHelper.calWp(20),
    justifyContent: 'space-between',
  },
  alignedContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
  },
  zonestyle: {
    // width: '90%',
    borderWidth: 1,
    borderColor: theme.colors.greydot,
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: theme.colors.red + '15',
    alignSelf: 'center',
    marginTop: sizeHelper.calHp(40),
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizeHelper.calWp(30),
  },
  selectionZonestyle: {
    width: '50%',
    borderWidth: 1,
    borderColor: theme.colors.greydot,
    borderRadius: sizeHelper.calWp(20),
    backgroundColor: theme.colors.white,
    alignSelf: 'flex-start',
    marginTop: sizeHelper.calHp(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizeHelper.calWp(20),
  },
  align: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
  },
});
