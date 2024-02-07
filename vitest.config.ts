import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
    exclude: [
      "node_modules",
      "dist",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
    ],
    environment: "happy-dom",
  },
});
