import chalk from "chalk";
import fs from "fs";
import path from "path";

const handleError = (res, status, message) => {
  console.log(chalk.redBright(message));
  if (status >= 400) {
    const logDir = "./logs";
    const currentDate = new Date().toISOString().split("T")[0];
    const logFilePath = path.join(logDir, `errors_${currentDate}.txt`);

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
    }

    const logMessage = `[${new Date().toISOString()}] Status ${status}: ${message}\n`;
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error(chalk.redBright("Error writing to log file:", err));
      }
    });
  }
  res.status(status).send(message);
};

export default handleError;
