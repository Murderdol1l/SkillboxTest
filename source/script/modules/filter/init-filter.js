
import { fetchData } from "./fetch-data";
import { renderList } from "./render-list";

const initFilter = () => {

  const filterList = Array.from(document.getElementsByClassName("courses__filter-link"));
  let filterValue = new URL(window.location.href).hash || null;

  if (filterValue) {
    filterList.forEach((el) => {
      if (filterValue === new URL(el.href).hash){
        el.classList.toggle("is-active");
      } else {
        el.classList.remove("is-active");
      }
    })
    fetchData(filterValue).then((data)=>renderList(data));
  } else {
    fetchData().then((data)=>renderList(data));
  }

  filterList.forEach((filter) => {
    filter.addEventListener("click", (el) => {
      let filter = new URL(el.target.href).hash;
      filterList.forEach(e=>{ e.classList.remove("is-active"); });
      el.target.classList.toggle("is-active");

      fetchData(filter).then((data)=>{
        renderList(data);
      })
    })
  })
};

export { initFilter };
