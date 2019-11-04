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
            if (this.places [i].id == id) {
                return this.places[i];
            }
        }
    };
    return false;
}

PlaceBook.prototype.deletePlace = function(id) {
    for (var i=0; i< this.places.length; i++) {
        if (this.places[i]) {
            if (this.places [i].id == id) {
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

Place.prototype.locationPlace = function() {
    return this.place + " " + this.location;
}

//User Interface Logic -----------
var placeBook = new PlaceBook();

function displayPlaceDetails(placeBookToDisplay) {
    var placesList = $("ul#places");
    var htmlForPlaceInfo = "";
    placeBookToDisplay.places.forEach(function(place) {
        htmlForPlaceInfo += "<li id=" + place.id + ">" + place.place + " " + place.location + "</li> ";
    });
    placesList.html(htmlForPlaceInfo);
}

function showPlace(placeId) {
    var place = placeBook.findPlace(placeId);
    $("#show-place").show();
    $(".place-name").html(place.place);
    $(".location").html(place.location);
    $(".time-of-year").html(place.timeOfYear);
    $(".highlights").html(place.highlights);

    var buttons = $("buttons");
    buttons.empty();
    buttons.append("<button class='deleteButton' id=" + + place.id + ">Delete</button>")
}

function attachPlaceListeners() {
    $("ul#places").on("click", "li" , function() {
        showPlace(this.id);
    });
    $("#buttons").on("click", ".deleteButton", function() {
        placeBook.deletePlace(this.id);
        $("#show-place").hide();
        displayPlaceDetails(placeBook);
    });
};

$(document).ready(function() {
    attachPlaceListeners();
    $("form#new-place").submit(function(event) {
        event.preventDefault();
        var inputtedPlace = $("input#new-place-name").val();
        var inputtedLocation = $("input#new-location").val();
        var inputtedTimeOfYear = $("input#new-time-of-year").val();
        var inputtedHighlights = $("input#new-highlights").val();

        $("input#new-place-name").val();
        $("input#new-location").val();
        $("input#new-time-of-year").val();
        $("input#new-new-highlights").val();

        var newPlace = new Place (inputtedPlace, inputtedLocation, inputtedTimeOfYear, inputtedHighlights);
        placeBook.addPlace(newPlace);
        displayPlaceDetails(placeBook);
    })
})
