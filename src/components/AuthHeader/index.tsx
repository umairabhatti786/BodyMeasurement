import React, {useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { images } from '../../assets/images';
import sizeHelper from '../../utils/Helpers';
import { appStyles } from '../../utils/GlobalStyles';
import { theme } from '../../utils/Themes';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../assets/icons';

const AuthHeader = ({  }: any) => {
    const navigation:any=useNavigation()
  return (
    <>
      <View style={appStyles.rowjustify}>
        <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=>navigation.goBack()}
        style={styles.back_container}
        >
             <Image
          source={icons.back_arrow}
          style={{
            width: sizeHelper.calWp(40),
            height: sizeHelper.calWp(40),
            resizeMode:"contain"
          }}
        />

        </TouchableOpacity>
        <Image
          source={images.logo}
          style={{
            width: sizeHelper.calWp(180),
            height: sizeHelper.calWp(100),
            resizeMode:"contain"
          }}
        />
        <View style={{ width:40 }} />
       
      </View>
    </>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  back_container: {
            width: sizeHelper.calWp(80),
            height: sizeHelper.calWp(80),
            alignItems:"center",
            justifyContent:"center",
            borderRadius:sizeHelper.calWp(80),
            backgroundColor:theme.colors.primary
        }
});
