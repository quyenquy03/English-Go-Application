import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import { StyleSheet } from "react-native";

const ExamScoreStyle = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 16,
    color: COLORS.primary,
    fontFamily: FONTS.MERIENDA_BOLD,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 8,
  },
  label: {
    flex: 1.5,
    fontSize: 16,
    fontFamily: FONTS.MERIENDA_MEDIUM,
  },
  value: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
    fontFamily: FONTS.MERIENDA_MEDIUM,
  },
  button: {
    backgroundColor: "#fff0f0",
    borderColor: "#ff4d4f",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#ff4d4f",
    fontSize: 14,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    gap: 16,
  },
  backButton: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 10,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  backButtonText: {
    color: "#000",
    fontSize: 16,
  },
  viewButton: {
    flex: 1,
    backgroundColor: "#2ecc71",
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: "center",
  },
  viewButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
export default ExamScoreStyle;
