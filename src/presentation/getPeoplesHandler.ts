import { APIGatewayProxyHandler,APIGatewayProxyResult} from 'aws-lambda'
import { getPeoplesBySwapiUseCase } from '../application/useCases/getPeoplesBySwapi.use-case';
import { AllExceptionsFilter } from '../domain/exceptions/AllExceptionsFilter';

export const getPeoplesHandler:APIGatewayProxyHandler = async (): Promise<APIGatewayProxyResult> => {
    
    try {
        const resultados = await getPeoplesBySwapiUseCase();

        return {
            statusCode: 200,
            body: JSON.stringify({
                data:resultados
            }),
        };
    } catch (error) {
        return AllExceptionsFilter.typeError(error);
    }
};