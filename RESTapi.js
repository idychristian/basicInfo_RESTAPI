const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "idongesitchristian5@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/idychristian/basicInfo_RESTAPI"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
