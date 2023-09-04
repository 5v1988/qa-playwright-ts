import { defineConfig } from "@playwright/test";

export default defineConfig({
    expect: {
        timeout: 10 * 1000,
    },
});