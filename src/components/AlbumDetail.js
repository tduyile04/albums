import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { 
    headerContentStyle, 
    thumbnailImageStyle, 
    thumbnailContainerStyle, 
    headerTextStyle,
    imageStyle
  } = style;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image 
            source={{ uri: album.thumbnail_image }}
            style={thumbnailImageStyle}
          />
        </View>      
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{album.title}</Text>
          <Text>{album.artist}</Text>
        </View>
      </CardSection> 

      <CardSection>
        <Image 
          source={{ uri: album.image }}
          style={imageStyle}
        />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(album.url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const style = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailImageStyle: {
    width: 50,
    height: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
