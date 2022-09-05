// task one
const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
    //first method
    //   if (this.readyState === 4 && this.status === 200) {// making sure the connection is well established
    //     resolve(JSON.parse(this.responseText));//converting from json obj to js obj
    //   } else {
    //     reject(Error("Data Not Found")); // printing error
    //   }
    //----------------------------------------------
    //second method using try catch
    try{
        resolve(JSON.parse(this.responseText));//converting from json obj to js obj
    }catch(reason){
        reject(Error("Data Not Found")); // printing error
    }finally{
        console.log("everything is done")// Print this message in all cases.
    }
    
    //----------------------------------
    //third method using fetch api
    };
    myRequest.open("GEt", apiLink);
    myRequest.send();
  });
};

getData("articles.json")
  .then((result) => {
    result.length = 5;
    return result;
  })
  .then((result) => {
    for (let i = 0; i < result.length; i++) {
      let div = document.createElement("div");

      let title = document.createElement("h3");
      let titleText = document.createTextNode(result[i].title);
      title.appendChild(titleText);

      let description = document.createElement("p");
      let descriptionText = document.createTextNode(result[i].description);
      description.appendChild(descriptionText);

      div.appendChild(title);
      div.appendChild(description);

      document.body.appendChild(div);
    }
  })
  .catch((rej) => {
    console.log(rej);
  });
