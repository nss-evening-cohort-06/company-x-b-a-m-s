console.log("I'm in main JS");

//coupon function on index page;
document.getElementById("homeButton").addEventListener("click", getCoupon);

function getCoupon() {
     document.getElementById("couponCode").innerHTML = "Coupon Code: Cry Baby Cry";
}

