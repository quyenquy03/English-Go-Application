import ModalCustom from "@/components/ui/Modal";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import ModalConfirmSubmitStyles from "./ModalConfirmSubmit.style";
import { AppDispatch, RootState } from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import { useRouter } from "expo-router";

const ModalConfirmSubmit = () => {
  const dispatch: AppDispatch = useDispatch();
  const { openModalSubmitSkill } = useSelector(
    (state: RootState) => state.examStore
  );
  const router = useRouter();

  const handleConfirm = () => {
    router.push("/history");
  };
  const setVisible = (visible: boolean) => {
    dispatch(ExamActions.changeOpenModalSubmitSkill(visible));
  };
  return (
    <ModalCustom
      titleText="Rời khỏi bài thi"
      visible={openModalSubmitSkill}
      onClose={() => setVisible(false)}
      onConfirm={handleConfirm}
      onCancel={() => setVisible(false)}
    >
      <View style={ModalConfirmSubmitStyles.container}>
        <View style={ModalConfirmSubmitStyles.imageBox}>
          <Image
            source={IMAGES.banners.bannerPerson}
            style={ModalConfirmSubmitStyles.image}
            resizeMode="cover"
          />
        </View>
        <View style={ModalConfirmSubmitStyles.contentBox}>
          <View style={ModalConfirmSubmitStyles.titleBox}>
            <Text style={ModalConfirmSubmitStyles.title}>
              Bạn có chắc chắn {"\n"} muốn rời khỏi bài thi không?
            </Text>
          </View>
          <View style={ModalConfirmSubmitStyles.descriptionBox}></View>
        </View>
      </View>
    </ModalCustom>
  );
};

export default ModalConfirmSubmit;
