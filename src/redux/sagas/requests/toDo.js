import Axios from "axios";
export function requestGetToDo() {
  return Axios.request({
    method: "get",
    url: "http://localhost:7000/toDo",
  });
}
export function requestPostToDo(data) {
  return Axios.request({
    method: "post",
    url: "http://localhost:7000/toDo",
    data,
  });
}
