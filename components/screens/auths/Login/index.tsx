import FormGroup from "@/components/ui/FormGroup";
import InputCustom from "@/components/ui/Input";
import InputTypes from "@/constants/inputTypes";
import TEXTS from "@/constants/texts";
import { setAccessToken } from "@/helpers/functions/accessToken";
import authService from "@/services/authService";
import { AppDispatch, RootState } from "@/stores";
import { AppAction } from "@/stores/appStore/appReducer";
import { authAction } from "@/stores/authStore/authReducer";
import globalStyle from "@/styles/globalStyle";
import { ILoginRequestData } from "@/types/auth/LoginType";
import { Button } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import loginStyles from "./Login.style";

type FieldType = {
  username?: string;
  password?: string;
  isRememberMe?: boolean;
};

const LoginScreen = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loginData, setLoginData] = React.useState<FieldType>({
    username: "",
    password: "",
    isRememberMe: false,
  });
  const { loading } = useSelector((state: RootState) => state.appStore);
  console.log("loading", loading);
  const dispatch: AppDispatch = useDispatch();
  const handleChangeLoginData = (key: keyof FieldType, value: string | boolean) => {
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };
  const handleGoToRegisterScreen = () => {
    // Navigate to register screen
    router.navigate("/register");
  };
  const handleGoToForgetPasswordScreen = () => {
    // Navigate to forget password screen
    router.navigate("/forget-password");
  };
  const handleLogin = async () => {
    if (!loginData.username || !loginData.password) {
      Toast.show({
        type: "info",
        text1: "Lỗi đăng nhập",
        text2: "Vui lòng điền đầy đủ thông tin để đăng nhập!",
      });
      return;
    }
    setIsLoading(true);
    try {
      dispatch(AppAction.getAllGroupRoles());
    } catch (error: any) {
      console.log("error", error);
    }
    try {
      const loginRequestData: ILoginRequestData = {
        username: loginData.username,
        password: loginData.password,
        isRememberMe: loginData.isRememberMe || false,
      };
      const res = await authService.login(loginRequestData);
      console.log("res", res);
      if (res.success) {
        Toast.show({
          type: "success",
          text1: "Đăng nhập thành công",
          text2: "Chúc bạn một ngày tốt lành!",
        });
        // set token to local storage
        setAccessToken(res.data.accessToken.token);
        dispatch(authAction.getCurrentUser());
        router.navigate("/(tabs)");
      }
      setIsLoading(false);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log("error", error);
      setIsLoading(false);
      Toast.show({
        type: "error",
        text1: "Lỗi đăng nhập",
        text2: error.message,
      });
    }
  };
  return (
    <View style={loginStyles.loginContainer}>
      <Text style={[globalStyle.headerText, loginStyles.screenTitle]}>{TEXTS.loginScreen.headerTitle}</Text>
      <Text style={loginStyles.screenDescription}>
        {TEXTS.loginScreen.welcomeMessage}
        <Text style={loginStyles.appName}>{TEXTS.app.appName}.</Text>
        {"\n"}
        {TEXTS.loginScreen.continueMessage}
      </Text>
      <View>
        <FormGroup style={loginStyles.formGroup}>
          <InputCustom
            onChangeText={(value) => handleChangeLoginData("username", value)}
            style={loginStyles.inputStyle}
            placeholder={TEXTS.loginScreen.emailPlaceHolder}
          />
        </FormGroup>
        <FormGroup style={loginStyles.formGroup}>
          <InputCustom
            onChangeText={(value) => handleChangeLoginData("password", value)}
            secureTextEntry
            type={InputTypes.PASSWORD}
            style={loginStyles.inputStyle}
            placeholder={TEXTS.loginScreen.passwordPlaceHolder}
          />
        </FormGroup>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Pressable onPress={handleGoToForgetPasswordScreen} style={loginStyles.forgotPassword}>
            <Text>{TEXTS.loginScreen.forgotPassword}</Text>
          </Pressable>
        </View>
        <Button style={loginStyles.loginButton} onPress={handleLogin}>
          <Text style={loginStyles.loginButtonText}>{TEXTS.loginScreen.loginButton}</Text>
        </Button>
      </View>
      <View style={loginStyles.donHaveAccount}>
        <Text style={loginStyles.donHaveAccountText}>{TEXTS.loginScreen.dontHaveAccount}</Text>
        <Pressable onPress={handleGoToRegisterScreen} style={loginStyles.registerNow}>
          <Text style={loginStyles.registerNowText}>{TEXTS.loginScreen.registerNow}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;
