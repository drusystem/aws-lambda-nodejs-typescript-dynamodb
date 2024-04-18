import { PersonaEntity } from "../../domain/entities/personas.entity";
import { PeopleRepository } from "../../infrastructure/repositories/peopleRepository";
import { DynamoDBService } from "../../infrastructure/services/dynamoDBService";

export const createPeopleUseCase = async (persona:PersonaEntity): Promise<PersonaEntity> => {
    const peopleRepository = new PeopleRepository(new DynamoDBService())
    const personaCreada = peopleRepository.save(persona);
    return personaCreada;
};