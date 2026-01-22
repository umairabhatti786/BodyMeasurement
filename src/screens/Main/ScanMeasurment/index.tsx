import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import { icons } from '../../../assets/icons';
import sizeHelper from '../../../utils/Helpers';
import { theme } from '../../../utils/Themes';
import CustomText from '../../../components/Text';
import { fonts } from '../../../utils/Themes/fonts';
import { images } from '../../../assets/images';

type RootStackParamList = {
  SubmitMeasurementsScreen: undefined;
  // Add other routes here
};





const ScanMeasurmentScreen: React.FC = ({navigation}:any) => {
  const device = useCameraDevice('back'); // back camera
  const { hasPermission, requestPermission } = useCameraPermission();
  const [currentStep, setCurrentStep] = useState(1);

  const [steps, setSteps] = useState([
    { id: 1, icCompleted: true },
    { id: 1, icCompleted: false },
    { id: 1, icCompleted: false },
    { id: 1, icCompleted: false },
    { id: 1, icCompleted: false },
    { id: 1, icCompleted: false },
  ]);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission(); // ask permission
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    return <Text style={styles.text}>Camera permission not granted</Text>;
  }

  if (device == null) {
    return <Text style={styles.text}>Loading camera...</Text>;
  }
  const [step, setStep] = useState(0);
  const data = [
    {
      text: 'Fique em pé',
      bg: theme.colors.orange,
      warnImage: icons.warn,
      showExtra: false,
      containerbg: theme.colors.white,
      ImageChange: images.camera,
    },
    {
      text: 'A posição é perfeita',
      bg: theme.colors.green,
      warnImage: icons.circle_tick,
      showExtra: false,
      containerbg: theme.colors.white,
      ImageChange: images.camera,
    },
    {
      text: 'Foto capturada',
      bg: theme.colors.green,
      warnImage: icons.circle_tick,
      showExtra: true,
      containerbg: theme.colors.green,
      ImageChange: icons.circle_tick,
    },
  ];
  const handlePress = () => {
    if (step < data.length - 1) {
      setStep(step + 1);
    } else {
      navigation.navigate('SubmitMeasurementsScreen');
    }
  };
  return (
    <View style={styles.container}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <View style={styles.mainContainer}>
        <View style={styles.CustomHeader}>
          <TouchableOpacity
            style={styles.miniContanier}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={icons.white_cross}
              style={{
                width: sizeHelper.calWp(33),
                height: sizeHelper.calWp(33),
              }}
            />
          </TouchableOpacity>
          <View style={styles.viewsAlign}>
            {steps.map((item, index) => {
              return (
                <View
                  style={[
                    styles.miniViews,
                    {
                      backgroundColor: item?.icCompleted
                        ? theme.colors.green
                        : currentStep == index
                        ? theme.colors.white
                        : theme.colors.white + '20',
                    },
                  ]}
                />
              );
            })}
          </View>

          <View style={styles.miniContanier}>
            <Text style={styles.CustomText}>
              2
              <CustomText
                text={'/6'}
                size={23}
                fontWeight="700"
                fontFam={fonts.Lato_Bold}
                color={theme.colors.greytext}
              />
            </Text>
          </View>
        </View>
        <View style={styles.bluredView}>
          <View style={styles.aligndotView}>
            <View
              style={[styles.Dot, { backgroundColor: theme.colors.green }]}
            />
            <CustomText
              size={24}
              fontWeight="600"
              text={'Distância'}
              color={theme.colors.green}
              fontFam={fonts.Lato_SemiBold}
            />
          </View>
          <View style={styles.aligndotView}>
            <View
              style={[styles.Dot, { backgroundColor: theme.colors.white }]}
            />
            <CustomText
              size={24}
              fontWeight="600"
              text={'Ângulo'}
              color={theme.colors.white}
              fontFam={fonts.Lato_SemiBold}
            />
          </View>
          <View style={styles.aligndotView}>
            <View
              style={[styles.Dot, { backgroundColor: theme.colors.green }]}
            />
            <CustomText
              size={24}
              fontWeight="600"
              text={'Iluminação'}
              color={theme.colors.green}
              fontFam={fonts.Lato_SemiBold}
            />
          </View>
          <View style={styles.aligndotView}>
            <View
              style={[styles.Dot, { backgroundColor: theme.colors.white }]}
            />
            <CustomText
              size={24}
              fontWeight="600"
              text={'Pose'}
              color={theme.colors.white}
              fontFam={fonts.Lato_SemiBold}
            />
          </View>
        </View>
      </View>
      <View style={styles.buttomView}>
        <View style={[styles.alertView, { backgroundColor: data[step].bg }]}>
          <Image
            source={data[step].warnImage}
            style={{
              width: sizeHelper.calWp(30),
              height: sizeHelper.calWp(30),
            }}
          />
          <CustomText
            text={data[step].text}
            fontWeight="600"
            color={theme.colors.white}
            fontFam={fonts.Lato_SemiBold}
          />
        </View>
        <View style={styles.textsView}>
          <CustomText
            text={'Frente'}
            size={24}
            fontWeight="700"
            fontFam={fonts.Lato_Bold}
            color={theme.colors.white}
          />
          <CustomText
            fontWeight="500"
            fontFam={fonts.Lato_Medium}
            color={theme.colors.white}
            text={'Coloque-se de frente para a câmara diretamente'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: sizeHelper.calWp(30),
          }}
        >
          {data[step].showExtra && (
            <View
              style={[
                styles.highlightcameraButton,
                {
                  // width:sizeHelper.calWp(80),
                  // height:sizeHelper.calWp(80),
                  padding: sizeHelper.calWp(40),
                },
              ]}
            >
              <Image
                source={icons.reload}
                style={{
                  width: sizeHelper.calWp(40),
                  height: sizeHelper.calWp(40),
                }}
              />
            </View>
          )}
          <TouchableOpacity
            onPress={handlePress}
            style={styles.highlightcameraButton}
          >
            <View
              style={[
                styles.cameraButton,
                { backgroundColor: data[step].containerbg },
              ]}
            >
              <Image
                source={data[step].ImageChange}
                style={{
                  width: sizeHelper.calWp(50),
                  height: sizeHelper.calWp(50),
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  text: { color: 'white', alignSelf: 'center', marginTop: 50 },
  mainContainer: {
    position: 'absolute',
    paddingHorizontal: sizeHelper.calWp(30),
    gap: sizeHelper.calWp(30),
    marginTop: sizeHelper.calHp(30),
  },
  miniContanier: {
    backgroundColor: theme.colors.white,
    width: sizeHelper.calWp(80),
    height: sizeHelper.calWp(80),
    // padding: sizeHelper.calWp(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
  },
  miniViews: {
    width: sizeHelper.calWp(55),
    height: sizeHelper.calHp(8),
    backgroundColor: theme.colors.white + '20',
    borderRadius: sizeHelper.calWp(10),
  },
  viewsAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
    // marginLeft: sizeHelper.calWp(70),
  },
  CustomText: {
    color: theme.colors.textblack,
    fontSize: sizeHelper.calHp(24),
    fontWeight: '700',
    fontFamily: fonts.Lato_Bold,
    position: 'absolute',
  },
  CustomHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizeHelper.calHp(50),
    // backgroundColor:"red",
    width: '100%',
    justifyContent: 'space-between',
  },
  Dot: {
    width: sizeHelper.calWp(15),
    height: sizeHelper.calWp(15),
    borderRadius: 999,
  },
  aligndotView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
  },
  bluredView: {
    // width: '30%',
    borderWidth: 1,
    borderColor: theme.colors.white,
    backgroundColor: theme.colors.blured,
    borderRadius: sizeHelper.calWp(24),
    padding: sizeHelper.calWp(20),
    gap: sizeHelper.calWp(30),
    marginTop: sizeHelper.calHp(20),
    alignSelf:"flex-start"
  },
  buttomView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: sizeHelper.calHp(60),
  },
  highlightcameraButton: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calWp(90),
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.white,
    padding: sizeHelper.calWp(55),
  },
  cameraButton: {
    width: sizeHelper.calWp(90),
    height: sizeHelper.calWp(90),
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  textsView: {
    alignItems: 'center',
    gap: sizeHelper.calWp(20),
    marginBottom: sizeHelper.calHp(20),
  },
  alertView: {
    borderRadius: sizeHelper.calWp(25),
    backgroundColor: theme.colors.orange,
    flexDirection: 'row',
    alignItems: 'center',
    gap: sizeHelper.calWp(10),
    padding: sizeHelper.calWp(20),
    paddingHorizontal:sizeHelper.calWp(30),
    
    marginBottom: sizeHelper.calHp(30),
  },
});

export default ScanMeasurmentScreen;
