

// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
import "dotenv/config";
import app from "./src/app.js";


// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hardcode it to 3000
const PORT = process.env.PORT || 5051;

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
