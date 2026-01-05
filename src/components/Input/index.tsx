import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Image,
} from "react-native";
import CustomText from "../Text";
import { InputProps } from "../../utils/Types";
import { fonts } from "../../utils/Themes/fonts";
import sizeHelper from "../../utils/Helpers";
import { useTheme } from "@react-navigation/native";
import { theme } from "../../utils/Themes";

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  fontWeight,
  multiline,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  editable,
  color,
  maxLength,
  placeholderTextColor,
  borderRadius,
  backgroundColor,
  textAlign,
  textAlignVertical,
  paddingTop,
  onSubmitEditing,
  label,
  borderColor,
  fontFamily,
  width,
  rightSource,
  height,
  onRightSource,
  leftSource,
  rightSourceSize,
}: InputProps) => {
  return (
    <View
      style={{
        width: width || "100%",
      }}
    >
      {label && (
        <View
          style={{
            marginBottom: sizeHelper.calHp(15),
          }}
        >
          <CustomText
            text={label}
            fontWeight="600"
            size={22}
            color={theme.colors.textblack}
            fontFam={fonts.Lato_Bold}
          />
        </View>
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: sizeHelper.calWp(30),
          height: sizeHelper.calHp(height || 80),
          alignItems: "center",
          borderRadius: borderRadius || sizeHelper.calWp(25),
          backgroundColor: backgroundColor || theme.colors.grey,
        
          borderWidth:1,
          borderColor:theme.colors.greydot
        }}
      >
        

        <TextInput
          value={value}
          editable={editable}
          onSubmitEditing={onSubmitEditing}
          allowFontScaling={false} // Disable font scaling
          style={{
            fontSize: sizeHelper.calHp(fontSize || 22),
            width: rightSource ? "89%" : "98%",
            alignItems: "center",
            height: "100%",
            justifyContent: "center",
            textAlign: textAlign,
            textAlignVertical: textAlignVertical,
            paddingTop: paddingTop || 0,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: fontFamily || fonts.Lato_Regular,
            fontWeight: fontWeight || "500",
            color: color || theme.colors.black,
            fontStyle:"italic",
            // paddingRight: sizeHelper.calWp(rightSource ? 10 : 0),
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || theme.colors.greytext}
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
        {rightSource && (
          <TouchableOpacity
            onPress={onRightSource}
            disabled={!onRightSource}
            activeOpacity={0.3}
            style={{
              justifyContent: "center",
              alignItems:"flex-end",
              height: "100%",
              paddingRight:sizeHelper.calWp(30)
            }}
          >
            <Image
              source={rightSource}
              style={{
                width: sizeHelper.calWp(rightSourceSize || 35),
                height: sizeHelper.calWp(rightSourceSize || 35),
                tintColor: theme.colors.greytext,
              }}
              resizeMode={"contain"}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* {error && (
        <View
          style={{
            marginTop: sizeHelper.calHp(10),
            alignItems:"flex-end"
          }}>
          <CustomText size={20} text={error} color={theme.colors.red} />
        </View>
      )} */}
    </View>
  );
};
export default CustomInput;
