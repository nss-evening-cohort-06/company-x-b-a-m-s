console.log("I'm in main JS");

var employees = [
	{
		name: "Kim Kardashian",
		title: "Chief Cryologist",
		image: "https://i.pinimg.com/736x/ed/94/06/ed940647fa425a2192de32a493b31492--ugly-faces-hilarious-memes.jpg",
		bio: "Meet our Chief Cryologist, Kim!  She has years of crying experience.  Things she typically cries about: failed marriages, husband Kanye's mental breakdowns, and getting robbed."
	},
	{
		name: "James Van Der Beek",
		title: "Resident Cry Baby",
		image: "http://cdn4.thr.com/sites/default/files/imagecache/scale_crop_768_433/2012/04/dawson_crying.jpg",
		bio: "This guy could really cry you a river, or a creek.  Huge movie buff.  Also responds to 'Dawson'."
	},
	{
		name: "Chris Crocker",
		title: "Under-Cover Cryer",
		image: "https://flavorwire.files.wordpress.com/2009/12/chris-crocker-crying.jpg",
		bio: "When he isn't making videos, he enjoys hanging out with his grandma and wearing v-necks.  Huge Britney fan."
	}
]






//coupon function on index page;
document.getElementById("homeButton").addEventListener("click", getCoupon);

function getCoupon() {
     document.getElementById("couponCode").innerHTML = "Coupon Code: Cry Baby Cry";
}
