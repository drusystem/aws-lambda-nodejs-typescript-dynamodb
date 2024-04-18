import { APIGatewayEvent, APIGatewayProxyHandler,APIGatewayProxyResult} from 'aws-lambda'
import { getPeopleBySwapiByIdUseCase } from '../application/useCases/getPeopleBySwapiById.use-case';

export const getPeopleHandler:APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    
    try {

        const id = event.pathParameters!.id

        const resultado = await getPeopleBySwapiByIdUseCase(id!)

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