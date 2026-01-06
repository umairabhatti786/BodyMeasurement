import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {fonts} from '../../utils/Themes/fonts';
import {theme} from '../../utils/Themes';
import sizeHelper from '../../utils/Helpers';
import { icons } from '../../assets/icons';

type Props = {
  placeholder?: string;
  navigation?: any;
  value?: any;
  onPressClose?: any;
  backgroundColor?: string;
  width?: any;
  onChangeText?: (text: any) => void;
  onFocus?: () => void;
  onFilter?: () => void;
  onSubmitEditing?: () => void;
  ContainerStyle?: StyleProp<ViewStyle>;
  inputRef?: any;
};

const CustomSearch = ({
  placeholder,
  onChangeText,
  value,
  backgroundColor,
  width,
  onFocus,
  onSubmitEditing,
  ContainerStyle,
  inputRef,
}: Props) => {
  return (
    <>
      <View
        style={[
          {
            ...styles.searchContainer,
            width: width || '100%',
            backgroundColor: backgroundColor || theme.colors.grey,
            height: sizeHelper.calHp(80),
            gap: sizeHelper.calWp(20),
            borderWidth:1,
            borderColor:theme.colors.greydot
          },
          ContainerStyle as StyleProp<ViewStyle>,
        ]}>
        <Image
          source={icons.search}
          resizeMode="contain"
          style={{
            width: sizeHelper.calWp(30),
            height: sizeHelper.calWp(30),
            tintColor: theme.colors.greytext,
          }}
        />
        <TextInput
          allowFontScaling={false} // Disable font scaling
          style={{...styles.inputContainer, color: theme.colors.black}}
          placeholder={placeholder|| "Search"}
          value={value}
          ref={inputRef}
          onSubmitEditing={onSubmitEditing}
          onChangeText={onChangeText}
          onFocus={onFocus}
          placeholderTextColor={"#130F2650"}
        />
      </View>
    </>
  );
};
export default CustomSearch;

const styles = StyleSheet.create({
  img: {width: 23, height: 23},

  searchContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: sizeHelper.calWp(20),
    borderRadius: sizeHelper.calWp(25),
  },
  inputContainer: {
    height: '100%',
    flex: 1,
    fontSize:sizeHelper.calHp(22),
    fontFamily: fonts.Lato_Regular,
    
    padding: 0,
    // backgroundColor: 'red',
  },
});
