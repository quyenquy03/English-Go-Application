import InputCustom from "@/components/ui/Input";
import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { Button } from "@ui-kitten/components";
import React from "react";
import { Text, View } from "react-native";
import ChangePasswordStyles from "./ChangePassword.style";
import { useDispatch } from "react-redux";
import { authAction } from "@/stores/authStore/authReducer";
import { AppDispatch } from "@/stores";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type ChangePasswordDataType = {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const ChangePasswordScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [changePasswordData, setChangePasswordData] =
    React.useState<ChangePasswordDataType>({
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

  const handleChangePassword = (
    field: keyof ChangePasswordDataType,
    value: string
  ) => {
    setChangePasswordData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    const { oldPassword, newPassword, confirmPassword } = changePasswordData;

    if (!oldPassword || !newPassword || !confirmPassword) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Mật khẩu mới và xác nhận mật khẩu không khớp.");
      return;
    }
    dispatch(
      authAction.changePassword({
        oldPassword,
        newPassword,
      })
    ).then((response: any) => {
      if (!response.payload.success) {
        Toast.show({
          type: "error",
          text1: "Đổi mật khẩu thất bại",
          text2: response.payload.message || "Vui lòng thử lại sau.",
        });
        return;
      }
      Toast.show({
        type: "success",
        text1: "Đổi mật khẩu thành công",
        text2: "Bạn đã đổi mật khẩu thành công.",
      });
      setChangePasswordData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      router.back();
    });
  };

  return (
    <View style={ChangePasswordStyles.container}>
      <View style={ChangePasswordStyles.formBox}>
        <View style={ChangePasswordStyles.formItem}>
          <View style={ChangePasswordStyles.formItemLabel}>
            <Text style={ChangePasswordStyles.textLabel}>Mật khẩu cũ</Text>
          </View>
          <View style={ChangePasswordStyles.formItemInputBox}>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              secureTextEntry
              iconLeft={
                <MaterialIcons name="key" size={24} color={COLORS.secondary} />
              }
              value={changePasswordData.oldPassword}
              onChangeText={(value) =>
                handleChangePassword("oldPassword", value)
              }
              placeholder="Nhập mật khẩu cũ của bạn ..."
            />
          </View>
        </View>
        <View style={ChangePasswordStyles.formItem}>
          <View style={ChangePasswordStyles.formItemLabel}>
            <Text style={ChangePasswordStyles.textLabel}>Mật khẩu mới</Text>
          </View>
          <View>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              secureTextEntry
              iconLeft={
                <MaterialIcons name="key" size={24} color={COLORS.secondary} />
              }
              value={changePasswordData.newPassword}
              onChangeText={(value) =>
                handleChangePassword("newPassword", value)
              }
              placeholder="Hãy nhập mật khẩu mới ..."
            />
          </View>
        </View>
        <View style={ChangePasswordStyles.formItem}>
          <View style={ChangePasswordStyles.formItemLabel}>
            <Text style={ChangePasswordStyles.textLabel}>
              Xác nhận mật khẩu
            </Text>
          </View>
          <View>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              secureTextEntry
              iconLeft={
                <MaterialIcons name="key" size={24} color={COLORS.secondary} />
              }
              value={changePasswordData.confirmPassword}
              onChangeText={(value) =>
                handleChangePassword("confirmPassword", value)
              }
              placeholder="Hãy nhập lại mật khẩu mới ..."
            />
          </View>
        </View>
        <View style={ChangePasswordStyles.buttonBox}>
          <Button
            onPress={() => router.back()}
            style={{ marginTop: 20 }}
            status="danger"
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.MERIENDA_BOLD,
                  fontSize: 16,
                  color: COLORS.textWhite,
                }}
              >
                Huỷ bỏ
              </Text>
            </View>
          </Button>
          <Button
            onPress={handleSubmit}
            style={{ marginTop: 20, flex: 1 }}
            status="primary"
          >
            <View>
              <Text
                style={{
                  fontFamily: FONTS.MERIENDA_BOLD,
                  fontSize: 16,
                  color: COLORS.textWhite,
                }}
              >
                Lưu thay đổi
              </Text>
            </View>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
