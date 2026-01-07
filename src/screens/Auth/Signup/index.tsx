import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({ navigation }: any) => {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(true);

  return (
    <ScreenLayout>
      <AuthHeader />
      <KeyboardAwareScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1,gap:sizeHelper.calHp(30) }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        enableOnAndroid={true}
        // extraScrollHeight={100}
      >
        <View
          style={{
            gap: sizeHelper.calHp(20),
            paddingTop: sizeHelper.calHp(20),
          }}
        >
          <CustomText
            text={'Criar uma conta'}
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

          <View style={appStyles.rowjustify}>
            <CustomInput
              width={'47%'}
              label="Primeiro nome"
              placeholder="Digite aqui"
            />
            <CustomInput
              width={'47%'}
              label="Sobrenome"
              placeholder="Digite aqui"
            />
          </View>

          <CustomInput
            label="Nova Senha"
            placeholder="Digite aqui"
            onRightSource={() => setShowPassword(!showPassword)}
            secureTextEntry={!showPassword}
            rightSource={showPassword ? icons.eye : icons.eye_off}
          />
          <CustomInput
            label="Introduza novamente a senha"
            placeholder="Digite aqui"
            onRightSource={() =>
              setIsShowConfirmPassword(!isShowConfirmPassword)
            }
            secureTextEntry={!isShowConfirmPassword}
            rightSource={isShowConfirmPassword ? icons.eye : icons.eye_off}
          />
        </View>
        <CustomButtom
        onPress={()=>navigation.navigate("LoginScreen")}
         text="Criar uma conta" />
        <TouchableOpacity style={{ alignSelf: 'center' ,paddingVertical:sizeHelper.calHp(20)}}>
          <CustomText
            text={'Voltar ao login'}
            size={25}
            color={theme.colors.primary}
            fontWeight="600"
            fontFam={fonts.Lato_SemiBold}
          />
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </ScreenLayout>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
