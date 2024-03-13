axios.get("https://swapi.info/api/people").then((res) => {
  const data = res.data;
  console.log(data);
});
