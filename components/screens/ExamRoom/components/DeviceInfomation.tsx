import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, Alert } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useAudioRecorder, RecordingPresets, AudioModule } from "expo-audio";

import ExamRoomStyles from "../ExamRoom.style";

export default function DeviceInformation() {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [recording, setRecording] = useState(false);
  const [recordedURI, setRecordedURI] = useState<string | null>(null);
  const [sampleSound, setSampleSound] = useState<Audio.Sound | null>(null);
  const [playbackSound, setPlaybackSound] = useState<Audio.Sound | null>(null);

  // xin quyền ghi âm
  useEffect(() => {
    (async () => {
      const res = await AudioModule.requestRecordingPermissionsAsync();
      if (!res.granted) {
        Alert.alert("Thiếu quyền", "Ứng dụng cần quyền ghi âm để hoạt động.");
      }
    })();
    return () => {
      sampleSound?.unloadAsync();
      playbackSound?.unloadAsync();
    };
  }, []);

  const playSampleAudio = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        require("@/assets/audios/test_audio.mp3")
      );
      setSampleSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Không phát được sample audio:", error);
    }
  };

  const toggleRecording = async () => {
    try {
      if (!recording) {
        await recorder.prepareToRecordAsync();
        recorder.record();
        setRecording(true);
      } else {
        await recorder.stop();
        const uri = recorder.uri;
        if (uri) {
          setRecordedURI(uri);
          Alert.alert("Đã ghi âm xong", "Bạn có thể nghe lại bản ghi.");
        }
        setRecording(false);
      }
    } catch (err) {
      console.error("Lỗi khi ghi âm:", err);
    }
  };

  const playRecordedAudio = async () => {
    if (!recordedURI) {
      Alert.alert("Không có bản ghi âm");
      return;
    }
    try {
      const { sound } = await Audio.Sound.createAsync({ uri: recordedURI });
      setPlaybackSound(sound);
      await sound.playAsync();
    } catch (error) {
      console.error("Không phát lại được:", error);
    }
  };

  return (
    <ScrollView style={ExamRoomStyles.tabItemContainer}>
      <View style={ExamRoomStyles.tabItemHeader}>
        <View style={ExamRoomStyles.tabItemOrder}>
          <Text style={ExamRoomStyles.tabItemOrderText}>1</Text>
        </View>
        <Text style={ExamRoomStyles.tabItemHeaderText}>Kiểm tra thiết bị</Text>
      </View>

      {/* NHIỆM VỤ 2: Design giao diện cho tab thông tin bài thi */}
      <View style={ExamRoomStyles.instructions}>
        <Text style={ExamRoomStyles.instruction}>
          - Bước 1: Mở loa hoặc đeo tai nghe để nghe đoạn audio bên dưới
        </Text>

        <TouchableOpacity
          style={ExamRoomStyles.audioBar}
          onPress={playSampleAudio}
        >
          <Ionicons name="play" size={24} color="black" />
          <View style={ExamRoomStyles.audioProgress} />
          <Text>0:00 / 0:07</Text>
        </TouchableOpacity>

        <Text style={ExamRoomStyles.instruction}>
          - Bước 2: Để mic thu âm sát miệng
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          - Bước 3: Nhấp vào nút "Thu âm" ở bên dưới để bắt đầu thu âm.
        </Text>
        <Text style={ExamRoomStyles.instruction}>
          - Bước 4: Nhấp vào nút "Nghe lại", nếu không nghe được giọng của mình,
          vui lòng kiểm tra lại cài đặt hoặc thiết bị.
        </Text>
      </View>

      <View style={ExamRoomStyles.buttonRow}>
        <TouchableOpacity
          style={ExamRoomStyles.iconButton}
          onPress={playRecordedAudio}
          disabled={!recordedURI}
        >
          <MaterialIcons name="replay" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={ExamRoomStyles.iconButton}
          onPress={toggleRecording}
        >
          <Ionicons name={recording ? "stop" : "mic"} size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={ExamRoomStyles.iconButton}>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
