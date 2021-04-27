fetch('https://www.reddit.com/r/aww/.json')
  .then((response) => response.json())
  .then((data) => {
    for (let kid of data.data.children) {
      let mainArea = document.querySelector('main');
      let newDiv = document.createElement('div');
      let newImage = document.createElement('img');
      let newLinks = document.createElement('a');
      let newPara = document.createElement("p");
      
      let image = kid.data.thumbnail;
      newImage.src = image;
      
      let title = kid.data.title;
      newDiv.innerHTML = title;

      let link = kid.data.url_overridden_by_dest;
      newLinks.href = link;
      newLinks.innerHTML = link;

      let upVotes = kid.data.ups;
     
     newPara.innerText = upVotes;


  

      mainArea.appendChild(newDiv);
      newDiv.insertAdjacentElement('afterbegin', newPara);
      newDiv.insertAdjacentElement('afterbegin', newImage);
      newDiv.insertAdjacentElement('beforeend', newLinks);


      

      // TypeError: defaultDiv is not iterable, why???
      // let defaultDiv = document.querySelector("main");
      // for (let div of defaultDiv){
      //   console.log(title);
      // }

      //  let defaultDiv = document.querySelectorAll("div");
      //  console.log(defaultDiv);
      // for (let divDelete of defaultDiv){
      //   console.log(divDelete);}
      //   //weird iteration!!!!!!

      // if(divDelete.contains("default"){
      //NEED TO ASK ON THIS ONE!!!!!!!!!!!!
      //     console.log("red");
      //   }
      // }

      // let insideDiv = mainArea.querySelectorAll("div");
      // insideDiv.appendChild(newImage);
      // let imageArea = mainArea.querySelector("div");
      // imageArea.innerText = image;
      // let linkArea = mainArea.querySelector("div");
      // linkArea.innerText = link;
      // mainArea.appendChild(newImage);
      // mainArea.appendChild(newLinks);
    }
  });
