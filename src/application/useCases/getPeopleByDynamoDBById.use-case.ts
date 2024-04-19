import { PersonaEntity } from "../../domain/entities/personas.entity";
import { NotFoundError } from "../../domain/exceptions/typeError/NotFoundError";
import { PeopleRepository } from "../../infrastructure/repositories/peopleRepository";
import { DynamoDBService } from "../../infrastructure/services/dynamoDBService";
import { PeopleMapper } from "../mappers/people.mapper";

export const getPeopleByDynamoBDByIdUseCase = async (id:string): Promise<PersonaEntity|null> => {

    const peopleRepository = new PeopleRepository(new DynamoDBService())
    let persona = await peopleRepository.getById(id);
    console.log(`La persona es ${persona}`)
    if(persona ===null || persona === undefined){
        throw new NotFoundError(`No existe el registro de id:${id}`); 
    }
    persona = PeopleMapper.sortAttributesPeople(persona)
    return persona;
};