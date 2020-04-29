import { get, post } from "../api";

//获取所有控件
export const getCList = obj => get("/control/components", obj);
//获取详情信息
export const getDts = obj => get("/form/design/info/" + obj.id , obj.val);
