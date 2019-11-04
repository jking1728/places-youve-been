// Business Logic for PlaceBook -----

function PlaceBook () {
    this.places = [],
    this.currentId = 0
}

PlaceBook.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places.push(place);
}

PlaceBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

PlaceBook.prototype.findPlace = function(id) {
    for (var i=0; i< this.places.length; i++) {
        if (this.places[i]) {
            if (this.contacts [i].id == id) {
                return this.places[i];
            }
        }
    };
    return false;
}

PlaceBook.prototype.deletePlace = function(id) {
    for (var i=0; i< this.places.length; i++) {
        if (this.places[i]) {
            if (this.contacts [i].id == id) {
                delete this.places[i];
                return true;
            }
        }
    };
    return false;
}

//Business Logic for Places ----------
function Place(place, location, timeOfYear, highlights) {
    this.place = place,
    this.location = location,
    this.timeOfYear = timeOfYear,
    this.highlights = highlights
}

