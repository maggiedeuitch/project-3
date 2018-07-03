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
	}, { answer: "A leather jacket",
		value: "danny"
	}, { answer: "Cigarettes",
		value: "kenickie"
	}, { answer: "A cardigan",
		value: "sandy"
	}, { answer: "My hairbrush",
		value: "frenchy"
	}, { answer: "My water gun",
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
	}, { answer: "I'm a dreamer and can come off as ditzy.",
		value: "frenchy"
	}, { answer: "I'm hard-working and try to do the right thing.",
		value: "kenickie"
	}, { answer: "I can be loud and bubbly.",
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
	cocktail: "Dirty Shirley"
}, {
	character: "danny",
	cocktail: "57 T-Bird"
}, {
	character: "rizzo",
	cocktail: "Pink Lady"
}, {
	character: "kenickie",
	cocktail: "Boilermaker"
}, {
	character: "frenchy",
	cocktail: "Piña Colada"
}, {
	character: "jan",
	cocktail: "Pink Squirrel"
}, {
	character: "putzie",
	cocktail: "Tom Collins"
}];

var recipes = [{
	cocktailName: "Dirty Shirley",
	ingredients: ["1 ounce vodka", "1/2 ounce cherry liqueur", "5 ounces lemon-lime soda", "1/4 teaspoon grenadine", "Maraschino cherry, to garnish"],
	steps: ["Pour the vodka and cherry liqueur into an ice-filled glass.", "Top with the lemon-lime soda.", "Add the grenadine and combine.", "Garnish with the maraschino cherry, and serve."], //steps
	alcohol: ["Vodka", "Cherry Liqueur"]
}, //object 1

{
	cocktailName: "57 T-Bird",
	ingredients: ["1 ounce vodka", "2⁄3 ounce amaretto", "2⁄3 ounce melon liqueur", "2⁄3 ounce peach schnapps", "1 2⁄3 ounces fresh orange juice", "2 raspberries, to garnish (optional)", "orange, slice to garnish (optional)"],
	steps: ["Pour all ingredients into a shaker with ice. Shake.", "Strain into an old-fashioned glass filled with ice.", "Garnish with two raspberries and a slice of orange on a cocktail stick if desired."],
	alcohol: ["Vodka", "Amaretto", "Melon liqueur", "Peach schnapps"]
}, {
	cocktailName: "Pink Lady",
	ingredients: ["1 1/2 ounces gin", "3/4 ounce applejack", "1/4 ounce lemon juice", "4 dashes grenadine", "1 egg white", "Garnish: Maraschino cherry"],
	steps: ["Shake ingredients very well with ice.", "Strain into cocktail glass.", "Garnish with a cherry."],
	alcohol: ["Gin", "AppleJack"]
}, {
	cocktailName: "Boilermaker",
	ingredients: ["1 1/3 oz whiskey", "1 pint beer"],
	steps: ["Pour whiskey into shot glass.", "Down the whiskey and chase with beer."],
	alcohol: ["Whiskey", "Beer"]
}, {
	cocktailName: "Piña Colada",
	ingredients: ["3 oz pineapple juice", "1 oz white rum", "1 oz coconut cream", "1 cup crushed ice", "Garnish: slice of pineapple"],
	steps: ["Put ingredients into blender.", "Blend until smooth.", "Pour into chilled glass and garnish with pineapple."],
	alcohol: ["White rum"]
}, {
	cocktailName: "Pink Squirrel",
	ingredients: ["1 oz amaretto", "1 1/2 oz white crème de cacao", "1 oz heavy cream", "Garnish: Maraschino cherry"],
	steps: ["Add ingredients into a shaker filled with ice and shake until cold.", "Strain into a chilled glass and garnish with a cherry."],
	alcohol: ["Amaretto", "Creme de cacao white"]
}, {
	cocktailName: "Tom Collins",
	ingredients: ["1 1/2 oz gin", "1 oz fresh lemon juice", "1/2 oz simple syrup", "2 oz club soda", "Garnish: Lemon slice, Maraschino cherry"],
	steps: ["Mix gin, lemon juice and simple syrup in a tall glass filled with ice.", "Top with club soda and garnish with a lemon slice and cherry."],
	alcohol: ["Gin"]
}]; //recipes array


var $question = $(".question");
var $totalQuestions = quizQuestions.length;
var $choices = $(".choices");
var $results = $(".results");
var $try = $(".try");
var $next = $(".next");
var $again = $(".again");
var $recipe = $(".recipe");
var $alcohol = $(".alcohol");

var $currentQuestion = 0;
var userChoices = [];

$try.hide();
$results.hide();
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
	// document.getElementById("alcohol").appendChild(dropdown);

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
		$choices.append(radioBtn);
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
				$choices.append(radioBtn);
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
			var $character = $("<h2>").text("You're " + character + " !");
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
			//displays cocktail name
			var resultHTML = "" + theOne;
			$results.html(resultHTML);
			$results.show();
			//displays ingredients list			
			var recipeIngredients = recipes.filter(function (rest) {
				return rest.cocktailName === theOne;
			});
			var theOneRecipeIngredients = recipeIngredients[0].ingredients;
			document.getElementById("ingredients").appendChild(ingredientsList(theOneRecipeIngredients));
			//displays recipe steps
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
						per_page: 10
					}
				}).then(function (result) {
					// displayAlcohol(result); 
					var alcoholObjects = result.result;
					displayAlcohol(alcoholObjects);
				});
			};
			var displayAlcohol = function displayAlcohol(allAlcohol) {
				$("#alcoholData").empty();
				allAlcohol.filter(function (spiritsOnly) {
					return spiritsOnly.package_unit_type != "can";
				});

				allAlcohol.forEach(function (bottle) {
					console.log(bottle);
					var $imgThumb = $("<img>").attr("src", bottle.image_thumb_url);
					var $name = $("<h4>").text(bottle.name);
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
					$("#alcoholData").append($imgThumb, $name, $origin, $style, $price);
				});
			};

			getAlcohol(theOneAlcohol[0]);
			$("#alcoholList").on("change", function () {
				// console.log("new alcohol selected");
				var selectedAlcohol = $(this).val();
				console.log(selectedAlcohol);
				getAlcohol(selectedAlcohol);
			});
		} //else
	}); //next.on.click

});

//display the recipe on signature cocktail result page
//user can click on ingredients list for alcohol
//search the lcbo for alcohol on click
//display the name, price, sale for each

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxnQkFBZ0IsQ0FFckI7QUFDQyxXQUFVLDBDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxtQkFEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLGtCQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsWUFBVjtBQUNDLFNBQU87QUFEUixFQVJRLEVBV1IsRUFBRSxRQUFRLFlBQVY7QUFDQyxTQUFPO0FBRFIsRUFYUSxFQWNSLEVBQUUsUUFBUSxjQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLGNBQVY7QUFDQyxTQUFPO0FBRFIsRUFqQlEsRUFvQlIsRUFBRSxRQUFRLFNBQVY7QUFDQyxTQUFPO0FBRFIsRUFwQlE7QUFGVixDQUZxQixFQThCckI7QUFDQyxXQUFVLDJCQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxpQ0FEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLDREQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsNkNBQVY7QUFDQyxTQUFPO0FBRFIsRUFSUSxFQVdSLEVBQUUsUUFBUSxvQ0FBVjtBQUNDLFNBQU87QUFEUixFQVhRLEVBY1IsRUFBRSxRQUFRLDhEQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLHFEQUFWO0FBQ0MsU0FBTztBQURSLEVBakJRLEVBb0JSLEVBQUUsUUFBUSxnQ0FBVjtBQUNDLFNBQU87QUFEUixFQXBCUTtBQUZWLENBOUJxQixFQXlEckI7QUFDQyxXQUFVLGtDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxvQ0FEVDtBQUVDLFNBQU87QUFGUixF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QyxPQUFPLE1BQXhDLENBQWhCO0FBQ0EsU0FBTSxTQUFTLEVBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsSUFBM0IsQ0FBZ0MsT0FBTyxLQUF2QyxDQUFmO0FBQ0EsU0FBTSxnQkFBZ0IsT0FBTyxjQUE3QjtBQUNBLFNBQU0saUJBQWlCLFNBQWpCLGNBQWlCLENBQUMsS0FBRCxFQUFXO0FBQ2pDLFVBQUksVUFBVSxRQUFRLEdBQXRCO0FBQ0EsZ0JBQVUsUUFBUSxPQUFSLENBQWdCLENBQWhCLENBQVY7QUFDQSxhQUFPLE9BQVA7QUFDQSxNQUpEO0FBS0EsYUFBUSxHQUFSLENBQVksZUFBZSxhQUFmLENBQVo7O0FBRUEsU0FBTSxTQUFTLEVBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsT0FBbEIsRUFBMkIsSUFBM0IsQ0FBZ0MsTUFBSyxlQUFlLGFBQWYsQ0FBckMsQ0FBZjtBQUNBLE9BQUUsY0FBRixFQUFrQixNQUFsQixDQUF5QixTQUF6QixFQUFvQyxLQUFwQyxFQUEyQyxPQUEzQyxFQUFvRCxNQUFwRCxFQUE0RCxNQUE1RDtBQUVELEtBakJBO0FBa0JBLElBeEJEOztBQTBCQSxjQUFXLGNBQWMsQ0FBZCxDQUFYO0FBQ0EsS0FBRSxjQUFGLEVBQWtCLEVBQWxCLENBQXFCLFFBQXJCLEVBQStCLFlBQVk7QUFDMUM7QUFDQSxRQUFNLGtCQUFrQixFQUFFLElBQUYsRUFBUSxHQUFSLEVBQXhCO0FBQ0EsWUFBUSxHQUFSLENBQVksZUFBWjtBQUNBLGVBQVcsZUFBWDtBQUNBLElBTEQ7QUFRQSxHQS9HZ0MsQ0ErR2hDO0FBQ0QsRUFoSEQsRUFUMkIsQ0F5SHhCOztBQUlILENBN0hEOztBQStIQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vaXQgc2hvdWxkIGhpZGUgYWxsIGJ1dCB0aGUgY3VycmVudCBxdWVzdGlvblxyXG4vL2l0IHNob3VsZCB0YWtlIHRoZSBzZWxlY3RlZCB2YWx1ZSB3aGVuIHVzZXIgY2xpY2tzIG5leHRcclxuLy9pdCBzaG91bGQgcHVzaCB0aGF0IHZhbHVlIHRvIGFuIGFuc3dlciBhcnJheSBcclxuLy9pdCBzaG91bGQgdGhlbiBnbyB0byB0aGUgbmV4dCBxdWVzdGlvbiB1bnRpbCBhbGwgcXVlc3Rpb25zIGFuc3dlcmVkXHJcbi8vaXQgc2hvdWxkIHJldHVybiB0aGUgdmFsdWUgdGhhdCB3YXMgY2hvc2VuIHRoZSBtb3N0IHRpbWVzXHJcbi8vXHJcblxyXG5cclxuY29uc3QgcXVpelF1ZXN0aW9ucyA9IFtcclxuXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGF0IHdvdWxkIHlvdSBuZXZlciBsZWF2ZSBob21lIHdpdGhvdXQ/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiU29tZSByZWQgbGlwc3RpY2tcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBIGxlYXRoZXIgamFja2V0XCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQ2lnYXJldHRlc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImtlbmlja2llXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgY2FyZGlnYW5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJNeSBoYWlyYnJ1c2hcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIk15IHdhdGVyIGd1blwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBIHNuYWNrXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hhdCdzIHlvdXIgYmlnZ2VzdCBmbGF3P1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIkkgc3BlbmQgdG9vIG11Y2ggbW9uZXkgb24gZm9vZC5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBjYXJlIHRvbyBtdWNoIGFib3V0IGxvb2tpbmcgZ29vZCBpbiBmcm9udCBvZiBteSBmcmllbmRzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgbWFrZSBiYWQgZGVjaXNpb25zIHRvIHNwaXRlIG90aGVyIHBlb3BsZS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGdpdmUgdXAgb24gbXkgZHJlYW1zIHRvbyBlYXNpbHkuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZnJlbmNoeVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIG9mdGVuIGNoYW5nZSBteXNlbGYgaW4gb3JkZXIgdG8gZmVlbCBhY2NlcHRlZCBieSBteSBwZWVycy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIHB1dCBvdGhlciBwZW9wbGUgaW4gZGFuZ2VyIGJlY2F1c2Ugb2YgbXkgYWN0aW9ucy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gbm90IHRoZSBiZXN0IGNvbW11bmljYXRvci5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIkhvdyB3b3VsZCB5b3UgZGVzY3JpYmUgeW91cnNlbGY/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSSBoYXZlIGdyZWF0IGxlYWRlcnNoaXAgcXVhbGl0aWVzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBhIGRyZWFtZXIgYW5kIGNhbiBjb21lIG9mZiBhcyBkaXR6eS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBoYXJkLXdvcmtpbmcgYW5kIHRyeSB0byBkbyB0aGUgcmlnaHQgdGhpbmcuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBjYW4gYmUgbG91ZCBhbmQgYnViYmx5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGxpa2UgdG8gY2xvd24gYXJvdW5kIGFuZCBub3QgdGFrZSB0aGluZ3MgdG9vIHNlcmlvdXNseS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIG91dHNwb2tlbiBidXQgdnVsbmVyYWJsZS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gbm90IGFzIGlubm9jZW50IGFzIGV2ZXJ5b25lIHRoaW5rcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiSSB0ZW5kIHRvIGdvIGZvci4uLlwiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGlzIHVuZGVyc3RhbmRpbmcgYW5kIGEgbGl0dGxlIHF1aXJreS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHRvdWdoLWxvb2tpbmcgb25lIHdpdGggYSBoZWFydCBvZiBnb2xkLiBUaGUgbW9yZSB0YXR0b29lcywgdGhlIGJldHRlci5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBoYXMgYSBuaWNlIHNtaWxlIGFuZCBpcyBhIGxpdHRsZSBuZXJkeS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSB3aG8gaXNuJ3QgYWZyYWlkIHRvIGJlIHRoZW1zZWx2ZXMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHBvcHVsYXIgb25lLCBldmVuIGlmIHRoZXkgYXJlIGEgamVyay5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBsb3ZlcyBmb29kIGFzIG11Y2ggYXMgSSBkby5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSBJIGNhbiB0YWtlIGFkdmFudGFnZSBvZi5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hpY2ggb2YgdGhlc2Ugd291bGQgeW91IGJpbmdlIHdhdGNoP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIlRvcCBHZWFyXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTWFzdGVyQ2hlZlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJRdWVlciBFeWVcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZSBHb29kIFBsYWNlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmVyc2V5IFNob3JlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmFja2Fzc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJHaXJsc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJCZXN0IHNvbmcgaW4gR3JlYXNlP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIkhvcGVsZXNzbHkgRGV2b3RlZCB0byBZb3VcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJUaGVyZSBBcmUgV29yc2UgVGhpbmdzIEkgQ291bGQgRG9cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJTYW5keVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkJsdWUgTW9vblwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJCZWF1dHkgU2Nob29sIERyb3BvdXRcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIldlIEdvIFRvZ2V0aGVyXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkdyZWFzZWQgTGlnaHRuaW4nXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fVxyXG5dLy9xdWl6UXVlc3Rpb25zXHJcblxyXG5cclxuY29uc3QgY29ja3RhaWxMaXN0ID0gW1xyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJzYW5keVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiRGlydHkgU2hpcmxleVwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImRhbm55XCIsXHJcblx0XHRjb2NrdGFpbDogXCI1NyBULUJpcmRcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInJpenpvXCIsXHJcblx0XHRjb2NrdGFpbDogXCJQaW5rIExhZHlcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImtlbmlja2llXCIsXHJcblx0XHRjb2NrdGFpbDogXCJCb2lsZXJtYWtlclwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwiZnJlbmNoeVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiUGnDsWEgQ29sYWRhXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJqYW5cIixcclxuXHRcdGNvY2t0YWlsOiBcIlBpbmsgU3F1aXJyZWxcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInB1dHppZVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiVG9tIENvbGxpbnNcIlxyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgcmVjaXBlcyA9IFtcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiRGlydHkgU2hpcmxleVwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIG91bmNlIHZvZGthXCIsXHJcblx0XHRcdFwiMS8yIG91bmNlIGNoZXJyeSBsaXF1ZXVyXCIsXHJcblx0XHRcdFwiNSBvdW5jZXMgbGVtb24tbGltZSBzb2RhXCIsXHJcblx0XHRcdFwiMS80IHRlYXNwb29uIGdyZW5hZGluZVwiLFxyXG5cdFx0XHRcIk1hcmFzY2hpbm8gY2hlcnJ5LCB0byBnYXJuaXNoXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIlBvdXIgdGhlIHZvZGthIGFuZCBjaGVycnkgbGlxdWV1ciBpbnRvIGFuIGljZS1maWxsZWQgZ2xhc3MuXCIsXHJcblx0XHRcdFwiVG9wIHdpdGggdGhlIGxlbW9uLWxpbWUgc29kYS5cIixcclxuXHRcdFx0XCJBZGQgdGhlIGdyZW5hZGluZSBhbmQgY29tYmluZS5cIixcclxuXHRcdFx0XCJHYXJuaXNoIHdpdGggdGhlIG1hcmFzY2hpbm8gY2hlcnJ5LCBhbmQgc2VydmUuXCJcclxuXHRcdF0sLy9zdGVwc1xyXG5cdFx0YWxjb2hvbDogW1wiVm9ka2FcIiwgXCJDaGVycnkgTGlxdWV1clwiXVxyXG5cdH0sLy9vYmplY3QgMVxyXG5cclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiNTcgVC1CaXJkXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgb3VuY2Ugdm9ka2FcIixcclxuXHRcdFx0XCIy4oGEMyBvdW5jZSBhbWFyZXR0b1wiLFxyXG5cdFx0XHRcIjLigYQzIG91bmNlIG1lbG9uIGxpcXVldXJcIixcclxuXHRcdFx0XCIy4oGEMyBvdW5jZSBwZWFjaCBzY2huYXBwc1wiLFxyXG5cdFx0XHRcIjEgMuKBhDMgb3VuY2VzIGZyZXNoIG9yYW5nZSBqdWljZVwiLFxyXG5cdFx0XHRcIjIgcmFzcGJlcnJpZXMsIHRvIGdhcm5pc2ggKG9wdGlvbmFsKVwiLFxyXG5cdFx0XHRcIm9yYW5nZSwgc2xpY2UgdG8gZ2FybmlzaCAob3B0aW9uYWwpXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIlBvdXIgYWxsIGluZ3JlZGllbnRzIGludG8gYSBzaGFrZXIgd2l0aCBpY2UuIFNoYWtlLlwiLFxyXG5cdFx0XHRcIlN0cmFpbiBpbnRvIGFuIG9sZC1mYXNoaW9uZWQgZ2xhc3MgZmlsbGVkIHdpdGggaWNlLlwiLFxyXG5cdFx0XHRcIkdhcm5pc2ggd2l0aCB0d28gcmFzcGJlcnJpZXMgYW5kIGEgc2xpY2Ugb2Ygb3JhbmdlIG9uIGEgY29ja3RhaWwgc3RpY2sgaWYgZGVzaXJlZC5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIlZvZGthXCIsIFwiQW1hcmV0dG9cIiwgXCJNZWxvbiBsaXF1ZXVyXCIsIFwiUGVhY2ggc2NobmFwcHNcIl1cclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGluayBMYWR5XCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgMS8yIG91bmNlcyBnaW5cIixcclxuXHRcdFx0XCIzLzQgb3VuY2UgYXBwbGVqYWNrXCIsXHJcblx0XHRcdFwiMS80IG91bmNlIGxlbW9uIGp1aWNlXCIsXHJcblx0XHRcdFwiNCBkYXNoZXMgZ3JlbmFkaW5lXCIsXHJcblx0XHRcdFwiMSBlZ2cgd2hpdGVcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCJTaGFrZSBpbmdyZWRpZW50cyB2ZXJ5IHdlbGwgd2l0aCBpY2UuXCIsXHJcblx0XHRcdFwiU3RyYWluIGludG8gY29ja3RhaWwgZ2xhc3MuXCIsXHJcblx0XHRcdFwiR2FybmlzaCB3aXRoIGEgY2hlcnJ5LlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiR2luXCIsIFwiQXBwbGVKYWNrXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiQm9pbGVybWFrZXJcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSAxLzMgb3ogd2hpc2tleVwiLFxyXG5cdFx0XHRcIjEgcGludCBiZWVyXCIgXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCJQb3VyIHdoaXNrZXkgaW50byBzaG90IGdsYXNzLlwiLFxyXG5cdFx0XHRcIkRvd24gdGhlIHdoaXNrZXkgYW5kIGNoYXNlIHdpdGggYmVlci5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIldoaXNrZXlcIiwgXCJCZWVyXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGnDsWEgQ29sYWRhXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjMgb3ogcGluZWFwcGxlIGp1aWNlXCIsXHJcblx0XHRcdFwiMSBveiB3aGl0ZSBydW1cIixcclxuXHRcdFx0XCIxIG96IGNvY29udXQgY3JlYW1cIixcclxuXHRcdFx0XCIxIGN1cCBjcnVzaGVkIGljZVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IHNsaWNlIG9mIHBpbmVhcHBsZVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCJQdXQgaW5ncmVkaWVudHMgaW50byBibGVuZGVyLlwiLFxyXG5cdFx0XHRcIkJsZW5kIHVudGlsIHNtb290aC5cIixcclxuXHRcdFx0XCJQb3VyIGludG8gY2hpbGxlZCBnbGFzcyBhbmQgZ2FybmlzaCB3aXRoIHBpbmVhcHBsZS5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIldoaXRlIHJ1bVwiXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIlBpbmsgU3F1aXJyZWxcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSBveiBhbWFyZXR0b1wiLFxyXG5cdFx0XHRcIjEgMS8yIG96IHdoaXRlIGNyw6htZSBkZSBjYWNhb1wiLFxyXG5cdFx0XHRcIjEgb3ogaGVhdnkgY3JlYW1cIixcclxuXHRcdFx0XCJHYXJuaXNoOiBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCJBZGQgaW5ncmVkaWVudHMgaW50byBhIHNoYWtlciBmaWxsZWQgd2l0aCBpY2UgYW5kIHNoYWtlIHVudGlsIGNvbGQuXCIsXHJcblx0XHRcdFwiU3RyYWluIGludG8gYSBjaGlsbGVkIGdsYXNzIGFuZCBnYXJuaXNoIHdpdGggYSBjaGVycnkuXCJcdFx0XHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiQW1hcmV0dG9cIiwgXCJDcmVtZSBkZSBjYWNhbyB3aGl0ZVwiXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIlRvbSBDb2xsaW5zXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgMS8yIG96IGdpblwiLFxyXG5cdFx0XHRcIjEgb3ogZnJlc2ggbGVtb24ganVpY2VcIixcclxuXHRcdFx0XCIxLzIgb3ogc2ltcGxlIHN5cnVwXCIsXHJcblx0XHRcdFwiMiBveiBjbHViIHNvZGFcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBMZW1vbiBzbGljZSwgTWFyYXNjaGlubyBjaGVycnlcIlxyXG5cdFx0XSxcclxuXHRcdHN0ZXBzOiBbXHJcblx0XHRcdFwiTWl4IGdpbiwgbGVtb24ganVpY2UgYW5kIHNpbXBsZSBzeXJ1cCBpbiBhIHRhbGwgZ2xhc3MgZmlsbGVkIHdpdGggaWNlLlwiLFxyXG5cdFx0XHRcIlRvcCB3aXRoIGNsdWIgc29kYSBhbmQgZ2FybmlzaCB3aXRoIGEgbGVtb24gc2xpY2UgYW5kIGNoZXJyeS5cIlx0XHRcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJHaW5cIl1cclxuXHR9LFxyXG5dLy9yZWNpcGVzIGFycmF5XHJcblxyXG5cclxuY29uc3QgJHF1ZXN0aW9uID0gJChcIi5xdWVzdGlvblwiKTtcclxuY29uc3QgJHRvdGFsUXVlc3Rpb25zID0gcXVpelF1ZXN0aW9ucy5sZW5ndGg7XHJcbmNvbnN0ICRjaG9pY2VzID0gJChcIi5jaG9pY2VzXCIpO1xyXG5jb25zdCAkcmVzdWx0cyA9ICQoXCIucmVzdWx0c1wiKTtcclxuY29uc3QgJHRyeSA9ICQoXCIudHJ5XCIpO1xyXG5jb25zdCAkbmV4dCA9ICQoXCIubmV4dFwiKTtcclxuY29uc3QgJGFnYWluID0gJChcIi5hZ2FpblwiKTtcclxuY29uc3QgJHJlY2lwZSA9ICQoXCIucmVjaXBlXCIpO1xyXG5jb25zdCAkYWxjb2hvbCA9JChcIi5hbGNvaG9sXCIpO1xyXG5cclxubGV0ICRjdXJyZW50UXVlc3Rpb24gPSAwO1xyXG5sZXQgdXNlckNob2ljZXMgPVtdO1xyXG5cclxuJHRyeS5oaWRlKCk7XHJcbiRyZXN1bHRzLmhpZGUoKTtcclxuJGFnYWluLmhpZGUoKTtcclxuJHJlY2lwZS5oaWRlKCk7XHJcbiRhbGNvaG9sLmhpZGUoKTtcclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2YgaW5ncmVkaWVudHMgKGNhbGwgd2hlbiBjb2NrdGFpbCBoYXMgYmVlbiBjaG9zZW4pXHJcbmZ1bmN0aW9uIGluZ3JlZGllbnRzTGlzdChhcnJheSkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGVsZW1lbnQ6XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBpdGVtOlxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIFNldCBpdHMgY29udGVudHM6XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnJheVtpXSkpO1xyXG4gICAgICAgIC8vIEFkZCBpdCB0byB0aGUgbGlzdDpcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSwgcmV0dXJuIHRoZSBjb25zdHJ1Y3RlZCBsaXN0OlxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2Ygc3RlcHMgdG8gbWFrZSBjb2NrdGFpbCAoY2FsbCB3aGVuIGNvY2t0YWlsIGhhcyBiZWVuIGNob3NlbilcclxuZnVuY3Rpb24gc3RlcHMoYXJyYXkpIHtcclxuICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBlbGVtZW50OlxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGxpc3QgaXRlbTpcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAvLyBTZXQgaXRzIGNvbnRlbnRzOlxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJyYXlbaV0pKTtcclxuICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGxpc3Q6XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIC8vIEZpbmFsbHksIHJldHVybiB0aGUgY29uc3RydWN0ZWQgbGlzdDpcclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBsaXN0IG9mIGFsY29ob2wgdG8gc2VhcmNoIGxjYm8gYXBpIChjYWxsIHdoZW4gY29ja3RhaWwgaGFzIGJlZW4gY2hvc2VuKVxyXG5mdW5jdGlvbiBhbGNvaG9sKGFycmF5KSB7XHJcblx0Y29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cdGRyb3Bkb3duLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJhbGNvaG9sTGlzdFwiKTtcclxuXHRkcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFsY29ob2xMaXN0XCIpO1xyXG5cdC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWxjb2hvbFwiKS5hcHBlbmRDaGlsZChkcm9wZG93bik7XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIFx0Y29uc3Qgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIFx0b3B0LnZhbHVlID0gYXJyYXlbaV07XHJcbiAgICBcdG9wdC50ZXh0ID0gYXJyYXlbaV07XHJcbiAgICBcdGRyb3Bkb3duLmFwcGVuZENoaWxkKG9wdCk7XHJcblx0fVxyXG5cdHJldHVybiBkcm9wZG93bjtcclxufVxyXG5cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vL3Nob3dzIGZpcnN0IHF1ZXN0aW9uIGFuZCBjcmVhdGVzIHJhZGlvIGJ1dHRvbnMgZm9yIGFuc3dlciBjaG9pY2VzXHJcblx0JHF1ZXN0aW9uLnRleHQocXVpelF1ZXN0aW9uc1skY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XHJcblx0bGV0IGkgPSAwO1xyXG5cdHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuXHRcdGxldCByYWRpb0J0biA9ICQoJzxpbnB1dCB0eXBlPVwicmFkaW9cIiAgaWQ9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCIgbmFtZT1cIicrIHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcyArJ1wiIHZhbHVlPVwiJysgKGNob2ljZS52YWx1ZSkgKydcIiBjaGVja2VkIC8+PGxhYmVsIGZvcj1cIicrKGNob2ljZS5hbnN3ZXIpKydcIj4nICsgKGNob2ljZS5hbnN3ZXIpICsgJzwvbGFiZWw+Jyk7XHJcblx0XHQkY2hvaWNlcy5hcHBlbmQocmFkaW9CdG4pO1xyXG5cdH0pO1xyXG4vL3B1c2hlcyB1c2VyJ3MgY2hvaWNlIHRvIG5ldyBhcnJheSB3aGVuIFwibmV4dFwiIGlzIGNsaWNrZWQgdGhlbiByZXNldHNcclxuXHQkbmV4dC5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0dXNlckNob2ljZXMucHVzaCgkKCdpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkJykudmFsKCkpO1xyXG5cdFx0Y29uc29sZS5sb2codXNlckNob2ljZXMpO1xyXG5cdFx0JGNob2ljZXMuZW1wdHkoKTtcclxuXHJcbi8vc2hvd3MgbmV4dCBxdWVzdGlvblxyXG5cdFx0aWYgKCRjdXJyZW50UXVlc3Rpb24gPCAkdG90YWxRdWVzdGlvbnMgLTEpIHtcclxuXHRcdFx0XHQkY3VycmVudFF1ZXN0aW9uID0gJGN1cnJlbnRRdWVzdGlvbiArIDE7XHJcblx0XHRcdFx0JHF1ZXN0aW9uLnRleHQocXVpelF1ZXN0aW9uc1skY3VycmVudFF1ZXN0aW9uXS5xdWVzdGlvbik7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHRcdHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcy5mb3JFYWNoKChjaG9pY2UpID0+IHtcclxuXHRcdFx0XHRcdGxldCByYWRpb0J0biA9ICQoJzxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIicrKGNob2ljZS5hbnN3ZXIpKydcIiBuYW1lPVwiJysgcXVpelF1ZXN0aW9uc1tpXS5jaG9pY2VzICsnXCIgdmFsdWU9XCInICsgKGNob2ljZS52YWx1ZSkgKydcIiBjaGVja2VkIC8+PGxhYmVsIGZvcj1cIicrKGNob2ljZS5hbnN3ZXIpKydcIj4nICsgKGNob2ljZS5hbnN3ZXIpICsgJzwvbGFiZWw+Jyk7XHJcblx0XHRcdFx0XHQkY2hvaWNlcy5hcHBlbmQocmFkaW9CdG4pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHsvL3JldHVybiB0aGUgbW9zdCBzZWxlY3RlZCB2YWx1ZSBvbmNlIHF1ZXN0aW9ucyBhcmUgZmluaXNoZWRcclxuXHRcdFx0Y29uc3QgdXNlckNoYXJhY3RlciA9IGZ1bmN0aW9uIG1vc3RTZWxlY3RlZFZhbHVlKGFycmF5KXtcclxuXHRcdFx0ICAgIHJldHVybiBhcnJheS5zb3J0KChhLGIpID0+XHJcblx0XHRcdCAgICAgICAgICBhcnJheS5maWx0ZXIodiA9PiB2PT09YSkubGVuZ3RoXHJcblx0XHRcdCAgICAgICAgLSBhcnJheS5maWx0ZXIodiA9PiB2PT09YikubGVuZ3RoKS5wb3AoKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgY2hhcmFjdGVyID0gdXNlckNoYXJhY3Rlcih1c2VyQ2hvaWNlcyk7XHJcblx0XHRcdGNvbnN0ICRjaGFyYWN0ZXIgPSAkKFwiPGgyPlwiKS50ZXh0KFwiWW91J3JlIFwiK2NoYXJhY3RlcisgXCIgIVwiKTtcclxuXHRcdFx0JChcIiNncmVhc2VDaGFyYWN0ZXJcIikuYXBwZW5kKCRjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjaGFyYWN0ZXIpO1xyXG4vL3Rha2VzIG1vc3Qgc2VsZWN0ZWQgdmFsdWUgYW5kIHJldHVybnMgY29ja3RhaWwgYmFzZWQgb24gdGhlIGNoYXJhY3RlcidzIG5hbWVcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWRPcHRpb25zID0gY29ja3RhaWxMaXN0LmZpbHRlcihyZXN0ID0+IHJlc3QuY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmUgPSBmaWx0ZXJlZE9wdGlvbnNbMF0uY29ja3RhaWw7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoZU9uZSk7XHJcblx0XHRcdCRxdWVzdGlvbi5oaWRlKCk7XHJcblx0XHRcdCR0cnkuc2hvdygpO1xyXG4vL2Rpc3BsYXlzIGNvY2t0YWlsIG5hbWVcclxuXHRcdFx0Y29uc3QgcmVzdWx0SFRNTCA9IGAke3RoZU9uZX1gO1xyXG5cdFx0XHQkcmVzdWx0cy5odG1sKHJlc3VsdEhUTUwpO1xyXG5cdFx0XHQkcmVzdWx0cy5zaG93KCk7XHJcbi8vZGlzcGxheXMgaW5ncmVkaWVudHMgbGlzdFx0XHRcdFxyXG5cdFx0XHRjb25zdCByZWNpcGVJbmdyZWRpZW50cyA9IHJlY2lwZXMuZmlsdGVyKHJlc3QgPT4gcmVzdC5jb2NrdGFpbE5hbWUgPT09IHRoZU9uZSk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlSW5ncmVkaWVudHNbMF0uaW5ncmVkaWVudHM7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ncmVkaWVudHNcIikuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNMaXN0KHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzKSk7XHJcbi8vZGlzcGxheXMgcmVjaXBlIHN0ZXBzXHJcblx0XHRcdGNvbnN0IHRoZU9uZVJlY2lwZVN0ZXBzID0gcmVjaXBlSW5ncmVkaWVudHNbMF0uc3RlcHM7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcHNcIikuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNMaXN0KHRoZU9uZVJlY2lwZVN0ZXBzKSk7XHJcbi8vZGlzcGxheXMgd2hhdCBhbGNvaG9sIGlzIG5lZWRlZCBhbmQgY29ubmVjdHMgdG8gbGNib2FwaVxyXG5cdFx0XHQkYWxjb2hvbC5zaG93KCk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZUFsY29ob2wgPSByZWNpcGVJbmdyZWRpZW50c1swXS5hbGNvaG9sO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsY29ob2xcIikuYXBwZW5kQ2hpbGQoYWxjb2hvbCh0aGVPbmVBbGNvaG9sKSk7XHJcblxyXG5cclxuXHRcdFx0JG5leHQuaGlkZSgpO1xyXG5cdFx0XHQkYWdhaW4uc2hvdygpO1xyXG5cdFx0XHQkYWdhaW4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGtleSA9IFwiVG9rZW4gTURvd05UZ3dOemRoT0MwM05qUTFMVEV4WlRndE9UZ3lOUzB3TXpVd01EZGtPV1ppTldZNldURnVhRnBNUkZoUmFsUnBZbE5DTUdnMWIyaHJla2hXWW1OS1JIUmhjVmhxY2sxb1wiO1xyXG5cclxuXHJcblx0XHRcdGNvbnN0IGdldEFsY29ob2wgPSAocXVlcnkpID0+IHtcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0ICB1cmw6ICdodHRwOi8vbGNib2FwaS5jb20vcHJvZHVjdHMnLFxyXG5cdFx0XHRcdFx0ICBoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQgICAgQXV0aG9yaXphdGlvbjoga2V5XHJcblx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0XHQgIG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0XHRcdFx0ICBkYXRhOiB7XHJcblx0XHRcdFx0XHQgIFx0cTogcXVlcnksXHJcblx0XHRcdFx0XHQgIFx0cGVyX3BhZ2U6IDEwXHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0Ly8gZGlzcGxheUFsY29ob2wocmVzdWx0KTsgXHJcblx0XHRcdFx0XHRjb25zdCBhbGNvaG9sT2JqZWN0cyA9IHJlc3VsdC5yZXN1bHQ7XHJcblx0XHRcdFx0XHRkaXNwbGF5QWxjb2hvbChhbGNvaG9sT2JqZWN0cyk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGRpc3BsYXlBbGNvaG9sID0gKGFsbEFsY29ob2wpID0+IHtcclxuXHRcdFx0XHQkKFwiI2FsY29ob2xEYXRhXCIpLmVtcHR5KCk7XHJcblx0XHRcdFx0YWxsQWxjb2hvbC5maWx0ZXIoKHNwaXJpdHNPbmx5KSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc3Bpcml0c09ubHkucGFja2FnZV91bml0X3R5cGUgIT0gXCJjYW5cIjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0YWxsQWxjb2hvbC5mb3JFYWNoKChib3R0bGUpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGJvdHRsZSk7XHJcblx0XHRcdFx0XHRjb25zdCAkaW1nVGh1bWIgPSAkKFwiPGltZz5cIikuYXR0cihcInNyY1wiLCBib3R0bGUuaW1hZ2VfdGh1bWJfdXJsKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRuYW1lID0gJChcIjxoND5cIikudGV4dChib3R0bGUubmFtZSk7XHJcblx0XHRcdFx0XHRjb25zdCAkb3JpZ2luID0gJChcIjxwPlwiKS5hZGRDbGFzcyhcIm9yaWdpblwiKS50ZXh0KGJvdHRsZS5vcmlnaW4pO1xyXG5cdFx0XHRcdFx0Y29uc3QgJHN0eWxlID0gJChcIjxwPlwiKS5hZGRDbGFzcyhcInN0eWxlXCIpLnRleHQoYm90dGxlLnN0eWxlKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRwcmljZUluQ2VudHMgPSBib3R0bGUucHJpY2VfaW5fY2VudHM7XHJcblx0XHRcdFx0XHRjb25zdCBwcmljZUluRG9sbGFycyA9IChwcmljZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRsZXQgZG9sbGFycyA9IHByaWNlIC8gMTAwO1xyXG5cdFx0XHRcdFx0XHRkb2xsYXJzID0gZG9sbGFycy50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZG9sbGFycztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHByaWNlSW5Eb2xsYXJzKCRwcmljZUluQ2VudHMpKTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCAkcHJpY2UgPSAkKFwiPHA+XCIpLmFkZENsYXNzKFwicHJpY2VcIikudGV4dChcIiRcIisgcHJpY2VJbkRvbGxhcnMoJHByaWNlSW5DZW50cykpO1xyXG5cdFx0XHRcdFx0JChcIiNhbGNvaG9sRGF0YVwiKS5hcHBlbmQoJGltZ1RodW1iLCAkbmFtZSwgJG9yaWdpbiwgJHN0eWxlLCAkcHJpY2UpO1xyXG5cclxuXHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGdldEFsY29ob2wodGhlT25lQWxjb2hvbFswXSk7XHJcblx0XHRcdCQoXCIjYWxjb2hvbExpc3RcIikub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKFwibmV3IGFsY29ob2wgc2VsZWN0ZWRcIik7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRBbGNvaG9sID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZEFsY29ob2wpO1xyXG5cdFx0XHRcdGdldEFsY29ob2woc2VsZWN0ZWRBbGNvaG9sKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdH0vL2Vsc2VcclxuXHR9KTsvL25leHQub24uY2xpY2tcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vL2Rpc3BsYXkgdGhlIHJlY2lwZSBvbiBzaWduYXR1cmUgY29ja3RhaWwgcmVzdWx0IHBhZ2VcclxuLy91c2VyIGNhbiBjbGljayBvbiBpbmdyZWRpZW50cyBsaXN0IGZvciBhbGNvaG9sXHJcbi8vc2VhcmNoIHRoZSBsY2JvIGZvciBhbGNvaG9sIG9uIGNsaWNrXHJcbi8vZGlzcGxheSB0aGUgbmFtZSwgcHJpY2UsIHNhbGUgZm9yIGVhY2ggXHJcbiJdfQ==
