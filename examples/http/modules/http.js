import { get, post } from "../api";
//获取所有控件
export const getCList = obj => get("/control/controlWeb", obj);

export const getCList2 = obj => post("/control/controlWeb", obj);