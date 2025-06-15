import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Audio, AVPlaybackStatus } from "expo-av";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

interface AudioPlayerProps {
  audioUri: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUri }) => {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(1);

  useEffect(() => {
    if (!audioUri) return;

    const loadAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
        });

        const { sound } = await Audio.Sound.createAsync(
          { uri: audioUri },
          { shouldPlay: false }
        );

        soundRef.current = sound;
        setIsLoaded(true);

        sound.setOnPlaybackStatusUpdate(handlePlaybackStatusUpdate);
      } catch (error) {
        console.error("Failed to load audio:", error);
      }
    };

    loadAudio();

    return () => {
      soundRef.current?.unloadAsync();
    };
  }, [audioUri]);

  const handlePlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (!status.isLoaded) return;
    setIsPlaying(status.isPlaying);
    setPosition(status.positionMillis);
    setDuration(status.durationMillis || 1);
  };

  const togglePlayPause = async () => {
    if (!isLoaded) return;
    isPlaying
      ? await soundRef.current?.pauseAsync()
      : await soundRef.current?.playAsync();
  };

  const handleSeek = async (value: number) => {
    if (isLoaded) {
      await soundRef.current?.setPositionAsync(value);
    }
  };

  const formatMillis = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  if (!audioUri) return null;

  return (
    <View style={styles.container}>
      <View style={styles.player}>
        {isLoaded ? (
          <>
            <TouchableOpacity
              onPress={togglePlayPause}
              style={styles.iconButton}
            >
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={30}
                color="#333"
              />
            </TouchableOpacity>

            <Text style={styles.timeText}>{formatMillis(position)}</Text>

            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={duration}
              value={position}
              onSlidingComplete={handleSeek}
              minimumTrackTintColor="#4e9bde"
              maximumTrackTintColor="#ccc"
              thumbTintColor="#4e9bde"
            />

            <Text style={styles.timeText}>{formatMillis(duration)}</Text>

            <Ionicons
              name="volume-high"
              size={22}
              color="#666"
              style={{ marginLeft: 5 }}
            />
          </>
        ) : (
          <View style={styles.loadingBox}>
            <ActivityIndicator size="small" color="#4e9bde" />
            <Text style={styles.loadingText}>Đang tải audio...</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  player: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 20,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconButton: {
    padding: 6,
    borderRadius: 50,
    backgroundColor: "#fff",
    elevation: 2,
    marginRight: 10,
  },
  slider: {
    flex: 1,
    marginHorizontal: 10,
  },
  timeText: {
    fontSize: 14,
    color: "#555",
    width: 38,
    textAlign: "center",
  },
  loadingBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingVertical: 10,
  },
  loadingText: {
    marginLeft: 10,
    fontSize: 13,
    color: "#777",
  },
});

export default AudioPlayer;
