export default defineEventHandler(async event => {
  const config = useRuntimeConfig(event);
  const query = getQuery(event);
  const {apiNinjaKey} = config;
  const url = 'https://api.api-ninjas.com/v1/celebrity';
  
  const data = await $fetch(url, {
    headers: {
      'X-Api-Key': apiNinjaKey
    },
    query
  });

  return data;
});