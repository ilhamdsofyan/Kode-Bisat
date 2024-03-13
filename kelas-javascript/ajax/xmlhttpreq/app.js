const req = new XMLHttpRequest();

req.onload = function () {
  const data = JSON.parse(this.responseText);
  console.log(data);
};

req.onerror = function () {
  console.log("Error", this);
};

req.open("GET", "https://swapi.info/api/people/9");
req.send();
