


let price=40;



let counter=0;
// // Function to update counter and total price when plus button is clicked
 document.getElementById('plus').addEventListener('click', function() {
     if (counter < 10) { // Max quantity condition
        counter++;
        updatedcounterAndprice();
     }
 });

// // Function to update counter and total price when minus button is clicked
 document.getElementById('minus').addEventListener('click', function() {
    if (counter > 0) { // Min quantity condition
        counter--;
        updatedcounterAndprice();
     }
 });



function updatedcounterAndprice (){

totalprice= price * counter;
document.getElementById('price').innerText=totalprice + "$";
document.getElementById('counter').innerText=counter;



}





document.getElementById('10kg').addEventListener('click', function(){
price=40;
updatedcounterAndprice();
this.style.backgroundColor = "yellow";
this.style.color = "black";
this.style.borderColor = "red";
// Revert color after 500 milliseconds (adjust as needed)
setTimeout(() => {
    this.style.color = "";
    this.style.backgroundColor = "";
    this.style.borderColor = "";
}, 500);

})

document.getElementById('20kg').addEventListener('click', function(){
    price=80;
    updatedcounterAndprice();
    this.style.backgroundColor = "yellow";
    this.style.color = "black";
    this.style.borderColor = "red";
    // Revert color after 500 milliseconds (adjust as needed)
    setTimeout(() => {
        this.style.color = "";
        this.style.backgroundColor = "";
        this.style.borderColor = "";
   }, 500);
    })
    


    document.getElementById('30kg').addEventListener('click', function(){
        price=120;
        updatedcounterAndprice();
        this.style.backgroundColor = "yellow";
        this.style.color = "black";
        this.style.borderColor = "red";
        // Revert color after 500 milliseconds (adjust as needed)
        setTimeout(() => {
            this.style.color = "";
            this.style.backgroundColor = "";
            this.style.borderColor = "";
       }, 500);
        })


        document.getElementById('40kg').addEventListener('click', function(){
            price=160;
            updatedcounterAndprice();
            this.style.backgroundColor = "yellow";
            this.style.color = "black";
            this.style.borderColor = "red";
            // Revert color after 500 milliseconds (adjust as needed)
            setTimeout(() => {
                this.style.color = "";
                this.style.backgroundColor = "";
                this.style.borderColor = "";
           }, 500);
            })
            
        
        
            document.getElementById('50kg').addEventListener('click', function(){
                price=200;
                updatedcounterAndprice();
                this.style.backgroundColor = "yellow";
            this.style.color = "black";
            this.style.borderColor = "red";
            // Revert color after 500 milliseconds (adjust as needed)
            setTimeout(() => {
                this.style.color = "";
                this.style.backgroundColor = "";
                this.style.borderColor = "";
           }, 500);
                })




























// let price = 40; // Default price
// let counter = 0; // Initial counter value

// // Function to update counter and total price when plus button is clicked
// document.getElementById('plus').addEventListener('click', function() {
//     if (counter < 10) { // Max quantity condition
//         counter++;
//         updateCounterAndPrice();
//     }
// });

// // Function to update counter and total price when minus button is clicked
// document.getElementById('minus').addEventListener('click', function() {
//     if (counter > 0) { // Min quantity condition
//         counter--;
//         updateCounterAndPrice();
//     }
// });

// // Function to update counter and total price
// function updateCounterAndPrice() {
//     let totalPrice = price * counter; // Calculate total price
//     document.getElementById('counter').innerText = counter; // Update counter display
//     document.getElementById('price').innerText = totalPrice + "$"; // Update total price display
// }
// // Event listeners for KG buttons
// document.getElementById('10kg').addEventListener('click', function() {
//     price = 40; // Update price for 10 KG dumbbells
//     updateCounterAndPrice();
//     // Change color of the button temporarily
//     this.style.backgroundColor = "yellow";
//     // Revert color after 500 milliseconds (adjust as needed)
//     setTimeout(() => {
//         this.style.backgroundColor = "";
//     }, 500);
// });

// document.getElementById('20kg').addEventListener('click', function() {
//     price = 60; // Update price for 20 KG dumbbells
//     updateCounterAndPrice();
//     // Change color of the button temporarily
//     this.style.backgroundColor = "yellow";
//     // Revert color after 500 milliseconds (adjust as needed)
//     setTimeout(() => {
//         this.style.backgroundColor = "";
//     }, 500);
// });

// document.getElementById('30kg').addEventListener('click', function() {
//     price = 80; // Update price for 30 KG dumbbells
//     updateCounterAndPrice();
//     // Change color of the button temporarily
//     this.style.backgroundColor = "yellow";
//     // Revert color after 500 milliseconds (adjust as needed)
//     setTimeout(() => {
//         this.style.backgroundColor = "";
//     }, 500);
// });

// document.getElementById('40kg').addEventListener('click', function() {
//     price = 100; // Update price for 40 KG dumbbells
//     updateCounterAndPrice();
//     // Change color of the button temporarily
//     this.style.backgroundColor = "yellow";
//     // Revert color after 500 milliseconds (adjust as needed)
//     setTimeout(() => {
//         this.style.backgroundColor = "";
//     }, 500);
// });

// document.getElementById('50kg').addEventListener('click', function() {
//     price = 120; // Update price for 50 KG dumbbells
//     updateCounterAndPrice();
//     // Change color of the button temporarily
//     this.style.backgroundColor = "yellow";
//     // Revert color after 500 milliseconds (adjust as needed)
//     setTimeout(() => {
//         this.style.backgroundColor = "";
//     }, 500);
// });
