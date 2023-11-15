// let form=document.getElementById("form")
// let input=document.getElementById("input")
// let msg=document.getElementById("msg")
// let posts=document.getElementById("posts")






//     form.addEventListener("submit",(e)=>{
//         e.preventDefault();
//         console.log("Button CLicked");
//         formValidation();
// })
// let formValidation = () => {
//   if (input.value === "") {
//     msg.innerHTML = "Post can not be blanck";
//     console.log("Failure");
//   } else {
//     console.log("Success");
//     msg.innerHTML = "";
//     acceptData();
//   }
// };


// let data={

// }
// let acceptData=()=>{
//     data["text"]=input.value;
//     // console.log(data);
//     creatPost();
// }

// let creatPost=()=>{
//     posts.innerHTML += `
//     <div class="text">
//     <p>${data.text}</p>
//     <span class="option">
//    <i onClick="editPost(this)" class="fas fa-edit" style="color: green";></i>
//       <i onClick="deletePost(this)" class="fas fa-trash-alt" style="color: red";></i>
//     </span>

//     </div>
    
//     `;  
//      input.value="";
    
// }

// let deletePost=(e)=>{
//     e.parentElement.parentElement.remove();
// }
// let editPost=(e)=>{
//     input.value=e.parentElement.previousElementSibling.innerHTML;
//     e.parentElement.parentElement.remove();
// }


let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


let postData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button Clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("Failure");
  } else {
    console.log("Success");
    msg.innerHTML = "";
    acceptData();
  }
};

let acceptData = () => {
  let index = input.getAttribute("data-original-index");
  if (index !== null) {
    updatePost(index);
  } else {
    postData.push({ text: input.value });
    createPost();
  }
};

let createPost = () => {
  let index = postData.length - 1;
  posts.innerHTML += `
    <div class="text" data-index="${index}">
        <p>${postData[index].text}</p>
        
        <span class="option">
            <i onClick="editPost(${index})" class="fas fa-edit" style="color: green";></i>
            <i onClick="deletePost(${index})" class="fas fa-trash-alt" style="color: red";></i>
        </span>
    </div>
    `;

    console.log(postData.length);
    console.log(index);
  
  
  input.value = "";
};

let deletePost = (index) => {
  postData.splice(index, 1);
  updatePosts();
};

let editPost = (index) => {

  input.value = postData[index].text;


  input.setAttribute("data-original-index", index);
};

let updatePosts = () => {

  posts.innerHTML = "";

  postData.forEach((post, index) => {
    posts.innerHTML += `
        <div class="text" data-index="${index}">
            <p>${post.text}</p>
            <span class="option">
                <i onClick="editPost(${index})" class="fas fa-edit" style="color: green";></i>
                <i onClick="deletePost(${index})" class="fas fa-trash-alt" style="color: red";></i>
            </span>
        </div>
        `;
  });
};

let updatePost = (index) => {
  
  postData[index].text = input.value;

 
  input.value = "";
  input.removeAttribute("data-original-index");

 
  updatePosts();
};
