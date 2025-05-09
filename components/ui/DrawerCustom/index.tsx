import React, { useRef } from "react";
import { TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import DrawerStyles from "./Drawer.style";

interface DrawerCustomProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DrawerCustom({ isOpen, onClose, children }: DrawerCustomProps) {
  const drawerRef = useRef<Animatable.View & { animate: (animation: string, duration: number) => Promise<void> }>(null);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.animate("slideOutUp", 300).then(() => {
        onClose();
      });
    }
  };

  if (!isOpen) return null;

  return (
    <View style={DrawerStyles.overlay} pointerEvents='box-none'>
      {/* Bắt sự kiện click bên ngoài */}
      <TouchableOpacity style={DrawerStyles.overlay} activeOpacity={1} onPress={closeDrawer} />

      {/* Drawer */}
      <Animatable.View ref={drawerRef} animation='slideInDown' duration={300} style={DrawerStyles.drawer}>
        {children}
      </Animatable.View>
    </View>
  );
}
