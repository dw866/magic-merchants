import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), eslint({ lintOnStart: true })],
    server: {
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
});
