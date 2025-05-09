import { StyleSheet } from "react-native";

const HomeAboutStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: 10,
    boxShadow: "0 0 10px rgba(238, 102, 200, 0.43)",
  },
  itemContent: {
    padding: 10,
    backgroundColor: "rgba(165, 165, 165, 0.5)",
    borderRadius: 10,
    minHeight: 150,
  },
});
export default HomeAboutStyles;
