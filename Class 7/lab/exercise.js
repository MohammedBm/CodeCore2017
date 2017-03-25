//ex1
// In the jQuery Lab: http://bit.ly/jquery-lab
//
// Do the following exercises:

// Part 1
// Select all red shapes inside the orange container
$('#orange-container > .shape.red').hide()
// Select all medium or small shapes inside the green container
$('#green-container > .medium, .small').hide()
// Select all shapes inside any container
$('.shape').hide()
// Select all link tags
$('a li').fadeOut(5000);
// Select all the link tags inside an "li" tag
$('li').find('a').hide();
// Count the number of small blue circles
$('.small.blue.circle').length




// Part 2
// When 'button 1' is clicked, remove all shapes.
$('#button-1').click(function(){
	$('.shape').remove();
});
// When 'button 2' is clicked, disable button 2. (Set the 'disabled' attribute to true)
$('#button-2').click(function(){
	$('#button-2').attr('disabled', 'true');
});

// When 'button 3' is clicked, set the button message to "Button 3 was clicked"
$('#button-3').click(function(){
	$('#button-message').html('button 3 was clicked');
});



// Part 3
// When your mouse enters any link, log the value of its "href" attribute to the console. "Your mouse entered a link to: [href]"
$('a').mouseover(function(){
    console.log(`You hoverd you mouse in ${html} `)
});
// When any button is clicked, set the button message to "Button [button id] was clicked"
$('.button').click(function(){
	$('#button-message').html(` ${this.id} was clicked`);
});


//ex 2

// Go to http://vancouver.craigslist.ca
//
// Write some jQuery to get the HREF attribute of the first link on the page
$('a')eq(0).attr('href')
// Write some jQuery to get the number of links on this page
$('a').length
// Write some jQuery to change the text for all links to be [Your Name]
$('a').html('Mohammed')
// Write some jQuery to make Craigslist's logo link to http://www.google.com
$('#logo>a').attr('href','http://www.reddit.com')




//ex 3
// Go to http://en.wikipedia.org/wiki/Pug in your browser.
//
// Write some jQuery to change the title of the article to Your Name.
$('#firstHeading').html("mhoammed");
// Write some jQuery to hide the body of the article
$('p').hide();
// Write some jQuery to remove the wikipedia logo
$('.mw-wiki-logo').hide();















//
