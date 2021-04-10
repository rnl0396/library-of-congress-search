// 4- ONE person, will create a function displayResult(title,text,link), this function will create an instance of a result, and add it to the results container in the HTML. After finishing, add, commit, pull , push and pull request.


function displayResults(results) {
    $.get("http://www.omdbapi.com/?t="+movieName+"=trilogy",function(data) {
        console.log(data);
        //Using the info returned in the data Object, display the movie information in the placeholders
        // Title
        $("#resultTitle").text(data.Title);
        // Text
        $("#resultText").text(data.Text);
        // Link
        $("resultLink").text(data.Link);
    
    });
}

// need id for form

$(form).on("click",function(event){
    event.preventDefault();
    var results=$(form).val();
    console.log(results)
    if(results) {

        $.get("https://www.loc.gov/search/?q="+results+"fo=json",function(data) {
            console.log(data);
            
            for(var i=0;i<data.Search.length;i++) {
                var movie=data.Search[i];
                
                var movieDiv=$("<div>");
                movieDiv.addClass("movie");

                var moviePosterImage=$("<img>");
                moviePosterImage.attr("src",movie.Poster);

                movieDiv.append(moviePosterImage);


                var movieTitle=$("<h1>");
                movieTitle.text(movie.Title);
                movieDiv.append(movieTitle);

                var movieYear=$("<b>");
                movieYear.text(movie.Year);
                movieDiv.append(movieYear);

                //Rest of properties

                movieDiv.appendTo("#movies");


            }

        });
    } else {
        alert("Please enter the name of a movie.")
    }
});

$("movies").on()