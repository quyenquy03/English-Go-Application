import { StyleSheet } from "react-native";

const SpeakingAnswerStyles = StyleSheet.create({
  wrapper: {
    padding: 16,
  },
  contentBox: {
    height: 200,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 3,
  },
  noteBox: {
    marginTop: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 10,
  },
  noteHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  noteItem: {
    marginBottom: 8,
    color: "#666",
  },
  prepareRecord: {
    alignItems: "center",
    justifyContent: "center",
  },
  prepareHeader: {
    fontSize: 15,
    fontWeight: "500",
  },
  countdownCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6318A",
  },
  countdownText: {
    fontSize: 24,
    color: "white",
  },
  recordingBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  timeCountdown: {
    flexDirection: "row",
    marginTop: 10,
  },
  timeText: {
    fontSize: 20,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255,255,255,0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SpeakingAnswerStyles;
