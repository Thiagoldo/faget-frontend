import axios, { AxiosInstance } from "axios";
import { ICreateUpdateTerceirizado, ITerceirizado, ITerceirizadosResponse } from "../interfaces/terceirizados.interface";

const baseUrl: string = "http://192.168.137.83:3000";
// const baseUrl: string = "https://faget-backend.onrender.com";
const connection: AxiosInstance = axios.create({ baseURL: baseUrl });

export const getTerceirizados = async (itemsPerPage: number, page: number, nome?: string): Promise<ITerceirizadosResponse> => {
  let url = `${baseUrl}/terceirizados?itemsPerPage=${itemsPerPage}&page=${page}` + (nome ? `&nome=${nome}` : '')
  return connection.get(url).then((response) => response.data);
}

export const getTerceirizadoById = async (id_terceirizado: number): Promise<ITerceirizado> => {
  let url = `${baseUrl}/terceirizados/${id_terceirizado}`;
  return connection.get(url).then((response) => response.data);
}

export const saveTerceirizado = async (terceirizado: ICreateUpdateTerceirizado): Promise<ITerceirizado> => {
  let url = `${baseUrl}/terceirizados`;
  return connection.post(url, terceirizado).then((response) => response.data);
}

export const updateTerceirizado = async (terceirizado: ICreateUpdateTerceirizado): Promise<ITerceirizado> => {
  let url = `${baseUrl}/terceirizados/${terceirizado.id_terceirizado}`;
  return connection.patch(url, terceirizado).then((response) => response.data);
}

export const deleteTerceirizado = async (terceirizado: ICreateUpdateTerceirizado): Promise<ITerceirizado> => {
  let url = `${baseUrl}/terceirizados/${terceirizado.id_terceirizado}`;
  return connection.delete(url).then((response) => response.data);
}