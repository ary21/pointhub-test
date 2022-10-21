import * as server from "../../infrastructure/express/server";

export const configApp = () => {
  // Define more app config & use infra here
  const infra = server;
  return infra;
}