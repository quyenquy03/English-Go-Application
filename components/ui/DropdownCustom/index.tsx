import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Text, TextStyle, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DropdownCustomStyles from "./DropdownCustom.style";

interface DropdownCustomProps {
  value: string;
  onChangeValue: (value: string) => void;
  data: { label: string; value: string }[];
  showSearch?: boolean;
  searchPlaceholder?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  selectedIcon?: React.ReactNode;
  selectedTextStyle?: TextStyle;
}

const DropdownCustom = ({
  value,
  onChangeValue,
  data,
  showSearch,
  placeholder,
  searchPlaceholder = "Tìm kiếm ...",
  leftIcon,
  rightIcon,
  selectedTextStyle,
  selectedIcon = <AntDesign color='black' name='Safety' size={20} />,
}: DropdownCustomProps) => {
  const renderItem = (item: { label: string; value: string }) => {
    return (
      <View style={DropdownCustomStyles.item}>
        <Text style={DropdownCustomStyles.textItem}>{item.label}</Text>
        {item.value === value && selectedIcon}
      </View>
    );
  };

  return (
    <Dropdown
      style={DropdownCustomStyles.dropdown}
      placeholderStyle={DropdownCustomStyles.placeholderStyle}
      selectedTextStyle={[DropdownCustomStyles.selectedTextStyle, selectedTextStyle]}
      inputSearchStyle={DropdownCustomStyles.inputSearchStyle}
      iconStyle={DropdownCustomStyles.iconStyle}
      data={data}
      search={showSearch}
      maxHeight={300}
      labelField='label'
      valueField='value'
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      value={value}
      onChange={(item) => {
        onChangeValue(item.value);
      }}
      renderLeftIcon={() => (leftIcon ? <View style={DropdownCustomStyles.icon}>{leftIcon}</View> : null)}
      renderRightIcon={() => (rightIcon ? <>{rightIcon}</> : null)}
      renderItem={renderItem}
    />
  );
};

export default DropdownCustom;
