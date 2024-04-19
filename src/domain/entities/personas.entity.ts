export interface PersonasEntity {
    conteo:number;
    siguiente:string;
    anterior:null;
    resultados:PersonaEntity[]
}


export interface PersonaEntity {
    id:string;
    nombre: string;
    altura:string;
    masa:string;
    color_pelo:string;
    color_piel:string;
    color_ojos:string;
    anio_nacimiento:string;
    genero:Gender;
    mundo_natal:string;
    peliculas:      string[];
    especies:    string[];
    vehiculos:   string[];
    naves_estelares:  string[];
    // creado:    Date;
    // editado:     Date;
    // url:        string;
}

export enum Gender {
    Female = "female",
    Male = "male",
    NA = "n/a",
}