import Koa from "koa";
import KoaCors from "koa2-cors";
import BodyParser from "koa-bodyparser";

async function serverSetUp() {
  const server: Koa = new Koa();
  middlewares(server);
  await startServer(server);
}

function middlewares(server: Koa) {
  server.use(BodyParser());
  server.use(KoaCors());
}

async function startServer(server: Koa) {
  try {
    const serverPort = 5000;
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
