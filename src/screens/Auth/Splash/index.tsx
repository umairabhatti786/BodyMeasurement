import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import sizeHelper from "../../../utils/Helpers";
import { images } from "../../../assets/images";
import { CommonActions } from "@react-navigation/native";
import CustomText from "../../../components/Text";
import ScreenLayout from "../../../components/ScreenLayout";
import { theme } from "../../../utils/Themes";
import { fonts } from "../../../utils/Themes/fonts";
import CustomButton from "../../../components/Button";

const SplashScreen = ({ navigation }: any) => {

  return (
    <>
      <ScreenLayout>
        <View
        style={styles.centerView}
        >
        <Image 
        source={images.logo}
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
          text="Começar"
          onPress={() => navigation.navigate("Purpose")}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  centerView:{
    flex:1,
    alignItems:'center',
    marginTop:sizeHelper.calHp(225),
  },
  centertext:{
    flex:1,
    alignItems:'center',
    marginTop:sizeHelper.calHp(350),
    gap:sizeHelper.calWp(46)
  },
  text:{
    textAlign:'center'
  }
});
