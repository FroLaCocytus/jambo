import {$authHost} from "./index";


export const updloadDocument = async (listProduct, login) => {

    const requestData = {listProduct: listProduct, login: login};
    const {data} = await $authHost.post('basket/add', requestData)
    return data
}

