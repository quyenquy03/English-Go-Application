import COLORS from "@/constants/color";
import InputTypes from "@/constants/inputTypes";
import React from "react";
import { StyleProp, TextInput, TextStyle, View } from "react-native";
import inputCustomStyles from "./InputCustom.style";
interface InputCustomProps extends React.ComponentProps<typeof TextInput> {
  value?: string;
  onChangeText?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: StyleProp<TextStyle>;
  type?: InputTypes;
  secureTextEntry?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconRightPress?: () => void;
  placeholderTextColor?: string;
}
const InputCustom = ({
  value,
  onChangeText,
  placeholder,
  disabled = false,
  style,
  iconLeft,
  iconRight,
  iconRightPress,
  secureTextEntry,
  placeholderTextColor = COLORS.textGray,
  ...props
}: InputCustomProps) => {
  const [focus, setFocus] = React.useState(false);
  return (
    <View style={inputCustomStyles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        editable={!disabled}
        style={[
          inputCustomStyles.defaultInput,
          focus && inputCustomStyles.focusInput,
          style,
          { paddingLeft: iconLeft ? 60 : 10 },
        ]}
        placeholderTextColor={placeholderTextColor}
        onChangeText={(nextValue) => onChangeText && onChangeText(nextValue)}
        keyboardType='default'
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {iconLeft && <View style={inputCustomStyles.iconLeftBox}>{iconLeft}</View>}
      {iconRight && <View style={inputCustomStyles.iconRightBox}>{iconRight}</View>}
    </View>
  );
};

export default InputCustom;
