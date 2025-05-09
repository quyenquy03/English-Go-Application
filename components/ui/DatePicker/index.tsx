import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Pressable, Text, TextStyle, View } from "react-native";
import DatePickerStyles from "./DatePicker.style";
interface DatePickerCustomProps {
  date: Date;
  setDate: (date: Date) => void;
  selectedTextStyle?: TextStyle;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
const DatePickerCustom = ({ date, setDate, selectedTextStyle, leftIcon, rightIcon }: DatePickerCustomProps) => {
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View style={DatePickerStyles.container}>
      <Pressable onPress={() => setShow(true)} style={DatePickerStyles.inputBox}>
        <Text style={[{ paddingLeft: leftIcon ? 35 : 0, paddingRight: rightIcon ? 50 : 0 }, selectedTextStyle]}>
          {date.toLocaleDateString("vi-VN")}
        </Text>
      </Pressable>
      {show && (
        <DateTimePicker
          value={date}
          mode='date'
          display='default'
          locale='vi-VN' // Đặt ngôn ngữ thành tiếng Việt
          onChange={onChange}
        />
      )}
      {rightIcon && <View style={[DatePickerStyles.calendarIcon, { right: 0, borderLeftWidth: 1 }]}>{rightIcon}</View>}
      {leftIcon && <View style={[DatePickerStyles.calendarIcon, { left: 0, borderRightWidth: 1 }]}>{leftIcon}</View>}
    </View>
  );
};

export default DatePickerCustom;
