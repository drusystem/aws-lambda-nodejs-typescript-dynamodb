import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient,GetCommand, GetCommandOutput  } from "@aws-sdk/lib-dynamodb";
const { STAGE } = process.env;

const client = new DynamoDBClient(
        STAGE==="dev"? {endpoint: 'http://localhost:8000'}:{}
    );
const docClient = DynamoDBDocumentClient.from(client);

export class DynamoDBService {

    async createItem(command:PutCommand): Promise<void> {
        try {
            const response = await docClient.send(command);
            console.log(response);
  
        } catch (error) {
        console.error('Error al crear el registro en DynamoDB:', error);
            throw error;
        }
      }
    
    async getItem(command: GetCommand): Promise<GetCommandOutput> {
        try {
            return  await docClient.send(command);
        } catch (error) {
        console.error('Error al obtener el registro de DynamoDB:', error);
            throw error;
        }
    }

}
