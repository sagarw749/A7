

// Step_1
var favMovies = ["Avatar", "Inception", "Transformers", "Matrix", "Argo"];
console.log("Step 1");
console.log(favMovies[1]);

//Step_2
console.log("");
console.log("Step 2");
var movies = new Array(5);
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
console.log(movies[0]);

//Step_3
console.log("");
console.log("Step 3");
var movies = new Array(5);
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies.splice(2, 0, "KnivesOut");
console.log(movies.length );

//Step_4
console.log("");
console.log("Step 4");

var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
delete movies[0];
//movies.shift();
console.log(movies);

//Step_5
console.log("");
console.log("Step 5");

var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";

for(var i = 0; i<movies.length; i++)
{
     console.log(movies[i]);
}

//Step_6
console.log("");
console.log("Step 6");
//copying the Step_5 code as mentioned in the requirment
var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";
var index;
for(index in movies)
{
    window.console.log(movies[index]);
}

//Step_7
console.log("");
console.log("Step 7");
var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";
movies.sort();
for(index in movies){
    window.console.log(movies[index]);
}

//Step_8
console.log("");
console.log("Step 8");
var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";

var leastFavMovies = ["Matrix2","Matrix3", "Fast5"];
console.log("Movies I like:\n");
console.log("");
for( i=0; i<movies.length; i++)
{
    console.log(movies[i]);
}
console.log("");
console.log("Movies I regret watching:");
console.log("");
for( i=0; i<leastFavMovies.length; i++)
{
    console.log(leastFavMovies[i]);
}

//Step_9
console.log("");
console.log("Step 9");

var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";

var leastFavMovies = ["Matrix2","Matrix3", "Fast5"];
movies = movies.concat(leastFavMovies);
console.log(movies.sort().reverse());


//Step_10
console.log("");
console.log("Step 10");
var movies = [];
movies[0] = "Avatar";
movies[1] = "Inception";
movies[2] = "Trasnformers";
movies[3] = "Matrix";
movies[4] = "Argo";
movies[5] = "IronMan1";
movies[6] = "IronMan2";

var leastFavMovies = ["Matrix2","Matrix3", "Fast5"];
movies = movies.concat(leastFavMovies);
movies.sort().reverse();

console.log(movies[movies.length -1]);






