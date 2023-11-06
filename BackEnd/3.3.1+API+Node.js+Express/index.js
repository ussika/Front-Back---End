import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define an endpoint to make API requests
app.post('/api/request', async (req, res) => {
  try {
    const { method, url, headers, data } = req.body;
    const response = await axios({
      method,
      url,
      headers,
      data,
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`API Testing Tool is listening on port ${port}`);
});
