export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "test" | "dev" | "production";
      PORT: string;
    }
  }
}
