import { useState, useEffect, useContext } from "react";
import { httpRequest } from "../utilities/HttpRquest";
import { MyContext } from "../context/Provider";

const baseUrl = "http://ec2-54-147-35-41.compute-1.amazonaws.com:443/";

const useHttp = (route: string, method: string, initialData?: any) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const token = useContext(MyContext).context.token;
  const headers = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : undefined;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await httpRequest(
          baseUrl + route,
          method,
          initialData,
          headers,
        );
        setData(responseData);
      } catch (error) {
        setError("Error al obtener los datos");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [baseUrl + route, method]);

  return { data, isLoading, error };
};

export default useHttp;
