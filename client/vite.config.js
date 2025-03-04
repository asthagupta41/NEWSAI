// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import path from "path";
// import tailwindcss from '@tailwindcss/vite'


// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   resolve: {
//     alias: {
//       "@" : Path.resolve(__dirname, "./src"),
//     },
//   },
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path"; // ✅ Correct import for ES Modules
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ Now "path" is properly defined
    },
  },
});
