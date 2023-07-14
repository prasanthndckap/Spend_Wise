let button = document.querySelector("#btn");
let  amount = document.querySelector("#amout");
let TextInput = document.querySelector("#input");

let ul = document.querySelector("#lists");

let income = document.querySelector("#plus");
let expense = document.querySelector("#minus");
income.innerText =0
expense.innerText=0




button.addEventListener("click", (e)=>{
  e.preventDefault();
  
  
let incomes = document.querySelector("#plus");
let expense = document.querySelector("#minus");
let balance = document.querySelector("#balance");



  if(TextInput.value === "" || amount.value === ""){
    alert('please enter a value')
  }else{

    // let mainDiv = document.createElement("div")
    
   let li = document.createElement("li")
  //  let span = document.createElement("span")
  //  span.innerText = amount.value
  li.innerText = TextInput.value  +" " + amount.value;
  //   ul.append(li)


if(amount.value > 0){
  
incomes.innerText = Number(amount.value) + Number(incomes.innerText)

// incomes.innerText.style.color = "green"
}else{
expense.innerText = Number(amount.value) + Number(expense.innerText)
// expense.innerText.style.color = "red"

}


balance.innerText = Number(incomes.innerText) + Number(expense.innerText)

  // li.innerText =  TextInput.value;


if(li.innerText.includes("-") ==  true ){
    li.style.color = "red"
   
}else{
    li.style.color = "green"
  
}
  
  deletebtn = document.createElement("button");
  deletebtn.innerText = "X";
deletebtn.className =  "delete-btn"

  li.appendChild(deletebtn);
  li.style.display = "flex";
  li.style.justifyContent = "space-between"

  
   ul.appendChild(li)




   amount.value = "";
   TextInput.value = "";
  //  incomes.innerText = Number(incomes.innerText)-Number(amount.value);

   deletebtn.addEventListener("click",(e)=>{
    // console.log(e.target.parentElement.innerText.split(" "));
    // console.log(e.target);
    // console.dir(li);
     e.target.parentElement.remove();
  if(amount.value<0){
    expense.innerText= Number(expense.innerText)-Number(amount.value);
    
  }else{
    income.innerText= Number(incomes.innerText)-Number(amount.value);
   
  }
   })
    
  }

})





































