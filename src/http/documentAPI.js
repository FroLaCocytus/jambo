import {$authHost} from "./index";


export const updloadDocument = async (file, description, roles) => {

  if (file) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('description', description);
      formData.append('roles', JSON.stringify(roles));
    
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };
  
      const { data } = await $authHost.post('document/create', formData, config);
      return data;
    }
}

export const updateDocumentInfo = async (id, description, roles) => {
  const formData = new FormData();
  formData.append('id', id);
  formData.append('description', description);
  formData.append('roles', JSON.stringify(roles));

  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };

  const {data} = await $authHost.put('document/update', formData, config)
  return data
}

export const deleteDocument = async (id) => {
  const formData = new FormData();
  formData.append('id', id);
  
  const {data} = await $authHost.post('document/delete', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return data
}


export const getAllDocuments = async (page) => {
  if (page === 0){
    const {data} = await $authHost.get(`document/all?page=${page}&size=${10}`)
    return data
  } else {
    const {data} = await $authHost.get(`document/all?page=${page-1}&size=${10}`)
    return data
  }
}


