
import dotenv from "dotenv"; // The imported dotenv package allows you to load environment variables from a .env file into the environment when running a JavaScript application.
dotenv.config();  //The line dotenv.config(); invokes the config function from the dotenv package, which reads the contents of the .env file and adds the environment variables defined in it to the current Node.js process environment.

//his enables you to access these environment variables within your JavaScript code using process.env.<variable_name>.