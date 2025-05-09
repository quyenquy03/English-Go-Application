import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, usePathname, useRouter } from "expo-router";
import React, { useEffect, useMemo } from "react";
import { BackHandler, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import HomeTab from ".";
import HistoryTab from "./history";
import PlanTab from "./plan";
import PracticeTab from "./practice";
import ProfileTab from "./profile";
const tabArray: {
  name: string;
  label: string;
  route: string;
  icon?: string;
  component: React.FC;
}[] = [
  {
    name: "plan/index",
    label: "Dịch vụ",
    route: "/(tabs)/plan",
    icon: "gears",
    component: PlanTab,
  },
  {
    name: "practice",
    label: "Thi thử",
    route: "/(tabs)/practice",
    icon: "mortar-board",
    component: PracticeTab,
  },
  {
    name: "index",
    label: "Trang chủ",
    route: "/(tabs)",
    icon: "home",
    component: HomeTab,
  },

  {
    name: "history",
    label: "Lịch sử",
    route: "/(tabs)/history",
    icon: "trophy",
    component: HistoryTab,
  },
  {
    name: "profile",
    label: "Trang cá nhân",
    route: "/(tabs)/profile",
    icon: "user",
    component: ProfileTab,
  },
];

interface TabarButtonProps {
  icon?: string;
  label?: string;
  onPress?: () => void;
  accessibilityState?: {
    selected?: boolean;
  };
}

const animate1 = {
  0: { scale: 1, translateY: 0 },
  1: { scale: 1.1, translateY: -20 },
};
const animate2 = {
  0: { scale: 1.1, translateY: -20 },
  1: { scale: 1, translateY: 0 },
};

const circleAnimate1 = {
  0: { scale: 0.5 },
  1: { scale: 1 },
};
const circleAnimate2 = {
  0: { scale: 1 },
  1: { scale: 0.5 },
};

const TabarButton = ({ icon, onPress, label, ...props }: TabarButtonProps) => {
  const { accessibilityState } = props;
  const focused = accessibilityState?.selected;
  const viewRef = React.useRef<any>(null);
  const circleRef = React.useRef<any>(null);

  useEffect(() => {
    if (focused) {
      viewRef.current?.animate(animate1);
      circleRef.current?.animate(circleAnimate1);
    } else {
      viewRef.current?.animate(animate2);
      circleRef.current?.animate(circleAnimate2);
    }
  }, [focused]);
  return (
    <Animatable.View ref={viewRef} duration={500} style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.button}>
        <Animatable.View ref={circleRef} duration={300} style={styles.tabarButtonStyle} />
        <FontAwesome name={icon as any} size={24} color={focused ? COLORS.primary : COLORS.secondary} />
      </TouchableOpacity>
      <Animatable.Text animation={focused ? "bounceIn" : "bounceOut"} style={styles.tabarLabelStyle}>
        {label}
      </Animatable.Text>
    </Animatable.View>
  );
};

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const hiddenTabBarRoutes = useMemo(() => {
    return ["/profile/update-profile", "/profile/change-password", "/practice/exam-room"];
  }, []);
  const [hiddenTabBar, setHiddenTabBar] = React.useState(false);
  useEffect(() => {
    setHiddenTabBar(hiddenTabBarRoutes.includes(pathname));
  }, [pathname]);

  useEffect(() => {
    const backAction = () => {
      console.log("pathname", pathname);
      if (pathname === "/" || pathname === "/(tabs)/index" || pathname === "/(tabs)") {
        BackHandler.exitApp(); // Thoát ứng dụng nếu đang ở tab "index"
        return true; // Chặn hành vi quay lại
      } else if (pathname === "/plan" || pathname === "/practice" || pathname === "/history" || pathname === "/profile") {
        router.replace("/"); // Nếu không phải Home, điều hướng về Home
        return true; // Ngăn hành vi quay lại tab trước đó
      }
      return false; // Cho phép quay lại
    };

    const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction);

    return () => backHandler.remove();
  }, [pathname]);
  return (
    <Tabs
      initialRouteName='index'
      screenOptions={{
        tabBarActiveTintColor: "blue",
        headerShown: false,
        tabBarStyle: hiddenTabBar ? { display: "none" } : styles.tabarStyle,
      }}
    >
      {tabArray.map((tab) => {
        return (
          <Tabs.Screen
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => (
                <TabarButton {...props} label={tab.label} onPress={() => router.push(tab.route as any)} icon={tab.icon} />
              ),
            }}
            key={tab.name}
            name={tab.name}
          />
        );
      })}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabarStyle: {
    height: 75,
    backgroundColor: COLORS.secondary,
    borderRadius: 50,
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
    width: "94%",
    marginHorizontal: "3%",
    paddingHorizontal: 10,
    boxShadow: "0 0 20px rgb(209, 57, 166)",
  },
  tabarLabelStyle: {
    color: "white",
    fontSize: 8,
    position: "absolute",
    bottom: -8,
    fontFamily: FONTS.MERIENDA_BOLD,
  },
  tabarButtonStyle: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: COLORS.bgPrimary,
    borderRadius: 250,
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
});
