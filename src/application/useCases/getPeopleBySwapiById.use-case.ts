import { PersonaEntity } from "../../domain/entities/personas.entity";
import { NotFoundError } from "../../domain/exceptions/typeError/NotFoundError";
import { SwapiPeopleService } from "../../infrastructure/services/swapiPeopleService";
import { PeopleMapper } from "../mappers/people.mapper";
const { SWAPI_URL } = process.env;

export const getPeopleBySwapiByIdUseCase = async (id:string): Promise<PersonaEntity|null> => {
    const swapiPeopleService = new SwapiPeopleService(SWAPI_URL!)
    const result =  await swapiPeopleService.fetchDataById(id)

    if(result ===null){
        throw new NotFoundError(`No existe el registro de id:${id}`)
    }

    const resultadoMapeado = PeopleMapper.fromSwapiPeopleToEntity(result)
    resultadoMapeado.id = id;
    return resultadoMapeado;
};