$(document).ready(function () {

    $(".dropdown-trigger").dropdown();

    var favorites = JSON.parse(localStorage.getItem("favoritesList")) || ["Chicken", "Mashed Potatoes" , "Pea Soup"]

    renderFavorites();

    function renderFavorites() {

        $("#dropdown1").empty()

        for (let i = 0; i < favorites.length; i++) {
            newLi = $("<li>")
            newAtag = $("<a>")
            $(newAtag).text(favorites[i])
            $(newLi).append(newAtag)
            $("#dropdown1").append(newLi)
        }
    }

    $("#dropdown1").on("click" , function (event){
        console.log($(event.target).text())
        localStorage.setItem("clickedFavorite" , $(event.target).text())
        window.location.href = "recipe-card.html"
    })

    function generateRecipes() {

        var queryURL = ""


        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    }

    function GetInfoWorkout() {
    
        var queryURL = "https://wger.de/api/v2/exercise/" + exerciseID;
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
        });
    };

    // GetInfoWorkout();

});

// GetInfoWorkout();

    //  ID numbers 

    // Sedentary workouts: 

    // 470 - ("Crossover Reverse Lunge")
    // 607 - ("name": "Ankle Taps")
    // 604 - ("name": "Bodyweight Squats")
    // 307 - ("name": "Bear Walk")
    // 480 - ("name": "Fire Hydrant")


    // Moderate workouts:

    // 795 - ("name": "Squat Thrust")
    // 548 - ("name": "Wall Slides")
    // 341 - ("name": "Body-Ups")
    // 781 - ("name": "Dips")
    // 806 - ("name": "Cycling")

    // Active workouts:

    // 814 - ("name": "Box Jump")
    // 206 - ("name": "Decline Pushups")
    // 338 - ("name": "Isometric Wipers")
    // 789 - ("name": "Jogging")
    // 807 - (name": "Handstand Pushup")

    // GetInfoWorkout();
    
    // Muscles: ID numbers for muscles
            // 1 - Biceps brachii
            // 2 - Anterior deltoid
            // 3 - Serratus anterior
            // 4 - Pectoralis major
            // 5 - Triceps brachii
            // 6 - Rectus abdominis
            // 7 - Gastrocnemius
            // 8 - Gluteus maximus
            // 9 - Trapezius
            // 10 - Quadriceps femoris
            // 11 - Biceps femoris
            // 12 - Latissimus dorsi
            // 13 - Brachialis
            // 14 - Obliquus externus abdominis
            // 15 - Soleus


    // "https://wger.de/api/v2/exercise/?equipment=7"

    // "https://wger.de/api/v2/exercise/?muscles=1&equipment=7&language=2"
