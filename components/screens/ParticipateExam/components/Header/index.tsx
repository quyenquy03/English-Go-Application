import DrawerCustom from "@/components/ui/DrawerCustom";
import COLORS from "@/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Pressable, Text, View } from "react-native";
import HeaderStyles from "./Header.style";
import TimeCountdown from "./TimeCountdown";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <View style={HeaderStyles.container}>
      <View style={HeaderStyles.headerBox}>
        <Pressable onPress={() => setIsDrawerOpen(!isDrawerOpen)} style={HeaderStyles.menuIcon}>
          <FontAwesome name='bars' size={20} color={COLORS.secondary} />
        </Pressable>
        <View style={HeaderStyles.titleBox}>
          <Text style={HeaderStyles.title}>Listening</Text>
          <TimeCountdown initTime={1000} handleSubmit={() => console.log("submit")} />
        </View>
        <Pressable style={HeaderStyles.menuIcon}>
          <FontAwesome name='check' size={20} color={COLORS.secondary} />
        </Pressable>
      </View>
      <DrawerCustom isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <View style={HeaderStyles.drawerBox}>
          <View style={HeaderStyles.questionBox}>
            {Array.from({ length: 35 }).map((_, index) => (
              <View key={index} style={[HeaderStyles.questionItem, index === 0 && HeaderStyles.questionItemActive]}>
                <Text style={HeaderStyles.questionItemText}>{index}</Text>
              </View>
            ))}
          </View>
        </View>
      </DrawerCustom>
    </View>
  );
};

export default Header;
