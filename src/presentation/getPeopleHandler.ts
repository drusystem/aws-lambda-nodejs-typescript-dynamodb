import { APIGatewayEvent, APIGatewayProxyHandler,APIGatewayProxyResult} from 'aws-lambda'
import { getPeopleBySwapiByIdUseCase } from '../application/useCases/getPeopleBySwapiById.use-case';
import { getPeopleByDynamoBDByIdUseCase } from '../application/useCases/getPeopleByDynamoDBById.use-case';

export const getPeopleHandler:APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    
    try {

        const id = event.pathParameters!.id
        const {provider} = event.headers
        
        let resultado

        if(provider==="external_api"){
            resultado = await getPeopleBySwapiByIdUseCase(id!)
        }else{
            resultado = await getPeopleByDynamoBDByIdUseCase(id!)
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                resultado
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body:  JSON.stringify({error:"Internal Error"})
        };
    }
};