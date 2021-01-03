import { serverSetUp } from "./setupServer";
import { databaseSetUp } from "./setupDatabase";
import dotenv from "dotenv";

async function init() {
  dotenv.config({});
  await serverSetUp();
  await databaseSetUp();
}

init();
