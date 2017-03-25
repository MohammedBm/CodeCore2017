//get attribute values for a selected set
$('img').attr('src');
//set attribute vales for set. change
$('img').attr('src', "puppy.jpg") <
    img src = "kitten.jpg" >
()

    $$('a').eq(0).attr("href")

    .attr to get the src or href


// if we want to set a spesific link to sepcific webiste we can use

$('a').eq(0).attr('href', ' http://wwww.reddit.com')



attr() // <--- this crete attr on the tag for eg. we can add
//  highlight class or add shape class
// also it can over write other classes



css selectors

h1 {

}
.highlight {

}

#
reset {

}

//seleect anything that is either h1,h2,h3
h1, h2, h3 {

}

//select all the list items theat are caontained in an unorderd list
ul li {

} <
ul >
    <
    li > < /li> <
ol >
    <
    li > < /li> <
li > < /li> <
li > < /li> < /
    ol > <
    li > < /li> <
li > < /li> <
li > < /li> < /
    ul >

    //force to selector to only choose dircet partent child relationship
    ul > li {

    }
//any time we enter a tr set the class to highlight

$('tr').mouseenter(function() {
    $(this).attr('class', 'highlight');
});
//any time we leave a tr. set the class to none


$('tr').mouseout(function() {
    $(this).attr('class', '');
});


let resultSet = $('a') //grab all the hyperlinks on a page
// result.set.length
// resultSet[0]
// resultSet.eq[0]
// result set is an array of html
// result set is an array of document object


//---------------------------------------------------------------------------\\


html(); // get and set the inner html
// <h1> this content is the inner html</h1>

<
a href = "http://www.google.com"
we can get theat attr by using the one below
$('a').attr();
$('a') attr('href')
$('a').attr('href', 'http://www.reddit.com')



// traversals
HTML - > BODY - > H1 - > INNER HTML

// ul -> li -> a
$('a').parent();
$('li').children();

// events
click
mouseenter
mouseleave




    // anchor tag
    //when an anchor tag is clicked
    //navigate to the website that is specifed in the href attribute

    <
    a href = "" > Home < /a> <
a href = "" > about < /a> <
a href = "" > Contact < /a>

    <
    people id = "mohammed" > < /people> <
people > < /people> <
people > < /people>





$('a').click(function() {
    console.log("stand UP");
    //only the person who catches the ball will stand up
    //because $(this) will only select the person calling the function
    $('this').attr("class", "highlight"); //this add the highlight class to evey anchor tag;
});

// keyboard events

$(this); //no need for '' mark
$(document);
$('a'); //<--- this one need a '' mark
$('tr');


//this show what key you pressed on your keyboard and it console log it with the sentce
//"you pressed a key on the keyboard"
$(function() {
    $(document).keypress(function(event) {
        console.log("You pressed a key on the keyboard");
        console.log(event.key);
    });
});
// you can use the above for anything or some specific field





//jquery selctors - modify css
<p > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. < /p>


$('p').css('background-color')
$('p').css('background-color', 'yellow')


# mr - pnik {
    postion: relative
		top:10;
		left:10;
		// bottom:
		// right:
}



$('#mr-pink').css('position','relative')
$('#mr-pink').css('top','10px')
$('#mr-pink').css('bottom','10px')

//or we can use this

$('#mr-pink').css('position','relative').css('top','10px').css('bottom','10px')
//inline style
$('#mr-pink').attr('style', 'top: 20px;')
$('#mr-pink').attr('class', 'highlight')//<--- this will kill all the existing classes and add highlight above it
$('#mr-pink').addClass('highlight')// <=== this will add a class to to the exitsing classes with the rest of the classes
$('#mr-pink').removeClass('highlight'); // <--- this will remove specific class from the list of th classes;
$('#mr-pink').toggleClass('highlight'); //<--- if the class exitsts remove it , if the class dose not exist, add it

//animation classes in jQuery
//slide up, slide down , fade in , fade out
$('#green-container').slideUp(); // <---- you can add ms (milisecond)to change how fast it can gose
$('#green-container').slideDown();
$('#green-container').fadeIn();
$('#green-container').fadeOut();





<style>
	#mr-pink{
		postion: relative;
		top:10px;
		bottom:10px;
	}
</style>


<div id = "mr-pink" class = "highlight" style = " top:20px">






// a game that move a cha upp and down
let x = 0;
let y = 0;
$(document).keypress(function(event){
	if (event.key) == 'w'){
		//move the player up the screen
		$('#mr-pink').css('top',x--)

	}else if (event.key == 's') {
		//move the player up the screen
		$('#mr-pink').css('bottom',x++)
	}
})

//adding in img to website using jQurey
//you can add them to anywhere just change that 'body' to any tag or id or class you want

$('body').append('<img src="23123123">')














//
