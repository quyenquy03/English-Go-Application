import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";
import { useSelector } from "react-redux";
import { RootState } from "@/stores";
import RenderHtml, { MixedStyleDeclaration } from "react-native-render-html";
import FONTS from "@/constants/fonts";
import ExamQuestionStyles from "./ExamQuestion.style";
import AudioPlayer from "@/components/ui/AudioPlayer";

const tagsStyles: Readonly<Record<string, MixedStyleDeclaration>> = {
  p: {
    fontSize: 14,
    fontFamily: FONTS.MERIENDA_MEDIUM,
    textAlign: "justify",
    lineHeight: 20,
  },
};

const ExamQuestion = () => {
  const { width } = useWindowDimensions();
  const { selectedQuestion } = useSelector(
    (state: RootState) => state.examStore
  );
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const prepareAudio = async () => {
      if (!selectedQuestion?.attachedFile) {
        console.log("Không có audio file.");
        return;
      }

      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });

        console.log("Tải audio từ:", selectedQuestion.attachedFile);
        const localPath = FileSystem.cacheDirectory + "question_audio.mp3";

        const downloadResult = await FileSystem.downloadAsync(
          selectedQuestion.attachedFile,
          localPath
        );

        console.log("Audio đã tải về:", downloadResult.uri);

        const { sound } = await Audio.Sound.createAsync(
          { uri: downloadResult.uri },
          { shouldPlay: false }
        );

        soundRef.current = sound;
        setIsLoaded(true);

        sound.setOnPlaybackStatusUpdate((status) => {
          if (status.isLoaded) {
            setIsPlaying(status.isPlaying);
          }
        });
      } catch (error) {
        console.error("Lỗi khi tải và tạo audio:", error);
      }
    };

    prepareAudio();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, [selectedQuestion]);

  const handlePlay = async () => {
    if (isLoaded) {
      await soundRef.current?.playAsync();
    } else {
      console.log("Audio chưa sẵn sàng.");
    }
  };

  const handlePause = async () => {
    if (isLoaded) {
      await soundRef.current?.pauseAsync();
    }
  };

  const handleRestart = async () => {
    if (isLoaded) {
      await soundRef.current?.setPositionAsync(0);
      await soundRef.current?.playAsync();
    }
  };

  return (
    <View style={ExamQuestionStyles.container}>
      {/* Tiêu đề */}
      <View style={ExamQuestionStyles.questionTitleBox}>
        <Text style={ExamQuestionStyles.questionTitleText}>
          <Text style={ExamQuestionStyles.questionOrderText}>
            {selectedQuestion?.level?.displayName}:
          </Text>{" "}
          {selectedQuestion?.level?.description}
        </Text>
      </View>

      {/* Mô tả */}
      <View style={ExamQuestionStyles.questionContentBox}>
        <View style={ExamQuestionStyles.questionDescriptionBox}>
          <Text style={ExamQuestionStyles.questionDescriptionText}>
            {selectedQuestion?.description}
          </Text>
        </View>

        {/* Nội dung HTML */}
        <View style={ExamQuestionStyles.questionContent}>
          <RenderHtml
            systemFonts={[FONTS.MERIENDA_MEDIUM]}
            tagsStyles={tagsStyles}
            contentWidth={width - 40}
            source={
              selectedQuestion?.questionContent
                ? { html: selectedQuestion.questionContent }
                : { html: "" }
            }
          />
        </View>
      </View>

      {selectedQuestion?.skill?.id === "listening" && (
        <AudioPlayer audioUri={selectedQuestion.attachedFile as string} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  audioControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  loadingText: {
    textAlign: "center",
    color: "gray",
    marginTop: 10,
  },
  playingText: {
    textAlign: "center",
    color: "green",
    marginTop: 10,
    fontWeight: "600",
  },
});

export default ExamQuestion;
