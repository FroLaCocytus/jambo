import {$authHost} from "./index";


export const updloadDocument = async (file, description, roles, date) => {

  if (file) {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('description', description);
      formData.append('roles', JSON.stringify(roles));
      formData.append('date', date);
    
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
  
      const { data } = await $authHost.post('document/add', formData, config);
      return data;
    }
}

export const updateDocumentInfo = async (id, description, roles) => {
  const requestData = {id: id, document_description: description, roles: JSON.stringify(roles)};
  const {data} = await $authHost.post('document/update', requestData)
  return data
}

export const deleteDocument = async (id) => {
  const requestData = {id: id};
  const {data} = await $authHost.post('document/delete', requestData)
  return data
}

export const fetchOne = async (id) => {
  const requestData = {id: id};
  const {data} = await $authHost.post('document/one', requestData)
  return data
}

export const fetchDocuments = async () => {
  const {data} = await $authHost.get('document')
  return data
}


