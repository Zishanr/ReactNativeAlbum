import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

// StateLess Functional Component = Making a component with function
const Header = ({ headingTitle }) => {  // Destructring Props to headingTitle
  // Props send from Parent Component
  return (
    <View style={styles.headerViewStyle}>
      <Text style={styles.headerTextStyle}> {headingTitle} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTextStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
  headerViewStyle: {
    backgroundColor: "#F8F8F8",
    height: 57,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    position: "relative"
  }
});

/*export is used to make that compoent usable to other parts of the Application */
export default Header;
