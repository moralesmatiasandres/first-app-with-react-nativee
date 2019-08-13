/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View styles={{ flex: 1 }}>
        <Header headerText={'Albums2'} />
        <AlbumList />   
    </View>
);

AppRegistry.registerComponent('albums2', () => App);
