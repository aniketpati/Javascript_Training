class Book {
    constructor(
        name,
        genre, 
        isAvalable
    )
    {
        this.name = name,
        this.genre = genre,
        this.isAvalable = isAvalable
    }
    mustRead(stat){
        console.log("This book is must read", stat);
    }
}

export default Book;
