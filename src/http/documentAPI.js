import {$authHost} from "./index";


export const updloadDocument = async (file, description, roles) => {

    if (file) {
        const formData = new FormData();
        formData.append('document', file);
        formData.append('description', description);
        formData.append('roles', JSON.stringify(roles));
      
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };
    
        const { data } = await $authHost.post('document/add', formData, config);
        return data;
      }
}

    // const requestData = {document: file, description: description, roles: roles};
