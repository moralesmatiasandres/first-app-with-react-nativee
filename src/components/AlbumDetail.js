import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { 
      tamañoLetraTitulo, 
      imagenAlbum, 
      headerStyle, 
      tamañoLetraArtista, 
      imagenCancion, 
      bordeDeImagen 
    } = styles;

    return (
    <Card>
      <CardSection>
        <View style={bordeDeImagen}>
          <Image 
          style={imagenAlbum}
          source={{ uri: thumbnail_image }} 
          />
        </View>
         <View style={headerStyle}>
           <Text style={tamañoLetraTitulo}>{title}</Text>
           <Text style={tamañoLetraArtista}>{artist}</Text>
         </View>
      </CardSection>

      <CardSection>
        <Image
           style={imagenCancion}
           source={{ uri: image }} 
        />
      </CardSection>
      
      <CardSection>
        <Button presionarBoton={() => Linking.openURL(url)}>
          Comprar Ahora
        </Button>
      </CardSection>
      
    </Card>
    );
};

const styles = {
    tamañoLetraTitulo: {
      fontSize: 20,
      //color: 'black',
      //height: 20,
    },

    headerStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },

    imagenAlbum: {
      height: 50,
      width: 50,
    },

    bordeDeImagen: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
      //height: null, 
      //width: '20%',
    },

    tamañoLetraArtista: {
      fontSize: 18,
    },

    imagenCancion: {
      height: 300,
      flex: 1,
      width: null,
      //resizeMode: 'repeat',
    },
};
export default AlbumDetail;
