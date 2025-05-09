import { Dimensions, StyleSheet } from "react-native";

const screenHeight = Dimensions.get("window").height;

const DrawerStyles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: screenHeight,
    backgroundColor: "rgba(0, 0, 0, 0.29)", // Làm tối nền
    justifyContent: "flex-start",
  },
  drawer: {
    width: "100%",
    zIndex: 2,
    height: "auto", // Chiều cao Drawer
    minHeight: 200,
    backgroundColor: "#fff",
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 5, // Hiển thị nổi hơn overlay
  },
});

export default DrawerStyles;
