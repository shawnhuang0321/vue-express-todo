import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: process.env.PORT || `http://localhost:8081/api`,
    validateStatus: (status) => {
      console.log(status);
      return true;
    }
  })
}
