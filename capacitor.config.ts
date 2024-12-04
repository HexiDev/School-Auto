import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "nl.hexidev",
  appName: "AutoControls",
  webDir: "dist",
  backgroundColor: "#000000",
  server: {
    url: "http://192.168.159.42:5173",
    cleartext: true,
  },
};

export default config;
