fetch("https://swapi.info/api/people")
  .then((res) => {
    if (!res.ok) {
      throw Error("Galat");
    }

    console.log(res);

    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error", err);
  });

const getPeoples = async () => {
  const res = await fetch("https://swapi.info/api/people");
  const data = await res.json();

  return data;
};
