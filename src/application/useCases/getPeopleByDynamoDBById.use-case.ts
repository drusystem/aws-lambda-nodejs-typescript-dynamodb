import { PersonaEntity } from "../../domain/entities/personas.entity";
import { NotFoundError } from "../../domain/exceptions/NotFoundError";
import { PeopleRepository } from "../../infrastructure/repositories/peopleRepository";
import { DynamoDBService } from "../../infrastructure/services/dynamoDBService";

export const getPeopleByDynamoBDByIdUseCase = async (id:string): Promise<PersonaEntity|null> => {

    const peopleRepository = new PeopleRepository(new DynamoDBService())
    const persona = peopleRepository.getById(id);
    if(persona ===null){
        throw new NotFoundError(`No existe el registro de id:${id}`); 
    }
    return persona;
};