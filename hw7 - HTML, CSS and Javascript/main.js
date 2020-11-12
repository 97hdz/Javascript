// the method to get an ID name from a class on HTML
let com = document.getElementsByClassName("shape");//[0].id if we want to see the first value

console.log("These are the IDs : ")
console.log(" ")

for(var i=0;i<com.length;i++){
  // add let p just to add the number before the ids' name
  let p = i+1;
  console.log("The ID number "+p+" is : "+com[i].id)
}

// 7. In the <head> of the document,
// add a <title> tag that matches the text in the <h1> you added in step 1

let h1 = document.getElementsByTagName('h1')
let title = document.getElementsByTagName('title')
let name = " Homework #7 : The DOM "

for ( let prop of title){
  prop.innerText = name
}
for ( let prop of h1){
  prop.innerText = name
}
