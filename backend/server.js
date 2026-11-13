// Pika hyrëse e serverit
const app = require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveri po punon në http://localhost:${PORT}`);
});
