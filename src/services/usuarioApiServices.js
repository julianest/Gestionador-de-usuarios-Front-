import Constants from "../helpers/constants";

export const GetUsuariosService = async (search, offset) => {
  const query = `?search=${search ? search : ''}&offset=${offset ? offset : 0}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const data = await fetch(`${Constants.urlBack}${query}`, options);
  return data.json();
  
  //const response = await fetch(`${process.env.REACT_APP_API_URL}usuarios?${query}`, options);
};

export const GetUsuarioByIdService = async (id) => {
  const options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
  };
  const data = await fetch(`${Constants.urlBack}/${id}`, options);
  return data.json();
}

export const CreateUsuariosService = async (body) => {
  const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };
  const data = await fetch(Constants.urlBack, options);
  return data.json();
}

export const UpdateUsuariosService = async (id, body) => {    
  const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };
  const data = await fetch(`${Constants.urlBack}/${id}`, options);
  return data.json();
}

export const DeleteUsuariosService = async (id) => {
  const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
  };
  const data = await fetch(`${Constants.urlBack}/${id}`, options);
  return data.json();
}
