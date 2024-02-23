import axios from 'axios';
import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  const handleLedToggle = (status) => {
    console.log('kk')
    axios.post('https://krishtec.onrender.com/led', { status })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  return (
    <View>
      <Button title="Turn On" onPress={() => handleLedToggle('on')} />
      <Button title="Turn Off" onPress={() => handleLedToggle('off')} />
    </View>
  );
};

export default App;
