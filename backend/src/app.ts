import { serverSetUp } from "./setupServer";
import { databaseSetUp } from "./setupDatabase";

async function init() {
  await serverSetUp();
  await databaseSetUp();
}

init();
