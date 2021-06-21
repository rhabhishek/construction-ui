const baseUrl = 'http://localhost:3000';
const headers = new Headers();
headers.append("Content-Type", "application/json");

export const getConstructions = () => {
  return fetch(`${baseUrl}/api/constructions`).then(response => response.json());

}

export const getParts = () => {
  return fetch(`${baseUrl}/api/parts`).then(response => response.json());
}

export const createConstruction = (construction) => {
  return fetch(`${baseUrl}/api/constructions`, {
    method: 'POST',
    headers,
    body: JSON.stringify(construction)
  }).then(response => response.json());
}

export const deleteConstruction = (id) => {
  return fetch(`${baseUrl}/api/constructions/${id}`, {method: 'DELETE', headers}).then(response => response.json());
}

export const updateConstruction = (id, construction) => {
  return fetch(`${baseUrl}/api/constructions/${id}`, {method: 'PATCH', headers , body: JSON.stringify(construction)}).then(response => response.json());
}