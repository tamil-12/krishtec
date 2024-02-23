import axios from 'axios';
import React from 'react';
import { Button, View } from 'react-native';

const App = () => {
  const handleLedToggle = (status) => {
    axios.post('http://localhost:3000/led', { status })
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
