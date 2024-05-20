import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DigimonCard from './components/DigimonCard';


export default function App() {
  const betamonData={
    image:require("./assets/betamon.png"),
    name:"Betamon",
    color:"blue",
    dp:1000,
    level:3,
    number:"BT15-022 U"
  }
  const lilithmonData={
    image:require("./assets/lilithmon.jpg"),
    name:"Lillithmon",
    color:"Purple",
    dp:11000,
    level:6,
    number:"BT3-091 SR"
  }
  const ukkomonData={
    image:require("./assets/ukkomon.jpeg"),
    name:"Ukkomon",
    color:"White",
    dp:2000,
    level:3,
    number:"P-123 P"
  }
  const veemonData={
    image:require("./assets/veemon.png"),
    name:"Veemon",
    color:"Blue",
    dp:1000,
    level:3,
    number:"P-117 P"
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
          <DigimonCard {...betamonData}/>
          <DigimonCard {...lilithmonData}/>
          <DigimonCard {...ukkomonData}/>
          <DigimonCard {...veemonData}/>
      </ScrollView>
    </SafeAreaView>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:Platform.OS==='android' ? 25:0
    
  },
});
