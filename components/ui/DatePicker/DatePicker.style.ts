import { StyleSheet } from "react-native";

const DatePickerStyles = StyleSheet.create({
  container: {},
  inputBox: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "100%",
  },
  calendarIcon: {
    position: "absolute",
    top: 0,
    width: 40,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
});
export default DatePickerStyles;
