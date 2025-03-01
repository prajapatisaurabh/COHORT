console.log("Hii");
fetch("https://api.freeapi.app/api/v1/public/randomusers")
  .then((response) => {
    console.log("FullFiled State");
    response.json().then((obj) => console.log(obj.data));
  })
  .catch(() => {
    //
  })
  .finally(() => {
    console.log("me to har bar run hounga");
  });

console.log("Bye");
