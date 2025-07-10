import express from 'express';

//Middlewares
import cors from 'cors';

//Routes

const app = express();

app.use(cors());

app.use(express.json());

app.get('/api/v1/paymaya', (req, res) => {
    res.send("Hello from GenieX Paymaya Plugin API")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
