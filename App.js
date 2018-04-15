import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Creating Functional Componenet (Component contaning just view not logic)
const Component1 = () => {
  return (
    <View style={styles.mainViewstyle}>
      <Header headingTitle="Albums" />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  mainViewstyle: {
    flex: 1,
    backgroundColor: "white"
  }
});
export default Component1;
