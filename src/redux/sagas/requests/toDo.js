export function requestGetToDo() {
  return localStorage.getItem("toDo");
}
export function requestPostToDo(data) {
  const prevData = JSON.parse(localStorage.getItem("toDo"));
  const newData = [...prevData, data];
  return localStorage.setItem("toDo", JSON.stringify(newData));
}
export function requestCompleteToDo(data) {
  const prevData = JSON.parse(localStorage.getItem("toDo"));

  const newData = prevData?.map((row) => {
    if (data.includes(row.value)) {
      row.completed = !row.completed;
    }
    return row;
  });
  console.log(newData, "555555555");
  return localStorage.setItem("toDo", JSON.stringify(newData));
}
