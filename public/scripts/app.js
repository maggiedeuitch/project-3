(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

//it should hide all but the current question
//it should take the selected value when user clicks next
//it should push that value to an answer array 
//it should then go to the next question until all questions answered
//it should return the value that was chosen the most times
//


var quizQuestions = [{
	question: "What would you never leave home without?",
	choices: [{
		answer: "Some red lipstick",
		value: "rizzo"
	}, { answer: "My leather jacket",
		value: "danny"
	}, { answer: "Cigarettes",
		value: "kenickie"
	}, { answer: "A cardigan",
		value: "sandy"
	}, { answer: "My hairbrush",
		value: "frenchy"
	}, { answer: "A comic book",
		value: "putzie"
	}, { answer: "A snack",
		value: "jan"
	}]
}, {
	question: "What's your biggest flaw?",
	choices: [{
		answer: "I spend too much money on food.",
		value: "jan"
	}, { answer: "I care too much about looking good in front of my friends.",
		value: "danny"
	}, { answer: "I make bad decisions to spite other people.",
		value: "rizzo"
	}, { answer: "I give up on my dreams too easily.",
		value: "frenchy"
	}, { answer: "I often change myself in order to feel accepted by my peers.",
		value: "sandy"
	}, { answer: "I put other people in danger because of my actions.",
		value: "kenickie"
	}, { answer: "I'm not the best communicator.",
		value: "putzie"
	}]
}, {
	question: "How would you describe yourself?",
	choices: [{
		answer: "I have great leadership qualities.",
		value: "danny"
	}, { answer: "I'm a dreamer.",
		value: "frenchy"
	}, { answer: "I'm hard-working and try to do the right thing.",
		value: "kenickie"
	}, { answer: "I'm shy but can be loud and bubbly with people I'm close to.",
		value: "jan"
	}, { answer: "I like to clown around and not take things too seriously.",
		value: "putzie"
	}, { answer: "I'm outspoken but vulnerable.",
		value: "rizzo"
	}, { answer: "I'm not as innocent as everyone thinks.",
		value: "sandy"
	}]
}, {
	question: "I tend to go for...",
	choices: [{
		answer: "someone who is understanding and a little quirky.",
		value: "putzie"
	}, { answer: "the tough-looking one with a heart of gold. The more tattooes, the better.",
		value: "rizzo"
	}, { answer: "someone who has a nice smile and is a little nerdy.",
		value: "jan"
	}, { answer: "someone who isn't afraid to be themselves.",
		value: "kenickie"
	}, { answer: "the popular one, even if they are a jerk.",
		value: "sandy"
	}, { answer: "someone who loves food as much as I do.",
		value: "jan"
	}, { answer: "someone I can take advantage of.",
		value: "danny"
	}]
}, {
	question: "What's your idea of the perfect date?",
	choices: [{
		answer: "Seeing a live comedy show.",
		value: "putzie"
	}, { answer: "There is no such thing.",
		value: "rizzo"
	}, { answer: "Spending the day at the beach.",
		value: "sandy"
	}, { answer: "Going to the drive through and ending up in a make out session.",
		value: "danny"
	}, { answer: "Going go-kart racing",
		value: "kenickie"
	}, { answer: "April 25th, because it's not too hot, not too cold, all you need is a light jacket.",
		value: "frenchy"
	}, { answer: "Dinner at a restaurant followed by ice cream somewhere.",
		value: "jan"
	}]
}, {
	question: "Which of these would you binge watch?",
	choices: [{
		answer: "Top Gear",
		value: "kenickie"
	}, { answer: "MasterChef",
		value: "jan"
	}, { answer: "Queer Eye",
		value: "frenchy"
	}, { answer: "The Good Place",
		value: "sandy"
	}, { answer: "Jersey Shore",
		value: "danny"
	}, { answer: "Jackass",
		value: "putzie"
	}, { answer: "Girls",
		value: "rizzo"
	}]
}, {
	question: "What was your favourite class in high school?",
	choices: [{
		answer: "None. I spent most of my time skipping school.",
		value: "rizzo"
	}, { answer: "Drama",
		value: "putzie"
	}, { answer: "I loved every class.",
		value: "sandy"
	}, { answer: "Anything but gym class.",
		value: "danny"
	}, { answer: "Shop class",
		value: "kenickie"
	}, { answer: "None. I dropped out.",
		value: "frenchy"
	}, { answer: "Home Economics",
		value: "jan"
	}]
}, {
	question: "Best song in Grease?",
	choices: [{
		answer: "Hopelessly Devoted to You",
		value: "sandy"
	}, { answer: "There Are Worse Things I Could Do",
		value: "rizzo"
	}, { answer: "Sandy",
		value: "danny"
	}, { answer: "Blue Moon",
		value: "putzie"
	}, { answer: "Beauty School Dropout",
		value: "frenchy"
	}, { answer: "We Go Together",
		value: "jan"
	}, { answer: "Greased Lightnin'",
		value: "kenickie"
	}]
}]; //quizQuestions


var cocktailList = [{
	character: "sandy",
	cocktail: "Dirty Shirley",
	image: "dirtyShirley"
}, {
	character: "danny",
	cocktail: "57 T-Bird",
	image: "57tbird"
}, {
	character: "rizzo",
	cocktail: "Pink Lady",
	image: "pinkLady"
}, {
	character: "kenickie",
	cocktail: "Boilermaker",
	image: "boilermaker"
}, {
	character: "frenchy",
	cocktail: "Piña Colada",
	image: "pinaColada"
}, {
	character: "jan",
	cocktail: "Pink Squirrel",
	image: "pinkSquirrel"
}, {
	character: "putzie",
	cocktail: "Tom Collins",
	image: "tomCollins"
}];

var recipes = [{
	cocktailName: "Dirty Shirley",
	ingredients: ["1 ounce vodka", "1/2 ounce cherry liqueur", "5 ounces lemon-lime soda", "1/4 teaspoon grenadine", "Maraschino cherry, to garnish"],
	steps: ["1. Pour the vodka and cherry liqueur into an ice-filled glass.", "2. Top with the lemon-lime soda.", "3. Add the grenadine and combine.", "4. Garnish with the maraschino cherry, and serve."], //steps
	alcohol: ["Vodka", "Cherry Liqueur"]
}, //object 1

{
	cocktailName: "57 T-Bird",
	ingredients: ["1 ounce vodka", "2⁄3 ounce amaretto", "2⁄3 ounce melon liqueur", "2⁄3 ounce peach schnapps", "1 2⁄3 ounces fresh orange juice", "2 raspberries, to garnish (optional)", "orange, slice to garnish (optional)"],
	steps: ["1. Pour all ingredients into a shaker with ice. Shake.", "2. Strain into an old-fashioned glass filled with ice.", "3. Garnish with two raspberries and a slice of orange if desired."],
	alcohol: ["Vodka", "Amaretto", "Melon liqueur", "Peach schnapps"]
}, {
	cocktailName: "Pink Lady",
	ingredients: ["1 1/2 ounces gin", "3/4 ounce applejack", "1/4 ounce lemon juice", "4 dashes grenadine", "1 egg white", "Garnish: Maraschino cherry"],
	steps: ["1. Shake ingredients very well with ice.", "2. Strain into cocktail glass.", "3. Garnish with a cherry."],
	alcohol: ["Gin", "AppleJack"]
}, {
	cocktailName: "Boilermaker",
	ingredients: ["1 1/3 oz whiskey", "1 pint beer"],
	steps: ["1. Pour whiskey into shot glass.", "2. Down the whiskey and chase with beer."],
	alcohol: ["Whiskey", "Beer"]
}, {
	cocktailName: "Piña Colada",
	ingredients: ["3 oz pineapple juice", "1 oz white rum", "1 oz coconut cream", "1 cup crushed ice", "Garnish: slice of pineapple"],
	steps: ["1. Put ingredients into blender.", "2. Blend until smooth.", "3. Pour into chilled glass and garnish with pineapple."],
	alcohol: ["White rum"]
}, {
	cocktailName: "Pink Squirrel",
	ingredients: ["1 oz amaretto", "1 1/2 oz white crème de cacao", "1 oz heavy cream", "1 dash grenadine", "Garnish: Maraschino cherry"],
	steps: ["1. Add ingredients into a shaker filled with ice and shake until cold.", "2. Strain into a chilled glass and garnish with a cherry."],
	alcohol: ["Amaretto", "Creme de cacao white"]
}, {
	cocktailName: "Tom Collins",
	ingredients: ["1 1/2 oz gin", "1 oz fresh lemon juice", "1/2 oz simple syrup", "2 oz club soda", "Garnish: Lemon slice, Maraschino cherry"],
	steps: ["1. Mix gin, lemon juice and simple syrup in a tall glass filled with ice.", "2. Top with club soda and garnish with a lemon slice and cherry."],
	alcohol: ["Gin"]
}]; //recipes array


var $question = $(".question");
var $totalQuestions = quizQuestions.length;
var $choices = $("#choiceList");
var $results = $(".results");
var $cocktailImageDiv = $(".cocktailImage");
var $try = $(".try");
var $ingredients = $(".ingredients");
var $method = $(".method");
var $next = $(".next");
var $again = $(".again");
var $recipe = $(".recipe");
var $alcohol = $(".alcohol");

var $currentQuestion = 0;
var userChoices = [];

$try.hide();
$ingredients.hide();
$method.hide();
$results.hide();
$cocktailImageDiv.hide();
$again.hide();
$recipe.hide();
$alcohol.hide();

//function to create list of ingredients (call when cocktail has been chosen)
function ingredientsList(array) {
	// Create the list element:
	var list = document.createElement('ul');
	for (var i = 0; i < array.length; i++) {
		// Create the list item:
		var item = document.createElement('li');
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
	var list = document.createElement('ul');
	for (var i = 0; i < array.length; i++) {
		// Create the list item:
		var item = document.createElement('li');
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
	var dropdown = document.createElement("select");
	dropdown.setAttribute("name", "alcoholList");
	dropdown.setAttribute("id", "alcoholList");

	for (var i = 0; i < array.length; i++) {
		var opt = document.createElement("option");
		opt.value = array[i];
		opt.text = array[i];
		dropdown.appendChild(opt);
	}
	return dropdown;
}

$(document).ready(function () {
	//shows first question and creates radio buttons for answer choices
	$question.text(quizQuestions[$currentQuestion].question);
	var i = 0;
	quizQuestions[i].choices.forEach(function (choice) {
		var radioBtn = $('<input type="radio"  id="' + choice.answer + '" name="' + quizQuestions[i].choices + '" value="' + choice.value + '" checked /><label for="' + choice.answer + '">' + choice.answer + '</label>');
		var $choiceList = $("<li>").append(radioBtn);
		$("#choiceList").append($choiceList);
	});
	//pushes user's choice to new array when "next" is clicked then resets
	$next.on("click", function (event) {
		event.preventDefault();
		userChoices.push($('input[type=radio]:checked').val());
		console.log(userChoices);
		$choices.empty();

		//shows next question
		if ($currentQuestion < $totalQuestions - 1) {
			$currentQuestion = $currentQuestion + 1;
			$question.text(quizQuestions[$currentQuestion].question);
			i++;
			quizQuestions[i].choices.forEach(function (choice) {
				var radioBtn = $('<input type="radio" id="' + choice.answer + '" name="' + quizQuestions[i].choices + '" value="' + choice.value + '" checked /><label for="' + choice.answer + '">' + choice.answer + '</label>');
				var $choiceList = $("<li>").append(radioBtn);
				$("#choiceList").append($choiceList);
			});
		} else {
			//return the most selected value once questions are finished
			var userCharacter = function mostSelectedValue(array) {
				return array.sort(function (a, b) {
					return array.filter(function (v) {
						return v === a;
					}).length - array.filter(function (v) {
						return v === b;
					}).length;
				}).pop();
			};
			var character = userCharacter(userChoices);
			var $character = $("<h2>").text("Hey, " + character + "!");
			$("#greaseCharacter").append($character);
			console.log(character);

			//takes most selected value and returns cocktail based on the character's name
			var filteredOptions = cocktailList.filter(function (rest) {
				return rest.character === character;
			});
			var theOne = filteredOptions[0].cocktail;
			console.log(theOne);
			$question.hide();
			$try.show();
			//displays cocktail image
			var $cocktailImage = $("#cocktailImage").attr("src", "assets/" + filteredOptions[0].image + ".svg");
			$("#cocktailImage").append($cocktailImage);
			$cocktailImageDiv.show();

			//displays cocktail name
			var $signatureCocktail = $("<h2>").text("Your signature cocktail is the " + theOne + ".");
			$(".results").append($signatureCocktail);
			$results.show();
			//displays ingredients list			
			var recipeIngredients = recipes.filter(function (rest) {
				return rest.cocktailName === theOne;
			});
			var theOneRecipeIngredients = recipeIngredients[0].ingredients;
			$ingredients.show();
			document.getElementById("ingredients").appendChild(ingredientsList(theOneRecipeIngredients));
			//displays recipe steps
			$method.show();
			var theOneRecipeSteps = recipeIngredients[0].steps;
			document.getElementById("steps").appendChild(ingredientsList(theOneRecipeSteps));

			//displays what alcohol is needed and connects to lcboapi
			$alcohol.show();
			var theOneAlcohol = recipeIngredients[0].alcohol;
			document.getElementById("alcohol").appendChild(alcohol(theOneAlcohol));

			$next.hide();
			$again.show();
			$again.on("click", function (event) {
				event.preventDefault();
				location.reload();
			});

			$('header').css({ "background-color": "yellow", "background-image": "url(/assets/" + character + ".svg)", "background-size": "150px 225px", "background-repeat": "repeat" });

			//API KEY
			var key = "Token MDowNTgwNzdhOC03NjQ1LTExZTgtOTgyNS0wMzUwMDdkOWZiNWY6WTFuaFpMRFhRalRpYlNCMGg1b2hrekhWYmNKRHRhcVhqck1o";

			var getAlcohol = function getAlcohol(query) {
				$.ajax({
					url: 'http://lcboapi.com/products',
					headers: {
						Authorization: key
					},
					method: "GET",
					data: {
						q: query,
						per_page: 20
					}
				}).then(function (result) {
					var alcoholObjects = result.result;
					displayAlcohol(alcoholObjects);
				});
			};

			var displayAlcohol = function displayAlcohol(allAlcohol) {
				$("#alcoholData").empty();
				var filtered = allAlcohol.filter(function (spiritsOnly) {
					return spiritsOnly.volume_in_milliliters >= 750 && spiritsOnly.primary_category != "Ready-to-Drink/Coolers";
				});

				filtered.forEach(function (bottle) {
					console.log(bottle);
					var $imgThumb = $("<img>").attr("src", bottle.image_thumb_url);
					var $name = $("<h3>").text(bottle.name);
					var $origin = $("<p>").addClass("origin").text(bottle.origin);
					var $style = $("<p>").addClass("style").text(bottle.style);
					var $priceInCents = bottle.price_in_cents;
					var priceInDollars = function priceInDollars(price) {
						var dollars = price / 100;
						dollars = dollars.toFixed(2);
						return dollars;
					};
					console.log(priceInDollars($priceInCents));

					var $price = $("<p>").addClass("price").text("$" + priceInDollars($priceInCents));
					var $drinkContainer = $("<div>").append($imgThumb, $name, $origin, $style, $price);
					$("#alcoholData").append($drinkContainer);
				});
			};

			getAlcohol(theOneAlcohol[0]);
			$("#alcoholList").on("change", function () {
				var selectedAlcohol = $(this).val();
				console.log(selectedAlcohol);
				getAlcohol(selectedAlcohol);
			});
		} //else
	}); //next.on.click

});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxnQkFBZ0IsQ0FFckI7QUFDQyxXQUFVLDBDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxtQkFEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLG1CQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsWUFBVjtBQUNDLFNBQU87QUFEUixFQVJRLEVBV1IsRUFBRSxRQUFRLFlBQVY7QUFDQyxTQUFPO0FBRFIsRUFYUSxFQWNSLEVBQUUsUUFBUSxjQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLGNBQVY7QUFDQyxTQUFPO0FBRFIsRUFqQlEsRUFvQlIsRUFBRSxRQUFRLFNBQVY7QUFDQyxTQUFPO0FBRFIsRUFwQlE7QUFGVixDQUZxQixFQThCckI7QUFDQyxXQUFVLDJCQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxpQ0FEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLDREQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsNkNBQVY7QUFDQyxTQUFPO0FBRFIsRUFSUSxFQVdSLEVBQUUsUUFBUSxvQ0FBVjtBQUNDLFNBQU87QUFEUixFQVhRLEVBY1IsRUFBRSxRQUFRLDhEQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLHFEQUFWO0FBQ0MsU0FBTztBQURSLEVBakJRLEVBb0JSLEVBQUUsUUFBUSxnQ0FBVjtBQUNDLFNBQU87QUFEUixFQXBCUTtBQUZWLENBOUJxQixFQXlEckI7QUFDQyxXQUFVLGtDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxvQ0FEVDtBQUVDLFNBQU87QUFGUixF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QUVBLFNBQU0sU0FBUyxFQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLE9BQWxCLEVBQTJCLElBQTNCLENBQWdDLE1BQUssZUFBZSxhQUFmLENBQXJDLENBQWY7QUFDQSxTQUFNLGtCQUFrQixFQUFFLE9BQUYsRUFBVyxNQUFYLENBQWtCLFNBQWxCLEVBQTZCLEtBQTdCLEVBQW9DLE9BQXBDLEVBQTZDLE1BQTdDLEVBQXFELE1BQXJELENBQXhCO0FBQ0EsT0FBRSxjQUFGLEVBQWtCLE1BQWxCLENBQXlCLGVBQXpCO0FBRUQsS0FsQkE7QUFtQkEsSUF6QkQ7O0FBNEJBLGNBQVcsY0FBYyxDQUFkLENBQVg7QUFDQSxLQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsWUFBWTtBQUMxQyxRQUFNLGtCQUFrQixFQUFFLElBQUYsRUFBUSxHQUFSLEVBQXhCO0FBQ0EsWUFBUSxHQUFSLENBQVksZUFBWjtBQUNBLGVBQVcsZUFBWDtBQUNBLElBSkQ7QUFPQSxHQTlIZ0MsQ0E4SGhDO0FBQ0QsRUEvSEQsRUFYMkIsQ0EwSXhCOztBQUlILENBOUlEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9pdCBzaG91bGQgaGlkZSBhbGwgYnV0IHRoZSBjdXJyZW50IHF1ZXN0aW9uXHJcbi8vaXQgc2hvdWxkIHRha2UgdGhlIHNlbGVjdGVkIHZhbHVlIHdoZW4gdXNlciBjbGlja3MgbmV4dFxyXG4vL2l0IHNob3VsZCBwdXNoIHRoYXQgdmFsdWUgdG8gYW4gYW5zd2VyIGFycmF5IFxyXG4vL2l0IHNob3VsZCB0aGVuIGdvIHRvIHRoZSBuZXh0IHF1ZXN0aW9uIHVudGlsIGFsbCBxdWVzdGlvbnMgYW5zd2VyZWRcclxuLy9pdCBzaG91bGQgcmV0dXJuIHRoZSB2YWx1ZSB0aGF0IHdhcyBjaG9zZW4gdGhlIG1vc3QgdGltZXNcclxuLy9cclxuXHJcblxyXG5jb25zdCBxdWl6UXVlc3Rpb25zID0gW1xyXG5cclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIldoYXQgd291bGQgeW91IG5ldmVyIGxlYXZlIGhvbWUgd2l0aG91dD9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJTb21lIHJlZCBsaXBzdGlja1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIk15IGxlYXRoZXIgamFja2V0XCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQ2lnYXJldHRlc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImtlbmlja2llXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgY2FyZGlnYW5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJNeSBoYWlyYnJ1c2hcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgY29taWMgYm9va1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBIHNuYWNrXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hhdCdzIHlvdXIgYmlnZ2VzdCBmbGF3P1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIkkgc3BlbmQgdG9vIG11Y2ggbW9uZXkgb24gZm9vZC5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBjYXJlIHRvbyBtdWNoIGFib3V0IGxvb2tpbmcgZ29vZCBpbiBmcm9udCBvZiBteSBmcmllbmRzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgbWFrZSBiYWQgZGVjaXNpb25zIHRvIHNwaXRlIG90aGVyIHBlb3BsZS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGdpdmUgdXAgb24gbXkgZHJlYW1zIHRvbyBlYXNpbHkuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZnJlbmNoeVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIG9mdGVuIGNoYW5nZSBteXNlbGYgaW4gb3JkZXIgdG8gZmVlbCBhY2NlcHRlZCBieSBteSBwZWVycy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIHB1dCBvdGhlciBwZW9wbGUgaW4gZGFuZ2VyIGJlY2F1c2Ugb2YgbXkgYWN0aW9ucy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gbm90IHRoZSBiZXN0IGNvbW11bmljYXRvci5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIkhvdyB3b3VsZCB5b3UgZGVzY3JpYmUgeW91cnNlbGY/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSSBoYXZlIGdyZWF0IGxlYWRlcnNoaXAgcXVhbGl0aWVzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBhIGRyZWFtZXIuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZnJlbmNoeVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gaGFyZC13b3JraW5nIGFuZCB0cnkgdG8gZG8gdGhlIHJpZ2h0IHRoaW5nLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImtlbmlja2llXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBzaHkgYnV0IGNhbiBiZSBsb3VkIGFuZCBidWJibHkgd2l0aCBwZW9wbGUgSSdtIGNsb3NlIHRvLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGxpa2UgdG8gY2xvd24gYXJvdW5kIGFuZCBub3QgdGFrZSB0aGluZ3MgdG9vIHNlcmlvdXNseS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIG91dHNwb2tlbiBidXQgdnVsbmVyYWJsZS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gbm90IGFzIGlubm9jZW50IGFzIGV2ZXJ5b25lIHRoaW5rcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiSSB0ZW5kIHRvIGdvIGZvci4uLlwiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGlzIHVuZGVyc3RhbmRpbmcgYW5kIGEgbGl0dGxlIHF1aXJreS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHRvdWdoLWxvb2tpbmcgb25lIHdpdGggYSBoZWFydCBvZiBnb2xkLiBUaGUgbW9yZSB0YXR0b29lcywgdGhlIGJldHRlci5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBoYXMgYSBuaWNlIHNtaWxlIGFuZCBpcyBhIGxpdHRsZSBuZXJkeS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSB3aG8gaXNuJ3QgYWZyYWlkIHRvIGJlIHRoZW1zZWx2ZXMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHBvcHVsYXIgb25lLCBldmVuIGlmIHRoZXkgYXJlIGEgamVyay5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBsb3ZlcyBmb29kIGFzIG11Y2ggYXMgSSBkby5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSBJIGNhbiB0YWtlIGFkdmFudGFnZSBvZi5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hhdCdzIHlvdXIgaWRlYSBvZiB0aGUgcGVyZmVjdCBkYXRlP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIlNlZWluZyBhIGxpdmUgY29tZWR5IHNob3cuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZXJlIGlzIG5vIHN1Y2ggdGhpbmcuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiU3BlbmRpbmcgdGhlIGRheSBhdCB0aGUgYmVhY2guXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiR29pbmcgdG8gdGhlIGRyaXZlIHRocm91Z2ggYW5kIGVuZGluZyB1cCBpbiBhIG1ha2Ugb3V0IHNlc3Npb24uXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiR29pbmcgZ28ta2FydCByYWNpbmdcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBcHJpbCAyNXRoLCBiZWNhdXNlIGl0J3Mgbm90IHRvbyBob3QsIG5vdCB0b28gY29sZCwgYWxsIHlvdSBuZWVkIGlzIGEgbGlnaHQgamFja2V0LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiRGlubmVyIGF0IGEgcmVzdGF1cmFudCBmb2xsb3dlZCBieSBpY2UgY3JlYW0gc29tZXdoZXJlLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hpY2ggb2YgdGhlc2Ugd291bGQgeW91IGJpbmdlIHdhdGNoP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIlRvcCBHZWFyXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTWFzdGVyQ2hlZlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJRdWVlciBFeWVcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZSBHb29kIFBsYWNlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmVyc2V5IFNob3JlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmFja2Fzc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJHaXJsc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGF0IHdhcyB5b3VyIGZhdm91cml0ZSBjbGFzcyBpbiBoaWdoIHNjaG9vbD9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJOb25lLiBJIHNwZW50IG1vc3Qgb2YgbXkgdGltZSBza2lwcGluZyBzY2hvb2wuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiRHJhbWFcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBsb3ZlZCBldmVyeSBjbGFzcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBbnl0aGluZyBidXQgZ3ltIGNsYXNzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlNob3AgY2xhc3NcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJOb25lLiBJIGRyb3BwZWQgb3V0LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSG9tZSBFY29ub21pY3NcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIkJlc3Qgc29uZyBpbiBHcmVhc2U/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSG9wZWxlc3NseSBEZXZvdGVkIHRvIFlvdVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZXJlIEFyZSBXb3JzZSBUaGluZ3MgSSBDb3VsZCBEb1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlNhbmR5XCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQmx1ZSBNb29uXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkJlYXV0eSBTY2hvb2wgRHJvcG91dFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiV2UgR28gVG9nZXRoZXJcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiR3JlYXNlZCBMaWdodG5pbidcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9XHJcbl0vL3F1aXpRdWVzdGlvbnNcclxuXHJcblxyXG5jb25zdCBjb2NrdGFpbExpc3QgPSBbXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInNhbmR5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJEaXJ0eSBTaGlybGV5XCIsXHJcblx0XHRpbWFnZTogXCJkaXJ0eVNoaXJsZXlcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImRhbm55XCIsXHJcblx0XHRjb2NrdGFpbDogXCI1NyBULUJpcmRcIixcclxuXHRcdGltYWdlOiBcIjU3dGJpcmRcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInJpenpvXCIsXHJcblx0XHRjb2NrdGFpbDogXCJQaW5rIExhZHlcIixcclxuXHRcdGltYWdlOiBcInBpbmtMYWR5XCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJrZW5pY2tpZVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiQm9pbGVybWFrZXJcIixcclxuXHRcdGltYWdlOiBcImJvaWxlcm1ha2VyXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJmcmVuY2h5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJQacOxYSBDb2xhZGFcIixcclxuXHRcdGltYWdlOiBcInBpbmFDb2xhZGFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImphblwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiUGluayBTcXVpcnJlbFwiLFxyXG5cdFx0aW1hZ2U6IFwicGlua1NxdWlycmVsXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJwdXR6aWVcIixcclxuXHRcdGNvY2t0YWlsOiBcIlRvbSBDb2xsaW5zXCIsXHJcblx0XHRpbWFnZTogXCJ0b21Db2xsaW5zXCJcclxuXHR9XHJcbl1cclxuXHJcbmNvbnN0IHJlY2lwZXMgPSBbXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIkRpcnR5IFNoaXJsZXlcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSBvdW5jZSB2b2RrYVwiLFxyXG5cdFx0XHRcIjEvMiBvdW5jZSBjaGVycnkgbGlxdWV1clwiLFxyXG5cdFx0XHRcIjUgb3VuY2VzIGxlbW9uLWxpbWUgc29kYVwiLFxyXG5cdFx0XHRcIjEvNCB0ZWFzcG9vbiBncmVuYWRpbmVcIixcclxuXHRcdFx0XCJNYXJhc2NoaW5vIGNoZXJyeSwgdG8gZ2FybmlzaFwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBQb3VyIHRoZSB2b2RrYSBhbmQgY2hlcnJ5IGxpcXVldXIgaW50byBhbiBpY2UtZmlsbGVkIGdsYXNzLlwiLFxyXG5cdFx0XHRcIjIuIFRvcCB3aXRoIHRoZSBsZW1vbi1saW1lIHNvZGEuXCIsXHJcblx0XHRcdFwiMy4gQWRkIHRoZSBncmVuYWRpbmUgYW5kIGNvbWJpbmUuXCIsXHJcblx0XHRcdFwiNC4gR2FybmlzaCB3aXRoIHRoZSBtYXJhc2NoaW5vIGNoZXJyeSwgYW5kIHNlcnZlLlwiXHJcblx0XHRdLC8vc3RlcHNcclxuXHRcdGFsY29ob2w6IFtcIlZvZGthXCIsIFwiQ2hlcnJ5IExpcXVldXJcIl1cclxuXHR9LC8vb2JqZWN0IDFcclxuXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIjU3IFQtQmlyZFwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIG91bmNlIHZvZGthXCIsXHJcblx0XHRcdFwiMuKBhDMgb3VuY2UgYW1hcmV0dG9cIixcclxuXHRcdFx0XCIy4oGEMyBvdW5jZSBtZWxvbiBsaXF1ZXVyXCIsXHJcblx0XHRcdFwiMuKBhDMgb3VuY2UgcGVhY2ggc2NobmFwcHNcIixcclxuXHRcdFx0XCIxIDLigYQzIG91bmNlcyBmcmVzaCBvcmFuZ2UganVpY2VcIixcclxuXHRcdFx0XCIyIHJhc3BiZXJyaWVzLCB0byBnYXJuaXNoIChvcHRpb25hbClcIixcclxuXHRcdFx0XCJvcmFuZ2UsIHNsaWNlIHRvIGdhcm5pc2ggKG9wdGlvbmFsKVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBQb3VyIGFsbCBpbmdyZWRpZW50cyBpbnRvIGEgc2hha2VyIHdpdGggaWNlLiBTaGFrZS5cIixcclxuXHRcdFx0XCIyLiBTdHJhaW4gaW50byBhbiBvbGQtZmFzaGlvbmVkIGdsYXNzIGZpbGxlZCB3aXRoIGljZS5cIixcclxuXHRcdFx0XCIzLiBHYXJuaXNoIHdpdGggdHdvIHJhc3BiZXJyaWVzIGFuZCBhIHNsaWNlIG9mIG9yYW5nZSBpZiBkZXNpcmVkLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiVm9ka2FcIiwgXCJBbWFyZXR0b1wiLCBcIk1lbG9uIGxpcXVldXJcIiwgXCJQZWFjaCBzY2huYXBwc1wiXVxyXG5cdH0sXHJcblxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJQaW5rIExhZHlcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSAxLzIgb3VuY2VzIGdpblwiLFxyXG5cdFx0XHRcIjMvNCBvdW5jZSBhcHBsZWphY2tcIixcclxuXHRcdFx0XCIxLzQgb3VuY2UgbGVtb24ganVpY2VcIixcclxuXHRcdFx0XCI0IGRhc2hlcyBncmVuYWRpbmVcIixcclxuXHRcdFx0XCIxIGVnZyB3aGl0ZVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IE1hcmFzY2hpbm8gY2hlcnJ5XCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIjEuIFNoYWtlIGluZ3JlZGllbnRzIHZlcnkgd2VsbCB3aXRoIGljZS5cIixcclxuXHRcdFx0XCIyLiBTdHJhaW4gaW50byBjb2NrdGFpbCBnbGFzcy5cIixcclxuXHRcdFx0XCIzLiBHYXJuaXNoIHdpdGggYSBjaGVycnkuXCJcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJHaW5cIiwgXCJBcHBsZUphY2tcIl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJCb2lsZXJtYWtlclwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIDEvMyBveiB3aGlza2V5XCIsXHJcblx0XHRcdFwiMSBwaW50IGJlZXJcIiBcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIjEuIFBvdXIgd2hpc2tleSBpbnRvIHNob3QgZ2xhc3MuXCIsXHJcblx0XHRcdFwiMi4gRG93biB0aGUgd2hpc2tleSBhbmQgY2hhc2Ugd2l0aCBiZWVyLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiV2hpc2tleVwiLCBcIkJlZXJcIl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJQacOxYSBDb2xhZGFcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMyBveiBwaW5lYXBwbGUganVpY2VcIixcclxuXHRcdFx0XCIxIG96IHdoaXRlIHJ1bVwiLFxyXG5cdFx0XHRcIjEgb3ogY29jb251dCBjcmVhbVwiLFxyXG5cdFx0XHRcIjEgY3VwIGNydXNoZWQgaWNlXCIsXHJcblx0XHRcdFwiR2FybmlzaDogc2xpY2Ugb2YgcGluZWFwcGxlXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIjEuIFB1dCBpbmdyZWRpZW50cyBpbnRvIGJsZW5kZXIuXCIsXHJcblx0XHRcdFwiMi4gQmxlbmQgdW50aWwgc21vb3RoLlwiLFxyXG5cdFx0XHRcIjMuIFBvdXIgaW50byBjaGlsbGVkIGdsYXNzIGFuZCBnYXJuaXNoIHdpdGggcGluZWFwcGxlLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiV2hpdGUgcnVtXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGluayBTcXVpcnJlbFwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIG96IGFtYXJldHRvXCIsXHJcblx0XHRcdFwiMSAxLzIgb3ogd2hpdGUgY3LDqG1lIGRlIGNhY2FvXCIsXHJcblx0XHRcdFwiMSBveiBoZWF2eSBjcmVhbVwiLFxyXG5cdFx0XHRcIjEgZGFzaCBncmVuYWRpbmVcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBBZGQgaW5ncmVkaWVudHMgaW50byBhIHNoYWtlciBmaWxsZWQgd2l0aCBpY2UgYW5kIHNoYWtlIHVudGlsIGNvbGQuXCIsXHJcblx0XHRcdFwiMi4gU3RyYWluIGludG8gYSBjaGlsbGVkIGdsYXNzIGFuZCBnYXJuaXNoIHdpdGggYSBjaGVycnkuXCJcdFx0XHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiQW1hcmV0dG9cIiwgXCJDcmVtZSBkZSBjYWNhbyB3aGl0ZVwiXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIlRvbSBDb2xsaW5zXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgMS8yIG96IGdpblwiLFxyXG5cdFx0XHRcIjEgb3ogZnJlc2ggbGVtb24ganVpY2VcIixcclxuXHRcdFx0XCIxLzIgb3ogc2ltcGxlIHN5cnVwXCIsXHJcblx0XHRcdFwiMiBveiBjbHViIHNvZGFcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBMZW1vbiBzbGljZSwgTWFyYXNjaGlubyBjaGVycnlcIlxyXG5cdFx0XSxcclxuXHRcdHN0ZXBzOiBbXHJcblx0XHRcdFwiMS4gTWl4IGdpbiwgbGVtb24ganVpY2UgYW5kIHNpbXBsZSBzeXJ1cCBpbiBhIHRhbGwgZ2xhc3MgZmlsbGVkIHdpdGggaWNlLlwiLFxyXG5cdFx0XHRcIjIuIFRvcCB3aXRoIGNsdWIgc29kYSBhbmQgZ2FybmlzaCB3aXRoIGEgbGVtb24gc2xpY2UgYW5kIGNoZXJyeS5cIlx0XHRcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJHaW5cIl1cclxuXHR9LFxyXG5dLy9yZWNpcGVzIGFycmF5XHJcblxyXG5cclxuY29uc3QgJHF1ZXN0aW9uID0gJChcIi5xdWVzdGlvblwiKTtcclxuY29uc3QgJHRvdGFsUXVlc3Rpb25zID0gcXVpelF1ZXN0aW9ucy5sZW5ndGg7XHJcbmNvbnN0ICRjaG9pY2VzID0gJChcIiNjaG9pY2VMaXN0XCIpO1xyXG5jb25zdCAkcmVzdWx0cyA9ICQoXCIucmVzdWx0c1wiKTtcclxuY29uc3QgJGNvY2t0YWlsSW1hZ2VEaXYgPSAkKFwiLmNvY2t0YWlsSW1hZ2VcIik7XHJcbmNvbnN0ICR0cnkgPSAkKFwiLnRyeVwiKTtcclxuY29uc3QgJGluZ3JlZGllbnRzID0gJChcIi5pbmdyZWRpZW50c1wiKVxyXG5jb25zdCAkbWV0aG9kID0kKFwiLm1ldGhvZFwiKTtcclxuY29uc3QgJG5leHQgPSAkKFwiLm5leHRcIik7XHJcbmNvbnN0ICRhZ2FpbiA9ICQoXCIuYWdhaW5cIik7XHJcbmNvbnN0ICRyZWNpcGUgPSAkKFwiLnJlY2lwZVwiKTtcclxuY29uc3QgJGFsY29ob2wgPSQoXCIuYWxjb2hvbFwiKTtcclxuXHJcblxyXG5sZXQgJGN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbmxldCB1c2VyQ2hvaWNlcyA9W107XHJcblxyXG4kdHJ5LmhpZGUoKTtcclxuJGluZ3JlZGllbnRzLmhpZGUoKTtcclxuJG1ldGhvZC5oaWRlKCk7XHJcbiRyZXN1bHRzLmhpZGUoKTtcclxuJGNvY2t0YWlsSW1hZ2VEaXYuaGlkZSgpO1xyXG4kYWdhaW4uaGlkZSgpO1xyXG4kcmVjaXBlLmhpZGUoKTtcclxuJGFsY29ob2wuaGlkZSgpO1xyXG5cclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbGlzdCBvZiBpbmdyZWRpZW50cyAoY2FsbCB3aGVuIGNvY2t0YWlsIGhhcyBiZWVuIGNob3NlbilcclxuZnVuY3Rpb24gaW5ncmVkaWVudHNMaXN0KGFycmF5KSB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIGxpc3QgZWxlbWVudDpcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGl0ZW06XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgLy8gU2V0IGl0cyBjb250ZW50czpcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5W2ldKSk7XHJcbiAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBsaXN0OlxyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICAvLyBGaW5hbGx5LCByZXR1cm4gdGhlIGNvbnN0cnVjdGVkIGxpc3Q6XHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbGlzdCBvZiBzdGVwcyB0byBtYWtlIGNvY2t0YWlsIChjYWxsIHdoZW4gY29ja3RhaWwgaGFzIGJlZW4gY2hvc2VuKVxyXG5mdW5jdGlvbiBzdGVwcyhhcnJheSkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGVsZW1lbnQ6XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBpdGVtOlxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIFNldCBpdHMgY29udGVudHM6XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnJheVtpXSkpO1xyXG4gICAgICAgIC8vIEFkZCBpdCB0byB0aGUgbGlzdDpcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSwgcmV0dXJuIHRoZSBjb25zdHJ1Y3RlZCBsaXN0OlxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2YgYWxjb2hvbCB0byBzZWFyY2ggbGNibyBhcGkgKGNhbGwgd2hlbiBjb2NrdGFpbCBoYXMgYmVlbiBjaG9zZW4pXHJcbmZ1bmN0aW9uIGFsY29ob2woYXJyYXkpIHtcclxuXHRjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblx0ZHJvcGRvd24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImFsY29ob2xMaXN0XCIpO1xyXG5cdGRyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWxjb2hvbExpc3RcIik7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0Y29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIFx0b3B0LnZhbHVlID0gYXJyYXlbaV07XHJcbiAgICBcdG9wdC50ZXh0ID0gYXJyYXlbaV07XHJcbiAgICBcdGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XHJcblx0fVxyXG5cdHJldHVybiBkcm9wZG93bjtcclxufVxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vL3Nob3dzIGZpcnN0IHF1ZXN0aW9uIGFuZCBjcmVhdGVzIHJhZGlvIGJ1dHRvbnMgZm9yIGFuc3dlciBjaG9pY2VzXHJcblx0JHF1ZXN0aW9uLnRleHQocXVpelF1ZXN0aW9uc1skY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XHJcblx0bGV0IGkgPSAwO1xyXG5cdHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuXHRcdGxldCByYWRpb0J0biA9ICQoJzxpbnB1dCB0eXBlPVwicmFkaW9cIiAgaWQ9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCIgbmFtZT1cIicrIHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcyArJ1wiIHZhbHVlPVwiJysgKGNob2ljZS52YWx1ZSkgKydcIiBjaGVja2VkIC8+PGxhYmVsIGZvcj1cIicrKGNob2ljZS5hbnN3ZXIpKydcIj4nICsgKGNob2ljZS5hbnN3ZXIpICsgJzwvbGFiZWw+Jyk7XHJcblx0XHRsZXQgJGNob2ljZUxpc3QgPSAkKFwiPGxpPlwiKS5hcHBlbmQocmFkaW9CdG4pO1xyXG5cdFx0JChcIiNjaG9pY2VMaXN0XCIpLmFwcGVuZCgkY2hvaWNlTGlzdCk7XHJcblxyXG5cdH0pO1xyXG4vL3B1c2hlcyB1c2VyJ3MgY2hvaWNlIHRvIG5ldyBhcnJheSB3aGVuIFwibmV4dFwiIGlzIGNsaWNrZWQgdGhlbiByZXNldHNcclxuXHQkbmV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dXNlckNob2ljZXMucHVzaCgkKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJykudmFsKCkpO1xyXG5cdFx0Y29uc29sZS5sb2codXNlckNob2ljZXMpO1xyXG5cdFx0JGNob2ljZXMuZW1wdHkoKTtcclxuXHJcbi8vc2hvd3MgbmV4dCBxdWVzdGlvblxyXG5cdFx0aWYgKCRjdXJyZW50UXVlc3Rpb24gPCAkdG90YWxRdWVzdGlvbnMgLTEpIHtcclxuXHRcdFx0XHQkY3VycmVudFF1ZXN0aW9uID0gJGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcblx0XHRcdFx0JHF1ZXN0aW9uLnRleHQocXVpelF1ZXN0aW9uc1skY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuXHRcdFx0XHRcdGxldCByYWRpb0J0biA9ICQoJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIicrKGNob2ljZS5hbnN3ZXIpKydcIiBuYW1lPVwiJysgcXVpelF1ZXN0aW9uc1tpXS5jaG9pY2VzICsnXCIgdmFsdWU9XCInICsgKGNob2ljZS52YWx1ZSkgKydcIiBjaGVja2VkIC8+PGxhYmVsIGZvcj1cIicrKGNob2ljZS5hbnN3ZXIpKydcIj4nICsgKGNob2ljZS5hbnN3ZXIpICsgJzwvbGFiZWw+Jyk7XHJcblx0XHRcdFx0XHRsZXQgJGNob2ljZUxpc3QgPSAkKFwiPGxpPlwiKS5hcHBlbmQocmFkaW9CdG4pO1xyXG5cdFx0XHRcdFx0JChcIiNjaG9pY2VMaXN0XCIpLmFwcGVuZCgkY2hvaWNlTGlzdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGVsc2Ugey8vcmV0dXJuIHRoZSBtb3N0IHNlbGVjdGVkIHZhbHVlIG9uY2UgcXVlc3Rpb25zIGFyZSBmaW5pc2hlZFxyXG5cdFx0XHRjb25zdCB1c2VyQ2hhcmFjdGVyID0gZnVuY3Rpb24gbW9zdFNlbGVjdGVkVmFsdWUoYXJyYXkpe1xyXG5cdFx0XHQgICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsYikgPT5cclxuXHRcdFx0ICAgICAgICAgIGFycmF5LmZpbHRlcih2ID0+IHY9PT1hKS5sZW5ndGhcclxuXHRcdFx0ICAgICAgICAtIGFycmF5LmZpbHRlcih2ID0+IHY9PT1iKS5sZW5ndGgpLnBvcCgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBjaGFyYWN0ZXIgPSB1c2VyQ2hhcmFjdGVyKHVzZXJDaG9pY2VzKTtcclxuXHRcdFx0Y29uc3QgJGNoYXJhY3RlciA9ICQoXCI8aDI+XCIpLnRleHQoXCJIZXksIFwiICtjaGFyYWN0ZXIrIFwiIVwiKTtcclxuXHRcdFx0JChcIiNncmVhc2VDaGFyYWN0ZXJcIikuYXBwZW5kKCRjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjaGFyYWN0ZXIpO1xyXG5cclxuLy90YWtlcyBtb3N0IHNlbGVjdGVkIHZhbHVlIGFuZCByZXR1cm5zIGNvY2t0YWlsIGJhc2VkIG9uIHRoZSBjaGFyYWN0ZXIncyBuYW1lXHJcblx0XHRcdGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IGNvY2t0YWlsTGlzdC5maWx0ZXIocmVzdCA9PiByZXN0LmNoYXJhY3RlciA9PT0gY2hhcmFjdGVyKTtcclxuXHRcdFx0Y29uc3QgdGhlT25lID0gZmlsdGVyZWRPcHRpb25zWzBdLmNvY2t0YWlsO1xyXG5cdFx0XHRjb25zb2xlLmxvZyh0aGVPbmUpO1xyXG5cdFx0XHQkcXVlc3Rpb24uaGlkZSgpO1xyXG5cdFx0XHQkdHJ5LnNob3coKTtcclxuLy9kaXNwbGF5cyBjb2NrdGFpbCBpbWFnZVxyXG5cdFx0XHRjb25zdCAkY29ja3RhaWxJbWFnZSA9ICQoXCIjY29ja3RhaWxJbWFnZVwiKS5hdHRyKFwic3JjXCIsIFwiYXNzZXRzL1wiKyBmaWx0ZXJlZE9wdGlvbnNbMF0uaW1hZ2UgK1wiLnN2Z1wiKTtcclxuXHRcdFx0JChcIiNjb2NrdGFpbEltYWdlXCIpLmFwcGVuZCgkY29ja3RhaWxJbWFnZSk7XHJcblx0XHRcdCRjb2NrdGFpbEltYWdlRGl2LnNob3coKTtcclxuXHJcbi8vZGlzcGxheXMgY29ja3RhaWwgbmFtZVxyXG5cdFx0XHRjb25zdCAkc2lnbmF0dXJlQ29ja3RhaWwgPSAkKFwiPGgyPlwiKS50ZXh0KFwiWW91ciBzaWduYXR1cmUgY29ja3RhaWwgaXMgdGhlIFwiICt0aGVPbmUrIFwiLlwiKTtcclxuXHRcdFx0JChcIi5yZXN1bHRzXCIpLmFwcGVuZCgkc2lnbmF0dXJlQ29ja3RhaWwpO1xyXG5cdFx0XHQkcmVzdWx0cy5zaG93KCk7XHJcbi8vZGlzcGxheXMgaW5ncmVkaWVudHMgbGlzdFx0XHRcdFxyXG5cdFx0XHRjb25zdCByZWNpcGVJbmdyZWRpZW50cyA9IHJlY2lwZXMuZmlsdGVyKHJlc3QgPT4gcmVzdC5jb2NrdGFpbE5hbWUgPT09IHRoZU9uZSk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlSW5ncmVkaWVudHNbMF0uaW5ncmVkaWVudHM7XHJcblx0XHRcdCRpbmdyZWRpZW50cy5zaG93KCk7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ncmVkaWVudHNcIikuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNMaXN0KHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzKSk7XHJcbi8vZGlzcGxheXMgcmVjaXBlIHN0ZXBzXHJcblx0XHRcdCRtZXRob2Quc2hvdygpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmVSZWNpcGVTdGVwcyA9IHJlY2lwZUluZ3JlZGllbnRzWzBdLnN0ZXBzO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0ZXBzXCIpLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzTGlzdCh0aGVPbmVSZWNpcGVTdGVwcykpO1xyXG5cclxuLy9kaXNwbGF5cyB3aGF0IGFsY29ob2wgaXMgbmVlZGVkIGFuZCBjb25uZWN0cyB0byBsY2JvYXBpXHJcblx0XHRcdCRhbGNvaG9sLnNob3coKTtcclxuXHRcdFx0Y29uc3QgdGhlT25lQWxjb2hvbCA9IHJlY2lwZUluZ3JlZGllbnRzWzBdLmFsY29ob2w7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxjb2hvbFwiKS5hcHBlbmRDaGlsZChhbGNvaG9sKHRoZU9uZUFsY29ob2wpKTtcclxuXHJcblxyXG5cdFx0XHQkbmV4dC5oaWRlKCk7XHJcblx0XHRcdCRhZ2Fpbi5zaG93KCk7XHJcblx0XHRcdCRhZ2Fpbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnaGVhZGVyJykuY3NzKHtcImJhY2tncm91bmQtY29sb3JcIjpcInllbGxvd1wiLCBcImJhY2tncm91bmQtaW1hZ2VcIjpcInVybCgvYXNzZXRzL1wiICtjaGFyYWN0ZXIrIFwiLnN2ZylcIiwgXCJiYWNrZ3JvdW5kLXNpemVcIjpcIjE1MHB4IDIyNXB4XCIsIFwiYmFja2dyb3VuZC1yZXBlYXRcIjpcInJlcGVhdFwifSk7XHJcblxyXG5cclxuXHJcbi8vQVBJIEtFWVxyXG5cdFx0XHRjb25zdCBrZXkgPSBcIlRva2VuIE1Eb3dOVGd3TnpkaE9DMDNOalExTFRFeFpUZ3RPVGd5TlMwd016VXdNRGRrT1daaU5XWTZXVEZ1YUZwTVJGaFJhbFJwWWxOQ01HZzFiMmhyZWtoV1ltTktSSFJoY1ZocWNrMW9cIjtcclxuXHJcblx0XHRcdGNvbnN0IGdldEFsY29ob2wgPSAocXVlcnkpID0+IHtcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0ICB1cmw6ICdodHRwOi8vbGNib2FwaS5jb20vcHJvZHVjdHMnLFxyXG5cdFx0XHRcdFx0ICBoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQgICAgQXV0aG9yaXphdGlvbjoga2V5XHJcblx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0XHQgIG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0XHRcdFx0ICBkYXRhOiB7XHJcblx0XHRcdFx0XHQgIFx0cTogcXVlcnksXHJcblx0XHRcdFx0XHQgIFx0cGVyX3BhZ2U6IDIwXHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgYWxjb2hvbE9iamVjdHMgPSByZXN1bHQucmVzdWx0O1xyXG5cdFx0XHRcdFx0ZGlzcGxheUFsY29ob2woYWxjb2hvbE9iamVjdHMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3QgZGlzcGxheUFsY29ob2wgPSAoYWxsQWxjb2hvbCkgPT4ge1xyXG5cdFx0XHRcdCQoXCIjYWxjb2hvbERhdGFcIikuZW1wdHkoKTtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEFsY29ob2wuZmlsdGVyKChzcGlyaXRzT25seSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNwaXJpdHNPbmx5LnZvbHVtZV9pbl9taWxsaWxpdGVycyA+PSA3NTAgJiYgc3Bpcml0c09ubHkucHJpbWFyeV9jYXRlZ29yeSAhPSBcIlJlYWR5LXRvLURyaW5rL0Nvb2xlcnNcIjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0ZmlsdGVyZWQuZm9yRWFjaCgoYm90dGxlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhib3R0bGUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgJGltZ1RodW1iID0gJChcIjxpbWc+XCIpLmF0dHIoXCJzcmNcIiwgYm90dGxlLmltYWdlX3RodW1iX3VybCk7XHJcblx0XHRcdFx0XHRjb25zdCAkbmFtZSA9ICQoXCI8aDM+XCIpLnRleHQoYm90dGxlLm5hbWUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgJG9yaWdpbiA9ICQoXCI8cD5cIikuYWRkQ2xhc3MoXCJvcmlnaW5cIikudGV4dChib3R0bGUub3JpZ2luKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRzdHlsZSA9ICQoXCI8cD5cIikuYWRkQ2xhc3MoXCJzdHlsZVwiKS50ZXh0KGJvdHRsZS5zdHlsZSk7XHJcblx0XHRcdFx0XHRjb25zdCAkcHJpY2VJbkNlbnRzID0gYm90dGxlLnByaWNlX2luX2NlbnRzO1xyXG5cdFx0XHRcdFx0Y29uc3QgcHJpY2VJbkRvbGxhcnMgPSAocHJpY2UpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGRvbGxhcnMgPSBwcmljZSAvIDEwMDtcclxuXHRcdFx0XHRcdFx0ZG9sbGFycyA9IGRvbGxhcnMudG9GaXhlZCgyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvbGxhcnM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwcmljZUluRG9sbGFycygkcHJpY2VJbkNlbnRzKSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgJHByaWNlID0gJChcIjxwPlwiKS5hZGRDbGFzcyhcInByaWNlXCIpLnRleHQoXCIkXCIrIHByaWNlSW5Eb2xsYXJzKCRwcmljZUluQ2VudHMpKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRkcmlua0NvbnRhaW5lciA9ICQoXCI8ZGl2PlwiKS5hcHBlbmQoJGltZ1RodW1iLCAkbmFtZSwgJG9yaWdpbiwgJHN0eWxlLCAkcHJpY2UpO1xyXG5cdFx0XHRcdFx0JChcIiNhbGNvaG9sRGF0YVwiKS5hcHBlbmQoJGRyaW5rQ29udGFpbmVyKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Z2V0QWxjb2hvbCh0aGVPbmVBbGNvaG9sWzBdKTtcclxuXHRcdFx0JChcIiNhbGNvaG9sTGlzdFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRBbGNvaG9sID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZEFsY29ob2wpO1xyXG5cdFx0XHRcdGdldEFsY29ob2woc2VsZWN0ZWRBbGNvaG9sKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdH0vL2Vsc2VcclxuXHR9KTsvL25leHQub24uY2xpY2tcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4iXX0=
