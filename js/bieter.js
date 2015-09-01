
var quote1 = '"We would not go anywhere else."<br>-Isabella M.',
	 quote2 = '"Loved my visit, EVERYONE is very friendly and extremely helpful and knowledgeable. Would definately recommend!"<br>-Cheryl M.',
	 quote3 = '"An absolute pleasurable experience. A great office with professional staff that treats you like a true friend."<br>-Dan D.',
	 quote4 = '"Thank you Dr.Beiter for seeing me quickly and retrieving the contact lens I couldn\'t \"find\" in my eye."<br>Paulette H.',
	 quote5 = '"Thank you for your professional, friendly and exceptional service!!"<br>-Lynn S.',
	 quote6 = '"I have always been pleased with the service and everyone who works there. They are exceptional."<br>-Louise B.',
	 quote7 = '"Everyone was so helpful and kind! Even though it was my first time there, I felt like we were all friends. Thank you!"<br>-Trudence T.',
	 quote8 = '"Your staff is so friendly and professional. I really appreciate all of the time that Dr. Rogers took to talk to me about my dry eyes. Thank you!"<br>-Jeffry S.',
	 quote9 = '"The staff at Bieter Eye Care is always very helpful, especially Tracy! Thank you.<br>-Mary S.',
	 quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9];

document.addEventListener("DOMContentLoaded", function() {
	// QUOTE BANNERS
	
	if (window.innerWidth > 991) {
		callLoop();
	} else {
		console.log("Window width is less than 992 pixels therefore the quote banners are set to display: none.");
	}
	var index = Math.round(Math.random() * (quoteArray.length - 1));

	var quoteLeft = document.getElementById('quoteTextLeft');
	quoteLeft.innerHTML = quoteArray[index];

	var removedQuote = quoteArray.splice(index, 1);

	var index = Math.round(Math.random() * (quoteArray.length - 1));

	var quoteRight = document.getElementById('quoteTextRight');
	quoteRight.innerHTML = quoteArray[index];

	quoteArray.push(removedQuote);

	//QUOTE BAR LOOP

	var arrayIndex = 0;	

	function callLoop() {
		setTimeout(function() {
		Loop();
	}, 15000);
	}
	function Loop() {
		if (arrayIndex > 8) {
			arrayIndex = 0;
		} 
		var quoteLeft = document.getElementById('quoteTextLeft');
		quoteLeft.innerHTML = quoteArray[arrayIndex];
		console.log(arrayIndex);
		
		arrayIndex++;

		if (arrayIndex > 8) {
			arrayIndex = 0;
		}
		var quoteRight = document.getElementById('quoteTextRight');
		quoteRight.innerHTML = quoteArray[arrayIndex];
		console.log(arrayIndex);
		
		callLoop();	
}

	// $("ul#quoteBar").cycle({ 
	// 	fx:'scrollUp',
	// 	speed:700,
	// 	timeout:10000,
	// 	delay:0,
	// 	pause: true,
	// 	pauseOnPageHover:true,
	// });
});

















