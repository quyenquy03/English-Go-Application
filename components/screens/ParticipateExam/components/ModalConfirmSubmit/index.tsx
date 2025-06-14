import ModalCustom from "@/components/ui/Modal";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import ModalConfirmSubmitStyles from "./ModalConfirmSubmit.style";
import { ISubmitSkillRequest } from "@/types/exam/ExamTypes";
import { AppDispatch, RootState } from "@/stores";
import { useDispatch, useSelector } from "react-redux";
import { ExamActions } from "@/stores/examStore/examReducer";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

const ModalConfirmSubmit = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    selectedSkill,
    listQuestionOfSkill,
    openModalSubmitSkill,
    currentExam,
  } = useSelector((state: RootState) => state.examStore);
  const router = useRouter();

  const handleSendSkill = () => {
    // Call api to send skill
    const data: ISubmitSkillRequest = {
      skillId: selectedSkill?.skillId || "",
      questions: listQuestionOfSkill || [],
    };
    dispatch(ExamActions.submitSkill(data)).then((response: any) => {
      if (data.skillId === "speaking") {
        dispatch(ExamActions.changeOpenModalSubmitSkill(false));
        router.replace(`/exam/score-exam/${currentExam?.id}`);
        return;
      }
      if (response.payload.success) {
        dispatch(ExamActions.continueExam());
        Toast.show({
          type: "success",
          text1: "Nạp kĩ năng thành công",
          text2: "Bạn đã nạp kĩ năng thành công.",
        });
      }
    });
  };
  const setVisible = (visible: boolean) => {
    dispatch(ExamActions.changeOpenModalSubmitSkill(visible));
  };
  return (
    <ModalCustom
      titleText="Xác nhận nạp kĩ năng"
      visible={openModalSubmitSkill}
      onClose={() => setVisible(false)}
      onConfirm={handleSendSkill}
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
              Bạn có chắc chắn {"\n"} muốn nạp bài không?
            </Text>
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
