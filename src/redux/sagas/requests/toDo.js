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
  const completedData = data.filter(row => row.completed).map(row => row.value)
  const newData = prevData.map((row) => {
    row.completed = completedData.includes(row.value);
    return row;
  });
  return localStorage.setItem("toDo", JSON.stringify(newData));
}

export function requestDeleteToDo(data) {
  return localStorage.setItem("toDo", JSON.stringify(data));
}



export function requestFilterActiveToDo(data) {
  return localStorage.setItem("filterToDo", JSON.stringify(data));
}

export function requestFilterCompletedToDo(data) {
  return localStorage.setItem("filterToDo", JSON.stringify(data));
}

export function requestFilterClearCompletedToDo(data) {
  return localStorage.setItem("filterToDo", JSON.stringify(data));
}