const getJokes = async () => {
  const configs = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await axios.get("https://icanhazdadjoke.com", configs);

  return res.data;
};

const addJoke = async () => {
  const jokeData = await getJokes();
  const newLi = document.createElement("li");

  const jokes = document.querySelector("#jokes");

  newLi.append(jokeData.joke);
  jokes.append(newLi);
};
