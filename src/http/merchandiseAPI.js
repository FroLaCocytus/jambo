import {$authHost} from "./index";


export const addMerchandise = async (name, count) => {

    const requestData = {name: name, count: count};
    const {data} = await $authHost.post('merchandise/warehouse', requestData)
    return data
}

export const fetchMerchandise = async () => {
  const {data} = await $authHost.get('merchandise/warehouse')
  return data
}
