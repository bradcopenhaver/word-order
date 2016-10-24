var paragraphString = [];
var words = [];
var wordCount = [];
var finalString;



$(document).ready(function() {
  $("form").submit(function(event){
    paragraphString = $("input#paragraph").val();

    words = paragraphString.split(" ");

    words.forEach(function(baseWord){
      wordCount.push(words.filter(function(word){
        return baseWord === word;
      }));

    });
//
//     longWords.reverse();
//     finalString = longWords.join(" ");
    // $(".output").text(finalString);

    event.preventDefault();
  });
});
