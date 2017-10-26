"use strict";

class Invitation {

    constructor(displayElement){

        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeTitle(newTitle){
        this.titleEl.text(newTitle);
    }

    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage){
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    changeLocation(newLocation) {
        this.locationEl.text(newLocation);
    }

    changeDescription(newDescription) {
        this.descriptionEl.text(newDescription);
    }

    changeBackgroundColor(newBackgroundColor) {
        this.container.css("background-color", newBackgroundColor);
    }

}


// PART 2:

// Create your invitation object
let invitationElement = $("#invite-display");
let invite = new Invitation(invitationElement);

// Add event listeners
$('#title-input').on('change', function (evt) {
    //or could do evt.target.value
    invite.changeTitle($('#title-input').val());
});

$('#date-input').on('change', function (evt) {
    invite.changeDate($('#date-input').val());
});

$('#start-time').on('change', function (evt) {
    invite.changeStart($('#start-time').val());
});

$('#end-time').on('change', function (evt) {
    invite.changeEnd($('#end-time').val());
});

$('#location-input').on('change', function (evt) {
    invite.changeLocation($('#location-input').val());
});

$('#description-input').on('change', function (evt) {
    invite.changeDescription($('#description-input').val());
});

$('#font').on('change', function (evt) {
    invite.changeFont($('#font').val());
});

$(".color-btn").on('click', function (evt) {
    invite.changeBackgroundColor($(evt.target).data("color"));
});

$(".image-input").on('click', function (evt) {
    invite.changeImage(evt.target.value);
})