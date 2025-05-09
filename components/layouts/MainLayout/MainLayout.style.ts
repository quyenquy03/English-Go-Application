import COLORS from "@/constants/color";
import { StyleSheet } from "react-native";

const MainLayoutStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  wellcomeBox: {
    height: 120,
  },
  contentBox: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    boxShadow: "0 0 10px rgba(209, 57, 166, 0.51)",
    backgroundColor: COLORS.bgPrimary,
  },
  lastBox: {
    height: 120,
  },
});
export default MainLayoutStyles;
