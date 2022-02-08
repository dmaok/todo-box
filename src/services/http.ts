import {HttpClientFactory} from "./factories/http-client.factory";
import {env} from "../config/env";
import {HttpFactory} from "./factories/http.factory";

const httpPlaceholder = new HttpClientFactory(env.apiHost);

httpPlaceholder.errorHandler = (error: Response) => {
  console.info('HTTP error. Status: ' + error.status);
  return Promise.reject(error);
}

export const http = new HttpFactory(httpPlaceholder);
