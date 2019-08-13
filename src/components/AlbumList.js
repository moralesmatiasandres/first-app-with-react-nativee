import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = { albums2: [] };
    componentDidMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums2: response.data }));
    }
    renderAlbums() {
      return this.state.albums2.map((album) =>
        <AlbumDetail 
          key={album.title} 
          album={album} 
        />);
    }
    render() {
       console.log(this.state);
       
       return (
          <ScrollView>
            {this.renderAlbums()}
          </ScrollView>   
      );
    }  
}

/*const styles = {
      textStyle: {
        fontSize: 20,
        color: 'white',
      },
};*/

export default AlbumList;
