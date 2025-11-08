import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, Text, View, TextInput, Button, Alert, TouchableOpacity,ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';  


const App =() => {
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');

  const handleSubmit = () => {
    
    let score = 0;
    if (q1 === 'lambo') score++;
    if (q2 === 'maserati') score++;
    if (q3 === 'bugatti') score++;

    Alert.alert('Result', `You have ${score} correct answers!`);
  };
  return (

    <View>
      
     
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <FontAwesome6 name="car" size={28} color="#000" />
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }}>Car Quiz</Text>
      </View>

      
      <ScrollView>
      <Text>What car is this?</Text>
      <Image style={{width: 400, height: 500}} source={require('./img/lambo.jpg')} />
      <Picker selectedValue={q1} onValueChange={(value) => setQ1(value)}>
        <Picker.Item label="Select an item..." value="" color="gray" />
        <Picker.Item label="lambo"value="lambo"></Picker.Item>
        <Picker.Item label ="maserati" value="maserati"></Picker.Item>
        <Picker.Item label ="bugatti" value="bugatti"></Picker.Item>
      </Picker>

      <Text>What car is this?</Text>
      <Image style={{width: 400, height: 500}} source={require('./img/maserati.jpg')} />
      <Picker selectedValue={q2} onValueChange={(value) => setQ2(value)}>
        <Picker.Item label="Select an item..." value="" color="gray" />
        <Picker.Item label="lambo"value="lambo"></Picker.Item>
        <Picker.Item label ="maserati" value="maserati"></Picker.Item>
        <Picker.Item label ="bugatti" value="bugatti"></Picker.Item>
      </Picker>

      <Text>What car is this?</Text>
      <Image style={{width: 500, height: 500}} source={require('./img/bugatti.jpg')} />
      <Picker selectedValue={q3} onValueChange={(value) => setQ3(value)}>
        <Picker.Item label="lambo"value="lambo"></Picker.Item>
        <Picker.Item label ="maserati" value="maserati"></Picker.Item>
        <Picker.Item label ="bugatti" value="bugatti"></Picker.Item>
      </Picker>

       <Button title="Submit Answers" onPress={handleSubmit} />
      <StatusBar translucent={false} />
      


      
      </ScrollView>
    </View>
    
  )
}  



export default App;

