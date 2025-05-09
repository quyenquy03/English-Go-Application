import { StyleSheet } from "react-native";

const DropdownCustomStyles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderRadius: 8,
    padding: 10,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    lineHeight: 25,
    height: 25,
    overflow: "hidden",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default DropdownCustomStyles;
