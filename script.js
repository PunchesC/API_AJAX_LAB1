fetch("https://www.reddit.com/r/aww/.json")
.then(response => response.json())
.then(data => {


for (let kid of data.data.children){
 

  let mainArea = document.querySelector("main");
let newDiv = document.createElement("div");
let newImage = document.createElement("img");
let newLinks = document.createElement("a")
let image = kid.data.thumbnail; 
newImage.src = image;
  let title = kid.data.title;

 let link = kid.data.url_overridden_by_dest;
 newLinks.href = link;

 newLinks.innerHTML=link;

console.log(link)

 console.log(title);
 console.log(image);
 console.log(link);


newDiv.innerHTML = title;

mainArea.appendChild(newDiv);

// mainArea.appendChild(newLinks);

newDiv.insertAdjacentElement("afterbegin",newImage);
newDiv.insertAdjacentElement("beforeend", newLinks);

console.log(link);





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