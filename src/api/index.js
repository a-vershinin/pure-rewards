// Mock
import { data } from "./data";

export const api = Object.freeze({
  rewards: {
    fetch: () => ({ status: 200, json: () => data })
  }
});
