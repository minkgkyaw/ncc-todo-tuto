import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const reactSvgPlugin = require("vite-plugin-react-svg");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactSvgPlugin(), react()],
});
