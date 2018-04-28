export const urls = {
  users:  'http://careers.picpay.com/tests/mobdev/users',
  payment: 'transaction'
};

export async function fetchUsers() {
  const response = await fetch(urls.users);
  return await response.json();
}
