Artist.prototype.getProfession=function(){
    return `${this.profession}`
}
Artist.prototype.print=function(){
    return `I am ${this.name}`
}

function Artist(name, skill, profession){
    this.name=name;
    this.skill=skill;
    this.profession=profession;
    Object.setPrototypeOf(artistsObject,this)
}


var artistsObject = {}
Object.create(artistsObject);

// Do not change this
export {Artist, artistsObject};
