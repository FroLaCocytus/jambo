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

export const fetchDocuments = async () => {
  const {data} = await $authHost.get('document')
  return data
}
