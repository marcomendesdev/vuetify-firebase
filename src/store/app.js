import { defineStore } from 'pinia';
import axios from 'axios';

export const useUsersStore = defineStore({
  id: 'users',
  state: () => ({
    users: []
  }),
  actions: {
    async fetchUsers() {
      try {
        const {data} = await axios.get(import.meta.env.VITE_API_URL);
        console.log('Data:',data);
        const {users} = data;
        this.users = users;
      } catch (error) {
        console.error(error);
      }
    }
  }
});
