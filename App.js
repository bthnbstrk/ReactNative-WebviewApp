import React, {useRef} from 'react';
import {SafeView, Text, View, Button, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          backgroundColor: '#212329',
          padding: 10,
          fontSize: 30,
          color: '#62DAFB',
          textAlign: 'center',
        }}>
        TopBar
      </Text>
      <WebView
        source={{uri: 'https://reactnative.dev/'}}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
