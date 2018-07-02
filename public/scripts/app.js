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
	cocktail: "Shirley Temple"
}, {
	character: "danny",
	cocktail: "T-Bird"
}, {
	character: "rizzo",
	cocktail: "The Rizzo"
}, {
	character: "kenickie",
	cocktail: "Boilermaker"
}, {
	character: "frenchy",
	cocktail: "Strawberry White Russian"
}, {
	character: "jan",
	cocktail: "Berry Belini"
}, {
	character: "putzie",
	cocktail: "Sidecar"
}];

var $question = $(".question");
var $totalQuestions = quizQuestions.length;
var $choices = $(".choices");
var $results = $(".results");
var $try = $(".try");
var $next = $(".next");
var $again = $(".again");
// const $imageDiv = $(".hot-sauce-image");
// const $hotSauceImage = $("#hot-sauce-image");
// const $link =$("#link");
var $currentQuestion = 0;
var userChoices = [];

$try.hide();
// $imageDiv.hide();
$results.hide();
$again.hide();
// $link.hide();


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
			//if mostselectedvalue = sandy, return sandyCocktail

			// const hotSauceOptions = hotSauces[userChoices[0]];
			// console.log(hotSauceOptions);
			var filteredOptions = cocktailList.filter(function (rest) {
				return rest.character === character;
			});
			var theOne = filteredOptions[0].cocktail;
			console.log(theOne);
			$question.hide();
			$try.show();
			// $hotSauceImage.attr("src",`${theOne.image}`);
			// $imageDiv.show();
			var resultHTML = "" + theOne;
			$results.html(resultHTML);
			$results.show();
			// $link.html(`<a href="${theOne.link}" target="_blank">${theOne.name}</a>`);
			// $link.show();
			$next.hide();
			$again.show();
			$again.on("click", function (event) {
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBTSxnQkFBZ0IsQ0FFckI7QUFDQyxXQUFVLDBDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxtQkFEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLGtCQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsWUFBVjtBQUNDLFNBQU87QUFEUixFQVJRLEVBV1IsRUFBRSxRQUFRLFlBQVY7QUFDQyxTQUFPO0FBRFIsRUFYUSxFQWNSLEVBQUUsUUFBUSxjQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLGNBQVY7QUFDQyxTQUFPO0FBRFIsRUFqQlEsRUFvQlIsRUFBRSxRQUFRLFNBQVY7QUFDQyxTQUFPO0FBRFIsRUFwQlE7QUFGVixDQUZxQixFQThCckI7QUFDQyxXQUFVLDJCQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxpQ0FEVDtBQUVDLFNBQU87QUFGUixFQURRLEVBS1IsRUFBRSxRQUFRLDREQUFWO0FBQ0MsU0FBTztBQURSLEVBTFEsRUFRUixFQUFFLFFBQVEsNkNBQVY7QUFDQyxTQUFPO0FBRFIsRUFSUSxFQVdSLEVBQUUsUUFBUSxvQ0FBVjtBQUNDLFNBQU87QUFEUixFQVhRLEVBY1IsRUFBRSxRQUFRLDhEQUFWO0FBQ0MsU0FBTztBQURSLEVBZFEsRUFpQlIsRUFBRSxRQUFRLHFEQUFWO0FBQ0MsU0FBTztBQURSLEVBakJRLEVBb0JSLEVBQUUsUUFBUSxnQ0FBVjtBQUNDLFNBQU87QUFEUixFQXBCUTtBQUZWLENBOUJxQixFQXlEckI7QUFDQyxXQUFVLGtDQURYO0FBRUMsVUFBUyxDQUNSO0FBQ0MsVUFBUSxvQ0FEVDtBQUVDLFNBQU87QUFGUixF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QSxJQUpEO0FBS0E7QUFDRCxFQWhERDtBQWtEQSxDQTNERDs7QUE2REE7QUFDQTtBQUNBO0FBQ0E7OztBQUtBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLy9pdCBzaG91bGQgaGlkZSBhbGwgYnV0IHRoZSBjdXJyZW50IHF1ZXN0aW9uXHJcbi8vaXQgc2hvdWxkIHRha2UgdGhlIHNlbGVjdGVkIHZhbHVlIHdoZW4gdXNlciBjbGlja3MgbmV4dFxyXG4vL2l0IHNob3VsZCBwdXNoIHRoYXQgdmFsdWUgdG8gYW4gYW5zd2VyIGFycmF5IFxyXG4vL2l0IHNob3VsZCB0aGVuIGdvIHRvIHRoZSBuZXh0IHF1ZXN0aW9uIHVudGlsIGFsbCBxdWVzdGlvbnMgYW5zd2VyZWRcclxuLy9pdCBzaG91bGQgcmV0dXJuIHRoZSB2YWx1ZSB0aGF0IHdhcyBjaG9zZW4gdGhlIG1vc3QgdGltZXNcclxuLy9cclxuXHJcblxyXG5jb25zdCBxdWl6UXVlc3Rpb25zID0gW1xyXG5cclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIldoYXQgd291bGQgeW91IG5ldmVyIGxlYXZlIGhvbWUgd2l0aG91dD9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJTb21lIHJlZCBsaXBzdGlja1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgbGVhdGhlciBqYWNrZXRcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJDaWdhcmV0dGVzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwia2VuaWNraWVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQSBjYXJkaWdhblwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIk15IGhhaXJicnVzaFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiTXkgd2F0ZXIgZ3VuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkEgc25hY2tcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGF0J3MgeW91ciBiaWdnZXN0IGZsYXc/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSSBzcGVuZCB0b28gbXVjaCBtb25leSBvbiBmb29kLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGNhcmUgdG9vIG11Y2ggYWJvdXQgbG9va2luZyBnb29kIGluIGZyb250IG9mIG15IGZyaWVuZHMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSBtYWtlIGJhZCBkZWNpc2lvbnMgdG8gc3BpdGUgb3RoZXIgcGVvcGxlLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgZ2l2ZSB1cCBvbiBteSBkcmVhbXMgdG9vIGVhc2lseS5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJmcmVuY2h5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgb2Z0ZW4gY2hhbmdlIG15c2VsZiBpbiBvcmRlciB0byBmZWVsIGFjY2VwdGVkIGJ5IG15IHBlZXJzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgcHV0IG90aGVyIHBlb3BsZSBpbiBkYW5nZXIgYmVjYXVzZSBvZiBteSBhY3Rpb25zLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImtlbmlja2llXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBub3QgdGhlIGJlc3QgY29tbXVuaWNhdG9yLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9LFxyXG5cdHtcdFxyXG5cdFx0cXVlc3Rpb246IFwiSG93IHdvdWxkIHlvdSBkZXNjcmliZSB5b3Vyc2VsZj9cIixcclxuXHRcdGNob2ljZXM6IFtcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGFuc3dlcjogXCJJIGhhdmUgZ3JlYXQgbGVhZGVyc2hpcCBxdWFsaXRpZXMuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIGEgZHJlYW1lciBhbmQgY2FuIGNvbWUgb2ZmIGFzIGRpdHp5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiSSdtIGhhcmQtd29ya2luZyBhbmQgdHJ5IHRvIGRvIHRoZSByaWdodCB0aGluZy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJIGNhbiBiZSBsb3VkIGFuZCBidWJibHkuXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkkgbGlrZSB0byBjbG93biBhcm91bmQgYW5kIG5vdCB0YWtlIHRoaW5ncyB0b28gc2VyaW91c2x5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJJJ20gb3V0c3Bva2VuIGJ1dCB2dWxuZXJhYmxlLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkknbSBub3QgYXMgaW5ub2NlbnQgYXMgZXZlcnlvbmUgdGhpbmtzLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJJIHRlbmQgdG8gZ28gZm9yLi4uXCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwic29tZW9uZSB3aG8gaXMgdW5kZXJzdGFuZGluZyBhbmQgYSBsaXR0bGUgcXVpcmt5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInB1dHppZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJ0aGUgdG91Z2gtbG9va2luZyBvbmUgd2l0aCBhIGhlYXJ0IG9mIGdvbGQuIFRoZSBtb3JlIHRhdHRvb2VzLCB0aGUgYmV0dGVyLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGhhcyBhIG5pY2Ugc21pbGUgYW5kIGlzIGEgbGl0dGxlIG5lcmR5LlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIHdobyBpc24ndCBhZnJhaWQgdG8gYmUgdGhlbXNlbHZlcy5cIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJ0aGUgcG9wdWxhciBvbmUsIGV2ZW4gaWYgdGhleSBhcmUgYSBqZXJrLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcInNvbWVvbmUgd2hvIGxvdmVzIGZvb2QgYXMgbXVjaCBhcyBJIGRvLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImphblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJzb21lb25lIEkgY2FuIHRha2UgYWR2YW50YWdlIG9mLlwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImRhbm55XCJcclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0XVxyXG5cdH0sXHJcblx0e1x0XHJcblx0XHRxdWVzdGlvbjogXCJXaGljaCBvZiB0aGVzZSB3b3VsZCB5b3UgYmluZ2Ugd2F0Y2g/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiVG9wIEdlYXJcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJNYXN0ZXJDaGVmXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiamFuXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlF1ZWVyIEV5ZVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiVGhlIEdvb2QgUGxhY2VcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJzYW5keVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJKZXJzZXkgU2hvcmVcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJkYW5ueVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHtcdGFuc3dlcjogXCJKYWNrYXNzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkdpcmxzXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicml6em9cIlxyXG5cdFx0XHR9XHRcdFx0XHJcblx0XHRdXHJcblx0fSxcclxuXHR7XHRcclxuXHRcdHF1ZXN0aW9uOiBcIkJlc3Qgc29uZyBpbiBHcmVhc2U/XCIsXHJcblx0XHRjaG9pY2VzOiBbXHJcblx0XHRcdHtcclxuXHRcdFx0XHRhbnN3ZXI6IFwiSG9wZWxlc3NseSBEZXZvdGVkIHRvIFlvdVwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInNhbmR5XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlRoZXJlIEFyZSBXb3JzZSBUaGluZ3MgSSBDb3VsZCBEb1wiLFxyXG5cdFx0XHRcdHZhbHVlOiBcInJpenpvXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIlNhbmR5XCIsXHJcblx0XHRcdFx0dmFsdWU6IFwiZGFubnlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiQmx1ZSBNb29uXCIsXHJcblx0XHRcdFx0dmFsdWU6IFwicHV0emllXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0e1x0YW5zd2VyOiBcIkJlYXV0eSBTY2hvb2wgRHJvcG91dFwiLFxyXG5cdFx0XHRcdHZhbHVlOiBcImZyZW5jaHlcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiV2UgR28gVG9nZXRoZXJcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJqYW5cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR7XHRhbnN3ZXI6IFwiR3JlYXNlZCBMaWdodG5pbidcIixcclxuXHRcdFx0XHR2YWx1ZTogXCJrZW5pY2tpZVwiXHJcblx0XHRcdH1cdFx0XHRcclxuXHRcdF1cclxuXHR9XHJcbl0vL3F1aXpRdWVzdGlvbnNcclxuXHJcblxyXG5jb25zdCBjb2NrdGFpbExpc3QgPSBbXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcInNhbmR5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJTaGlybGV5IFRlbXBsZVwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwiZGFubnlcIixcclxuXHRcdGNvY2t0YWlsOiBcIlQtQmlyZFwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwicml6em9cIixcclxuXHRcdGNvY2t0YWlsOiBcIlRoZSBSaXp6b1wiXHJcblx0fSxcclxuXHR7XHJcblx0XHRjaGFyYWN0ZXI6IFwia2VuaWNraWVcIixcclxuXHRcdGNvY2t0YWlsOiBcIkJvaWxlcm1ha2VyXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJmcmVuY2h5XCIsXHJcblx0XHRjb2NrdGFpbDogXCJTdHJhd2JlcnJ5IFdoaXRlIFJ1c3NpYW5cIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0Y2hhcmFjdGVyOiBcImphblwiLFxyXG5cdFx0Y29ja3RhaWw6IFwiQmVycnkgQmVsaW5pXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdGNoYXJhY3RlcjogXCJwdXR6aWVcIixcclxuXHRcdGNvY2t0YWlsOiBcIlNpZGVjYXJcIlxyXG5cdH1cclxuXVxyXG5cclxuXHJcblxyXG5jb25zdCAkcXVlc3Rpb24gPSAkKFwiLnF1ZXN0aW9uXCIpO1xyXG5jb25zdCAkdG90YWxRdWVzdGlvbnMgPSBxdWl6UXVlc3Rpb25zLmxlbmd0aDtcclxuY29uc3QgJGNob2ljZXMgPSAkKFwiLmNob2ljZXNcIik7XHJcbmNvbnN0ICRyZXN1bHRzID0gJChcIi5yZXN1bHRzXCIpO1xyXG5jb25zdCAkdHJ5ID0gJChcIi50cnlcIik7XHJcbmNvbnN0ICRuZXh0ID0gJChcIi5uZXh0XCIpO1xyXG5jb25zdCAkYWdhaW4gPSAkKFwiLmFnYWluXCIpO1xyXG4vLyBjb25zdCAkaW1hZ2VEaXYgPSAkKFwiLmhvdC1zYXVjZS1pbWFnZVwiKTtcclxuLy8gY29uc3QgJGhvdFNhdWNlSW1hZ2UgPSAkKFwiI2hvdC1zYXVjZS1pbWFnZVwiKTtcclxuLy8gY29uc3QgJGxpbmsgPSQoXCIjbGlua1wiKTtcclxubGV0ICRjdXJyZW50UXVlc3Rpb24gPSAwO1xyXG5sZXQgdXNlckNob2ljZXMgPVtdO1xyXG5cclxuJHRyeS5oaWRlKCk7XHJcbi8vICRpbWFnZURpdi5oaWRlKCk7XHJcbiRyZXN1bHRzLmhpZGUoKTtcclxuJGFnYWluLmhpZGUoKTtcclxuLy8gJGxpbmsuaGlkZSgpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbi8vc2hvd3MgZmlyc3QgcXVlc3Rpb24gYW5kIGNyZWF0ZXMgcmFkaW8gYnV0dG9ucyBmb3IgYW5zd2VyIGNob2ljZXNcclxuXHQkcXVlc3Rpb24udGV4dChxdWl6UXVlc3Rpb25zWyRjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uKTtcclxuXHRsZXQgaSA9IDA7XHJcblx0cXVpelF1ZXN0aW9uc1tpXS5jaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xyXG5cdFx0bGV0IHJhZGlvQnRuID0gJCgnPGlucHV0IHR5cGU9XCJyYWRpb1wiICBpZD1cIicrKGNob2ljZS5hbnN3ZXIpKydcIiBuYW1lPVwiJysgcXVpelF1ZXN0aW9uc1tpXS5jaG9pY2VzICsnXCIgdmFsdWU9XCInKyAoY2hvaWNlLnZhbHVlKSArJ1wiIGNoZWNrZWQgLz48bGFiZWwgZm9yPVwiJysoY2hvaWNlLmFuc3dlcikrJ1wiPicgKyAoY2hvaWNlLmFuc3dlcikgKyAnPC9sYWJlbD4nKTtcclxuXHRcdCRjaG9pY2VzLmFwcGVuZChyYWRpb0J0bik7XHJcblx0fSk7XHJcbi8vcHVzaGVzIHVzZXIncyBjaG9pY2UgdG8gbmV3IGFycmF5IHdoZW4gXCJuZXh0XCIgaXMgY2xpY2tlZCB0aGVuIHJlc2V0c1xyXG5cdCRuZXh0Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR1c2VyQ2hvaWNlcy5wdXNoKCQoJ2lucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQnKS52YWwoKSk7XHJcblx0XHRjb25zb2xlLmxvZyh1c2VyQ2hvaWNlcyk7XHJcblx0XHQkY2hvaWNlcy5lbXB0eSgpO1xyXG5cclxuLy9zaG93cyBuZXh0IHF1ZXN0aW9uXHJcblx0XHRpZiAoJGN1cnJlbnRRdWVzdGlvbiA8ICR0b3RhbFF1ZXN0aW9ucyAtMSkge1xyXG5cdFx0XHRcdCRjdXJyZW50UXVlc3Rpb24gPSAkY3VycmVudFF1ZXN0aW9uICsgMTtcclxuXHRcdFx0XHQkcXVlc3Rpb24udGV4dChxdWl6UXVlc3Rpb25zWyRjdXJyZW50UXVlc3Rpb25dLnF1ZXN0aW9uKTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdFx0cXVpelF1ZXN0aW9uc1tpXS5jaG9pY2VzLmZvckVhY2goKGNob2ljZSkgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IHJhZGlvQnRuID0gJCgnPGlucHV0IHR5cGU9XCJyYWRpb1wiIGlkPVwiJysoY2hvaWNlLmFuc3dlcikrJ1wiIG5hbWU9XCInKyBxdWl6UXVlc3Rpb25zW2ldLmNob2ljZXMgKydcIiB2YWx1ZT1cIicgKyAoY2hvaWNlLnZhbHVlKSArJ1wiIGNoZWNrZWQgLz48bGFiZWwgZm9yPVwiJysoY2hvaWNlLmFuc3dlcikrJ1wiPicgKyAoY2hvaWNlLmFuc3dlcikgKyAnPC9sYWJlbD4nKTtcclxuXHRcdFx0XHRcdCRjaG9pY2VzLmFwcGVuZChyYWRpb0J0bik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9IGVsc2Ugey8vcmV0dXJuIHRoZSBtb3N0IHNlbGVjdGVkIHZhbHVlIG9uY2UgcXVlc3Rpb25zIGFyZSBmaW5pc2hlZFxyXG5cdFx0XHRjb25zdCB1c2VyQ2hhcmFjdGVyID0gZnVuY3Rpb24gbW9zdFNlbGVjdGVkVmFsdWUoYXJyYXkpe1xyXG5cdFx0XHQgICAgcmV0dXJuIGFycmF5LnNvcnQoKGEsYikgPT5cclxuXHRcdFx0ICAgICAgICAgIGFycmF5LmZpbHRlcih2ID0+IHY9PT1hKS5sZW5ndGhcclxuXHRcdFx0ICAgICAgICAtIGFycmF5LmZpbHRlcih2ID0+IHY9PT1iKS5sZW5ndGgpLnBvcCgpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBjaGFyYWN0ZXIgPSB1c2VyQ2hhcmFjdGVyKHVzZXJDaG9pY2VzKTtcclxuXHRcdFx0Y29uc29sZS5sb2coY2hhcmFjdGVyKTtcclxuLy90YWtlcyBtb3N0IHNlbGVjdGVkIHZhbHVlIGFuZCByZXR1cm5zIGNvY2t0YWlsIGJhc2VkIG9uIHRoZSBjaGFyYWN0ZXIncyBuYW1lXHJcblx0Ly9pZiBtb3N0c2VsZWN0ZWR2YWx1ZSA9IHNhbmR5LCByZXR1cm4gc2FuZHlDb2NrdGFpbFxyXG5cclxuXHRcdFx0Ly8gY29uc3QgaG90U2F1Y2VPcHRpb25zID0gaG90U2F1Y2VzW3VzZXJDaG9pY2VzWzBdXTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coaG90U2F1Y2VPcHRpb25zKTtcclxuXHRcdFx0Y29uc3QgZmlsdGVyZWRPcHRpb25zID0gY29ja3RhaWxMaXN0LmZpbHRlcihyZXN0ID0+IHJlc3QuY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpO1xyXG5cdFx0XHRjb25zdCB0aGVPbmUgPSBmaWx0ZXJlZE9wdGlvbnNbMF0uY29ja3RhaWw7XHJcblx0XHRcdGNvbnNvbGUubG9nKHRoZU9uZSk7XHJcblx0XHRcdCRxdWVzdGlvbi5oaWRlKCk7XHJcblx0XHRcdCR0cnkuc2hvdygpO1xyXG5cdFx0XHQvLyAkaG90U2F1Y2VJbWFnZS5hdHRyKFwic3JjXCIsYCR7dGhlT25lLmltYWdlfWApO1xyXG5cdFx0XHQvLyAkaW1hZ2VEaXYuc2hvdygpO1xyXG5cdFx0XHRjb25zdCByZXN1bHRIVE1MID0gYCR7dGhlT25lfWA7XHJcblx0XHRcdCRyZXN1bHRzLmh0bWwocmVzdWx0SFRNTCk7XHJcblx0XHRcdCRyZXN1bHRzLnNob3coKTtcclxuXHRcdFx0Ly8gJGxpbmsuaHRtbChgPGEgaHJlZj1cIiR7dGhlT25lLmxpbmt9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt0aGVPbmUubmFtZX08L2E+YCk7XHJcblx0XHRcdC8vICRsaW5rLnNob3coKTtcclxuXHRcdFx0JG5leHQuaGlkZSgpO1xyXG5cdFx0XHQkYWdhaW4uc2hvdygpO1xyXG5cdFx0XHQkYWdhaW4ub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0bG9jYXRpb24ucmVsb2FkKCk7XHJcblxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcbn0pO1xyXG5cclxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuLy8gXHRjb25zb2xlLmxvZyhcInJlYWR5XCIpO1xyXG4vLyBcdHVzZXJDaG9pY2VzLnB1c2gocXVpelF1ZXN0aW9uc1swXS5jaG9pY2VzWzBdLnZhbHVlKTtcclxuLy8gXHRjb25zb2xlLmxvZyh1c2VyQ2hvaWNlcyk7XHJcblxyXG5cclxuXHJcblxyXG4vLyB9KTsiXX0=
