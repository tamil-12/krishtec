const express = require('express');
const cors = require('cors');
const mqtt = require('mqtt');

const app = express();
const client = mqtt.connect("mqtt://mqtt.eclipseprojects.io:1883");

app.use(express.json());
app.use(cors());

app.post('/led', (req, res) => {
  const { status } = req.body;
  const message = status === 'on' ? 'LED turned on' : 'LED turned off';

  // Publish message to MQTT broker
  client.publish('led-control', status);

  res.send(message);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
