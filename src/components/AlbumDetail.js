import React from "react";
import { Text, StyleSheet, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ albumDetail }) => {
  // Destructring props into albumdetail

  const { title, artist, thumbnail_image, image, url } = albumDetail; // Futher destructing props albumDetail in there attributes

  const {
    headerTextStyle,
    headerContentStyle,
    headerImageStyle,
    textStyle,
    contentImageStyle
  } = styles; // Destructring Styles when used multiple times in the project

  return (
    <Card>
      <CardSection>
        <Image style={headerImageStyle} source={{ uri: thumbnail_image }} />

        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text style={textStyle}>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={contentImageStyle} source={{ uri: image }} />
      </CardSection>

      <CardSection>
        <Button whenPressed={() => Linking.openURL(url)}>Buy Album</Button>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  headerImageStyle: {
    height: 50,
    width: 50,
    marginLeft: 10,
    marginRight: 10
  },
  headerContentStyle: {
    justifyContent: "space-around"
  },
  headerTextStyle: {
    fontSize: 18,
    color: "black"
  },
  textStyle: {
    color: "black"
  },
  contentImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});

export default AlbumDetail;
