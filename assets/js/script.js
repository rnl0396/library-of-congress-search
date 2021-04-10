//3- ONE person will create a function getRequestURL(search,format), this function will return a string, which will be the API URL to be fetched for those values. After finishing, add, commit, pull , push and pull request

var getRequestURL = function(search, format){
    let url = "https://www.loc.gov/"+format+"/?q="+search+"&fo=json";
    console.log(url);
    return url;
}


$("#form").delegate("#search-btn","click",function(event){
    event.preventDefault();
    let search = $("#search").val().replace(/\s/g,"+");
    let format = $("#format").val();
    getRequestURL(search, format);
});
