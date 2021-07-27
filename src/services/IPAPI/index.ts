import { AxiosResponse } from "axios";
import { GET_LOCATION } from "./constants";
import api from "./api";
import { HttpResponseGetLocation } from "../../models/Location";

const IPAPIService = {
  getLocation: (): Promise<AxiosResponse<HttpResponseGetLocation>> => {
    return new Promise((resolve, reject) => {
      api
        .get(GET_LOCATION)
        .then((res) => resolve(res))
        .catch((error) => reject(error));
    });
  },
};

export default IPAPIService;
