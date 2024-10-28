const marvelHeroes = ["thor" , "ironman" ,"spiderman"]
const dc = ["superman","flash","batman"]

//marvelHeroes.push(dc)
//console.log(marvelHeroes) // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]  , its taking dc array as the fourth element of marvelHeroes array


// we can also use concat() method

//const allheros = marvelHeroes.concat(dc)
//console.log(allheros)  

// push() method adds the elements in the existing array whereas the concat() method adds the elelemnts into a new array

// for merging two arrays we can also use spread , think of taking two bags full of pebbles and we spread both of them on floor then they will automatically be merged 
// for example :-
 ///const all_new_heros = [...marvelHeroes , ...dc] // spread (most prefered option to merge two or more arrays)
 //console.log(all_new_heros)

 const another_array = [1,2,3,[4,5],6,[7,8,[9]]]
 const real_array = another_array.flat(Infinity)// here in the parameter list we write the depth 
 //console.log(real_array)


 console.log(Array.isArray("Himanshi")) // himanshi is a string
 console.log(Array.from("himanshi")) // converts string into array
 console.log(Array.from({name : "hiamsnhi"})) // interesting , it will give [] as output , we need to tell , either key is used or value is used in order to make an array 

 let score1 = 100
 let score2 = 200
 let score3 = 300

 console.log(Array.of(score1,score2,score3)) 