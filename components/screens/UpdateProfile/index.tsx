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
import React from "react";
import { Text, View } from "react-native";
import UpdateProfileStyles from "./UpdateProfile.style";

const CalendarIcon = (props: any): IconElement => <Icon {...props} name='calendar' />;

const UpdateProfileScreen = () => {
  const [date, setDate] = React.useState(new Date());
  const [selectedGender, setSelectedGender] = React.useState<string>(Genders[0].value);
  return (
    <View style={UpdateProfileStyles.container}>
      <StackHeader showBackButton={true} title='Cập nhật thông tin cá nhân' />
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
              style={{ color: COLORS.secondary, fontSize: 16, fontFamily: FONTS.MERIENDA_MEDIUM }}
              iconLeft={<FontAwesome name='envelope-o' size={24} color={COLORS.secondary} />}
              placeholder='Vui lòng nhập họ tên của bạn ...'
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
              style={{ color: COLORS.secondary, fontSize: 16, fontFamily: FONTS.MERIENDA_MEDIUM }}
              iconLeft={<FontAwesome name='envelope-o' size={24} color={COLORS.secondary} />}
              placeholder='Vui lòng nhập email của bạn ...'
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
              keyboardType='numeric'
              style={{ color: COLORS.secondary, fontSize: 16, fontFamily: FONTS.MERIENDA_MEDIUM }}
              iconLeft={<FontAwesome name='envelope-o' size={24} color={COLORS.secondary} />}
              placeholder='Nhập số điện thoại của bạn ...'
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
                  leftIcon={<FontAwesome name='calendar' size={20} color={COLORS.secondary} />}
                  date={date}
                  setDate={setDate}
                  selectedTextStyle={{ color: COLORS.secondary, fontFamily: FONTS.MERIENDA_MEDIUM }}
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
                  leftIcon={<AntDesign color={COLORS.secondary} name='Safety' size={20} />}
                  value={selectedGender}
                  onChangeValue={setSelectedGender}
                  data={Genders}
                  selectedTextStyle={{ color: COLORS.secondary, fontFamily: FONTS.MERIENDA_MEDIUM }}
                />
              </View>
            </View>
          </View>
        </View>

        <Button style={{ marginTop: 20 }} status='primary'>
          <View>
            <Text style={{ fontFamily: FONTS.MERIENDA_BOLD, fontSize: 16, color: COLORS.textWhite }}>Lưu thay đổi</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

export default UpdateProfileScreen;
