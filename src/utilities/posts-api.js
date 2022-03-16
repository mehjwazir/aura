import sendRequest from './send-request';
const BASE_URL = '/api/posts';


export function create(formData) {
  return sendRequest(`${BASE_URL}/experience`, "POST", formData, true);
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


