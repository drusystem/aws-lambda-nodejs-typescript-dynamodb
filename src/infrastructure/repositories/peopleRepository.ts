import { DynamoDBService } from '../services/dynamoDBService';
import { v4 as uuidv4 } from 'uuid';
const { DYNAMODB_TABLE } = process.env;
import { DynamoDB } from 'aws-sdk'
import { PersonaEntity } from '../../domain/entities/personas.entity';


export class PeopleRepository {

    constructor(private dynamoDBService: DynamoDBService) {}

    async save(item: PersonaEntity): Promise<PersonaEntity> {

        const id = uuidv4();
        item.id = id;

        console.log(item)

        const params: DynamoDB.DocumentClient.PutItemInput = {
          TableName: DYNAMODB_TABLE!,
          Item: item
        };
        await this.dynamoDBService.createItem(params);

        return item;
    }

    async getById(id:string):Promise<PersonaEntity|null>{
        const params: DynamoDB.DocumentClient.GetItemInput = {
            TableName:  DYNAMODB_TABLE!,
            Key: {
              id: id
            },
          };

        const response = await this.dynamoDBService.getItem(params);

        return response.Item as PersonaEntity | null;
    }





}