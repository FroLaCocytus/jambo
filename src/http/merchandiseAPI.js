import {$authHost} from "./index";


export const createMerchandise = async (title, count) => {

    const requestData = {title: title, count: count};
    const {data} = await $authHost.post('merchandise/create', requestData)
    return data
}

export const updateMerchandise = async (id, title, count) => {
  const requestData = {id: id, title: title, count: count};
  const {data} = await $authHost.put('merchandise/update', requestData)
  return data
}

export const deleteMerchandise = async (id) => {
  const requestData = {id: id};
  console.log(id)
  const {data} = await $authHost.post('merchandise/delete', requestData)
  return data
}

export const fetchOne = async (id) => {
  const requestData = {id: id};
  const {data} = await $authHost.post('merchandise/one', requestData)
  return data
}

export const getAllMerchandise = async (page) => {
  console.log(page)
  const {data} = await $authHost.get(`merchandise/all?page=${page-1}&size=${10}`)
  return data
}
