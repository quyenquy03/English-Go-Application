import ModalCustom from "@/components/ui/Modal";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import ModalConfirmSubmitStyles from "./ModalConfirmSubmit.style";

const ModalConfirmSubmit = () => {
  return (
    <ModalCustom titleText='Xác nhận nạp kĩ năng' visible={true} setVisible={() => {}}>
      <View style={ModalConfirmSubmitStyles.container}>
        <View style={ModalConfirmSubmitStyles.imageBox}>
          <Image source={IMAGES.banners.bannerPerson} style={ModalConfirmSubmitStyles.image} resizeMode='cover' />
        </View>
        <View style={ModalConfirmSubmitStyles.contentBox}>
          <View style={ModalConfirmSubmitStyles.titleBox}>
            <Text style={ModalConfirmSubmitStyles.title}>Bạn có chắc chắn {"\n"} muốn nạp bài không?</Text>
          </View>
          <View style={ModalConfirmSubmitStyles.descriptionBox}>
            <Text style={ModalConfirmSubmitStyles.description}>
              Sau khi xác nhận nạp kĩ năng{"\n"}bạn sẽ không thể làm lại nữa!
            </Text>
          </View>
        </View>
      </View>
    </ModalCustom>
  );
};

export default ModalConfirmSubmit;
