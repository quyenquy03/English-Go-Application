import FormGroup from "@/components/ui/FormGroup";
import InputCustom from "@/components/ui/Input";
import InputTypes from "@/constants/inputTypes";
import TEXTS from "@/constants/texts";
import globalStyle from "@/styles/globalStyle";
import { Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import registerStyles from "./Register.style";

const RegisterScreen = () => {
  const router = useRouter();
  const handleGoToLoginScreen = () => {
    // Navigate to register screen
    router.navigate("/login");
  };
  return (
    <View style={registerStyles.registerContainer}>
      <Text style={[globalStyle.headerText, registerStyles.screenTitle]}>{TEXTS.registerScreen.headerTitle}</Text>
      <Text style={registerStyles.screenDescription}>
        {TEXTS.registerScreen.welcomeMessage}
        <Text style={registerStyles.appName}>{TEXTS.app.appName}.</Text>
        {"\n"}
        {TEXTS.registerScreen.continueMessage}
      </Text>
      <View>
        <FormGroup style={registerStyles.formGroup}>
          <InputCustom style={registerStyles.inputStyle} placeholder={TEXTS.registerScreen.fullNamePlaceHolder} />
        </FormGroup>
        <FormGroup style={registerStyles.formGroup}>
          <InputCustom style={registerStyles.inputStyle} placeholder={TEXTS.registerScreen.emailPlaceHolder} />
        </FormGroup>
        <FormGroup style={registerStyles.formGroup}>
          <InputCustom
            secureTextEntry
            type={InputTypes.PASSWORD}
            style={registerStyles.inputStyle}
            placeholder={TEXTS.registerScreen.passwordPlaceHolder}
          />
        </FormGroup>
        <FormGroup style={registerStyles.formGroup}>
          <InputCustom
            secureTextEntry
            type={InputTypes.PASSWORD}
            style={registerStyles.inputStyle}
            placeholder={TEXTS.registerScreen.confirmPasswordPlaceHolder}
          />
        </FormGroup>
        <Button style={registerStyles.registerButton} onPress={() => {}}>
          <Text style={registerStyles.registerButtonText}>{TEXTS.registerScreen.registerButton}</Text>
        </Button>
      </View>
      <View style={registerStyles.donHaveAccount}>
        <Text style={registerStyles.donHaveAccountText}>{TEXTS.registerScreen.haveAccount}</Text>
        <Pressable onPress={handleGoToLoginScreen} style={registerStyles.registerNow}>
          <Text style={registerStyles.registerNowText}>{TEXTS.registerScreen.loginNow}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;
