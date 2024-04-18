import { PersonaEntity } from "../../domain/entities/personas.entity";
import { People } from "../../infrastructure/interfaces/peoplesResponses.interface";


export class PeopleMapper{
    static fromSwapiPeopleToEntity(people:People):PersonaEntity{
        return {
            nombre:people.name,
            altura:people.height,
            masa:people.mass,
            color_pelo:people.hair_color,
            color_piel:people.skin_color,
            color_ojos:people.eye_color,
            anio_nacimiento:people.birth_year,
            genero:people.gender,
            mundo_natal:people.homeworld,
            peliculas:people.films,
            especies:people.species,
            vehiculos:people.vehicles,
            naves_estelares:  people.starships,
            creado:people.created,
            editado:people.edited,
            url:people.url
        }
    }
}