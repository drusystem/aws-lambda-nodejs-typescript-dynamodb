import axios, {AxiosInstance, AxiosResponse } from 'axios';
import { People, PeoplesResponse } from '../interfaces/peoplesResponses.interface';


export class SwapiPeopleService {
  private axiosInstance: AxiosInstance;

  constructor(private apiUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: apiUrl,
    });
  }

  async fetchData(): Promise<PeoplesResponse> {
    try {
      const response: AxiosResponse<PeoplesResponse> = await this.axiosInstance.get('/people');
      return response.data;
    } catch (error) {
      console.error('Error al obtener la data de https://swapi.py4e.com/api/people :', error);
      throw error;
    }
  }

  async fetchDataById(id:string): Promise<People>{
    try {

      const response: AxiosResponse<People> = await this.axiosInstance.get(`/people/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error al obtener la data de https://swapi.py4e.com/api/people/${id} :`, error);
      throw error;
    }
  }

}
