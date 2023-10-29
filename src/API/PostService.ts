import axios from 'axios';

export default class PostService {
  static async getAll() {
    const response = await axios.get('https://swapi.dev/api/people');
    return response;
  }
}
