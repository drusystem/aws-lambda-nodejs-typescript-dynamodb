import { PersonaEntity } from "../../domain/entities/personas.entity";
import { PeopleRepository } from "../../infrastructure/repositories/peopleRepository";
import { DynamoDBService } from "../../infrastructure/services/dynamoDBService";
import { PeopleMapper } from "../mappers/people.mapper";

export const createPeopleUseCase = async (persona:PersonaEntity): Promise<PersonaEntity> => {
    const peopleRepository = new PeopleRepository(new DynamoDBService())
    let personaCreada = await peopleRepository.save(persona)
    personaCreada = PeopleMapper.sortAttributesPeople(personaCreada)
    return personaCreada;
};