import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/Text';
import AuthHeader from '../../../components/AuthHeader';
import CustomInput from '../../../components/Input';
import { icons } from '../../../assets/icons';
import { appStyles } from '../../../utils/GlobalStyles';
import CustomCheckbox from '../../../components/CheckBox';

const LoginScreen = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <ScreenLayout>
      <AuthHeader />

      <View
        style={{ gap: sizeHelper.calHp(20), paddingTop: sizeHelper.calHp(20) }}
      >
        <CustomText
          text={'Bem vindo de volta'}
          size={40}
          color={theme.colors.textblack}
          fontWeight="700"
          fontFam={fonts.Lato_Bold}
        />

        <CustomText
          text={
            'Introduza o seu e-mail e palavra-passe para fazer login e usufruir de todos os recursos da nossa aplicação.'
          }
          size={21}
          color={theme.colors.greytext}
        />
      </View>
      <View
        style={{
          paddingVertical: sizeHelper.calHp(20),
          gap: sizeHelper.calHp(30),
        }}
      >
        <CustomInput label="E-mail" placeholder="Digite aqui" />
        <CustomInput
          label="E-mail"
          placeholder="Digite aqui"
          onRightSource={() => setShowPassword(!showPassword)}
          secureTextEntry={!showPassword}
          rightSource={showPassword ? icons.eye : icons.eye_off}
        />
        <TouchableOpacity
          style={{ ...appStyles.row, gap: sizeHelper.calWp(10) }}
        >
          <CustomCheckbox />
          <CustomText
            text={'Lembre de mim'}
            size={23}
            color={theme.colors.greytext}
            fontWeight="600"
            fontFam={fonts.Lato_Medium}
          />
        </TouchableOpacity>
      </View>
      <CustomButtom
      onPress={()=>navigation.navigate("HomeScreen")}
       text="Conectar" />
      <TouchableOpacity style={{ alignSelf: 'center' }}>
        <CustomText
          text={'Esqueceu-se da sua senha?'}
          size={23}
          color={theme.colors.primary}
          fontWeight="600"
          fontFam={fonts.Lato_SemiBold}
        />
      </TouchableOpacity>

      <View
        style={{
          ...appStyles.row,
          gap: sizeHelper.calWp(10),
          alignSelf: 'center',
          paddingVertical: sizeHelper.calHp(20),
        }}
      >
        <CustomText
          text={'Não tem uma conta?'}
          size={23}
          color={theme.colors.greytext}
          fontWeight="600"
          fontFam={fonts.Lato_Medium}
        />

        <TouchableOpacity 
        onPress={()=>navigation.navigate("SignupScreen")}
        activeOpacity={0.5}>
          <CustomText
            text={'Crie uma conta.'}
            size={24}
            color={theme.colors.primary}
            fontWeight="700"
            fontFam={fonts.Lato_Bold}
          />
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  
});
