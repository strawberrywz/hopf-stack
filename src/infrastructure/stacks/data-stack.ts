import { CfnOutput, Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, BillingMode, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";

export class DataStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const chatHistoryTable = new Table(this, "ChatHistoryTable", {
      tableName: "hopf-chat-history",
      partitionKey: { name: "userId", type: AttributeType.STRING },
      sortKey: { name: "chatId", type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    chatHistoryTable.addGlobalSecondaryIndex({
      indexName: "CreatedAtIndex",
      partitionKey: { name: "userId", type: AttributeType.STRING },
      sortKey: { name: "chatId", type: AttributeType.STRING },
    });

    new CfnOutput(this, "ChatHistoryTableName", {
      value: chatHistoryTable.tableName,
      description: "Name of the chat history table",
    });
  }
}
