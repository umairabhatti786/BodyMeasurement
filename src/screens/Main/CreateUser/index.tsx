import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Pressable, Keyboard, Platform } from 'react-native';
import sizeHelper from '../../../utils/Helpers';
import { fonts } from '../../../utils/Themes/fonts';
import CustomButtom from '../../../components/Button';
import { theme } from '../../../utils/Themes';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/Text';
import { appStyles } from '../../../utils/GlobalStyles';
import MainHeader from '../../../components/MainHeader';
import CustomInput from '../../../components/Input';

const CreateUserScreen = ({ navigation }: any) => {
  const [selectedGender, setSelectedGender] = useState('Masculino');
  const [selectedOutfit, setSelectedOutfit] = useState('Masculino');

  return (
    <>
      <ScreenLayout>
        <MainHeader text={'Criar novo utilizador'} />
        <Pressable
          onPress={() => Keyboard.dismiss()}
          style={{ flex: 1, gap: sizeHelper.calHp(30) }}
        >
          <View style={{ ...appStyles.rowjustify, width: '100%' }}>
            <CustomInput
              width={'48%'}
              label="Primeiro nome"
              placeholder="Type Here"
            />
            <CustomInput
              width={'48%'}
              label="Sobrenome"
              placeholder="Type Here"
            />
          </View>
          <CustomInput label="Altura (cm)" placeholder="Type Here" />
          <View style={{ width: '100%' }}>
            <CustomText
              text={'Gênero'}
              fontWeight="600"
              style={{
                marginBottom: sizeHelper.calHp(15),
              }}
              size={22}
              color={theme.colors.textblack}
              fontFam={fonts.Lato_Bold}
            />
            <View style={{ ...appStyles.rowjustify, width: '100%' }}>
              <CustomButtom
                width={'48%'}
                onPress={() => setSelectedGender('Masculino')}
                bgColor={
                  selectedGender == 'Masculino'
                    ? theme.colors.primary + '15'
                    : theme.colors.grey
                }
                borderWidth={1}
                text="Masculino"
                size={21}
                textColor={theme.colors.greytext}
                borderColor={
                  selectedGender == 'Masculino'
                    ? theme.colors.primary
                    : theme.colors.greydot
                }
              />

              <CustomButtom
                width={'48%'}
                onPress={() => setSelectedGender('feminino')}
                bgColor={
                  selectedGender == 'feminino'
                    ? theme.colors.primary + '15'
                    : theme.colors.grey
                }
                borderWidth={1}
                text="feminino"
                size={21}
                textColor={theme.colors.greytext}
                borderColor={
                  selectedGender == 'feminino'
                    ? theme.colors.primary
                    : theme.colors.greydot
                }
              />
            </View>
          </View>

          <View style={{ width: '100%' }}>
            <CustomText
              text={'Traje'}
              fontWeight="600"
              style={{
                marginBottom: sizeHelper.calHp(15),
              }}
              size={22}
              color={theme.colors.textblack}
              fontFam={fonts.Lato_Bold}
            />
            <View style={{ ...appStyles.rowjustify, width: '100%' }}>
              <CustomButtom
                width={'48%'}
                onPress={() => setSelectedOutfit('Masculino')}
                bgColor={
                  selectedOutfit == 'Masculino'
                    ? theme.colors.primary + '15'
                    : theme.colors.grey
                }
                borderWidth={1}
                text="Masculino"
                size={21}
                textColor={theme.colors.greytext}
                borderColor={
                  selectedOutfit == 'Masculino'
                    ? theme.colors.primary
                    : theme.colors.greydot
                }
              />

              <CustomButtom
                width={'48%'}
                onPress={() => setSelectedOutfit('feminino')}
                bgColor={
                  selectedOutfit == 'feminino'
                    ? theme.colors.primary + '15'
                    : theme.colors.grey
                }
                borderWidth={1}
                text="feminino"
                size={21}
                textColor={theme.colors.greytext}
                borderColor={
                  selectedOutfit == 'feminino'
                    ? theme.colors.primary
                    : theme.colors.greydot
                }
              />
            </View>
          </View>
        </Pressable>

        <View
          style={{
    marginBottom: sizeHelper.calHp(Platform.OS=="ios"?20: 70),
            gap: sizeHelper.calHp(20),
          }}
        >
          <CustomButtom
            text="Guardar perfil e iniciar medição"
            onPress={()=>navigation.navigate("ViewMeasurementScreen")}
            width={'100%'}
          />

          <CustomButtom
            text="Guardar perfil"
            width={'100%'}
            borderWidth={1}
            textColor={theme.colors.primary}
            borderColor={theme.colors.primary}
            bgColor={theme.colors.white}
          />
        </View>
      </ScreenLayout>
    </>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({});
