import './App.css';
import { View , Text ,StyleSheet } from 'react-native';
function App() {
  
  return (
    <View style={styles.bgcolor}>
      <Text style={styles.text}> Hello World </Text>
      <div>
        <p style={styles.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </View>
  );
}
const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor:'#91E9EC',
  },
  text:{
    fontSize:24,
  },
  description:{
    justifyContent:'center',
    color:"red",
  }
});
export default App;
