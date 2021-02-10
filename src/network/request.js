import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://106.14.171.180:8081",
    timeout: 50000
  });
  return instance(config);
}
