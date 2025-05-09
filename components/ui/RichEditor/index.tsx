import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { RichEditor, RichToolbar, actions } from "react-native-pell-rich-editor";

const RichEditorCustom = () => {
  // const richText = useRef<RichEditor | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rich Text Editor</Text>

      {/* Editor */}
      {/* <RichEditor
        ref={richText}
        onChange={(text) => console.log("Content:", text)}
        placeholder='Start typing here...'
        style={styles.editor}
      /> */}

      {/* Toolbar */}
      {/* <RichToolbar editor={richText} actions={[actions.setBold, actions.setItalic, actions.setUnderline, actions.insertImage]} /> */}
    </View>
  );
};

export default RichEditorCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  editor: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    minHeight: 200,
    width: "100%",
  },
});
