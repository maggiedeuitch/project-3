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
	}, { answer: "I'm a dreamer.",
		value: "frenchy"
	}, { answer: "I'm hard-working and try to do the right thing.",
		value: "kenickie"
	}, { answer: "I can be loud and bubbly with people I'm close to.",
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
	steps: ["1. Pour the vodka and cherry liqueur into an ice-filled glass.", "2. Top with the lemon-lime soda.", "3. Add the grenadine and combine.", "4. Garnish with the maraschino cherry, and serve."], //steps
	alcohol: ["Vodka", "Cherry Liqueur"]
}, //object 1

{
	cocktailName: "57 T-Bird",
	ingredients: ["1 ounce vodka", "2⁄3 ounce amaretto", "2⁄3 ounce melon liqueur", "2⁄3 ounce peach schnapps", "1 2⁄3 ounces fresh orange juice", "2 raspberries, to garnish (optional)", "orange, slice to garnish (optional)"],
	steps: ["1. Pour all ingredients into a shaker with ice. Shake.", "2. Strain into an old-fashioned glass filled with ice.", "3. Garnish with two raspberries and a slice of orange on a cocktail stick if desired."],
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
	ingredients: ["1 oz amaretto", "1 1/2 oz white crème de cacao", "1 oz heavy cream", "Garnish: Maraschino cherry"],
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
var $characterImageDiv = $(".characterImage");
var $try = $(".try");
var $method = $(".method");
var $next = $(".next");
var $again = $(".again");
var $recipe = $(".recipe");
var $alcohol = $(".alcohol");

var $currentQuestion = 0;
var userChoices = [];

$try.hide();
$method.hide();
$results.hide();
$characterImageDiv.hide();
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
			//displays character image
			var $characterImage = $("#characterImage").attr("src", "../dev/assets/" + character + ".svg");
			$("#characterImage").append($characterImage);
			$characterImageDiv.show();

			//takes most selected value and returns cocktail based on the character's name
			var filteredOptions = cocktailList.filter(function (rest) {
				return rest.character === character;
			});
			var theOne = filteredOptions[0].cocktail;
			console.log(theOne);
			$question.hide();
			$try.show();
			//displays cocktail name
			var $signatureCocktail = $("<h2>").text("Your signature cocktail is the " + theOne + ".");
			$(".results").append($signatureCocktail);
			$results.show();
			//displays ingredients list			
			var recipeIngredients = recipes.filter(function (rest) {
				return rest.cocktailName === theOne;
			});
			var theOneRecipeIngredients = recipeIngredients[0].ingredients;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxnQkFBZ0IsQ0FFckI7QUFDQyxXQUFVLDBDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxtQkFEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLGtCQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsWUFBVjtBQUNDLFNBQU87QUFEUixFQVJRLEVBV1IsRUFBRSxRQUFRLFlBQVY7QUFDQyxTQUFPO0FBRFIsRUFYUSxFQWNSLEVBQUUsUUFBUSxjQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLGNBQVY7QUFDQyxTQUFPO0FBRFIsRUFqQlEsRUFvQlIsRUFBRSxRQUFRLFNBQVY7QUFDQyxTQUFPO0FBRFIsRUFwQlE7QUFGVixDQUZxQixFQThCckI7QUFDQyxXQUFVLDJCQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxpQ0FEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLDREQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsNkNBQVY7QUFDQyxTQUFPO0FBRFIsRUFSUSxFQVdSLEVBQUUsUUFBUSxvQ0FBVjtBQUNDLFNBQU87QUFEUixFQVhRLEVBY1IsRUFBRSxRQUFRLDhEQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLHFEQUFWO0FBQ0MsU0FBTztBQURSLEVBakJRLEVBb0JSLEVBQUUsUUFBUSxnQ0FBVjtBQUNDLFNBQU87QUFEUixFQXBCUTtBQUZWLENBOUJxQixFQXlEckI7QUFDQyxXQUFVLGtDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxvQ0FEVDtBQUVDLFNBQU87QUFGUixF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a0JBQWtCLEVBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsU0FBbEIsRUFBNkIsS0FBN0IsRUFBb0MsT0FBcEMsRUFBNkMsTUFBN0MsRUFBcUQsTUFBckQsQ0FBeEI7QUFDQSxPQUFFLGNBQUYsRUFBa0IsTUFBbEIsQ0FBeUIsZUFBekI7QUFFRCxLQWxCQTtBQW1CQSxJQXpCRDs7QUE0QkEsY0FBVyxjQUFjLENBQWQsQ0FBWDtBQUNBLEtBQUUsY0FBRixFQUFrQixFQUFsQixDQUFxQixRQUFyQixFQUErQixZQUFZO0FBQzFDLFFBQU0sa0JBQWtCLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBeEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsZUFBVyxlQUFYO0FBQ0EsSUFKRDtBQU9BLEdBeEhnQyxDQXdIaEM7QUFDRCxFQXpIRCxFQVgyQixDQW9JeEI7O0FBSUgsQ0F4SUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2l0IHNob3VsZCBoaWRlIGFsbCBidXQgdGhlIGN1cnJlbnQgcXVlc3Rpb25cclxuLy9pdCBzaG91bGQgdGFrZSB0aGUgc2VsZWN0ZWQgdmFsdWUgd2hlbiB1c2VyIGNsaWNrcyBuZXh0XHJcbi8vaXQgc2hvdWxkIHB1c2ggdGhhdCB2YWx1ZSB0byBhbiBhbnN3ZXIgYXJyYXkgXHJcbi8vaXQgc2hvdWxkIHRoZW4gZ28gdG8gdGhlIG5leHQgcXVlc3Rpb24gdW50aWwgYWxsIHF1ZXN0aW9ucyBhbnN3ZXJlZFxyXG4vL2l0IHNob3VsZCByZXR1cm4gdGhlIHZhbHVlIHRoYXQgd2FzIGNob3NlbiB0aGUgbW9zdCB0aW1lc1xyXG4vL1xyXG5cclxuXHJcbmNvbnN0IHF1aXpRdWVzdGlvbnMgPSBbXHJcblxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hhdCB3b3VsZCB5b3UgbmV2ZXIgbGVhdmUgaG9tZSB3aXRob3V0P1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIlNvbWUgcmVkIGxpcHN0aWNrXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQSBsZWF0aGVyIGphY2tldFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkNpZ2FyZXR0ZXNcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJBIGNhcmRpZ2FuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTXkgaGFpcmJydXNoXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZnJlbmNoeVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJNeSB3YXRlciBndW5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQSBzbmFja1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIldoYXQncyB5b3VyIGJpZ2dlc3QgZmxhdz9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJJIHNwZW5kIHRvbyBtdWNoIG1vbmV5IG9uIGZvb2QuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgY2FyZSB0b28gbXVjaCBhYm91dCBsb29raW5nIGdvb2QgaW4gZnJvbnQgb2YgbXkgZnJpZW5kcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIG1ha2UgYmFkIGRlY2lzaW9ucyB0byBzcGl0ZSBvdGhlciBwZW9wbGUuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBnaXZlIHVwIG9uIG15IGRyZWFtcyB0b28gZWFzaWx5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBvZnRlbiBjaGFuZ2UgbXlzZWxmIGluIG9yZGVyIHRvIGZlZWwgYWNjZXB0ZWQgYnkgbXkgcGVlcnMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBwdXQgb3RoZXIgcGVvcGxlIGluIGRhbmdlciBiZWNhdXNlIG9mIG15IGFjdGlvbnMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIG5vdCB0aGUgYmVzdCBjb21tdW5pY2F0b3IuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJIb3cgd291bGQgeW91IGRlc2NyaWJlIHlvdXJzZWxmP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIkkgaGF2ZSBncmVhdCBsZWFkZXJzaGlwIHF1YWxpdGllcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gYSBkcmVhbWVyLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIGhhcmQtd29ya2luZyBhbmQgdHJ5IHRvIGRvIHRoZSByaWdodCB0aGluZy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGNhbiBiZSBsb3VkIGFuZCBidWJibHkgd2l0aCBwZW9wbGUgSSdtIGNsb3NlIHRvLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGxpa2UgdG8gY2xvd24gYXJvdW5kIGFuZCBub3QgdGFrZSB0aGluZ3MgdG9vIHNlcmlvdXNseS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIG91dHNwb2tlbiBidXQgdnVsbmVyYWJsZS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gbm90IGFzIGlubm9jZW50IGFzIGV2ZXJ5b25lIHRoaW5rcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiSSB0ZW5kIHRvIGdvIGZvci4uLlwiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGlzIHVuZGVyc3RhbmRpbmcgYW5kIGEgbGl0dGxlIHF1aXJreS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJwdXR6aWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHRvdWdoLWxvb2tpbmcgb25lIHdpdGggYSBoZWFydCBvZiBnb2xkLiBUaGUgbW9yZSB0YXR0b29lcywgdGhlIGJldHRlci5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBoYXMgYSBuaWNlIHNtaWxlIGFuZCBpcyBhIGxpdHRsZSBuZXJkeS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSB3aG8gaXNuJ3QgYWZyYWlkIHRvIGJlIHRoZW1zZWx2ZXMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwidGhlIHBvcHVsYXIgb25lLCBldmVuIGlmIHRoZXkgYXJlIGEgamVyay5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBsb3ZlcyBmb29kIGFzIG11Y2ggYXMgSSBkby5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwic29tZW9uZSBJIGNhbiB0YWtlIGFkdmFudGFnZSBvZi5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiV2hpY2ggb2YgdGhlc2Ugd291bGQgeW91IGJpbmdlIHdhdGNoP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIlRvcCBHZWFyXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTWFzdGVyQ2hlZlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJRdWVlciBFeWVcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZSBHb29kIFBsYWNlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwic2FuZHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmVyc2V5IFNob3JlXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSmFja2Fzc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJHaXJsc1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJCZXN0IHNvbmcgaW4gR3JlYXNlP1wiLFxyXG5cdFx0Y2hvaWNlczogW1xyXG5cdFx0XHR7XHJcblx0XHRcdFx0YW5zd2VyOiBcIkhvcGVsZXNzbHkgRGV2b3RlZCB0byBZb3VcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJUaGVyZSBBcmUgV29yc2UgVGhpbmdzIEkgQ291bGQgRG9cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJyaXp6b1wiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJTYW5keVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkJsdWUgTW9vblwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJCZWF1dHkgU2Nob29sIERyb3BvdXRcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIldlIEdvIFRvZ2V0aGVyXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkdyZWFzZWQgTGlnaHRuaW4nXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fVxyXG5dLy9xdWl6UXVlc3Rpb25zXHJcblxyXG5cclxuY29uc3QgY29ja3RhaWxMaXN0ID0gW1xyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJzYW5keVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiRGlydHkgU2hpcmxleVwiLFxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImRhbm55XCIsXHJcblx0XHRjb2NrdGFpbDogXCI1NyBULUJpcmRcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInJpenpvXCIsXHJcblx0XHRjb2NrdGFpbDogXCJQaW5rIExhZHlcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImtlbmlja2llXCIsXHJcblx0XHRjb2NrdGFpbDogXCJCb2lsZXJtYWtlclwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwiZnJlbmNoeVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiUGnDsWEgQ29sYWRhXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJqYW5cIixcclxuXHRcdGNvY2t0YWlsOiBcIlBpbmsgU3F1aXJyZWxcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInB1dHppZVwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiVG9tIENvbGxpbnNcIlxyXG5cdH1cclxuXVxyXG5cclxuY29uc3QgcmVjaXBlcyA9IFtcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiRGlydHkgU2hpcmxleVwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIG91bmNlIHZvZGthXCIsXHJcblx0XHRcdFwiMS8yIG91bmNlIGNoZXJyeSBsaXF1ZXVyXCIsXHJcblx0XHRcdFwiNSBvdW5jZXMgbGVtb24tbGltZSBzb2RhXCIsXHJcblx0XHRcdFwiMS80IHRlYXNwb29uIGdyZW5hZGluZVwiLFxyXG5cdFx0XHRcIk1hcmFzY2hpbm8gY2hlcnJ5LCB0byBnYXJuaXNoXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIjEuIFBvdXIgdGhlIHZvZGthIGFuZCBjaGVycnkgbGlxdWV1ciBpbnRvIGFuIGljZS1maWxsZWQgZ2xhc3MuXCIsXHJcblx0XHRcdFwiMi4gVG9wIHdpdGggdGhlIGxlbW9uLWxpbWUgc29kYS5cIixcclxuXHRcdFx0XCIzLiBBZGQgdGhlIGdyZW5hZGluZSBhbmQgY29tYmluZS5cIixcclxuXHRcdFx0XCI0LiBHYXJuaXNoIHdpdGggdGhlIG1hcmFzY2hpbm8gY2hlcnJ5LCBhbmQgc2VydmUuXCJcclxuXHRcdF0sLy9zdGVwc1xyXG5cdFx0YWxjb2hvbDogW1wiVm9ka2FcIiwgXCJDaGVycnkgTGlxdWV1clwiXVxyXG5cdH0sLy9vYmplY3QgMVxyXG5cclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiNTcgVC1CaXJkXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgb3VuY2Ugdm9ka2FcIixcclxuXHRcdFx0XCIy4oGEMyBvdW5jZSBhbWFyZXR0b1wiLFxyXG5cdFx0XHRcIjLigYQzIG91bmNlIG1lbG9uIGxpcXVldXJcIixcclxuXHRcdFx0XCIy4oGEMyBvdW5jZSBwZWFjaCBzY2huYXBwc1wiLFxyXG5cdFx0XHRcIjEgMuKBhDMgb3VuY2VzIGZyZXNoIG9yYW5nZSBqdWljZVwiLFxyXG5cdFx0XHRcIjIgcmFzcGJlcnJpZXMsIHRvIGdhcm5pc2ggKG9wdGlvbmFsKVwiLFxyXG5cdFx0XHRcIm9yYW5nZSwgc2xpY2UgdG8gZ2FybmlzaCAob3B0aW9uYWwpXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIjEuIFBvdXIgYWxsIGluZ3JlZGllbnRzIGludG8gYSBzaGFrZXIgd2l0aCBpY2UuIFNoYWtlLlwiLFxyXG5cdFx0XHRcIjIuIFN0cmFpbiBpbnRvIGFuIG9sZC1mYXNoaW9uZWQgZ2xhc3MgZmlsbGVkIHdpdGggaWNlLlwiLFxyXG5cdFx0XHRcIjMuIEdhcm5pc2ggd2l0aCB0d28gcmFzcGJlcnJpZXMgYW5kIGEgc2xpY2Ugb2Ygb3JhbmdlIG9uIGEgY29ja3RhaWwgc3RpY2sgaWYgZGVzaXJlZC5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIlZvZGthXCIsIFwiQW1hcmV0dG9cIiwgXCJNZWxvbiBsaXF1ZXVyXCIsIFwiUGVhY2ggc2NobmFwcHNcIl1cclxuXHR9LFxyXG5cclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGluayBMYWR5XCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgMS8yIG91bmNlcyBnaW5cIixcclxuXHRcdFx0XCIzLzQgb3VuY2UgYXBwbGVqYWNrXCIsXHJcblx0XHRcdFwiMS80IG91bmNlIGxlbW9uIGp1aWNlXCIsXHJcblx0XHRcdFwiNCBkYXNoZXMgZ3JlbmFkaW5lXCIsXHJcblx0XHRcdFwiMSBlZ2cgd2hpdGVcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBTaGFrZSBpbmdyZWRpZW50cyB2ZXJ5IHdlbGwgd2l0aCBpY2UuXCIsXHJcblx0XHRcdFwiMi4gU3RyYWluIGludG8gY29ja3RhaWwgZ2xhc3MuXCIsXHJcblx0XHRcdFwiMy4gR2FybmlzaCB3aXRoIGEgY2hlcnJ5LlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiR2luXCIsIFwiQXBwbGVKYWNrXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiQm9pbGVybWFrZXJcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSAxLzMgb3ogd2hpc2tleVwiLFxyXG5cdFx0XHRcIjEgcGludCBiZWVyXCIgXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBQb3VyIHdoaXNrZXkgaW50byBzaG90IGdsYXNzLlwiLFxyXG5cdFx0XHRcIjIuIERvd24gdGhlIHdoaXNrZXkgYW5kIGNoYXNlIHdpdGggYmVlci5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIldoaXNrZXlcIiwgXCJCZWVyXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGnDsWEgQ29sYWRhXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjMgb3ogcGluZWFwcGxlIGp1aWNlXCIsXHJcblx0XHRcdFwiMSBveiB3aGl0ZSBydW1cIixcclxuXHRcdFx0XCIxIG96IGNvY29udXQgY3JlYW1cIixcclxuXHRcdFx0XCIxIGN1cCBjcnVzaGVkIGljZVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IHNsaWNlIG9mIHBpbmVhcHBsZVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBQdXQgaW5ncmVkaWVudHMgaW50byBibGVuZGVyLlwiLFxyXG5cdFx0XHRcIjIuIEJsZW5kIHVudGlsIHNtb290aC5cIixcclxuXHRcdFx0XCIzLiBQb3VyIGludG8gY2hpbGxlZCBnbGFzcyBhbmQgZ2FybmlzaCB3aXRoIHBpbmVhcHBsZS5cIlxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcIldoaXRlIHJ1bVwiXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIlBpbmsgU3F1aXJyZWxcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSBveiBhbWFyZXR0b1wiLFxyXG5cdFx0XHRcIjEgMS8yIG96IHdoaXRlIGNyw6htZSBkZSBjYWNhb1wiLFxyXG5cdFx0XHRcIjEgb3ogaGVhdnkgY3JlYW1cIixcclxuXHRcdFx0XCJHYXJuaXNoOiBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCIxLiBBZGQgaW5ncmVkaWVudHMgaW50byBhIHNoYWtlciBmaWxsZWQgd2l0aCBpY2UgYW5kIHNoYWtlIHVudGlsIGNvbGQuXCIsXHJcblx0XHRcdFwiMi4gU3RyYWluIGludG8gYSBjaGlsbGVkIGdsYXNzIGFuZCBnYXJuaXNoIHdpdGggYSBjaGVycnkuXCJcdFx0XHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiQW1hcmV0dG9cIiwgXCJDcmVtZSBkZSBjYWNhbyB3aGl0ZVwiXVxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y29ja3RhaWxOYW1lOiBcIlRvbSBDb2xsaW5zXCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgMS8yIG96IGdpblwiLFxyXG5cdFx0XHRcIjEgb3ogZnJlc2ggbGVtb24ganVpY2VcIixcclxuXHRcdFx0XCIxLzIgb3ogc2ltcGxlIHN5cnVwXCIsXHJcblx0XHRcdFwiMiBveiBjbHViIHNvZGFcIixcclxuXHRcdFx0XCJHYXJuaXNoOiBMZW1vbiBzbGljZSwgTWFyYXNjaGlubyBjaGVycnlcIlxyXG5cdFx0XSxcclxuXHRcdHN0ZXBzOiBbXHJcblx0XHRcdFwiMS4gTWl4IGdpbiwgbGVtb24ganVpY2UgYW5kIHNpbXBsZSBzeXJ1cCBpbiBhIHRhbGwgZ2xhc3MgZmlsbGVkIHdpdGggaWNlLlwiLFxyXG5cdFx0XHRcIjIuIFRvcCB3aXRoIGNsdWIgc29kYSBhbmQgZ2FybmlzaCB3aXRoIGEgbGVtb24gc2xpY2UgYW5kIGNoZXJyeS5cIlx0XHRcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJHaW5cIl1cclxuXHR9LFxyXG5dLy9yZWNpcGVzIGFycmF5XHJcblxyXG5cclxuY29uc3QgJHF1ZXN0aW9uID0gJChcIi5xdWVzdGlvblwiKTtcclxuY29uc3QgJHRvdGFsUXVlc3Rpb25zID0gcXVpelF1ZXN0aW9ucy5sZW5ndGg7XHJcbmNvbnN0ICRjaG9pY2VzID0gJChcIiNjaG9pY2VMaXN0XCIpO1xyXG5jb25zdCAkcmVzdWx0cyA9ICQoXCIucmVzdWx0c1wiKTtcclxuY29uc3QgJGNoYXJhY3RlckltYWdlRGl2ID0gJChcIi5jaGFyYWN0ZXJJbWFnZVwiKTtcclxuY29uc3QgJHRyeSA9ICQoXCIudHJ5XCIpO1xyXG5jb25zdCAkbWV0aG9kID0kKFwiLm1ldGhvZFwiKTtcclxuY29uc3QgJG5leHQgPSAkKFwiLm5leHRcIik7XHJcbmNvbnN0ICRhZ2FpbiA9ICQoXCIuYWdhaW5cIik7XHJcbmNvbnN0ICRyZWNpcGUgPSAkKFwiLnJlY2lwZVwiKTtcclxuY29uc3QgJGFsY29ob2wgPSQoXCIuYWxjb2hvbFwiKTtcclxuXHJcblxyXG5sZXQgJGN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbmxldCB1c2VyQ2hvaWNlcyA9W107XHJcblxyXG4kdHJ5LmhpZGUoKTtcclxuJG1ldGhvZC5oaWRlKCk7XHJcbiRyZXN1bHRzLmhpZGUoKTtcclxuJGNoYXJhY3RlckltYWdlRGl2LmhpZGUoKTtcclxuJGFnYWluLmhpZGUoKTtcclxuJHJlY2lwZS5oaWRlKCk7XHJcbiRhbGNvaG9sLmhpZGUoKTtcclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2YgaW5ncmVkaWVudHMgKGNhbGwgd2hlbiBjb2NrdGFpbCBoYXMgYmVlbiBjaG9zZW4pXHJcbmZ1bmN0aW9uIGluZ3JlZGllbnRzTGlzdChhcnJheSkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGVsZW1lbnQ6XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBpdGVtOlxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIFNldCBpdHMgY29udGVudHM6XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnJheVtpXSkpO1xyXG4gICAgICAgIC8vIEFkZCBpdCB0byB0aGUgbGlzdDpcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSwgcmV0dXJuIHRoZSBjb25zdHJ1Y3RlZCBsaXN0OlxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2Ygc3RlcHMgdG8gbWFrZSBjb2NrdGFpbCAoY2FsbCB3aGVuIGNvY2t0YWlsIGhhcyBiZWVuIGNob3NlbilcclxuZnVuY3Rpb24gc3RlcHMoYXJyYXkpIHtcclxuICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBlbGVtZW50OlxyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBDcmVhdGUgdGhlIGxpc3QgaXRlbTpcclxuICAgICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAvLyBTZXQgaXRzIGNvbnRlbnRzOlxyXG4gICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJyYXlbaV0pKTtcclxuICAgICAgICAvLyBBZGQgaXQgdG8gdGhlIGxpc3Q6XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgIH1cclxuICAgIC8vIEZpbmFsbHksIHJldHVybiB0aGUgY29uc3RydWN0ZWQgbGlzdDpcclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG4vL2Z1bmN0aW9uIHRvIGNyZWF0ZSBsaXN0IG9mIGFsY29ob2wgdG8gc2VhcmNoIGxjYm8gYXBpIChjYWxsIHdoZW4gY29ja3RhaWwgaGFzIGJlZW4gY2hvc2VuKVxyXG5mdW5jdGlvbiBhbGNvaG9sKGFycmF5KSB7XHJcblx0Y29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cdGRyb3Bkb3duLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJhbGNvaG9sTGlzdFwiKTtcclxuXHRkcm9wZG93bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFsY29ob2xMaXN0XCIpO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICBcdGNvbnN0IG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICBcdG9wdC52YWx1ZSA9IGFycmF5W2ldO1xyXG4gICAgXHRvcHQudGV4dCA9IGFycmF5W2ldO1xyXG4gICAgXHRkcm9wZG93bi5hcHBlbmRDaGlsZChvcHQpO1xyXG5cdH1cclxuXHRyZXR1cm4gZHJvcGRvd247XHJcbn1cclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy9zaG93cyBmaXJzdCBxdWVzdGlvbiBhbmQgY3JlYXRlcyByYWRpbyBidXR0b25zIGZvciBhbnN3ZXIgY2hvaWNlc1xyXG5cdCRxdWVzdGlvbi50ZXh0KHF1aXpRdWVzdGlvbnNbJGN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24pO1xyXG5cdGxldCBpID0gMDtcclxuXHRxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XHJcblx0XHRsZXQgcmFkaW9CdG4gPSAkKCc8aW5wdXQgdHlwZT1cInJhZGlvXCIgIGlkPVwiJysoY2hvaWNlLmFuc3dlcikrJ1wiIG5hbWU9XCInKyBxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMgKydcIiB2YWx1ZT1cIicrIChjaG9pY2UudmFsdWUpICsnXCIgY2hlY2tlZCAvPjxsYWJlbCBmb3I9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCI+JyArIChjaG9pY2UuYW5zd2VyKSArICc8L2xhYmVsPicpO1xyXG5cdFx0bGV0ICRjaG9pY2VMaXN0ID0gJChcIjxsaT5cIikuYXBwZW5kKHJhZGlvQnRuKTtcclxuXHRcdCQoXCIjY2hvaWNlTGlzdFwiKS5hcHBlbmQoJGNob2ljZUxpc3QpO1xyXG5cclxuXHR9KTtcclxuLy9wdXNoZXMgdXNlcidzIGNob2ljZSB0byBuZXcgYXJyYXkgd2hlbiBcIm5leHRcIiBpcyBjbGlja2VkIHRoZW4gcmVzZXRzXHJcblx0JG5leHQub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHVzZXJDaG9pY2VzLnB1c2goJCgnaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpLnZhbCgpKTtcclxuXHRcdGNvbnNvbGUubG9nKHVzZXJDaG9pY2VzKTtcclxuXHRcdCRjaG9pY2VzLmVtcHR5KCk7XHJcblxyXG4vL3Nob3dzIG5leHQgcXVlc3Rpb25cclxuXHRcdGlmICgkY3VycmVudFF1ZXN0aW9uIDwgJHRvdGFsUXVlc3Rpb25zIC0xKSB7XHJcblx0XHRcdFx0JGN1cnJlbnRRdWVzdGlvbiA9ICRjdXJyZW50UXVlc3Rpb24gKyAxO1xyXG5cdFx0XHRcdCRxdWVzdGlvbi50ZXh0KHF1aXpRdWVzdGlvbnNbJGN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24pO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0XHRxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmFkaW9CdG4gPSAkKCc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCIgbmFtZT1cIicrIHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcyArJ1wiIHZhbHVlPVwiJyArIChjaG9pY2UudmFsdWUpICsnXCIgY2hlY2tlZCAvPjxsYWJlbCBmb3I9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCI+JyArIChjaG9pY2UuYW5zd2VyKSArICc8L2xhYmVsPicpO1xyXG5cdFx0XHRcdFx0bGV0ICRjaG9pY2VMaXN0ID0gJChcIjxsaT5cIikuYXBwZW5kKHJhZGlvQnRuKTtcclxuXHRcdFx0XHRcdCQoXCIjY2hvaWNlTGlzdFwiKS5hcHBlbmQoJGNob2ljZUxpc3QpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSBlbHNlIHsvL3JldHVybiB0aGUgbW9zdCBzZWxlY3RlZCB2YWx1ZSBvbmNlIHF1ZXN0aW9ucyBhcmUgZmluaXNoZWRcclxuXHRcdFx0Y29uc3QgdXNlckNoYXJhY3RlciA9IGZ1bmN0aW9uIG1vc3RTZWxlY3RlZFZhbHVlKGFycmF5KXtcclxuXHRcdFx0ICAgIHJldHVybiBhcnJheS5zb3J0KChhLGIpID0+XHJcblx0XHRcdCAgICAgICAgICBhcnJheS5maWx0ZXIodiA9PiB2PT09YSkubGVuZ3RoXHJcblx0XHRcdCAgICAgICAgLSBhcnJheS5maWx0ZXIodiA9PiB2PT09YikubGVuZ3RoKS5wb3AoKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgY2hhcmFjdGVyID0gdXNlckNoYXJhY3Rlcih1c2VyQ2hvaWNlcyk7XHJcblx0XHRcdGNvbnN0ICRjaGFyYWN0ZXIgPSAkKFwiPGgyPlwiKS50ZXh0KFwiSGV5LCBcIiArY2hhcmFjdGVyKyBcIiFcIik7XHJcblx0XHRcdCQoXCIjZ3JlYXNlQ2hhcmFjdGVyXCIpLmFwcGVuZCgkY2hhcmFjdGVyKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY2hhcmFjdGVyKTtcclxuLy9kaXNwbGF5cyBjaGFyYWN0ZXIgaW1hZ2VcclxuXHRcdFx0Y29uc3QgJGNoYXJhY3RlckltYWdlID0gJChcIiNjaGFyYWN0ZXJJbWFnZVwiKS5hdHRyKFwic3JjXCIsIFwiLi4vZGV2L2Fzc2V0cy9cIisgY2hhcmFjdGVyICtcIi5zdmdcIik7XHJcblx0XHRcdCQoXCIjY2hhcmFjdGVySW1hZ2VcIikuYXBwZW5kKCRjaGFyYWN0ZXJJbWFnZSk7XHJcblx0XHRcdCRjaGFyYWN0ZXJJbWFnZURpdi5zaG93KCk7XHJcblxyXG4vL3Rha2VzIG1vc3Qgc2VsZWN0ZWQgdmFsdWUgYW5kIHJldHVybnMgY29ja3RhaWwgYmFzZWQgb24gdGhlIGNoYXJhY3RlcidzIG5hbWVcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWRPcHRpb25zID0gY29ja3RhaWxMaXN0LmZpbHRlcihyZXN0ID0+IHJlc3QuY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmUgPSBmaWx0ZXJlZE9wdGlvbnNbMF0uY29ja3RhaWw7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoZU9uZSk7XHJcblx0XHRcdCRxdWVzdGlvbi5oaWRlKCk7XHJcblx0XHRcdCR0cnkuc2hvdygpO1xyXG4vL2Rpc3BsYXlzIGNvY2t0YWlsIG5hbWVcclxuXHRcdFx0Y29uc3QgJHNpZ25hdHVyZUNvY2t0YWlsID0gJChcIjxoMj5cIikudGV4dChcIllvdXIgc2lnbmF0dXJlIGNvY2t0YWlsIGlzIHRoZSBcIiArdGhlT25lKyBcIi5cIik7XHJcblx0XHRcdCQoXCIucmVzdWx0c1wiKS5hcHBlbmQoJHNpZ25hdHVyZUNvY2t0YWlsKTtcclxuXHRcdFx0JHJlc3VsdHMuc2hvdygpO1xyXG4vL2Rpc3BsYXlzIGluZ3JlZGllbnRzIGxpc3RcdFx0XHRcclxuXHRcdFx0Y29uc3QgcmVjaXBlSW5ncmVkaWVudHMgPSByZWNpcGVzLmZpbHRlcihyZXN0ID0+IHJlc3QuY29ja3RhaWxOYW1lID09PSB0aGVPbmUpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmVSZWNpcGVJbmdyZWRpZW50cyA9IHJlY2lwZUluZ3JlZGllbnRzWzBdLmluZ3JlZGllbnRzO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZ3JlZGllbnRzXCIpLmFwcGVuZENoaWxkKGluZ3JlZGllbnRzTGlzdCh0aGVPbmVSZWNpcGVJbmdyZWRpZW50cykpO1xyXG4vL2Rpc3BsYXlzIHJlY2lwZSBzdGVwc1xyXG5cdFx0XHQkbWV0aG9kLnNob3coKTtcclxuXHRcdFx0Y29uc3QgdGhlT25lUmVjaXBlU3RlcHMgPSByZWNpcGVJbmdyZWRpZW50c1swXS5zdGVwcztcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGVwc1wiKS5hcHBlbmRDaGlsZChpbmdyZWRpZW50c0xpc3QodGhlT25lUmVjaXBlU3RlcHMpKTtcclxuXHJcbi8vZGlzcGxheXMgd2hhdCBhbGNvaG9sIGlzIG5lZWRlZCBhbmQgY29ubmVjdHMgdG8gbGNib2FwaVxyXG5cdFx0XHQkYWxjb2hvbC5zaG93KCk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZUFsY29ob2wgPSByZWNpcGVJbmdyZWRpZW50c1swXS5hbGNvaG9sO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsY29ob2xcIikuYXBwZW5kQ2hpbGQoYWxjb2hvbCh0aGVPbmVBbGNvaG9sKSk7XHJcblxyXG5cclxuXHRcdFx0JG5leHQuaGlkZSgpO1xyXG5cdFx0XHQkYWdhaW4uc2hvdygpO1xyXG5cdFx0XHQkYWdhaW4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcbi8vQVBJIEtFWVxyXG5cdFx0XHRjb25zdCBrZXkgPSBcIlRva2VuIE1Eb3dOVGd3TnpkaE9DMDNOalExTFRFeFpUZ3RPVGd5TlMwd016VXdNRGRrT1daaU5XWTZXVEZ1YUZwTVJGaFJhbFJwWWxOQ01HZzFiMmhyZWtoV1ltTktSSFJoY1ZocWNrMW9cIjtcclxuXHJcblx0XHRcdGNvbnN0IGdldEFsY29ob2wgPSAocXVlcnkpID0+IHtcclxuXHRcdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdFx0ICB1cmw6ICdodHRwOi8vbGNib2FwaS5jb20vcHJvZHVjdHMnLFxyXG5cdFx0XHRcdFx0ICBoZWFkZXJzOiB7XHJcblx0XHRcdFx0XHQgICAgQXV0aG9yaXphdGlvbjoga2V5XHJcblx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0XHQgIG1ldGhvZDpcIkdFVFwiLFxyXG5cdFx0XHRcdFx0ICBkYXRhOiB7XHJcblx0XHRcdFx0XHQgIFx0cTogcXVlcnksXHJcblx0XHRcdFx0XHQgIFx0cGVyX3BhZ2U6IDIwXHJcblx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHR9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0Y29uc3QgYWxjb2hvbE9iamVjdHMgPSByZXN1bHQucmVzdWx0O1xyXG5cdFx0XHRcdFx0ZGlzcGxheUFsY29ob2woYWxjb2hvbE9iamVjdHMpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Y29uc3QgZGlzcGxheUFsY29ob2wgPSAoYWxsQWxjb2hvbCkgPT4ge1xyXG5cdFx0XHRcdCQoXCIjYWxjb2hvbERhdGFcIikuZW1wdHkoKTtcclxuXHRcdFx0XHRjb25zdCBmaWx0ZXJlZCA9IGFsbEFsY29ob2wuZmlsdGVyKChzcGlyaXRzT25seSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNwaXJpdHNPbmx5LnZvbHVtZV9pbl9taWxsaWxpdGVycyA+PSA3NTAgJiYgc3Bpcml0c09ubHkucHJpbWFyeV9jYXRlZ29yeSAhPSBcIlJlYWR5LXRvLURyaW5rL0Nvb2xlcnNcIjtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0ZmlsdGVyZWQuZm9yRWFjaCgoYm90dGxlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhib3R0bGUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgJGltZ1RodW1iID0gJChcIjxpbWc+XCIpLmF0dHIoXCJzcmNcIiwgYm90dGxlLmltYWdlX3RodW1iX3VybCk7XHJcblx0XHRcdFx0XHRjb25zdCAkbmFtZSA9ICQoXCI8aDQ+XCIpLnRleHQoYm90dGxlLm5hbWUpO1xyXG5cdFx0XHRcdFx0Y29uc3QgJG9yaWdpbiA9ICQoXCI8cD5cIikuYWRkQ2xhc3MoXCJvcmlnaW5cIikudGV4dChib3R0bGUub3JpZ2luKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRzdHlsZSA9ICQoXCI8cD5cIikuYWRkQ2xhc3MoXCJzdHlsZVwiKS50ZXh0KGJvdHRsZS5zdHlsZSk7XHJcblx0XHRcdFx0XHRjb25zdCAkcHJpY2VJbkNlbnRzID0gYm90dGxlLnByaWNlX2luX2NlbnRzO1xyXG5cdFx0XHRcdFx0Y29uc3QgcHJpY2VJbkRvbGxhcnMgPSAocHJpY2UpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IGRvbGxhcnMgPSBwcmljZSAvIDEwMDtcclxuXHRcdFx0XHRcdFx0ZG9sbGFycyA9IGRvbGxhcnMudG9GaXhlZCgyKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGRvbGxhcnM7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhwcmljZUluRG9sbGFycygkcHJpY2VJbkNlbnRzKSk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgJHByaWNlID0gJChcIjxwPlwiKS5hZGRDbGFzcyhcInByaWNlXCIpLnRleHQoXCIkXCIrIHByaWNlSW5Eb2xsYXJzKCRwcmljZUluQ2VudHMpKTtcclxuXHRcdFx0XHRcdGNvbnN0ICRkcmlua0NvbnRhaW5lciA9ICQoXCI8ZGl2PlwiKS5hcHBlbmQoJGltZ1RodW1iLCAkbmFtZSwgJG9yaWdpbiwgJHN0eWxlLCAkcHJpY2UpO1xyXG5cdFx0XHRcdFx0JChcIiNhbGNvaG9sRGF0YVwiKS5hcHBlbmQoJGRyaW5rQ29udGFpbmVyKTtcclxuXHJcblx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Z2V0QWxjb2hvbCh0aGVPbmVBbGNvaG9sWzBdKTtcclxuXHRcdFx0JChcIiNhbGNvaG9sTGlzdFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRBbGNvaG9sID0gJCh0aGlzKS52YWwoKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhzZWxlY3RlZEFsY29ob2wpO1xyXG5cdFx0XHRcdGdldEFsY29ob2woc2VsZWN0ZWRBbGNvaG9sKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdH0vL2Vsc2VcclxuXHR9KTsvL25leHQub24uY2xpY2tcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4iXX0=
