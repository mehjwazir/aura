import { getToken } from './users-service';
const BASE_URL = '/api/posts';


export function create(posts) {
  return sendRequest(`${BASE_URL}/experience`, "POST", posts);
}


export function getAll() {
  return sendRequest(`${BASE_URL}/discover`);
}

export function getUsersPost() {
  return sendRequest(`${BASE_URL}/posts`);
}

export function deletePost(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function edit(id, formData) {
  console.log(id);
  console.log(formData);
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}
// export function add(postData) {
//   return sendRequest(BASE_URL, 'POST', postData);
// }

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc. 
  const options = { method };
  if (payload) {
    options.headers = { 'Content-Type': 'application/json' };
    options.body = JSON.stringify(payload);
  }
  const token = getToken();
  if (token) {
    // Ensure that the headers objects exists
    options.headers = options.headers || {};
    // Add the Authorization header
    // Prefacing the token with 'Bearer '
    options.headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, options);
  // res.ok will be false if the status code set to 4xx in the controller action
  if (res.ok) return res.json();
  throw new Error('Bad Request');
}