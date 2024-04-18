import { PersonaEntity } from "../../domain/entities/personas.entity";
import { SwapiPeopleService } from "../../infrastructure/services/swapiPeopleService";
import { PeopleMapper } from "../mappers/people.mapper";
const { SWAPI_URL } = process.env;

export const getPeopleBySwapiByIdUseCase = async (id:string): Promise<PersonaEntity> => {
    const swapiPeopleService = new SwapiPeopleService(SWAPI_URL!)
    const result =  await swapiPeopleService.fetchDataById(id)
    const resultadoMapeado = PeopleMapper.fromSwapiPeopleToEntity(result)
    return resultadoMapeado;
};