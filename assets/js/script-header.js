// covid banner
document.querySelector('.acceptbutton').addEventListener('click', function(){
    document.querySelector('.covid-banner').style.display = "none";
});

// =======================================================================================

// searchbar
document.querySelector('.close-button').style.display = "none";
document.querySelector('.pop-up-searchbar').style.display = "none";
document.querySelector('.searchbar-button').addEventListener('click', function(){
    document.querySelector('.pop-up-searchbar').style.display = "block";
    document.querySelector('.close-button').style.display = "block";
    document.querySelector('.searchbar-button').style.display = "none";
});

document.querySelector('.close-button').addEventListener('click', function(){
    document.querySelector('.pop-up-searchbar').style.display = "none";
    document.querySelector('.searchbar-button').style.display = "block";
    document.querySelector('.close-button').style.display = "none";
});

// =======================================================================================

// burger menu (for tablets and smartphones)

document.querySelector('.smartphone-menu').style.display = "none";
document.querySelector('.burger-close').style.display = "none";
document.querySelector('.burger-menu-close').style.display = "none";
document.querySelector('.burger-open').addEventListener('click', function(){
  document.querySelector('.smartphone-menu').style.display = "block";
  document.querySelector('.burger-menu').style.display = "none";
  document.querySelector('.burger-close').style.display = "block";
  document.querySelector('.burger-menu-close').style.display = "block";
});

document.querySelector('.burger-close').addEventListener('click', function(){
  document.querySelector('.smartphone-menu').style.display = "none";
  document.querySelector('.burger-menu').style.display = "block";
  document.querySelector('.burger-close').style.display = "none";
  document.querySelector('.burger-menu-close').style.display = "none";
})
