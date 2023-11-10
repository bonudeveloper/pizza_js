let toppings = document.querySelectorAll(".topping"); // toppinglani tanlash
let total = 2; //defolt qiymat

function updatePrice(){ 
   document.querySelector(".total").textContent = total; //total price korsatib turadgon h3 uwavoldik funksiya yasavoganimizi sababi pasdagi bajargan ammalarimiz iwga tuwiwi uchun wu bor total narhga qo'wib boriwi un
}

let btn = document.querySelector(".btn");

function zakaz() {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        let random = Math.floor(Math.random()*10+1)
        document.querySelector(".numZakaz").textContent = random;
    })
}
zakaz();

toppings.forEach((t) => {  //toppings har biriga click bo'ganda iwga tuwadi
    t.addEventListener("click" , (e) => {
      let li = e.target;
      
      while (li.tagName !=="LI"){
        li = e.target.parentElement; //li ni ovoldik
      } // wuni o'zi etvotiki li bu ota element ichidagi bn oziniyam bosganda iwlasin db

      let checkbox = li.children[0]; //checkbox ni ovoldik lini ichidagi bolasi(0 chi indeksida turgan narsa)
      let price = +li.getAttribute("data-price"); //atribute yordamida price ovolamiz,price o'qiladi (+bn price ni songa aylantirdik)
      let target = document.querySelector(li.getAttribute("data-target")); // atribute yordamida mahsulot nomini oldik
      
       //mahsulotlar ko'rinsin show klassi qo'shilgani un

      if(checkbox.checked) { //agar checkbox checked bo'gan bo'sa uni checked versiyasini false ga almashtiramiz
        checkbox.checked = false; //mahsulot nomini bossa false
        target.classList.remove("show"); 
        total -= price; // checkboxmiz checheked bo'p ptichkasi obtashlanganidan kegn total dan ayiramiz narhni
        // har bosganda yo o'chadi yo' chqadi mahsulotlar

      }else { //yo'ki truega almashtiramiz
        checkbox.checked = true; //checbox ozini bossa true bovoti
        target.classList.add("show");
        total += price;
       
        updatePrice();//pricelani yasab bo'gandan kegn funksiya iwga tuwirdik
      }
    })
})




// let toppings = document.querySelectorAll(".topping");
// let total = 2;

// function updatePrice() {
//   document.querySelector(".total").textContent = total;
// }

// let checkbox = document.querySelector("input");

// toppings.forEach((t) => {
//   t.addEventListener("click", (e) => {
//     let li = e.target;

//     while (li.tagName !== "LI") {
//       li = e.target.parentElement;
//     }

//     let checkbox = li.children[0];
//     let price = +li.getAttribute("data-price");
//     let target = document.querySelector(li.getAttribute("data-target"));

//     if (checkbox.checked) {
//       checkbox.checked = false;
//       target.classList.remove("show");
//       total -= price;
//     } else {
//       checkbox.checked = true;
//       target.classList.add("show");
//       total += price;
//     }

//     updatePrice();
//   });
// });