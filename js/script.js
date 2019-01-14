/* global $ */
function veggie(result){
    if( result === "yes"){
        return 0;
    } else if( result === "no"){
        return 1
    }
}

function bName(result){
    if( result === "Captain Combustible"){
        return 0;
    } else if( result === "Professor Brainstorm"){
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
        console.log('total score: ', totalScore)
    });
});