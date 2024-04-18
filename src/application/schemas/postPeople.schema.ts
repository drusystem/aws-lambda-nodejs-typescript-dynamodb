import * as Joi from 'joi';

export const postPeopleSchema = Joi.object({
    nombre: Joi.string().required().messages({
        'any.required':'el campo [nombre] es requerido'
    }),
    altura:Joi.number().required().messages({
        'any.required':'el campo [altura] es requerido'
    }),
    masa:Joi.number().required().messages({
        'any.required':'el campo [masa] es requerido'
    }),
    color_pelo:Joi.string().required().messages({
        'any.required':'el campo [color_pelo] es requerido'
    }),
    color_piel:Joi.string().required().messages({
        'any.required':'el campo [color_piel] es requerido'
    }),
    color_ojos:Joi.string().required().messages({
        'any.required':'el campo [color_ojos] es requerido'
    }),
    anio_nacimiento:Joi.string().required().messages({
        'any.required':'el campo [anio_nacimiento] es requerido'
    }),
    genero:Joi.string().required().messages({
        'any.required':'el campo [genero] es requerido'
    }),
    mundo_natal:Joi.string().required().messages({
        'any.required':'el campo [mundo_natal] es requerido'
    }),
    // peliculas:Joi.array().items(Joi.string().uri()).required(),
    // especies:Joi.array().items(Joi.string().uri()).required(),
    // vehiculos:Joi.array().items(Joi.string().uri()).required(),
    // naves_estelares:Joi.array().items(Joi.string().uri()).required(),
});