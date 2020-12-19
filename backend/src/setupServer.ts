import Koa from "koa";
import KoaCors from "koa2-cors";
import BodyParser from "koa-bodyparser";

import { registerRoutes } from "./routes";

async function serverSetUp() {
  const server: Koa = new Koa();
  middlewares(server);
  await startServer(server);
}

function middlewares(server: Koa) {
  server.use(BodyParser());
  server.use(KoaCors());

  const routes = registerRoutes().routes();
  server.use(routes);
}

async function startServer(server: Koa) {
  try {
    const serverPort: number = 5000;
    const serverStarted: Promise<void> = new Promise((resolve) => {
      server.listen(serverPort, resolve);
    });
    await serverStarted;
    console.log(`Server is running on port ${serverPort}`);
  } catch (error) {
    console.log(error);
    return error;
  }
}

export { serverSetUp };
