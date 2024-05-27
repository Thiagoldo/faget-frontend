import axios, { AxiosInstance } from "axios";
import { ITerceirizadosResponse } from "../interfaces/terceirizados.interface";

// const baseUrl: string = import.meta.env.BACKEND_URL;
const baseUrl: string = "http://192.168.137.83:3000";
const connection: AxiosInstance = axios.create({ baseURL: baseUrl });

export const getTerceirizados = async (itemsPerPage: number, page: number, nome?: string): Promise<ITerceirizadosResponse> => {
  let url = `${baseUrl}/terceirizados?itemsPerPage=${itemsPerPage}&page=${page}` + (nome ? `&nome=${nome}` : '')
  return connection.get(url).then((response) => response.data);

}