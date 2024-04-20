import axios from 'axios';
import { baseUrl } from '../utils/constants';

const Headers = {
  Header: {
    'Content-Type': 'application/json',
  },
  Header2: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
};
const ApiRequest = async (data) => {
  // This will remove authorization and store id
  const result = await axios.post(baseUrl, data, {
    headers: Headers.Header2,
  });
  return result;
};

export default ApiRequest;

