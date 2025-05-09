import { StyleSheet } from "react-native";

const inputCustomStyles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
  },
  defaultInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    transitionDuration: "0.5s",
    transitionProperty: "all",
    transitionTimingFunction: "ease-in-out",
    width: "100%",
    height: 50,
  },
  focusInput: {
    borderColor: "blue",
  },
  iconLeftBox: {
    position: "absolute",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
    borderRightWidth: 1,
    borderRightColor: "gray",
  },
  iconRightBox: {
    position: "absolute",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
  },
});
export default inputCustomStyles;
