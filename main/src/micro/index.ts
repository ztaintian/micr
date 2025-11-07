// main > micro > index.ts
import { registerMicroApps, start } from "qiankun";
import type { ObjectType, RegistrableApp } from "qiankun";

const appConfig: RegistrableApp<ObjectType>[] = [
  {
    name: "app1",
    entry: "http://localhost:5555/",
    container: "#yourContainer",
    activeRule: "/app1",
  }
];

registerMicroApps(appConfig);

start({
  sandbox: {
    experimentalStyleIsolation: true,
  },
});
