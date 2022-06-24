import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
function App() {
  return (
    <View style={styles.bgcolor}>
      <Text style={styles.text}> Hello World </Text>
      <Text style={styles.text}> VM </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: '#91E9EC',
  },
  text: {
    fontSize: 24,
  },
  description: {
    justifyContent: 'center',
    color: 'red',
  },
});
export default App;
