import { AxiosError } from "axios";
import { NotFoundError } from "./typeError/NotFoundError";

export class AllExceptionsFilter {
    static typeError(error:unknown){
        if (error instanceof AxiosError) {
            return {
              statusCode: error.response!.status,
              body: JSON.stringify({ message: error.message })
            };
          } else if (error instanceof NotFoundError) {
            // Recurso no encontrado
            return {
              statusCode: 404,
              body: JSON.stringify({ message: error.message })
            };
          } else {
            // Error interno del servidor
            return {
              statusCode: 500,
              body: JSON.stringify({ message: 'Ocurrió un error interno.' })
            };
          }
    }
} 