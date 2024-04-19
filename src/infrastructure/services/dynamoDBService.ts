import { DynamoDB } from 'aws-sdk'

export class DynamoDBService {
    private dynamoDB: DynamoDB.DocumentClient;

    constructor() {
      this.dynamoDB = new DynamoDB.DocumentClient(
        {
            endpoint: 'http://localhost:8000',
        }
      );
    }

    async createItem(params: DynamoDB.DocumentClient.PutItemInput): Promise<void> {
        try {
            await this.dynamoDB.put(params).promise();
        } catch (error) {
        console.error('Error al crear el registro en DynamoDB:', error);
            throw error;
        }
      }
    
    async getItem(params: DynamoDB.DocumentClient.GetItemInput): Promise<DynamoDB.DocumentClient.GetItemOutput> {
        try {
            return await this.dynamoDB.get(params).promise();
        } catch (error) {
        console.error('Error al obtener el registro de DynamoDB:', error);
            throw error;
        }
    }

}
