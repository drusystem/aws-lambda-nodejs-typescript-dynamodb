import { PersonasEntity } from "../../domain/entities/personas.entity";
import { PeoplesResponse } from "../../infrastructure/interfaces/peoplesResponses.interface";
import { PeopleMapper } from "./people.mapper";


export class PeoplesMapper{
    static fromSwapiPeoplesToEntity(peoples:PeoplesResponse):PersonasEntity{
        return {
            conteo:peoples.count,
            siguiente:peoples.next,
            anterior:peoples.previous,
            resultados:peoples.results.map(people => PeopleMapper.fromSwapiPeopleToEntity(people))
        }
    }
}