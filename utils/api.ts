export default function useApi() {
  const config = useRuntimeConfig();
  const baseURL = config.public.baseUrl;

  async function fetchData(path: string, method: any) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const response:any = await useFetch(path, {
          method,
          baseURL: baseURL
        });
        resolve(response.data._rawValue.data);
      } catch (error) {
        reject(error);
      }
    })
  }

  async function getResource(path: string) {
    return fetchData(path, 'GET');
  }

  return {
    getResource
  }


}