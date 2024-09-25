import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/data-stack";

const app = new App();
new DataStack(app, "DataStack-dev", {
  environment: "dev",
});
new DataStack(app, "DataStack-prod", {
  environment: "prod",
});
