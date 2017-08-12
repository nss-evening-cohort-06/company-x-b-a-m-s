console.log("I'm in main JS");

// Names of Employees

var employees = [
	{
		name: "Kim Kardashian",
		title: "Chief Cryologist",
		image: "https://i.pinimg.com/736x/ed/94/06/ed940647fa425a2192de32a493b31492--ugly-faces-hilarious-memes.jpg",
		bio: "Meet our Chief Cryologist, Kim!  She has years of crying experience.  Things she typically cries about: failed marriages, husband Kanye's mental breakdowns, and getting robbed."
	}
	{
		name: "James Van Der Beek",
		title: "Cry Guy"
		image: "http://cdn4.thr.com/sites/default/files/imagecache/scale_crop_768_433/2012/04/dawson_crying.jpg",
		bio: "This guy could really cry you a river, or a creek.  Huge movie buff.  Also responds to 'Dawson'."
	}
	{
		name: "Chris Crocker",
		title: "Under-Cover Cryer",
		image: "https://flavorwire.files.wordpress.com/2009/12/chris-crocker-crying.jpg",
		bio: "When he isn't making videos, he enjoys hanging out with his grandma and wearing v-necks.  Huge Britney fan."
	}
]

// Function that adds a new employee

function newEmployee (newName, newTitle, newImage, newBio) {
	var newEmployee = {name: "",title: "",image: "",bio: ""};
	newEmployee[name]= newName;
	newEmployee[title]= newTitle;
	newEmployee[image]= newImage;
	newEmployee[bio]= newBio;
	employee.push(newEmployee);
}
	newEmployee("Johnny Depp", "Cry-Baby", "https://s-media-cache-ak0.pinimg.com/736x/76/a4/86/76a486d247e541d221fa82eefebc3ef3--johnny-depp-cry-baby-johnny-depp-movies.jpg", "He's a bad boy with a heart of gold.");
	newEmployee("Miley Cyrus", "The Wrecking Ball", "http://www.ixdaily.com/storage/upload/300/p18835rrb117p31llg1e841lbi1m9u4.jpg", "She came to us like a wrecking ball.  All she wanted was to break our walls.");


