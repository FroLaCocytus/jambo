import {$authHost} from "./index";


export const addMerchandise = async (name, count) => {

    const requestData = {name: name, count: count};
    const {data} = await $authHost.post('merchandise/warehouse/add', requestData)
    return data
}

export const updateMerchandiseInfo = async (id, name, count) => {
  const requestData = {id: id, name: name, count: count};
  const {data} = await $authHost.post('merchandise/warehouse/update', requestData)
  return data
}

export const deleteMerchandise = async (id) => {
  const requestData = {id: id};
  const {data} = await $authHost.post('merchandise/warehouse/delete', requestData)
  return data
}

export const fetchOne = async (id) => {
  const requestData = {id: id};
  const {data} = await $authHost.post('merchandise/warehouse/one', requestData)
  return data
}

export const fetchMerchandise = async () => {
  const {data} = await $authHost.get('merchandise/warehouse')
  return data
}
