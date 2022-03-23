import axios from 'axios';

export const requestsAPI = {
  checkboxPost(body: { success: boolean }) {
    return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, body);
  },
};
