import { writable } from 'svelte/store';
import axios from 'axios';

// States
export const data = writable([
  { title: 'The First Post', description: 'This is my first post' },
  { title: 'The Second Post', description: 'This is my second post' },
  { title: 'The Third Post', description: 'This is my third post' },
]);
export const isLoading = writable(false);
export const message = writable('');

// Actions
export const fetchData = () => {
  isLoading.set(true);

  const options = {
    url: 'https://api.github.com/users',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  axios(options)
    .then((res) => {
      const result = res.data;
      data.set(result);
      isLoading.set(false);
    })
    .catch((err) => {
      console.log(err);
      isLoading.set(false);
    });
};
