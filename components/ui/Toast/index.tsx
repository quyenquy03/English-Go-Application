import COLORS from "@/constants/color";
import React from "react";
// App.jsx
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View } from "react-native";
import Toast, { BaseToast, BaseToastProps, ErrorToast, InfoToast } from "react-native-toast-message";
import ToastStyles from "./Toast.style";
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={[ToastStyles.container, ToastStyles.toastSuccessContainer]}
      contentContainerStyle={ToastStyles.contentContainer}
      text1Style={ToastStyles.text1}
      text2Style={ToastStyles.text2}
      renderLeadingIcon={() => (
        <View style={ToastStyles.iconBox}>
          <FontAwesome5 name='check-circle' size={24} color={COLORS.success} />
        </View>
      )}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={[ToastStyles.container, ToastStyles.toastErrorContainer]}
      contentContainerStyle={ToastStyles.contentContainer}
      text1Style={ToastStyles.text1}
      text2Style={ToastStyles.text2}
      renderLeadingIcon={() => (
        <View style={ToastStyles.iconBox}>
          <FontAwesome5 name='exclamation' size={24} color={COLORS.danger} />
        </View>
      )}
    />
  ),
  info: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      style={[ToastStyles.container, ToastStyles.toastInfoContainer]}
      contentContainerStyle={ToastStyles.contentContainer}
      text1Style={ToastStyles.text1}
      text2Style={ToastStyles.text2}
      renderLeadingIcon={() => (
        <View style={ToastStyles.iconBox}>
          <FontAwesome5 name='info-circle' size={24} color={COLORS.secondary} />
        </View>
      )}
    />
  ),
  /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
  // tomatoToast: ({ text1, props }: { text1: string; props: any }) => (
  //   <View style={{ height: 60, width: "100%", backgroundColor: "tomato" }}>
  //     <Text>{text1}</Text>
  //     <Text>{props.uuid}</Text>
  //   </View>
  // ),
};
const ToastCustom = () => {
  return <Toast config={toastConfig} />;
};

export default ToastCustom;
