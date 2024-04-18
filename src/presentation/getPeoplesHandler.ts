import { APIGatewayProxyHandler,APIGatewayProxyResult} from 'aws-lambda'
import { getPeoplesBySwapiUseCase } from '../application/useCases/getPeoplesBySwapi.use-case';

export const getPeoplesHandler:APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
    
    try {
        const resultados = await getPeoplesBySwapiUseCase();

        return {
            statusCode: 200,
            body: JSON.stringify({
                resultados
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body:  JSON.stringify({error:"Internal Error"})
        };
    }
};