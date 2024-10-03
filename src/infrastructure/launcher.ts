import { App } from "aws-cdk-lib";
import { DataStack } from "./stacks/data-stack";
import { AuthStack } from "./stacks/auth-stack";

const app = new App();
new AuthStack(app, "AuthStack");
new DataStack(app, "DataStack");
