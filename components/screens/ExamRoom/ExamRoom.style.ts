import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ExamRoomStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  buttonStart: {
    width: 180,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginTop: -22,
    marginLeft: -4,
  },
  buttonStartText: {
    color: "white",
    fontSize: 20,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  buttonLeave: {
    width: 270,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.danger,
  },
  buttonLeaveText: {
    color: "white",
    fontSize: 20,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  buttonTab: {
    width: 40,
    height: 40,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
  },
  tabBox: {
    position: "absolute",
    top: 55,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    width: 280,
    height: 440,
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 5,
    overflow: "hidden",
  },
  tab: {
    height: "100%",
  },
  bannerImage: {
    width: 380,
    height: 550,
  },
  tabItemContainer: {
    flex: 1,
    padding: 10,
  },
  tabItemHeader: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
    alignItems: "center",
  },
  tabItemOrder: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.secondary,
    marginRight: 10,
  },
  tabItemOrderText: {
    color: "white",
    fontSize: 18,
    lineHeight: 25,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  tabItemHeaderText: {
    color: COLORS.primary,
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FONTS.MERIENDA_SEMI_BOLD,
  },
  sectionTitle: {
    color: "#865DFF",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  instructions: {
    marginBottom: 30,
  },
  instruction: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "justify",
  },
  audioBar: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F1F1F1",
    borderRadius: 20,
    marginVertical: 10,
  },
  audioProgress: {
    height: 4,
    width: 100,
    backgroundColor: "#CCC",
    marginHorizontal: 10,
    borderRadius: 2,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconButton: {
    backgroundColor: "#865DFF",
    padding: 16,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  highlight: {
    color: COLORS.secondary,
    fontWeight: "bold",
    marginBottom: 8,
  },
  cameraContainer: {
    alignItems: "center",
    marginBottom: 16,
    position: "relative",
  },

  cameraPreview: {
    width: 300,
    height: 200,
    borderWidth: 1,
    borderColor: "#9C27B0",
    borderRadius: 6,
  },

  cameraButton: {
    position: "absolute",
    bottom: 8,
    alignSelf: "center",
    backgroundColor: "red",
    padding: 10,
    borderRadius: 30,
  },

  candidateInfo: {
    marginBottom: 24,
    paddingHorizontal: 8,
  },

  candidateLabel: {
    fontWeight: "bold",
    color: "#8E24AA",
  },

  candidateRow: {
    fontSize: 14,
    marginBottom: 6,
  },

  actionButtons: {
    alignItems: "center",
    gap: 10,
  },

  primaryButton: {
    backgroundColor: "#00C853",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    minWidth: 200,
    alignItems: "center",
  },

  primaryButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  dangerButton: {
    backgroundColor: "#FF5252",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    minWidth: 200,
    alignItems: "center",
  },

  dangerButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  cameraWrapper: {
    alignSelf: "center",
    width: "100%",
    maxWidth: 350,
    height: 200,
    position: "relative",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  captureButton: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    backgroundColor: "red",
    borderRadius: 24,
    padding: 10,
  },
  infoBox: {
    marginBottom: 24,
  },
  row: {
    fontSize: 16,
    marginBottom: 4,
  },
  label: {
    fontWeight: "bold",
    color: "#7D4FFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#7D4FFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  circleText: {
    color: "#fff",
    fontWeight: "bold",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  acceptButton: {
    backgroundColor: "#2ecc71",
  },
  exitButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
export default ExamRoomStyles;
