export default defineEventHandler(async event => {
  const id = getRouterParam(event, 'id');
  const url = `https://fakestoreapi.com/products/${id}`;
  const body = await readBody(event);

  const data = await $fetch(url, {
    method: 'put', 
    body
  });
  return data;
});