import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const httpRequest = async (url: string, method: string, body?: any, headers?: any): Promise<any> => {
  const config: AxiosRequestConfig = {
    data: body,
    method,
    url,
    headers
  };

  try {
    const response: AxiosResponse<any> = await axios(config);
    return response.data;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

const handleRequestError = (error: any) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      console.error("Error de respuesta:", error.response.status, error.response.data);
    } else if (error.request) {
      console.error("Error de solicitud:", error.request);
    } else {
      console.error("Error general:", error.message);
    }
  } else {
    console.error("Error general:", error);
  }
};