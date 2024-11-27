const movies = [
    { title: "Inception", director: "Christopher Nolan", year: 2010, rating: 4.8 },
    { title: "The Dark Knight", director: "Christopher Nolan", year: 2008, rating: 4.9 },
    { title: "Interstellar", director: "Christopher Nolan", year: 2014, rating: 4.7 },
    { title: "Parasite", director: "Bong Joon-ho", year: 2019, rating: 4.6 },
    { title: "The Godfather", director: "Francis Ford Coppola", year: 1972, rating: 4.9 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 4.8 },
    { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994, rating: 4.9 },
    { title: "The Matrix", director: "The Wachowskis", year: 1999, rating: 4.7 },
    { title: "Se7en", director: "David Fincher", year: 1995, rating: 4.6 },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 4.5 },
  ];
//here this fun takes the data and pos at which the movies is needed to be added in the array 

const addMovie = (data,pos)=>{
    if(typeof(pos) === 'string'){
        if(pos === 'start'){
            movies.unshift(data)
        }
        else if(pos === 'end'){
            movies.push(data)
        }
    }
    else if(typeof(pos) === 'number'){
            if(pos > movies.length-1){
                console.log("pos should be in range of data set")
                return
            }
            movies.splice(pos, 0 , data);
    }
    // console.log(movies)
    return movies
}

// const mviData = {title : "Before Sunset",director : "xyz", year : "2002" , rating : 8.7};
//  const updatedMvi = addMovie(mviData,6)
//  console.log(updatedMvi)


//Filter Movies with Director's 

const MviByDirectorName = (dirName) =>{
    const result = movies.filter((mvi)=>(
        mvi.director === dirName
    ))
    return result
}

// const result2 = MviByDirectorName("David Fincher")
// console.log(result2);


// get the movies according to the rating 

const FilterByRating = (min, max) =>{
        const result = movies.filter((mvi)=>{
            console.log(mvi.rating)
            return mvi.rating >= min && mvi.rating <= max   
        })
        return result
}

// const rating = FilterByRating(3,4.7)
// console.log(rating)

//Dir avg rating 

const avgRating = (dir) =>{
    const ratingData = movies.reduce((avg,mvi)=>{  
        if(mvi.director === dir){
            avg.m += 1;
            avg.rated += mvi.rating
        }
        return avg 
      },{m : 0 , rated : 0})
    return Math.ceil(ratingData.rated)/ratingData.m;
}

// const dirAvgRating = avgRating("David Fincher")
// console.log(dirAvgRating)

