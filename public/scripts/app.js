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
	alcohol: ["gin"]
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

// var myDiv = document.getElementById("myDiv");

// //Create array of options to be added

// //Create and append select list
// var selectList = document.createElement("select");
// selectList.setAttribute("id", "mySelect");
// myDiv.appendChild(selectList);

// //Create and append the options
// for (let i = 0; i < array.length; i++) {
//     const option = document.createElement("option");
//     option.setAttribute("value", array[i]);
//     option.text = array[i];
//     selectList.appendChild(option);
// }

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
						q: query
					}
				}).then(function (data) {
					console.log(data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxnQkFBZ0IsQ0FFckI7QUFDQyxXQUFVLDBDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxtQkFEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLGtCQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsWUFBVjtBQUNDLFNBQU87QUFEUixFQVJRLEVBV1IsRUFBRSxRQUFRLFlBQVY7QUFDQyxTQUFPO0FBRFIsRUFYUSxFQWNSLEVBQUUsUUFBUSxjQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLGNBQVY7QUFDQyxTQUFPO0FBRFIsRUFqQlEsRUFvQlIsRUFBRSxRQUFRLFNBQVY7QUFDQyxTQUFPO0FBRFIsRUFwQlE7QUFGVixDQUZxQixFQThCckI7QUFDQyxXQUFVLDJCQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxpQ0FEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLDREQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsNkNBQVY7QUFDQyxTQUFPO0FBRFIsRUFSUSxFQVdSLEVBQUUsUUFBUSxvQ0FBVjtBQUNDLFNBQU87QUFEUixFQVhRLEVBY1IsRUFBRSxRQUFRLDhEQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLHFEQUFWO0FBQ0MsU0FBTztBQURSLEVBakJRLEVBb0JSLEVBQUUsUUFBUSxnQ0FBVjtBQUNDLFNBQU87QUFEUixFQXBCUTtBQUZWLENBOUJxQixFQXlEckI7QUFDQyxXQUFVLGtDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxvQ0FEVDtBQUVDLFNBQU87QUFGUixF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QixFQUFtQyxXQUFuQyxDQUErQyxRQUFRLGFBQVIsQ0FBL0M7O0FBR0EsU0FBTSxJQUFOO0FBQ0EsVUFBTyxJQUFQO0FBQ0EsVUFBTyxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFTLEtBQVQsRUFBZ0I7QUFDbEMsVUFBTSxjQUFOO0FBQ0EsYUFBUyxNQUFUO0FBRUEsSUFKRDs7QUFNQSxPQUFNLE1BQU0sNEdBQVo7O0FBRUEsT0FBTSxhQUFhLFNBQWIsVUFBYSxDQUFDLEtBQUQsRUFBVztBQUM3QixNQUFFLElBQUYsQ0FBTztBQUNKLFVBQUssNkJBREQ7QUFFSixjQUFTO0FBQ1AscUJBQWU7QUFEUixNQUZMO0FBS0osYUFBTyxLQUxIO0FBTUosV0FBTTtBQUNMLFNBQUc7QUFERTtBQU5GLEtBQVAsRUFTRyxJQVRILENBU1EsVUFBUyxJQUFULEVBQWU7QUFDckIsYUFBUSxHQUFSLENBQVksSUFBWjtBQUNELEtBWEQ7QUFZQSxJQWJEOztBQWVBLGNBQVcsY0FBYyxDQUFkLENBQVg7QUFDQSxLQUFFLGNBQUYsRUFBa0IsRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsWUFBWTtBQUMxQztBQUNBLFFBQU0sa0JBQWtCLEVBQUUsSUFBRixFQUFRLEdBQVIsRUFBeEI7QUFDQSxZQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsZUFBVyxlQUFYO0FBQ0EsSUFMRDtBQU1BLEdBOUVnQyxDQThFaEM7QUFDRCxFQS9FRCxFQVQyQixDQXdGeEI7O0FBSUgsQ0E1RkQ7O0FBOEZBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9pdCBzaG91bGQgaGlkZSBhbGwgYnV0IHRoZSBjdXJyZW50IHF1ZXN0aW9uXHJcbi8vaXQgc2hvdWxkIHRha2UgdGhlIHNlbGVjdGVkIHZhbHVlIHdoZW4gdXNlciBjbGlja3MgbmV4dFxyXG4vL2l0IHNob3VsZCBwdXNoIHRoYXQgdmFsdWUgdG8gYW4gYW5zd2VyIGFycmF5IFxyXG4vL2l0IHNob3VsZCB0aGVuIGdvIHRvIHRoZSBuZXh0IHF1ZXN0aW9uIHVudGlsIGFsbCBxdWVzdGlvbnMgYW5zd2VyZWRcclxuLy9pdCBzaG91bGQgcmV0dXJuIHRoZSB2YWx1ZSB0aGF0IHdhcyBjaG9zZW4gdGhlIG1vc3QgdGltZXNcclxuLy9cclxuXHJcblxyXG5jb25zdCBxdWl6UXVlc3Rpb25zID0gW1xyXG5cclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIldoYXQgd291bGQgeW91IG5ldmVyIGxlYXZlIGhvbWUgd2l0aG91dD9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJTb21lIHJlZCBsaXBzdGlja1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgbGVhdGhlciBqYWNrZXRcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJDaWdhcmV0dGVzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQSBjYXJkaWdhblwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIk15IGhhaXJicnVzaFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTXkgd2F0ZXIgZ3VuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgc25hY2tcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGF0J3MgeW91ciBiaWdnZXN0IGZsYXc/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSSBzcGVuZCB0b28gbXVjaCBtb25leSBvbiBmb29kLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGNhcmUgdG9vIG11Y2ggYWJvdXQgbG9va2luZyBnb29kIGluIGZyb250IG9mIG15IGZyaWVuZHMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBtYWtlIGJhZCBkZWNpc2lvbnMgdG8gc3BpdGUgb3RoZXIgcGVvcGxlLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgZ2l2ZSB1cCBvbiBteSBkcmVhbXMgdG9vIGVhc2lseS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgb2Z0ZW4gY2hhbmdlIG15c2VsZiBpbiBvcmRlciB0byBmZWVsIGFjY2VwdGVkIGJ5IG15IHBlZXJzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgcHV0IG90aGVyIHBlb3BsZSBpbiBkYW5nZXIgYmVjYXVzZSBvZiBteSBhY3Rpb25zLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImtlbmlja2llXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBub3QgdGhlIGJlc3QgY29tbXVuaWNhdG9yLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiSG93IHdvdWxkIHlvdSBkZXNjcmliZSB5b3Vyc2VsZj9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJJIGhhdmUgZ3JlYXQgbGVhZGVyc2hpcCBxdWFsaXRpZXMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIGEgZHJlYW1lciBhbmQgY2FuIGNvbWUgb2ZmIGFzIGRpdHp5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIGhhcmQtd29ya2luZyBhbmQgdHJ5IHRvIGRvIHRoZSByaWdodCB0aGluZy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGNhbiBiZSBsb3VkIGFuZCBidWJibHkuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgbGlrZSB0byBjbG93biBhcm91bmQgYW5kIG5vdCB0YWtlIHRoaW5ncyB0b28gc2VyaW91c2x5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gb3V0c3Bva2VuIGJ1dCB2dWxuZXJhYmxlLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBub3QgYXMgaW5ub2NlbnQgYXMgZXZlcnlvbmUgdGhpbmtzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJJIHRlbmQgdG8gZ28gZm9yLi4uXCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwic29tZW9uZSB3aG8gaXMgdW5kZXJzdGFuZGluZyBhbmQgYSBsaXR0bGUgcXVpcmt5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJ0aGUgdG91Z2gtbG9va2luZyBvbmUgd2l0aCBhIGhlYXJ0IG9mIGdvbGQuIFRoZSBtb3JlIHRhdHRvb2VzLCB0aGUgYmV0dGVyLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGhhcyBhIG5pY2Ugc21pbGUgYW5kIGlzIGEgbGl0dGxlIG5lcmR5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBpc24ndCBhZnJhaWQgdG8gYmUgdGhlbXNlbHZlcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJ0aGUgcG9wdWxhciBvbmUsIGV2ZW4gaWYgdGhleSBhcmUgYSBqZXJrLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGxvdmVzIGZvb2QgYXMgbXVjaCBhcyBJIGRvLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIEkgY2FuIHRha2UgYWR2YW50YWdlIG9mLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGljaCBvZiB0aGVzZSB3b3VsZCB5b3UgYmluZ2Ugd2F0Y2g/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiVG9wIEdlYXJcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJNYXN0ZXJDaGVmXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlF1ZWVyIEV5ZVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiVGhlIEdvb2QgUGxhY2VcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJKZXJzZXkgU2hvcmVcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJKYWNrYXNzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkdpcmxzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIkJlc3Qgc29uZyBpbiBHcmVhc2U/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSG9wZWxlc3NseSBEZXZvdGVkIHRvIFlvdVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZXJlIEFyZSBXb3JzZSBUaGluZ3MgSSBDb3VsZCBEb1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlNhbmR5XCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQmx1ZSBNb29uXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkJlYXV0eSBTY2hvb2wgRHJvcG91dFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiV2UgR28gVG9nZXRoZXJcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiR3JlYXNlZCBMaWdodG5pbidcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9XHJcbl0vL3F1aXpRdWVzdGlvbnNcclxuXHJcblxyXG5jb25zdCBjb2NrdGFpbExpc3QgPSBbXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInNhbmR5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJEaXJ0eSBTaGlybGV5XCIsXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwiZGFubnlcIixcclxuXHRcdGNvY2t0YWlsOiBcIjU3IFQtQmlyZFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwicml6em9cIixcclxuXHRcdGNvY2t0YWlsOiBcIlBpbmsgTGFkeVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwia2VuaWNraWVcIixcclxuXHRcdGNvY2t0YWlsOiBcIkJvaWxlcm1ha2VyXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJmcmVuY2h5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJQacOxYSBDb2xhZGFcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImphblwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiUGluayBTcXVpcnJlbFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwicHV0emllXCIsXHJcblx0XHRjb2NrdGFpbDogXCJUb20gQ29sbGluc1wiXHJcblx0fVxyXG5dXHJcblxyXG5jb25zdCByZWNpcGVzID0gW1xyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJEaXJ0eSBTaGlybGV5XCIsXHJcblx0XHRpbmdyZWRpZW50czogW1xyXG5cdFx0XHRcIjEgb3VuY2Ugdm9ka2FcIixcclxuXHRcdFx0XCIxLzIgb3VuY2UgY2hlcnJ5IGxpcXVldXJcIixcclxuXHRcdFx0XCI1IG91bmNlcyBsZW1vbi1saW1lIHNvZGFcIixcclxuXHRcdFx0XCIxLzQgdGVhc3Bvb24gZ3JlbmFkaW5lXCIsXHJcblx0XHRcdFwiTWFyYXNjaGlubyBjaGVycnksIHRvIGdhcm5pc2hcIlxyXG5cdFx0XSxcclxuXHRcdHN0ZXBzOiBbXHJcblx0XHRcdFwiUG91ciB0aGUgdm9ka2EgYW5kIGNoZXJyeSBsaXF1ZXVyIGludG8gYW4gaWNlLWZpbGxlZCBnbGFzcy5cIixcclxuXHRcdFx0XCJUb3Agd2l0aCB0aGUgbGVtb24tbGltZSBzb2RhLlwiLFxyXG5cdFx0XHRcIkFkZCB0aGUgZ3JlbmFkaW5lIGFuZCBjb21iaW5lLlwiLFxyXG5cdFx0XHRcIkdhcm5pc2ggd2l0aCB0aGUgbWFyYXNjaGlubyBjaGVycnksIGFuZCBzZXJ2ZS5cIlxyXG5cdFx0XSwvL3N0ZXBzXHJcblx0XHRhbGNvaG9sOiBbXCJWb2RrYVwiLCBcIkNoZXJyeSBMaXF1ZXVyXCJdXHJcblx0fSwvL29iamVjdCAxXHJcblxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCI1NyBULUJpcmRcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSBvdW5jZSB2b2RrYVwiLFxyXG5cdFx0XHRcIjLigYQzIG91bmNlIGFtYXJldHRvXCIsXHJcblx0XHRcdFwiMuKBhDMgb3VuY2UgbWVsb24gbGlxdWV1clwiLFxyXG5cdFx0XHRcIjLigYQzIG91bmNlIHBlYWNoIHNjaG5hcHBzXCIsXHJcblx0XHRcdFwiMSAy4oGEMyBvdW5jZXMgZnJlc2ggb3JhbmdlIGp1aWNlXCIsXHJcblx0XHRcdFwiMiByYXNwYmVycmllcywgdG8gZ2FybmlzaCAob3B0aW9uYWwpXCIsXHJcblx0XHRcdFwib3JhbmdlLCBzbGljZSB0byBnYXJuaXNoIChvcHRpb25hbClcIlxyXG5cdFx0XSxcclxuXHRcdHN0ZXBzOiBbXHJcblx0XHRcdFwiUG91ciBhbGwgaW5ncmVkaWVudHMgaW50byBhIHNoYWtlciB3aXRoIGljZS4gU2hha2UuXCIsXHJcblx0XHRcdFwiU3RyYWluIGludG8gYW4gb2xkLWZhc2hpb25lZCBnbGFzcyBmaWxsZWQgd2l0aCBpY2UuXCIsXHJcblx0XHRcdFwiR2FybmlzaCB3aXRoIHR3byByYXNwYmVycmllcyBhbmQgYSBzbGljZSBvZiBvcmFuZ2Ugb24gYSBjb2NrdGFpbCBzdGljayBpZiBkZXNpcmVkLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiVm9ka2FcIiwgXCJBbWFyZXR0b1wiLCBcIk1lbG9uIGxpcXVldXJcIiwgXCJQZWFjaCBzY2huYXBwc1wiXVxyXG5cdH0sXHJcblxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJQaW5rIExhZHlcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSAxLzIgb3VuY2VzIGdpblwiLFxyXG5cdFx0XHRcIjMvNCBvdW5jZSBhcHBsZWphY2tcIixcclxuXHRcdFx0XCIxLzQgb3VuY2UgbGVtb24ganVpY2VcIixcclxuXHRcdFx0XCI0IGRhc2hlcyBncmVuYWRpbmVcIixcclxuXHRcdFx0XCIxIGVnZyB3aGl0ZVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IE1hcmFzY2hpbm8gY2hlcnJ5XCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIlNoYWtlIGluZ3JlZGllbnRzIHZlcnkgd2VsbCB3aXRoIGljZS5cIixcclxuXHRcdFx0XCJTdHJhaW4gaW50byBjb2NrdGFpbCBnbGFzcy5cIixcclxuXHRcdFx0XCJHYXJuaXNoIHdpdGggYSBjaGVycnkuXCJcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJHaW5cIiwgXCJBcHBsZUphY2tcIl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJCb2lsZXJtYWtlclwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIDEvMyBveiB3aGlza2V5XCIsXHJcblx0XHRcdFwiMSBwaW50IGJlZXJcIiBcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIlBvdXIgd2hpc2tleSBpbnRvIHNob3QgZ2xhc3MuXCIsXHJcblx0XHRcdFwiRG93biB0aGUgd2hpc2tleSBhbmQgY2hhc2Ugd2l0aCBiZWVyLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiV2hpc2tleVwiLCBcIkJlZXJcIl1cclxuXHR9LFxyXG5cdHtcclxuXHRcdGNvY2t0YWlsTmFtZTogXCJQacOxYSBDb2xhZGFcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMyBveiBwaW5lYXBwbGUganVpY2VcIixcclxuXHRcdFx0XCIxIG96IHdoaXRlIHJ1bVwiLFxyXG5cdFx0XHRcIjEgb3ogY29jb251dCBjcmVhbVwiLFxyXG5cdFx0XHRcIjEgY3VwIGNydXNoZWQgaWNlXCIsXHJcblx0XHRcdFwiR2FybmlzaDogc2xpY2Ugb2YgcGluZWFwcGxlXCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIlB1dCBpbmdyZWRpZW50cyBpbnRvIGJsZW5kZXIuXCIsXHJcblx0XHRcdFwiQmxlbmQgdW50aWwgc21vb3RoLlwiLFxyXG5cdFx0XHRcIlBvdXIgaW50byBjaGlsbGVkIGdsYXNzIGFuZCBnYXJuaXNoIHdpdGggcGluZWFwcGxlLlwiXHJcblx0XHRdLFxyXG5cdFx0YWxjb2hvbDogW1wiV2hpdGUgcnVtXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiUGluayBTcXVpcnJlbFwiLFxyXG5cdFx0aW5ncmVkaWVudHM6IFtcclxuXHRcdFx0XCIxIG96IGFtYXJldHRvXCIsXHJcblx0XHRcdFwiMSAxLzIgb3ogd2hpdGUgY3LDqG1lIGRlIGNhY2FvXCIsXHJcblx0XHRcdFwiMSBveiBoZWF2eSBjcmVhbVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IE1hcmFzY2hpbm8gY2hlcnJ5XCJcclxuXHRcdF0sXHJcblx0XHRzdGVwczogW1xyXG5cdFx0XHRcIkFkZCBpbmdyZWRpZW50cyBpbnRvIGEgc2hha2VyIGZpbGxlZCB3aXRoIGljZSBhbmQgc2hha2UgdW50aWwgY29sZC5cIixcclxuXHRcdFx0XCJTdHJhaW4gaW50byBhIGNoaWxsZWQgZ2xhc3MgYW5kIGdhcm5pc2ggd2l0aCBhIGNoZXJyeS5cIlx0XHRcclxuXHRcdF0sXHJcblx0XHRhbGNvaG9sOiBbXCJBbWFyZXR0b1wiLCBcIkNyZW1lIGRlIGNhY2FvIHdoaXRlXCJdXHJcblx0fSxcclxuXHR7XHJcblx0XHRjb2NrdGFpbE5hbWU6IFwiVG9tIENvbGxpbnNcIixcclxuXHRcdGluZ3JlZGllbnRzOiBbXHJcblx0XHRcdFwiMSAxLzIgb3ogZ2luXCIsXHJcblx0XHRcdFwiMSBveiBmcmVzaCBsZW1vbiBqdWljZVwiLFxyXG5cdFx0XHRcIjEvMiBveiBzaW1wbGUgc3lydXBcIixcclxuXHRcdFx0XCIyIG96IGNsdWIgc29kYVwiLFxyXG5cdFx0XHRcIkdhcm5pc2g6IExlbW9uIHNsaWNlLCBNYXJhc2NoaW5vIGNoZXJyeVwiXHJcblx0XHRdLFxyXG5cdFx0c3RlcHM6IFtcclxuXHRcdFx0XCJNaXggZ2luLCBsZW1vbiBqdWljZSBhbmQgc2ltcGxlIHN5cnVwIGluIGEgdGFsbCBnbGFzcyBmaWxsZWQgd2l0aCBpY2UuXCIsXHJcblx0XHRcdFwiVG9wIHdpdGggY2x1YiBzb2RhIGFuZCBnYXJuaXNoIHdpdGggYSBsZW1vbiBzbGljZSBhbmQgY2hlcnJ5LlwiXHRcdFxyXG5cdFx0XSxcclxuXHRcdGFsY29ob2w6IFtcImdpblwiXVxyXG5cdH0sXHJcbl0vL3JlY2lwZXMgYXJyYXlcclxuXHJcblxyXG5jb25zdCAkcXVlc3Rpb24gPSAkKFwiLnF1ZXN0aW9uXCIpO1xyXG5jb25zdCAkdG90YWxRdWVzdGlvbnMgPSBxdWl6UXVlc3Rpb25zLmxlbmd0aDtcclxuY29uc3QgJGNob2ljZXMgPSAkKFwiLmNob2ljZXNcIik7XHJcbmNvbnN0ICRyZXN1bHRzID0gJChcIi5yZXN1bHRzXCIpO1xyXG5jb25zdCAkdHJ5ID0gJChcIi50cnlcIik7XHJcbmNvbnN0ICRuZXh0ID0gJChcIi5uZXh0XCIpO1xyXG5jb25zdCAkYWdhaW4gPSAkKFwiLmFnYWluXCIpO1xyXG5jb25zdCAkcmVjaXBlID0gJChcIi5yZWNpcGVcIik7XHJcbmNvbnN0ICRhbGNvaG9sID0kKFwiLmFsY29ob2xcIik7XHJcblxyXG5sZXQgJGN1cnJlbnRRdWVzdGlvbiA9IDA7XHJcbmxldCB1c2VyQ2hvaWNlcyA9W107XHJcblxyXG4kdHJ5LmhpZGUoKTtcclxuJHJlc3VsdHMuaGlkZSgpO1xyXG4kYWdhaW4uaGlkZSgpO1xyXG4kcmVjaXBlLmhpZGUoKTtcclxuJGFsY29ob2wuaGlkZSgpO1xyXG5cclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbGlzdCBvZiBpbmdyZWRpZW50cyAoY2FsbCB3aGVuIGNvY2t0YWlsIGhhcyBiZWVuIGNob3NlbilcclxuZnVuY3Rpb24gaW5ncmVkaWVudHNMaXN0KGFycmF5KSB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIGxpc3QgZWxlbWVudDpcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGl0ZW06XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgLy8gU2V0IGl0cyBjb250ZW50czpcclxuICAgICAgICBpdGVtLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFycmF5W2ldKSk7XHJcbiAgICAgICAgLy8gQWRkIGl0IHRvIHRoZSBsaXN0OlxyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICB9XHJcbiAgICAvLyBGaW5hbGx5LCByZXR1cm4gdGhlIGNvbnN0cnVjdGVkIGxpc3Q6XHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuLy9mdW5jdGlvbiB0byBjcmVhdGUgbGlzdCBvZiBzdGVwcyB0byBtYWtlIGNvY2t0YWlsIChjYWxsIHdoZW4gY29ja3RhaWwgaGFzIGJlZW4gY2hvc2VuKVxyXG5mdW5jdGlvbiBzdGVwcyhhcnJheSkge1xyXG4gICAgLy8gQ3JlYXRlIHRoZSBsaXN0IGVsZW1lbnQ6XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGlzdCBpdGVtOlxyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIC8vIFNldCBpdHMgY29udGVudHM6XHJcbiAgICAgICAgaXRlbS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnJheVtpXSkpO1xyXG4gICAgICAgIC8vIEFkZCBpdCB0byB0aGUgbGlzdDpcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgLy8gRmluYWxseSwgcmV0dXJuIHRoZSBjb25zdHJ1Y3RlZCBsaXN0OlxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbi8vZnVuY3Rpb24gdG8gY3JlYXRlIGxpc3Qgb2YgYWxjb2hvbCB0byBzZWFyY2ggbGNibyBhcGkgKGNhbGwgd2hlbiBjb2NrdGFpbCBoYXMgYmVlbiBjaG9zZW4pXHJcbmZ1bmN0aW9uIGFsY29ob2woYXJyYXkpIHtcclxuXHRjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblx0ZHJvcGRvd24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImFsY29ob2xMaXN0XCIpO1xyXG5cdGRyb3Bkb3duLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWxjb2hvbExpc3RcIik7XHJcblx0Ly8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbGNvaG9sXCIpLmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuXHJcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgXHRjb25zdCBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgXHRvcHQudmFsdWUgPSBhcnJheVtpXTtcclxuICAgIFx0b3B0LnRleHQgPSBhcnJheVtpXTtcclxuICAgIFx0ZHJvcGRvd24uYXBwZW5kQ2hpbGQob3B0KTtcclxuXHR9XHJcblx0cmV0dXJuIGRyb3Bkb3duO1xyXG59XHJcblxyXG4vLyB2YXIgbXlEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm15RGl2XCIpO1xyXG5cclxuLy8gLy9DcmVhdGUgYXJyYXkgb2Ygb3B0aW9ucyB0byBiZSBhZGRlZFxyXG5cclxuLy8gLy9DcmVhdGUgYW5kIGFwcGVuZCBzZWxlY3QgbGlzdFxyXG4vLyB2YXIgc2VsZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcbi8vIHNlbGVjdExpc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJteVNlbGVjdFwiKTtcclxuLy8gbXlEaXYuYXBwZW5kQ2hpbGQoc2VsZWN0TGlzdCk7XHJcblxyXG4vLyAvL0NyZWF0ZSBhbmQgYXBwZW5kIHRoZSBvcHRpb25zXHJcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbi8vICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgYXJyYXlbaV0pO1xyXG4vLyAgICAgb3B0aW9uLnRleHQgPSBhcnJheVtpXTtcclxuLy8gICAgIHNlbGVjdExpc3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuLy8gfVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy9zaG93cyBmaXJzdCBxdWVzdGlvbiBhbmQgY3JlYXRlcyByYWRpbyBidXR0b25zIGZvciBhbnN3ZXIgY2hvaWNlc1xyXG5cdCRxdWVzdGlvbi50ZXh0KHF1aXpRdWVzdGlvbnNbJGN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24pO1xyXG5cdGxldCBpID0gMDtcclxuXHRxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XHJcblx0XHRsZXQgcmFkaW9CdG4gPSAkKCc8aW5wdXQgdHlwZT1cInJhZGlvXCIgIGlkPVwiJysoY2hvaWNlLmFuc3dlcikrJ1wiIG5hbWU9XCInKyBxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMgKydcIiB2YWx1ZT1cIicrIChjaG9pY2UudmFsdWUpICsnXCIgY2hlY2tlZCAvPjxsYWJlbCBmb3I9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCI+JyArIChjaG9pY2UuYW5zd2VyKSArICc8L2xhYmVsPicpO1xyXG5cdFx0JGNob2ljZXMuYXBwZW5kKHJhZGlvQnRuKTtcclxuXHR9KTtcclxuLy9wdXNoZXMgdXNlcidzIGNob2ljZSB0byBuZXcgYXJyYXkgd2hlbiBcIm5leHRcIiBpcyBjbGlja2VkIHRoZW4gcmVzZXRzXHJcblx0JG5leHQub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHVzZXJDaG9pY2VzLnB1c2goJCgnaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCcpLnZhbCgpKTtcclxuXHRcdGNvbnNvbGUubG9nKHVzZXJDaG9pY2VzKTtcclxuXHRcdCRjaG9pY2VzLmVtcHR5KCk7XHJcblxyXG4vL3Nob3dzIG5leHQgcXVlc3Rpb25cclxuXHRcdGlmICgkY3VycmVudFF1ZXN0aW9uIDwgJHRvdGFsUXVlc3Rpb25zIC0xKSB7XHJcblx0XHRcdFx0JGN1cnJlbnRRdWVzdGlvbiA9ICRjdXJyZW50UXVlc3Rpb24gKyAxO1xyXG5cdFx0XHRcdCRxdWVzdGlvbi50ZXh0KHF1aXpRdWVzdGlvbnNbJGN1cnJlbnRRdWVzdGlvbl0ucXVlc3Rpb24pO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0XHRxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMuZm9yRWFjaCgoY2hvaWNlKSA9PiB7XHJcblx0XHRcdFx0XHRsZXQgcmFkaW9CdG4gPSAkKCc8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCIgbmFtZT1cIicrIHF1aXpRdWVzdGlvbnNbaV0uY2hvaWNlcyArJ1wiIHZhbHVlPVwiJyArIChjaG9pY2UudmFsdWUpICsnXCIgY2hlY2tlZCAvPjxsYWJlbCBmb3I9XCInKyhjaG9pY2UuYW5zd2VyKSsnXCI+JyArIChjaG9pY2UuYW5zd2VyKSArICc8L2xhYmVsPicpO1xyXG5cdFx0XHRcdFx0JGNob2ljZXMuYXBwZW5kKHJhZGlvQnRuKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0gZWxzZSB7Ly9yZXR1cm4gdGhlIG1vc3Qgc2VsZWN0ZWQgdmFsdWUgb25jZSBxdWVzdGlvbnMgYXJlIGZpbmlzaGVkXHJcblx0XHRcdGNvbnN0IHVzZXJDaGFyYWN0ZXIgPSBmdW5jdGlvbiBtb3N0U2VsZWN0ZWRWYWx1ZShhcnJheSl7XHJcblx0XHRcdCAgICByZXR1cm4gYXJyYXkuc29ydCgoYSxiKSA9PlxyXG5cdFx0XHQgICAgICAgICAgYXJyYXkuZmlsdGVyKHYgPT4gdj09PWEpLmxlbmd0aFxyXG5cdFx0XHQgICAgICAgIC0gYXJyYXkuZmlsdGVyKHYgPT4gdj09PWIpLmxlbmd0aCkucG9wKCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IGNoYXJhY3RlciA9IHVzZXJDaGFyYWN0ZXIodXNlckNob2ljZXMpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjaGFyYWN0ZXIpO1xyXG4vL3Rha2VzIG1vc3Qgc2VsZWN0ZWQgdmFsdWUgYW5kIHJldHVybnMgY29ja3RhaWwgYmFzZWQgb24gdGhlIGNoYXJhY3RlcidzIG5hbWVcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWRPcHRpb25zID0gY29ja3RhaWxMaXN0LmZpbHRlcihyZXN0ID0+IHJlc3QuY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmUgPSBmaWx0ZXJlZE9wdGlvbnNbMF0uY29ja3RhaWw7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoZU9uZSk7XHJcblx0XHRcdCRxdWVzdGlvbi5oaWRlKCk7XHJcblx0XHRcdCR0cnkuc2hvdygpO1xyXG4vL2Rpc3BsYXlzIGNvY2t0YWlsIG5hbWVcclxuXHRcdFx0Y29uc3QgcmVzdWx0SFRNTCA9IGAke3RoZU9uZX1gO1xyXG5cdFx0XHQkcmVzdWx0cy5odG1sKHJlc3VsdEhUTUwpO1xyXG5cdFx0XHQkcmVzdWx0cy5zaG93KCk7XHJcbi8vZGlzcGxheXMgaW5ncmVkaWVudHMgbGlzdFx0XHRcdFxyXG5cdFx0XHRjb25zdCByZWNpcGVJbmdyZWRpZW50cyA9IHJlY2lwZXMuZmlsdGVyKHJlc3QgPT4gcmVzdC5jb2NrdGFpbE5hbWUgPT09IHRoZU9uZSk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlSW5ncmVkaWVudHNbMF0uaW5ncmVkaWVudHM7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5ncmVkaWVudHNcIikuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNMaXN0KHRoZU9uZVJlY2lwZUluZ3JlZGllbnRzKSk7XHJcbi8vZGlzcGxheXMgcmVjaXBlIHN0ZXBzXHJcblx0XHRcdGNvbnN0IHRoZU9uZVJlY2lwZVN0ZXBzID0gcmVjaXBlSW5ncmVkaWVudHNbMF0uc3RlcHM7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RlcHNcIikuYXBwZW5kQ2hpbGQoaW5ncmVkaWVudHNMaXN0KHRoZU9uZVJlY2lwZVN0ZXBzKSk7XHJcbi8vZGlzcGxheXMgd2hhdCBhbGNvaG9sIGlzIG5lZWRlZCBhbmQgY29ubmVjdHMgdG8gbGNib2FwaVxyXG5cdFx0XHQkYWxjb2hvbC5zaG93KCk7XHJcblx0XHRcdGNvbnN0IHRoZU9uZUFsY29ob2wgPSByZWNpcGVJbmdyZWRpZW50c1swXS5hbGNvaG9sO1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsY29ob2xcIikuYXBwZW5kQ2hpbGQoYWxjb2hvbCh0aGVPbmVBbGNvaG9sKSk7XHJcblxyXG5cclxuXHRcdFx0JG5leHQuaGlkZSgpO1xyXG5cdFx0XHQkYWdhaW4uc2hvdygpO1xyXG5cdFx0XHQkYWdhaW4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdGNvbnN0IGtleSA9IFwiVG9rZW4gTURvd05UZ3dOemRoT0MwM05qUTFMVEV4WlRndE9UZ3lOUzB3TXpVd01EZGtPV1ppTldZNldURnVhRnBNUkZoUmFsUnBZbE5DTUdnMWIyaHJla2hXWW1OS1JIUmhjVmhxY2sxb1wiO1xyXG5cclxuXHRcdFx0Y29uc3QgZ2V0QWxjb2hvbCA9IChxdWVyeSkgPT4ge1xyXG5cdFx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0XHQgIHVybDogJ2h0dHA6Ly9sY2JvYXBpLmNvbS9wcm9kdWN0cycsXHJcblx0XHRcdFx0XHQgIGhlYWRlcnM6IHtcclxuXHRcdFx0XHRcdCAgICBBdXRob3JpemF0aW9uOiBrZXlcclxuXHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdCAgbWV0aG9kOlwiR0VUXCIsXHJcblx0XHRcdFx0XHQgIGRhdGE6IHtcclxuXHRcdFx0XHRcdCAgXHRxOiBxdWVyeVxyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0fSkudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0ICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Z2V0QWxjb2hvbCh0aGVPbmVBbGNvaG9sWzBdKTtcclxuXHRcdFx0JChcIiNhbGNvaG9sTGlzdFwiKS5vbihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coXCJuZXcgYWxjb2hvbCBzZWxlY3RlZFwiKTtcclxuXHRcdFx0XHRjb25zdCBzZWxlY3RlZEFsY29ob2wgPSAkKHRoaXMpLnZhbCgpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHNlbGVjdGVkQWxjb2hvbCk7XHJcblx0XHRcdFx0Z2V0QWxjb2hvbChzZWxlY3RlZEFsY29ob2wpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0vL2Vsc2VcclxuXHR9KTsvL25leHQub24uY2xpY2tcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4vL2Rpc3BsYXkgdGhlIHJlY2lwZSBvbiBzaWduYXR1cmUgY29ja3RhaWwgcmVzdWx0IHBhZ2VcclxuLy91c2VyIGNhbiBjbGljayBvbiBpbmdyZWRpZW50cyBsaXN0IGZvciBhbGNvaG9sXHJcbi8vc2VhcmNoIHRoZSBsY2JvIGZvciBhbGNvaG9sIG9uIGNsaWNrXHJcbi8vZGlzcGxheSB0aGUgbmFtZSwgcHJpY2UsIHNhbGUgZm9yIGVhY2ggXHJcbiJdfQ==
