import React, { useEffect, useMemo, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "@/stores";
import { ExamActions } from "@/stores/examStore/examReducer";
import uploadService from "@/services/uploadService";
import { CloudPresets } from "@/constants/CloudPreset";
import { useNavigation } from "@react-navigation/native";
import SpeakingAnswerStyles from "./SpeakingAnswer.style";
import AudioRecord from "@/components/ui/AudioRecord";
import { useRouter } from "expo-router";

const PrepareRecord = ({ startRecord }: { startRecord: () => void }) => {
  const [timeCountDown, setTimeCountDown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCountDown((prev) => prev - 1);
    }, 1000);

    if (timeCountDown === 0) {
      clearInterval(timer);
      startRecord();
    }

    return () => clearInterval(timer);
  }, [timeCountDown]);

  return (
    <View style={SpeakingAnswerStyles.prepareRecord}>
      <Text style={SpeakingAnswerStyles.prepareHeader}>
        Đang trong thời gian chuẩn bị
      </Text>
      <Text style={SpeakingAnswerStyles.prepareHeader}>
        Hệ thống sẽ tự động ghi âm sau
      </Text>
      <View style={SpeakingAnswerStyles.countdownCircle}>
        <Text style={SpeakingAnswerStyles.countdownText}>{timeCountDown}</Text>
      </View>
    </View>
  );
};

const RecordingQuestion = ({
  stopRecord,
  totalTime = 60,
}: {
  stopRecord: (url: string) => void;
  totalTime?: number;
}) => {
  const [timeCountDown, setTimeCountDown] = useState(totalTime);
  const speakingRecordRef = React.useRef<any>(null);
  const dispatch: AppDispatch = useDispatch();
  const { isSubmitting } = useSelector((state: RootState) => state.examStore);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeCountDown((prev) => prev - 1);
    }, 1000);

    if (timeCountDown === 0) {
      clearInterval(timer);
      speakingRecordRef.current?.handleStopRecording();
    }

    return () => clearInterval(timer);
  }, [timeCountDown]);

  const handleEndRecording = async (uri: string) => {
    try {
      console.log("Recording ended, uploading audio...");
      dispatch(ExamActions.changeIsSubmitting(true));
      const audioUpload = await uploadService.uploadAnAudio(
        uri,
        CloudPresets.AUDIO
      );
      console.log("Audio upload response:", audioUpload);
      if (audioUpload.success) {
        stopRecord(audioUpload.data.secure_url);
        ToastAndroid.show("Tải file lên thành công", ToastAndroid.SHORT);
      } else {
        ToastAndroid.show("Có lỗi khi tải file", ToastAndroid.LONG);
        dispatch(ExamActions.changeIsSubmitting(false));
      }
    } catch (e) {
      console.error("Upload error", e);
      ToastAndroid.show("Có lỗi khi tải file", ToastAndroid.LONG);
      dispatch(ExamActions.changeIsSubmitting(false));
    }
  };

  useEffect(() => {
    speakingRecordRef.current?.handleStartRecording();
  }, []);

  return (
    <View style={SpeakingAnswerStyles.recordingBox}>
      <AudioRecord
        ref={speakingRecordRef}
        handleEndRecording={handleEndRecording}
      />
      {isSubmitting && (
        <View style={SpeakingAnswerStyles.loadingOverlay}>
          <ActivityIndicator size="large" color="#E6318A" />
        </View>
      )}
      <View style={SpeakingAnswerStyles.timeCountdown}>
        <Text style={SpeakingAnswerStyles.timeText}>
          {`0${Math.floor(timeCountDown / 60)}`.slice(-2)}
        </Text>
        <Text>:</Text>
        <Text style={SpeakingAnswerStyles.timeText}>
          {`0${timeCountDown % 60}`.slice(-2)}
        </Text>
      </View>
      <Text style={{ textAlign: "center", marginTop: 10 }}>
        Hệ thống đang thu âm, hãy ghé sát micro để thu được chất lượng tốt nhất
      </Text>
    </View>
  );
};

const SpeakingQuestion = () => {
  const [isPreparing, setIsPreparing] = useState(true);
  const {
    selectedQuestion,
    selectedLevel,
    listQuestionOfSkill,
    selectedSkill,
    currentExam,
  } = useSelector((state: RootState) => state.examStore);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const startRecord = () => {
    setIsPreparing(false);
  };

  useEffect(() => {
    if (selectedSkill && listQuestionOfSkill?.length) {
      dispatch(ExamActions.getCurrentSpeakingQuestion());
    }
  }, [selectedSkill, listQuestionOfSkill, dispatch]);

  useEffect(() => {
    setIsPreparing(true);
  }, [selectedLevel]);

  const stopRecord = async (url: string) => {
    console.log("Stopping record with URL:", url);
    await dispatch(
      ExamActions.submitSpeakingSkill({
        questionId: selectedQuestion?.id || "",
        answer: url,
        skillId: selectedQuestion?.skillId || "speaking",
        levelId: selectedQuestion?.levelId || "",
      })
    ).then((response: any) => {
      console.log("Submit speaking skill response:", response);
    });
    console.log("Submit speaking skill action dispatched");

    await dispatch(ExamActions.getCurrentSpeakingQuestion());
    const state = store.getState().examStore;

    if (state.selectedQuestion) {
      setIsPreparing(true);
    } else {
      if (state.selectedLevel === "speaking-part-3") {
        // navigate to result screen: /exam/score-exam/:examId
        const examId = state.currentExam?.id || "";
        // If using expo-router, use router.push
        router.replace(`/exam/score-exam/${examId}`);
      } else {
        const nextLevel =
          state.selectedLevel === "speaking-part-1"
            ? "speaking-part-2"
            : "speaking-part-3";
        await dispatch(ExamActions.changeSelectedLevel(nextLevel));
        await dispatch(ExamActions.getCurrentSpeakingQuestion());
        setIsPreparing(true);
      }
    }
  };
  const timeExpired = useMemo(() => {
    if (selectedLevel === "speaking-part-1") return 180;
    if (selectedLevel === "speaking-part-2") return 240;
    return 300;
  }, [selectedLevel]);

  return (
    <View style={SpeakingAnswerStyles.wrapper}>
      <View style={SpeakingAnswerStyles.contentBox}>
        {isPreparing ? (
          <PrepareRecord startRecord={startRecord} />
        ) : (
          <RecordingQuestion totalTime={timeExpired} stopRecord={stopRecord} />
        )}
      </View>
      <View style={SpeakingAnswerStyles.noteBox}>
        <Text style={SpeakingAnswerStyles.noteHeader}>Lưu ý:</Text>
        <Text style={SpeakingAnswerStyles.noteItem}>
          1. Hệ thống sẽ tự động lưu bài làm của bạn.
        </Text>
        <Text style={SpeakingAnswerStyles.noteItem}>
          2. Hệ thống sẽ tự động chuyển sang bài tiếp theo khi kết thúc.
        </Text>
        <Text style={SpeakingAnswerStyles.noteItem}>
          3. Trước khi bắt đầu một bài mới, bạn sẽ có 1 phút để chuẩn bị.
        </Text>
        <Text style={SpeakingAnswerStyles.noteItem}>
          4. Nếu nhấn nạp kĩ năng, hệ thống sẽ kết thúc luôn bài thi của bạn.
        </Text>
      </View>
    </View>
  );
};

export default SpeakingQuestion;
