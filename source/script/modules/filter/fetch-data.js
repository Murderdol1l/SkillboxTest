
const fetchData = (filter="#all") => {
  return fetch('public/projects.json').then((response) => {
    return response.json();
  }).then((data) => {
    if (filter !== "#all") return data.filter((item)=> item.tags.includes(filter));
    return data;
  })
};

export { fetchData };
