<template>
<div>
        <footer>
      <div class="footer-divs">
        <div class="footer-div">
          <h6>Inscription Newsletter</h6>
          <label for="newsletter">Newsletter : </label>
          <div class="newsletter">
            <input type="email" name="newsletter" value="" placeholder="votre email">
            <button type="submit" name="button" class="send">Envoi !</button>
          </div>
        </div>
        <div class="separation">
        </div>
        <div class="footer-div">
          <h6>Conditions d'expédition</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="separation">
        </div>
        <div class="footer-div">
          <h6>Contact upcycle</h6>
          <!-- <p>Lorem</br>Ipsum</br>Dolor</br></p> -->
        </div>
        <div class="separation">
        </div>
        <div class="footer-div">
          <h6>S.A.V. consommateur</h6>
          <p>sav@ethically.com</p>
        </div>
        <div class="separation">
        </div>
        <div class="footer-div">
          <h6>Nous suivre</h6>
          <div class="social-media">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div class="legal">
        <ul>
          <li><a href="#">© EthicAlly 2020</a></li>
          <li><a href="#">Conditions d'utilisation</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
        </ul>

      </div>


    </footer>

</div>
</template>
 

<script>
export default {
     name: "Footer",

}
</script>

<style lang="scss" scoped>






footer {
  background-color: #d9e3e9;
  padding: 2rem 4rem;
}

.footer-divs {
  display: flex;
  flex-direction: row;
  height: 35vh;
  justify-content: space-between;
}

.footer-div {
  padding: 1rem 0rem;
  max-width: 18vw;
}

.separation {
  background-color: rgb(150, 160, 160);
  border-radius: 2rem;
  height: 100%;
  width: 2px;
}

.newsletter {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 0rem;
}

.social-media {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.legal {
  margin-top: 3rem;
}

.footer-div h6 {
  margin-bottom: 2rem;
}

.footer-div p {
  font-size: 0.8rem;
}

.social-media a {
  color: #006845;
}

.legal a {
  color: rgb(10, 10, 10);
}

.footer-div li {
  font-size: 0.8rem;
  list-style-type: none;
}

.legal ul {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0rem;
  width: 38vw;
}

.legal li {
  font-size: 0.8rem;
  list-style-type: none;
}

.newsletter input {
  background-color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 0.5rem 0rem 0rem 0.5rem;
  font-size: 0.7rem;
  margin-right: 0rem;
  padding: 0.2rem 0.5rem;
  width: 8rem;
}

.footer-div label {
  font-size: 0.8rem;
}

.send {
  background-color: rgba(240, 240, 240);
  border: none;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  color: #006845;
  font-size: 0.7rem;
  font-weight: 500;
  margin-left: 0rem;
  padding: 0.2rem 0.5rem;
  text-align: center;
}

@media only screen and (max-device-width: 1024px)  {
  .footer-divs {
    height: auto;
    flex-wrap: wrap;
  }

  .footer-div {
    background-color: rgb(240, 240, 240);
    min-width: 39vw;
    margin: 1rem;
    padding: 1rem 2rem;
  }

  .separation {
    display: none;
  }

  .footer-div p {
    font-size: 1.5rem;
  }

  .footer-div h6 {
    font-size: 1.5rem;
  }

  .legal ul {
    width: 100%;
  }

  .footer-div label {
    font-size: 1.3rem;
  }

  .footer-div input, .footer-div button {
    font-size: 1.2rem;
  }

}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px)  {

}

</style>>





