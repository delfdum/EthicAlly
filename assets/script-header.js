// covid banner
document.querySelector('.acceptbutton').addEventListener('click', function(){
    document.querySelector('.covid-banner').style.display = "none";
});

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

// burger menu (for tablets and smartphones)
<div class="burger-menu">
  <button class="burger-open" type="button" name="button"><i class="fas fa-bars"></i></button>
</div>
<div class="menu">
  <button class="burger-close" type="button" name="button"><i class="fas fa-times"></i></button>
  <nav>
    <ul>
      <li>NOS ARTISANS</li>
      <li>NOS PRODUITS</li>
      <li>NOS ENGAGEMENTS</li>
      <li>LE MEDIA</li>
    </ul>
  </nav>
</div>

document.querySelector('.burger-close').style.display = "none";
