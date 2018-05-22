$(document).ready(function () {
    console.log("HOME LOADED!");
    $("#loginView").css("display", "none");
    $("#registerView").css("display", "none");
    $("#welcomeView").css("display", "");
});


function openSectionWithId(sectionIdToShow) {
    $('#welcomeView').hide();
    $('#registerView').hide();
    $('#loginView').hide();
    $('#' + sectionIdToShow).show();
}

function navbarRegisterLinks(formToShowId) {
   
}