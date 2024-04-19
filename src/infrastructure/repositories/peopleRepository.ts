import { DynamoDBService } from '../services/dynamoDBService';
import { v4 as uuidv4 } from 'uuid';
const { DYNAMODB_TABLE } = process.env;
import { PutCommand,GetCommand } from "@aws-sdk/lib-dynamodb";
import { PersonaEntity } from '../../domain/entities/personas.entity';


export class PeopleRepository {

    constructor(private dynamoDBService: DynamoDBService) {}

    async save(item: PersonaEntity): Promise<PersonaEntity> {

        const id = uuidv4();
        item.id = id;

        const command  = new PutCommand( {
          TableName: DYNAMODB_TABLE!,
          Item: item
        })
        await this.dynamoDBService.createItem(command );

        return item;
    }

    async getById(id:string):Promise<PersonaEntity|null>{
        const command= new GetCommand( {
            TableName:  DYNAMODB_TABLE!,
            Key: {
              id: id
            },
          })

        const response = await this.dynamoDBService.getItem(command);

        return response.Item as PersonaEntity | null;
    }





}