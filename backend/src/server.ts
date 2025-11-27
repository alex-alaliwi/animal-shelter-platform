import app from "./app";
import { PORT } from "./config";

function startServer() {
  try {
    const server = app.listen(PORT, () => {
      console.log(`Server running successfully on port: ${PORT}`);
    });

    server.on("error", (err) => {
      console.error("Server failed to start:", err.message);
      process.exit(1);
    });
  } catch (err: any) {
    console.error("Unexpected error occurred", err.message);
    process.exit(1);
  }
}

startServer();