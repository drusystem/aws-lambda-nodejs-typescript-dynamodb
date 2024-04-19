import { APIGatewayProxyHandler,APIGatewayEvent,APIGatewayProxyResult} from 'aws-lambda'
import { postPeopleSchema } from '../application/schemas/postPeople.schema';
import { createPeopleUseCase } from '../application/useCases/createPeople.use-case';
import { AllExceptionsFilter } from '../domain/exceptions/AllExceptionsFilter';


export const postPeopleHandler:APIGatewayProxyHandler = async (event: APIGatewayEvent): Promise<APIGatewayProxyResult> => {
    
    try {

        const requestBody = JSON.parse(event.body || '{}');
        const { error, value: personaDataPost } = postPeopleSchema.validate(requestBody,{ abortEarly: false });

        if (error) {
            const errors = error.details.map(error => error.message);
            return {
                statusCode: 400,
                body: JSON.stringify({ message: errors }),
            };
        }

        const personaCreada = await createPeopleUseCase(personaDataPost);

        return {
            statusCode: 201,
            body: JSON.stringify({
                data:personaCreada
            }),
        };
    } catch (error) {
        return AllExceptionsFilter.typeError(error);
    }
};