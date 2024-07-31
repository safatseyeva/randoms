export default defineEventHandler(async event => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const data = await $fetch(url);
  return data;
});