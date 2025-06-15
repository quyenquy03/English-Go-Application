import COLORS from "@/constants/color";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Modal } from "@ui-kitten/components";
import React from "react";
import { Pressable, Text, View } from "react-native";
import ModalCustomStyles from "./Modal.style";
interface ModalCustomProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  titleText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

const ModalCustom = ({
  visible,
  onClose,
  children,
  titleText = "Modal Title",
  onCancel,
  onConfirm,
}: ModalCustomProps) => {
  return (
    <View style={ModalCustomStyles.container}>
      <Modal
        visible={visible}
        backdropStyle={ModalCustomStyles.backdrop}
        onBackdropPress={onClose}
      >
        <View style={ModalCustomStyles.modalBox}>
          <View style={ModalCustomStyles.headerBox}>
            <Text style={ModalCustomStyles.headerTitle}>{titleText}</Text>
          </View>
          <Pressable style={ModalCustomStyles.closeIcon} onPress={onClose}>
            <FontAwesome name="close" size={18} color={COLORS.primary} />
          </Pressable>
          <View style={ModalCustomStyles.bodyBox}>{children}</View>
          <View style={ModalCustomStyles.footerBox}>
            <Pressable
              style={[ModalCustomStyles.button, ModalCustomStyles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={ModalCustomStyles.cancelButtonText}>Huỷ bỏ</Text>
            </Pressable>
            <Pressable
              style={[
                ModalCustomStyles.button,
                ModalCustomStyles.confirmButton,
              ]}
              onPress={onConfirm}
            >
              <Text style={ModalCustomStyles.confirmButtonText}>Xác nhận</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalCustom;
