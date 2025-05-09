import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import formGroupStyles from "./FormGroup.style";

interface FormGroupProps {
  children: React.ReactNode;
  label?: React.ReactNode;
  labelStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const FormGroup = ({ children, label, labelStyle, inputStyle, style }: FormGroupProps) => {
  return (
    <View style={[formGroupStyles.formGroupBox, style]}>
      {label && <View style={[formGroupStyles.formGroupLabel, labelStyle]}>{label}</View>}
      <View style={[formGroupStyles.formGroupInput, inputStyle]}>{children}</View>
    </View>
  );
};

export default FormGroup;
