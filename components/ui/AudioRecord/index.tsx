import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import { Audio } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

interface IAudioRecordProps {
  handleEndRecording: (uri: string) => void;
}

export interface IAudioRecordRef {
  handleStartRecording: () => Promise<void>;
  handleStopRecording: () => Promise<void>;
}

const AudioRecord = forwardRef<IAudioRecordRef, IAudioRecordProps>(
  ({ handleEndRecording }, ref) => {
    const recordingRef = useRef<Audio.Recording | null>(null);
    const [isRecording, setIsRecording] = useState(false);

    const handleStartRecording = async () => {
      try {
        console.log("⏺️ Bắt đầu ghi âm...");

        // Stop và remove recording cũ nếu còn
        if (recordingRef.current) {
          console.log("🛑 Đang có bản ghi cũ, dừng lại...");
          await recordingRef.current.stopAndUnloadAsync();
          recordingRef.current = null;
        }

        const { status } = await Audio.requestPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Không có quyền thu âm");
          return;
        }

        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        await recording.startAsync();

        recordingRef.current = recording;
        setIsRecording(true);
      } catch (error) {
        console.error("🚨 Lỗi khi start recording:", error);
      }
    };

    const handleStopRecording = async () => {
      try {
        console.log("🛑 Stop recording...");

        if (!recordingRef.current) {
          console.warn("⚠️ Không có bản ghi nào để stop.");
          return;
        }

        await recordingRef.current.stopAndUnloadAsync();
        const uri = recordingRef.current.getURI();

        console.log("✅ Audio URI:", uri);
        if (uri) {
          handleEndRecording(uri);
        }

        recordingRef.current = null;
        setIsRecording(false);
      } catch (error) {
        console.error("🚨 Lỗi khi stop recording:", error);
      }
    };

    useImperativeHandle(ref, () => ({
      handleStartRecording,
      handleStopRecording,
    }));

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={handleStartRecording}
          style={styles.audioButton}
          disabled={isRecording}
        >
          <Ionicons name="mic" size={40} color="#fff" />
        </TouchableOpacity>
        {isRecording && (
          <Text style={{ marginTop: 10, color: "black" }}>Đang ghi âm...</Text>
        )}
      </View>
    );
  }
);

export default AudioRecord;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  audioButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E6318A",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
