fetch("https://sorngvichet.github.io/TestAPI/API.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("pending...");
    console.log(data);
  });
