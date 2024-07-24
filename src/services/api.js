import axios from "axios";

const BASE_URL="http://127.0.0.1:8000/api/staffs/"

export async function staffListApi(){

    return await axios.get(BASE_URL)

}

export async function staffDetailApi(id){

    return await axios.get(BASE_URL+`${id}/`)

}

export async function staffCreateApi(data){
    let headers={'Content-Type':'multipart/form-data'}

    return await axios.post(BASE_URL,data,{headers:headers})

}

export async function staffUpdateApi(id,data){
    let headers={'Content-Type':'multipart/form-data'}


    return await axios.put(BASE_URL+`${id}/`,data,{headers:headers})

}

export async function staffDeleteApi(id){

    return await axios.delete(BASE_URL+`${id}/`)

}