import { urls } from './urls'

export async function fetchUsers() {
  const response = await fetch(urls.users);
  return await response.json();
}
