import ngrok from "@ngrok/ngrok";
import dotenv from "dotenv";
dotenv.config();

export const exposeApp = async (port) => {
  try {
    const listener = await ngrok.connect({
      addr: port,
      authtoken: process.env.NGROK_AUTHTOKEN,
    });
    return { url: listener.url() };
  } catch (error) {
    if (error.message && error.message.includes("failed to start tunnel")) {
      throw new Error("Ngrok tunnel limit reached. Please try again later.");
    }
    throw new Error("Failed to expose application via Ngrok.");
  }
};