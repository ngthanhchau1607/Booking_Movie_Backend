const app = require("./app");
const connectDB = require("./config/db");

// Sử dụng port từ biến môi trường Render
const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
