import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const ParticipateExamStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgPrimary,
  },
  header: {
    height: 70,
  },
  body: {
    flex: 1,
  },
  footer: {
    height: 60,
    backgroundColor: COLORS.secondary,
  },
});
export default ParticipateExamStyles;
