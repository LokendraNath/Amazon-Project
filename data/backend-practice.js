const xhr = new XMLHttpRequest();

// setup
xhr.addEventListener("load", () => {
  console.log(xhr.response);
});

xhr.open("GET", "https://supersimplebackend.dev");

xhr.send(); //this like button
