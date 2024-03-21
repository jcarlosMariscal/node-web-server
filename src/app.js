import { envs } from "./config/env.js";
import { startServer } from "./server/server.js";
const main = () => {
  // Iniciar el servidor
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
  });
};
(async () => {
  main();
})();
