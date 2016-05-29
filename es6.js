'use strict';

$(document).ready(function () {
    const first = 'Vicky';
    let str = `
        Hi ${first}.
        We are in ${new Date().getFullYear()} year
    `;
    alert(str);

    $('#first').css("background-color", "yellow");
    $('#second').html("Ac parturient. Diam fermentum, tristique justo auctor amet tellus, ultricies erat.");
});
