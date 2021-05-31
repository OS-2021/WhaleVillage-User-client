import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default ({ link }) => {
    console.log("INSIDE PLAYER : " + link);
    if(link === ""){
      return <View style={Component.Video}><Text>No Video</Text></View>
    }
    return (
        <View style={Component.Video}>
          <WebView
            javaScriptEnabled={true}
            useWebKit={true}
            domStorageEnabled={true}
            allowsInlineMediaPlayback={true}
            source={{ uri: link }}
          />
        </View>
    );
}

const Component = StyleSheet.create({
    Video: { 
      paddingTop: 10,
      width: 350, 
      height: 207,
    }
  });