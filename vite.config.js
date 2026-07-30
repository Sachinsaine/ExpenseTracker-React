// import { defineConfig } from "vite";
// import react, { reactCompilerPreset } from "@vitejs/plugin-react";
// import babel from "@rolldown/plugin-babel";

// export default defineConfig({
//   plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
// });

import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
});
