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

var products = [
{
	name: "Crybans",
	description: "Problems with crying in public? Not anymore! Get the stylishness of Raybans with the bonus of a tear catcher at the bottom of the lenses!",
	price: "$399",
	image: "http://www.raybanukoutlet.co.uk/wp-content/uploads/2016/05/justinray-ban2140gallery.jpg"
},
{
	name: "Cry Cushion",
	description: "Are you constantly crying in a bathroom stall and getting funny looks. Not anymore with the cry cushion! Simply cry right into the blowhole and BAM! Your cries are turned into the the sweet sounds of flatulence! And what's more socailly acceptable than that?",
	price: "$49.99",
	image: "https://smhttp-ssl-49083.nexcesscdn.net/media/catalog/product/cache/4/thumbnail/900x1163/9df78eab33525d08d6e5fb8d27136e95/w/h/whoopee_cushion_float_1.jpg"
},
{
	name: "Cry Resistant Mascara",
	description: "This one is for you ladies...sneak a way for a quick cry in your favorite isolated spot, and with this beauty product look like nothing ever happened!",
	price: "$29.99",
	image: "https://images.contentful.com/g8qtv9gzg47d/image_post_39264/5b01cb467e8cf308c010fcf8fa3b7467/Thumbnail_1_-_What_s_The_Best_Waterproof_Mascara_"
},
{
	name: "Cry'n'Sweat",
	description: "Fellas, are you constantly keeping up that badass persona, but are actually crushed on the inside? Simply apply a little Cry'n'Sweat to your face and it will just look like you just got done with a total bomb ass workout!",
	price: "$34.99",
	image: "https://s-media-cache-ak0.pinimg.com/originals/28/81/08/28810810ab24569fc10d7fc7c541b9a8.jpg"
},
{
	name: "The Crankie",
	description: "This isn't your normal hankie...this thing WICKS AWAY MOISTURE. That's right! Simply wick away those tears!",
	price: "$12.99",
	image: "https://cupofjo.com/wp-content/uploads/2012/04/groom-during-crying-wedding-ceremony.jpg"
},
{
	name: "Commander In Crying Mask",
	description: "If you are going to cry all of the time, you might as well look good doing it. This guy pretty much crys all of the time in public anyways, so at list it will look normal if you are wearing his face.",
	price: "$85.99",
	image: "http://i.huffpost.com/gen/4836090/thumbs/o-TRUMP-MASK-570.jpg?16"
},
{
	name: "The Cry Room",
	description: "For the offensive loud criers that everyone hates being around. WE MADE YOU A ROOM. Simply step in this bad boy and ugly cry your freaking heart out and no one will hear it!",
	price: "$4000",
	image: "http://biologicalcontrols.com/images/isolate.jpg"
},
{
	name: "The Crazmat Suit",
	description: "Are you a big nerd? Have you been picked on so much that you just are in a constant state of tears and emotional breakdown? Well this is your answer! People will think you are such a badass because you are wearing a hazmat suit that they won't even see the tears that are pouring down your face!",
	price: "$399",
	image: "https://img2.cgtrader.com/items/133097/17c7bf45ab/large/man-in-protective-hazmat-suit-3d-model-low-poly-rigged-max-obj-3ds-fbx.jpg"
}



]

var jobs = [
	{
		name: "Virtual Companion", 
		title: "Phone Counselor",
		description: "Are you a current or former NSS student who has fallen into the pit of despair and found yourself crying in the shower? Have you since graduated from the program and STILL find yourself crying in the shower?  Great... this position is for you!",
		requirement: "",
	},
	{
		name: "Customer Support Companion",
		title: "Customer Support Technician",
		description: "Cry Companions is looking for positive individuals who aren't afraid of tears to show support and assist with product questions. It helps if you know a little Javascript too!",
		requirement: "",
	},
	{
		name: "Shoulder to lean on Companion",
		title: "Deliverable Friend Service",
		description: "Were you ever that friend who dropped everything to go and be there for a friend? What about the friend who held the hair of a drunk friend, drove them home, and helped them change out of their disgustingly puked on clothes? Your compassion is what Cry Companions is looking for? You are that friend we need.",
		requirement: "",
	},
	{
		name: "The Dave Chappelle Companion",
		title: "Comedian",
		description: "Can you find humor in anything? Do you have knock knock jokes stored away for a rainy day? You may just be our Dave Chappelle, friend!",
		requirement: "",
	},

	]

//coupon function on index page;
document.getElementById("homeButton").addEventListener("click", getCoupon);

function getCoupon() {
     document.getElementById("couponCode").innerHTML = "Coupon Code: Cry Baby Cry";
}
