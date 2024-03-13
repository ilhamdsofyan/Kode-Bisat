const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const keyword = form.elements.query.value;
  const configs = {
    params: { q: keyword },
  };

  const res = await axios.get("http://api.tvmaze.com/search/shows", configs);
  const data = res.data;

  const rowDiv = document.querySelector("#tv-shows");

  data.forEach((value) => {
    const column = document.createElement("div");
    column.setAttribute("id", `key-${value.show.id}`);
    column.setAttribute("class", `col-lg-3`);

    const h1 = document.createElement("h1");
    h1.append(value.show.name);

    column.append(h1);

    rowDiv.append(column);
  });
});

const getImage = (show) => {};
