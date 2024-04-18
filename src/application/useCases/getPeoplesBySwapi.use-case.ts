import { PersonasEntity } from "../../domain/entities/personas.entity";
import { SwapiPeopleService } from "../../infrastructure/services/swapiPeopleService";
import { PeoplesMapper } from "../mappers/peoples.mapper";
const { SWAPI_URL } = process.env;

export const getPeoplesBySwapiUseCase = async (): Promise<PersonasEntity> => {
    const swapiPeopleService = new SwapiPeopleService(SWAPI_URL!)
    const result =  await swapiPeopleService.fetchData()
    const resultadoMapeado = PeoplesMapper.fromSwapiPeoplesToEntity(result);
    return resultadoMapeado;
};