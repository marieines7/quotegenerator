import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React, {useState, useEffect} from 'react';
export default function App() {

  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  const RandomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(res => res.json().then(result => {
      console.log(result.content)
      setAuthor(result.author)
      setQuote(result.content)
      setIsLoading(false);

    }))
  
  }

  useEffect(() => {
    RandomQuote();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.quotebox}>
      <Text style={styles.oftheday}>Quote of the day</Text>
      <FontAwesome5 name='quote-left' style={{fontSize:20, marginBottom: -12}} color="#000"/>
      <Text style={styles.quote}>{Quote}</Text>
      <FontAwesome5 name='quote-right' style={{fontSize:20, textAlign: 'right', marginTop: -20, marginBottom: 20}} color="#000"/>
      <Text style={styles.author}>{Author}</Text>
    <TouchableOpacity onPress={RandomQuote}
      style={styles.button}>
           <Text style={styles.textbutton}>
            {isLoading ? "Loading..." :
           "Generate New Quote"}
            </Text>
    </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quotebox: {
    width:'90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  oftheday: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    color:'#333',
    marginBottom: 20,
    paddingHorizontal: 30,

  },
  quote: {
    color: '#000',
    fontSize: 16,
    lineHeight:26,
    letterSpacing: 1.1,
    fontWeight:'400',
    textAlign:'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#5372F0',
    padding: 20,
    borderRadius:30,
    marginVertical: 20,
  },
  textbutton: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center',
  },
  author:{
    textAlign: 'right',
    fontWeight: '300',
    fontStyle: 'italic',
    fontSize: 16,
    color: '#000'
  }
});
