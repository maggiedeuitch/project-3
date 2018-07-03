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
		cocktail: "Dirty Shirley",
	},
	{
		character: "danny",
		cocktail: "57 T-Bird"
	},
	{
		character: "rizzo",
		cocktail: "Pink Lady"
	},
	{
		character: "kenickie",
		cocktail: "Boilermaker"
	},
	{
		character: "frenchy",
		cocktail: "Piña Colada"
	},
	{
		character: "jan",
		cocktail: "Pink Squirrel"
	},
	{
		character: "putzie",
		cocktail: "Tom Collins"
	}
]

const recipes = [
	{
		cocktailName: "Dirty Shirley",
		ingredients: [
			"1 ounce vodka",
			"1/2 ounce cherry liqueur",
			"5 ounces lemon-lime soda",
			"1/4 teaspoon grenadine",
			"Maraschino cherry, to garnish"
		],
		steps: [
			"Pour the vodka and cherry liqueur into an ice-filled glass.",
			"Top with the lemon-lime soda.",
			"Add the grenadine and combine.",
			"Garnish with the maraschino cherry, and serve."
		],//steps
		alcohol: ["Vodka", "Cherry Liqueur"]
	},//object 1

	{
		cocktailName: "57 T-Bird",
		ingredients: [
			"1 ounce vodka",
			"2⁄3 ounce amaretto",
			"2⁄3 ounce melon liqueur",
			"2⁄3 ounce peach schnapps",
			"1 2⁄3 ounces fresh orange juice",
			"2 raspberries, to garnish (optional)",
			"orange, slice to garnish (optional)"
		],
		steps: [
			"Pour all ingredients into a shaker with ice. Shake.",
			"Strain into an old-fashioned glass filled with ice.",
			"Garnish with two raspberries and a slice of orange on a cocktail stick if desired."
		],
		alcohol: ["Vodka", "Amaretto", "Melon liqueur", "Peach schnapps"]
	},

	{
		cocktailName: "Pink Lady",
		ingredients: [
			"1 1/2 ounces gin",
			"3/4 ounce applejack",
			"1/4 ounce lemon juice",
			"4 dashes grenadine",
			"1 egg white",
			"Garnish: Maraschino cherry"
		],
		steps: [
			"Shake ingredients very well with ice.",
			"Strain into cocktail glass.",
			"Garnish with a cherry."
		],
		alcohol: ["Gin", "AppleJack"]
	},
	{
		cocktailName: "Boilermaker",
		ingredients: [
			"1 1/3 oz whiskey",
			"1 pint beer" 
		],
		steps: [
			"Pour whiskey into shot glass.",
			"Down the whiskey and chase with beer."
		],
		alcohol: ["Whiskey", "Beer"]
	},
	{
		cocktailName: "Piña Colada",
		ingredients: [
			"3 oz pineapple juice",
			"1 oz white rum",
			"1 oz coconut cream",
			"1 cup crushed ice",
			"Garnish: slice of pineapple"
		],
		steps: [
			"Put ingredients into blender.",
			"Blend until smooth.",
			"Pour into chilled glass and garnish with pineapple."
		],
		alcohol: ["White rum"]
	},
	{
		cocktailName: "Pink Squirrel",
		ingredients: [
			"1 oz amaretto",
			"1 1/2 oz white crème de cacao",
			"1 oz heavy cream",
			"Garnish: Maraschino cherry"
		],
		steps: [
			"Add ingredients into a shaker filled with ice and shake until cold.",
			"Strain into a chilled glass and garnish with a cherry."		
		],
		alcohol: ["Amaretto", "Creme de cacao white"]
	},
	{
		cocktailName: "Tom Collins",
		ingredients: [
			"1 1/2 oz gin",
			"1 oz fresh lemon juice",
			"1/2 oz simple syrup",
			"2 oz club soda",
			"Garnish: Lemon slice, Maraschino cherry"
		],
		steps: [
			"Mix gin, lemon juice and simple syrup in a tall glass filled with ice.",
			"Top with club soda and garnish with a lemon slice and cherry."		
		],
		alcohol: ["Gin"]
	},
]//recipes array


const $question = $(".question");
const $totalQuestions = quizQuestions.length;
const $choices = $(".choices");
const $results = $(".results");
const $try = $(".try");
const $next = $(".next");
const $again = $(".again");
const $recipe = $(".recipe");
const $alcohol =$(".alcohol");

let $currentQuestion = 0;
let userChoices =[];

$try.hide();
$results.hide();
$again.hide();
$recipe.hide();
$alcohol.hide();

//function to create list of ingredients (call when cocktail has been chosen)
function ingredientsList(array) {
    // Create the list element:
    const list = document.createElement('ul');
    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        const item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}

//function to create list of steps to make cocktail (call when cocktail has been chosen)
function steps(array) {
    // Create the list element:
    const list = document.createElement('ul');
    for(let i = 0; i < array.length; i++) {
        // Create the list item:
        const item = document.createElement('li');
        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));
        // Add it to the list:
        list.appendChild(item);
    }
    // Finally, return the constructed list:
    return list;
}

//function to create list of alcohol to search lcbo api (call when cocktail has been chosen)
function alcohol(array) {
	const dropdown = document.createElement("select");
	dropdown.setAttribute("name", "alcoholList");
	dropdown.setAttribute("id", "alcoholList");
	// document.getElementById("alcohol").appendChild(dropdown);

	for (let i = 0; i < array.length; i++) {
    	const opt = document.createElement("option");
    	opt.value = array[i];
    	opt.text = array[i];
    	dropdown.appendChild(opt);
	}
	return dropdown;
}



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
			const $character = $("<h2>").text("You're "+character+ " !");
			$("#greaseCharacter").append($character);
			console.log(character);
//takes most selected value and returns cocktail based on the character's name
			const filteredOptions = cocktailList.filter(rest => rest.character === character);
			const theOne = filteredOptions[0].cocktail;
			console.log(theOne);
			$question.hide();
			$try.show();
//displays cocktail name
			const resultHTML = `${theOne}`;
			$results.html(resultHTML);
			$results.show();
//displays ingredients list			
			const recipeIngredients = recipes.filter(rest => rest.cocktailName === theOne);
			const theOneRecipeIngredients = recipeIngredients[0].ingredients;
			document.getElementById("ingredients").appendChild(ingredientsList(theOneRecipeIngredients));
//displays recipe steps
			const theOneRecipeSteps = recipeIngredients[0].steps;
			document.getElementById("steps").appendChild(ingredientsList(theOneRecipeSteps));
//displays what alcohol is needed and connects to lcboapi
			$alcohol.show();
			const theOneAlcohol = recipeIngredients[0].alcohol;
			document.getElementById("alcohol").appendChild(alcohol(theOneAlcohol));


			$next.hide();
			$again.show();
			$again.on("click", function(event) {
				event.preventDefault();
				location.reload();

			});

			const key = "Token MDowNTgwNzdhOC03NjQ1LTExZTgtOTgyNS0wMzUwMDdkOWZiNWY6WTFuaFpMRFhRalRpYlNCMGg1b2hrekhWYmNKRHRhcVhqck1o";


			const getAlcohol = (query) => {
				$.ajax({
					  url: 'http://lcboapi.com/products',
					  headers: {
					    Authorization: key
					  },
					  method:"GET",
					  data: {
					  	q: query,
					  	per_page: 10
					  }
				}).then(function(result) {
					// displayAlcohol(result); 
					const alcoholObjects = result.result;
					displayAlcohol(alcoholObjects);
				});
			};
			const displayAlcohol = (allAlcohol) => {
				$("#alcoholData").empty();
				allAlcohol.filter((spiritsOnly) => {
					return spiritsOnly.package_unit_type != "can";
				});

				allAlcohol.forEach((bottle) => {
					console.log(bottle);
					const $imgThumb = $("<img>").attr("src", bottle.image_thumb_url);
					const $name = $("<h4>").text(bottle.name);
					const $origin = $("<p>").addClass("origin").text(bottle.origin);
					const $style = $("<p>").addClass("style").text(bottle.style);
					const $priceInCents = bottle.price_in_cents;
					const priceInDollars = (price) => {
						let dollars = price / 100;
						dollars = dollars.toFixed(2);
						return dollars;
					}
					console.log(priceInDollars($priceInCents));

					const $price = $("<p>").addClass("price").text("$"+ priceInDollars($priceInCents));
					$("#alcoholData").append($imgThumb, $name, $origin, $style, $price);

			});
			}

			getAlcohol(theOneAlcohol[0]);
			$("#alcoholList").on("change", function () {
				// console.log("new alcohol selected");
				const selectedAlcohol = $(this).val();
				console.log(selectedAlcohol);
				getAlcohol(selectedAlcohol);
			});


		}//else
	});//next.on.click



});

//display the recipe on signature cocktail result page
//user can click on ingredients list for alcohol
//search the lcbo for alcohol on click
//display the name, price, sale for each 
