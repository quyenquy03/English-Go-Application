import ChangeAvatar from "@/components/ui/ChangeAvatar";
import DatePickerCustom from "@/components/ui/DatePicker";
import DropdownCustom from "@/components/ui/DropdownCustom";
import InputCustom from "@/components/ui/Input";
import StackHeader from "@/components/ui/StackHeader";
import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import Genders from "@/constants/genders";
import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Button, Icon, IconElement } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import UpdateProfileStyles from "./UpdateProfile.style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/stores";
import GenderStatus from "@/constants/GenderStatus";
import { authAction } from "@/stores/authStore/authReducer";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

type UpdateProfileDataType = {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: GenderStatus;
  birthday?: string;
  banner?: string;
  username?: string;
  avatar?: string;
};

const UpdateProfileScreen = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const [date, setDate] = React.useState(new Date());
  const [selectedGender, setSelectedGender] = React.useState<string>(
    Genders[0].value
  );
  const { currentUser } = useSelector((state: RootState) => state.authStore);
  const [updateProfileData, setUpdateProfileData] =
    React.useState<UpdateProfileDataType | null>(null);

  const handleChangeValue = (
    field: keyof UpdateProfileDataType,
    value: string
  ) => {
    if (updateProfileData) {
      setUpdateProfileData((prevData) => {
        if (!prevData) return null;
        return {
          ...prevData,
          [field]: value,
        };
      });
    }
  };

  const handleSubmit = () => {
    if (!updateProfileData) return;
    const { fullName, email, phoneNumber } = updateProfileData;
    if (!fullName || !email || !phoneNumber) {
      alert("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    if (updateProfileData.birthday) {
      updateProfileData.birthday = date.toISOString();
    }
    updateProfileData.gender = selectedGender as GenderStatus;
    // Dispatch action to update profile
    dispatch(authAction.firstUpdateProfile(updateProfileData))
      .then((response: any) => {
        if (!response.payload.success) {
          alert(
            response.payload.message || "Đã xảy ra lỗi khi cập nhật thông tin."
          );
          return;
        }
        Toast.show({
          type: "success",
          text1: "Cập nhật thông tin thành công",
          text2: "Thông tin cá nhân của bạn đã được cập nhật.",
        });
        router.push("/profile");
      })
      .catch((error: any) => {
        alert(error?.message || "Đã xảy ra lỗi khi cập nhật thông tin.");
      });
  };

  useEffect(() => {
    if (currentUser) {
      setUpdateProfileData({
        fullName: currentUser.fullName || "",
        email: currentUser.email || "",
        phoneNumber: currentUser.phoneNumber || "",
        gender: currentUser.gender as GenderStatus,
        birthday: currentUser.birthday || "",
        banner: currentUser.banner || "",
        username: currentUser.username || "",
      });
      setSelectedGender(
        (currentUser?.gender as GenderStatus) ?? GenderStatus.MALE
      );
      const birthday = currentUser?.birthday
        ? new Date(currentUser.birthday)
        : new Date();
      setDate(
        birthday instanceof Date && !isNaN(birthday.getTime())
          ? birthday
          : new Date()
      );
    }
  }, [currentUser]);
  return (
    <View style={UpdateProfileStyles.container}>
      <StackHeader showBackButton={true} title="Cập nhật thông tin cá nhân" />
      <View style={UpdateProfileStyles.changeAvatarBox}>
        <ChangeAvatar size={120} />
      </View>
      <View style={UpdateProfileStyles.formBox}>
        <View style={UpdateProfileStyles.formItem}>
          <View style={UpdateProfileStyles.formItemLabel}>
            <Text style={UpdateProfileStyles.textLabel}>Họ và tên</Text>
          </View>
          <View style={UpdateProfileStyles.formItemInputBox}>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              value={updateProfileData?.fullName || ""}
              onChangeText={(value) => handleChangeValue("fullName", value)}
              iconLeft={
                <FontAwesome
                  name="envelope-o"
                  size={24}
                  color={COLORS.secondary}
                />
              }
              placeholder="Vui lòng nhập họ tên của bạn ..."
            />
          </View>
        </View>
        <View style={UpdateProfileStyles.formItem}>
          <View style={UpdateProfileStyles.formItemLabel}>
            <Text style={UpdateProfileStyles.textLabel}>Email</Text>
          </View>
          <View>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              value={updateProfileData?.email || ""}
              onChangeText={(value) => handleChangeValue("email", value)}
              iconLeft={
                <FontAwesome
                  name="envelope-o"
                  size={24}
                  color={COLORS.secondary}
                />
              }
              placeholder="Vui lòng nhập email của bạn ..."
            />
          </View>
        </View>
        <View style={UpdateProfileStyles.formItem}>
          <View style={UpdateProfileStyles.formItemLabel}>
            <Text style={UpdateProfileStyles.textLabel}>Số điện thoại</Text>
          </View>
          <View>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              keyboardType="numeric"
              style={{
                color: COLORS.secondary,
                fontSize: 16,
                fontFamily: FONTS.MERIENDA_MEDIUM,
              }}
              value={updateProfileData?.phoneNumber || ""}
              onChangeText={(value) => handleChangeValue("phoneNumber", value)}
              iconLeft={
                <FontAwesome
                  name="envelope-o"
                  size={24}
                  color={COLORS.secondary}
                />
              }
              placeholder="Nhập số điện thoại của bạn ..."
            />
          </View>
        </View>

        <View style={UpdateProfileStyles.flexRow}>
          <View style={UpdateProfileStyles.flexCol}>
            <View style={UpdateProfileStyles.formItem}>
              <View style={UpdateProfileStyles.formItemLabel}>
                <Text style={UpdateProfileStyles.textLabel}>Ngày sinh</Text>
              </View>
              <View>
                <DatePickerCustom
                  leftIcon={
                    <FontAwesome
                      name="calendar"
                      size={20}
                      color={COLORS.secondary}
                    />
                  }
                  date={date}
                  setDate={setDate}
                  selectedTextStyle={{
                    color: COLORS.secondary,
                    fontFamily: FONTS.MERIENDA_MEDIUM,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={UpdateProfileStyles.flexCol}>
            <View style={UpdateProfileStyles.formItem}>
              <View style={UpdateProfileStyles.formItemLabel}>
                <Text style={UpdateProfileStyles.textLabel}>Giới tính</Text>
              </View>
              <View>
                <DropdownCustom
                  leftIcon={
                    <AntDesign
                      color={COLORS.secondary}
                      name="Safety"
                      size={20}
                    />
                  }
                  value={selectedGender}
                  onChangeValue={setSelectedGender}
                  data={Genders}
                  selectedTextStyle={{
                    color: COLORS.secondary,
                    fontFamily: FONTS.MERIENDA_MEDIUM,
                  }}
                />
              </View>
            </View>
          </View>
        </View>

        <Button
          onPress={handleSubmit}
          style={{ marginTop: 20 }}
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
  );
};

export default UpdateProfileScreen;
