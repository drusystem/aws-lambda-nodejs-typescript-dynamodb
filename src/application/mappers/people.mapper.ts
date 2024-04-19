import { PersonaEntity } from "../../domain/entities/personas.entity";
import { People } from "../../infrastructure/interfaces/peoplesResponses.interface";


export class PeopleMapper{
    static fromSwapiPeopleToEntity(people:People):PersonaEntity{
        return {
            id:'--',
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
            // creado:people.created,
            // editado:people.edited,
            // url:people.url
        }
    }

    static sortAttributesPeople(persona:PersonaEntity):PersonaEntity{
        return {
            id:persona.id,
            nombre:persona.nombre,
            altura:persona.altura,
            masa:persona.masa,
            color_pelo:persona.color_pelo,
            color_piel:persona.color_piel,
            color_ojos:persona.color_ojos,
            anio_nacimiento:persona.anio_nacimiento,
            genero:persona.genero,
            mundo_natal:persona.mundo_natal,
            peliculas:persona.peliculas,
            especies:persona.especies,
            vehiculos:persona.vehiculos,
            naves_estelares:  persona.naves_estelares,
            // creado:persona.creado,
            // editado:persona.editado,
            // url:persona.url
        }
    }
}