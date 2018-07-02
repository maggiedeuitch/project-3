//it should hide all but the current question
//it should take the selected value when user clicks next
//it should push that value to an answer array 
//it should then go to the next question until all questions answered
//it should return the value that was chosen the most times
//


const quizQuestions = [

	{	
		question: "What would you never leave home without?",
		choices: [
			{
				answer: "Some red lipstick",
				value: "rizzo"
			},
			{	answer: "A leather jacket",
				value: "danny"
			},
			{	answer: "Cigarettes",
				value: "kenickie"
			},
			{	answer: "A cardigan",
				value: "sandy"
			},
			{	answer: "My hairbrush",
				value: "frenchy"
			},
			{	answer: "My water gun",
				value: "putzie"
			},
			{	answer: "A snack",
				value: "jan"
			}			
		]
	},

	{	
		question: "What's your biggest flaw?",
		choices: [
			{
				answer: "I spend too much money on food.",
				value: "jan"
			},
			{	answer: "I care too much about looking good in front of my friends.",
				value: "danny"
			},
			{	answer: "I make bad decisions to spite other people.",
				value: "rizzo"
			},
			{	answer: "I give up on my dreams too easily.",
				value: "frenchy"
			},
			{	answer: "I often change myself in order to feel accepted by my peers.",
				value: "sandy"
			},
			{	answer: "I put other people in danger because of my actions.",
				value: "kenickie"
			},
			{	answer: "I'm not the best communicator.",
				value: "putzie"
			}			
		]
	},
	{	
		question: "How would you describe yourself?",
		choices: [
			{
				answer: "I have great leadership qualities.",
				value: "danny"
			},
			{	answer: "I'm a dreamer and can come off as ditzy.",
				value: "frenchy"
			},
			{	answer: "I'm hard-working and try to do the right thing.",
				value: "kenickie"
			},
			{	answer: "I can be loud and bubbly.",
				value: "jan"
			},
			{	answer: "I like to clown around and not take things too seriously.",
				value: "putzie"
			},
			{	answer: "I'm outspoken but vulnerable.",
				value: "rizzo"
			},
			{	answer: "I'm not as innocent as everyone thinks.",
				value: "sandy"
			}			
		]
	},
	{	
		question: "I tend to go for...",
		choices: [
			{
				answer: "someone who is understanding and a little quirky.",
				value: "putzie"
			},
			{	answer: "the tough-looking one with a heart of gold. The more tattooes, the better.",
				value: "rizzo"
			},
			{	answer: "someone who has a nice smile and is a little nerdy.",
				value: "jan"
			},
			{	answer: "someone who isn't afraid to be themselves.",
				value: "kenickie"
			},
			{	answer: "the popular one, even if they are a jerk.",
				value: "sandy"
			},
			{	answer: "someone who loves food as much as I do.",
				value: "jan"
			},
			{	answer: "someone I can take advantage of.",
				value: "danny"
			}			
		]
	},
	{	
		question: "Which of these would you binge watch?",
		choices: [
			{
				answer: "Top Gear",
				value: "kenickie"
			},
			{	answer: "MasterChef",
				value: "jan"
			},
			{	answer: "Queer Eye",
				value: "frenchy"
			},
			{	answer: "The Good Place",
				value: "sandy"
			},
			{	answer: "Jersey Shore",
				value: "danny"
			},
			{	answer: "Jackass",
				value: "putzie"
			},
			{	answer: "Girls",
				value: "rizzo"
			}			
		]
	},
	{	
		question: "Best song in Grease?",
		choices: [
			{
				answer: "Hopelessly Devoted to You",
				value: "sandy"
			},
			{	answer: "There Are Worse Things I Could Do",
				value: "rizzo"
			},
			{	answer: "Sandy",
				value: "danny"
			},
			{	answer: "Blue Moon",
				value: "putzie"
			},
			{	answer: "Beauty School Dropout",
				value: "frenchy"
			},
			{	answer: "We Go Together",
				value: "jan"
			},
			{	answer: "Greased Lightnin'",
				value: "kenickie"
			}			
		]
	}
]//quizQuestions


const cocktailList = [
	{
		character: "sandy",
		cocktail: "Shirley Temple"
	},
	{
		character: "danny",
		cocktail: "T-Bird"
	},
	{
		character: "rizzo",
		cocktail: "The Rizzo"
	},
	{
		character: "kenickie",
		cocktail: "Boilermaker"
	},
	{
		character: "frenchy",
		cocktail: "Strawberry White Russian"
	},
	{
		character: "jan",
		cocktail: "Berry Belini"
	},
	{
		character: "putzie",
		cocktail: "Sidecar"
	}
]



const $question = $(".question");
const $totalQuestions = quizQuestions.length;
const $choices = $(".choices");
const $results = $(".results");
const $try = $(".try");
const $next = $(".next");
const $again = $(".again");
// const $imageDiv = $(".hot-sauce-image");
// const $hotSauceImage = $("#hot-sauce-image");
// const $link =$("#link");
let $currentQuestion = 0;
let userChoices =[];

$try.hide();
// $imageDiv.hide();
$results.hide();
$again.hide();
// $link.hide();








$(document).ready(function(){
//shows first question and creates radio buttons for answer choices
	$question.text(quizQuestions[$currentQuestion].question);
	let i = 0;
	quizQuestions[i].choices.forEach((choice) => {
		let radioBtn = $('<input type="radio"  id="'+(choice.answer)+'" name="'+ quizQuestions[i].choices +'" value="'+ (choice.value) +'" checked /><label for="'+(choice.answer)+'">' + (choice.answer) + '</label>');
		$choices.append(radioBtn);
	});
//pushes user's choice to new array when "next" is clicked then resets
	$next.on("click", function(event) {
		event.preventDefault();
		userChoices.push($('input[type=radio]:checked').val());
		console.log(userChoices);
		$choices.empty();

//shows next question
		if ($currentQuestion < $totalQuestions -1) {
				$currentQuestion = $currentQuestion + 1;
				$question.text(quizQuestions[$currentQuestion].question);
				i++;
				quizQuestions[i].choices.forEach((choice) => {
					let radioBtn = $('<input type="radio" id="'+(choice.answer)+'" name="'+ quizQuestions[i].choices +'" value="' + (choice.value) +'" checked /><label for="'+(choice.answer)+'">' + (choice.answer) + '</label>');
					$choices.append(radioBtn);
				});
		} else {//return the most selected value once questions are finished
			const userCharacter = function mostSelectedValue(array){
			    return array.sort((a,b) =>
			          array.filter(v => v===a).length
			        - array.filter(v => v===b).length).pop();
			};
			const character = userCharacter(userChoices);
			console.log(character);
//takes most selected value and returns cocktail based on the character's name
	//if mostselectedvalue = sandy, return sandyCocktail

			// const hotSauceOptions = hotSauces[userChoices[0]];
			// console.log(hotSauceOptions);
			const filteredOptions = cocktailList.filter(rest => rest.character === character);
			const theOne = filteredOptions[0].cocktail;
			console.log(theOne);
			$question.hide();
			$try.show();
			// $hotSauceImage.attr("src",`${theOne.image}`);
			// $imageDiv.show();
			const resultHTML = `${theOne}`;
			$results.html(resultHTML);
			$results.show();
			// $link.html(`<a href="${theOne.link}" target="_blank">${theOne.name}</a>`);
			// $link.show();
			$next.hide();
			$again.show();
			$again.on("click", function(event) {
				event.preventDefault();
				location.reload();

			});
		}
	});

});

// $(document).ready(function(){
// 	console.log("ready");
// 	userChoices.push(quizQuestions[0].choices[0].value);
// 	console.log(userChoices);




// });