import axios from 'axios';
import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [message, setMessage] = useState('');

  const handleLedToggle = (status) => {
    axios.post('https://krishtec.onrender.com/led', { status })
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  };

  const sendMessage = () => {
    axios.post('https://krishtec.onrender.com/send-message', { message })
      .then(response => {
        console.log('Message sent:', response.data);
        // Clear the input field after successful sending
        setMessage('');
      })
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.onButton]}
          onPress={() => handleLedToggle('on')}
        >
          <Text style={styles.buttonText}>ON</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.offButton]}
          onPress={() => handleLedToggle('off')}
        >
          <Text style={styles.buttonText}>OFF</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text here..."
          placeholderTextColor="gray"
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  onButton: {
    backgroundColor: 'green',
  },
  offButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: 'lightgray', // Added background color
  },
});

export default App;
