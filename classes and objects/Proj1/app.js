class Backpack {
    constructor(
        name,
        volume,
        color,
        leadOpen
    ){
        this.name = name;
        this.volume = volume;
        this.color = color;
        this.leadOpen = leadOpen;
    }
    strap(strapLength){
        this.strapLength = strapLength;
        console.log("StrapLength", strapLength);
    }

}
module.exports = Backpack;


