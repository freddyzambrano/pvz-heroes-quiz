/* global $ */
function veggie(result){
    if( result === "yes"){
        return 0;
    } else if( result === "no"){
        return 1
    }
}

function bName(result){
    var cleanedResult = result.toLowerCase();
    cleanedResult = $.trim(cleanedResult);
    if( cleanedResult === "captain combustible"){
        return 0;
    } else if( cleanedResult === "professor brainstorm"){
        return 1
    }
}

function colour(result){
    if( result === "green"){
        return 0;
    } else if( result === "purple"){
        return 1
    }
}

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = veggie(q1Result) + bName(q2Result) + colour(q3Result);
        console.log('total score: ', totalScore);
        console.log(veggie(q1Result), bName(q2Result), colour(q3Result));
        
        if(totalScore === 0 || totalScore === 1){
            $(".result").text("You Are A Plant Hero")
        } else {
            $(".result").text("You Are A Zombie Hero")
        }
    });
});