import { StyleSheet } from "react-native";

const HomeEvalueateStyles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  formBox: {},
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  star: {
    fontSize: 36,
    marginHorizontal: 5,
  },
  textInput: {
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginVertical: 20,
    minHeight: 100,
    textAlignVertical: "top",
  },
  button: {
    borderRadius: 8,
    overflow: "hidden",
  },
});
export default HomeEvalueateStyles;
