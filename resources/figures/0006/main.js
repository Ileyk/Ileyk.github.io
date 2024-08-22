// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// const myHeading = document.querySelector("h1");
// myHeading.textContent = multiply(4, 7);

const captions = [];
captions[0]="Caption 1";
captions[1]="Caption 2";
captions[2]="Caption 3";

 function checkIfImageExists(url, callback) {
    const img = new Image();
    img.src = url;

    if (img.complete) {
      callback(true);
    } else {
      img.onload = () => {
        callback(true);
      };
      
      img.onerror = () => {
        callback(false);
      };
    }
  }

// To immediately update the content of the caption
const myCaptn = document.getElementById("caption");
myCaptn.innerText=captions[0];

const myImage = document.querySelector("img");
let i=1;
myImage.onclick = () => {
  var x = event.pageX - myImage.offsetLeft;
  // const myHeading = document.querySelector("h1");
  if(myImage.width/2 < x) { // clicked on the right => next image
    i++;
    img_name=i.toString().concat(".png");
    checkIfImageExists(img_name,(exists) => {
      if (exists) {
        myImage.setAttribute("src",img_name);
        myCaptn.innerText=captions[i-1];
      } else {
        i=i-1;
      }
      // myHeading.textContent = exists;
    });    
  }
  else { // clicked on the left => previous image
    i=Math.max(1,i-1); // index 1 is the first one
    img_name=i.toString().concat(".png");
    // myHeading.textContent = img_name;
    myImage.setAttribute("src",img_name);
    myCaptn.innerText=captions[i-1];
  }
};



