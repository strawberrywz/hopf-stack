import { Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";
import { getSuffixFromStack } from "../utilts";

interface DataStackProps extends StackProps {
  environment: "dev" | "prod";
}

export class DataStack extends Stack {
  constructor(scope: Construct, id: string, props: DataStackProps) {
    super(scope, id, props);

    const suffix = getSuffixFromStack(this);
    const tableName = `hopf-algebra-${props.environment}-table`;

    new Table(this, "HopfTable", {
      partitionKey: {
        name: "id",
        type: AttributeType.STRING,
      },
      tableName: tableName,
    });
  }
}
