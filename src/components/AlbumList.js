import React, { Component } from "react"; // Destaructring
import { ScrollView } from "react-native";
import axios from "axios"; // Library for api calling
import AlbumDetail from "./AlbumDetail"; // AlbumDetail is in current component directory

// Making this component as a class based component cause we need Component lifecycle method
export default class AlbumList extends Component {
  state = { albums: [] }; // Initially defining state album as empty array.

  // Calling api when this componenet lifecycle is called.
  componentWillMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ albums: response.data }));
  }

  // Need to see this
  renderAlbum() {
    // This return statment is returning array of AlbumDetail Component
    return this.state.albums.map(
      // We are using map to return array of AlbumDetail Component.
      album => <AlbumDetail key={album.title} albumDetail={album} /> // Key property is used by the react to know which iteam to update, it should be unique.
    );
  }

  render() {
    // For first time the state will be empty
    console.log(this.state);
    return <ScrollView>{this.renderAlbum()}</ScrollView>;
  }
}
