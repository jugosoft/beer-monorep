import React from 'react';
import { NavLink } from 'react-router-dom';
import IMAGES from '../../assets';
import NavBar from '../../components/NavBar/NavBar';

const DefaultLanding = (props) => {
  return (
    <>
      <br />
      <div id="index-banner" class="row parallax-container">
        <div class="section no-pad-bot">
          <div class="container">
            <br />
            <h1 class="header center">BeerApp.io</h1>
            <div class="row center">
              <h5 class="col s12 light">Don't drink too much without a Reason.</h5>
            </div>
            <div class="row center">
              <a href="#contact" class="btn-large waves-effect waves-light cyan darken-4 modal-trigger">Contact Us</a>
            </div>
            <div class="row center">
              <NavLink className="btn-large green darken-4" to="/auth">Join Us</NavLink>
            </div>
          </div>
        </div>
        <div class="parallax">
          <img src={IMAGES.landing.beers} alt="Loading Image" />
        </div>
      </div>

      <div className="row">
        <div class="section">
          <div class="row" id="about">
            <div class="col s12 m6">
              <img class="responsive-img right circle z-depth-1" src={IMAGES.landing.party} style={{ height: '400px', width: '400px' }} alt="Loading Image" />
            </div>
            <div class="col s12 m6 about-text ">
              <div class="icon-block">
                <h5><b>Oh... What is Beer?</b></h5>
                <p>Пи́в0 — слабоалкогольный напиток, получаемый спиртовым брожением солодового сусла с помощью
                  пивных дрожжей, обычно с добавлением хмеля. Содержание этилового спирта в большинстве сортов
                  пива около 3,0—6,0 % об., сухих веществ 7—10 %, углекислого газа 0,48—1,0 %. </p>
                <ol>
                  <li class="about">Vo-pervyx, ya ne buhayu.</li>
                  <li class="about">Vo-vtoryx, ya syuda tebya ne zval.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div class="section">
          <div class="row" id="about">
            <div class="col s12 m6 about-text">
              <div class="icon-block">
                <h5 class="center">About</h5>
                <p class="about light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="col s12 m6">
              <img className="responsive-img left circle" src={IMAGES.landing.guy} style={{ height: '400px', width: '400px' }} alt="Loading Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col s12 m6">
          <div class="card sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img border" src={IMAGES.landing.certified1} style={{ height: '300px', width: '300px', margin: '0 auto' }} alt="Image is Loading" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Hans Vogelbaum von Leipzig<i class="material-icons right">more_vert</i></span>

              <h5>Instagram<i class="material-icons">camera</i></h5>
            </div>

            <div class="card-action">
              <a href="#">Contact</a>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Мы все знаем, что в пиве есть дрожжи, но некоторые из нас брезгуют, когда обнаруживают на дне пивной бутылки
                дрожжевой осадок. Из-за своего мало привлекательного вида он может вызвать отвращение и даже подозрение, что
                его там и вовсе быть не должно или что пиво испорчено. Однако это не так. Это не признак плохого качества
                напитка. Такой осадок говорит лишь о том, что пиво дображивали в бутылке. Об этом процессе пишет журнал
                October.
              </p>
            </div>
          </div>
        </div>

        <div class="col s12 m6">
          <div class="card sticky-action">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img border" src={IMAGES.landing.certified2} style={{ height: '300px', width: '300px', margin: '0 auto' }} alt="Image is Loading" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Doktor Ulrich Morgenstern-Bernstein<i class="material-icons right">more_vert</i></span>
              <h5>Instagram<i class="material-icons">camera</i></h5>
            </div>

            <div class="card-action">
              <a href="#">Contact</a>
            </div>

            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Дображивание в бутылке — это технология, согласно которой пиво подвергается вторичному этапу ферментации, на
                этот раз внутри бутылки (в которой оно в конечном итоге попадёт к потребителю), чтобы сделать его в том числе
                шипучим.
              </p>
              <p>Домашние пивовары часто используют простой вариант этой методики. Непосредственно перед самим розливом пивовар
                добавляет немного сахара, чтобы «разбудить» живые дрожжи, присутствующие в пиве. В результате запускается процесс
                вторичной ферментации, в ходе которой дрожжи естественным образом карбонизируют пиво и доводят его до нужной кондиции.
              </p>
              <p>Профессиональные пивовары также используют эту технологию. И хотя основная идея, которой они руководствуются,
                остаётся неизменной, делают они это по-другому. Любой опытный пивовар заботится о состоянии дрожжей и старается
                не допустить, чтобы они подверглись воздействию экстремальных (стрессовых) факторов внешней среды. Не потому, что
                они воспринимают дрожжи как милое домашнее животное (ну, может быть, некоторые из них так и считают), а потому,
                что они знают, что дрожжи, находясь под действием стресса, негативно влияют на качество пива.
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="parallax-container">
        <div class="parallax"><img src={IMAGES.landing.burger} /></div>
        <div class="container">
          <h4>Dont forget to grab Your Beer to our Site!</h4>
          <p>
            In order for the modal to work you have to add the Modal ID to the link of the trigger.
            To add a close button,<br /> just add the class .modal-close to your button.</p>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="carousel">
              <a class="carousel-item" href="#one!"><img src={IMAGES.landing.logo} /></a>
              <a class="carousel-item" href="#two!"><img src={IMAGES.landing.logo} /></a>
              <a class="carousel-item" href="#three!"><img src={IMAGES.landing.logo} /></a>
              <a class="carousel-item" href="#four!"><img src={IMAGES.landing.logo} /></a>
            </div>
          </div>
        </div>
      </div>


      <div class="row">
        <div class="col s12">
          <ul class="tabs">
            <li class="tab col s6"><a href="#test1" class="cyan-text text-darken-4">Sample Tab</a></li>
            <li class="tab col s6"><a class="active cyan-text text-darken-4" href="#test2">Another Sample Tab</a></li>
          </ul>
        </div>

        <div id="test1" class="col s12">
          <h5>This section is under maintainance</h5>
        </div>

        <div id="test2" class="col s12">
          <div class="row">
            <div class="col s12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </div>
          </div>
        </div>
      </div>

      <div id="contact" class="modal">
        <div class="modal-content">
          <h4 class="header grey-text text-darken-3">Contact Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
          <div class="col s12 center hide-on-small-only">
            <iframe
              src="https://www.google.com/maps/embed"
              width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""
              class="map"
              aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat cyan darken-4 white-text">Close</a>
        </div>
      </div>


      <div id="underdev" class="modal">
        <div class="modal-content">
          <h4 class="header grey-text text-darken-3">This Section Is Under Development!</h4>
          <p class="about">Use a modal for dialog boxes, confirmation messages,
            or other content that can be called up.
            In order for the modal to work you have to add the Modal ID to the link of the trigger.
            To add a close button, just add the class .modal-close to your button.</p>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat cyan darken-4 white-text">Close</a>
          </div>
        </div>
      </div>

      <script>
        {
          document.addEventListener('DOMContentLoaded', function () {
            M.Sidenav.init(document.querySelectorAll('.sidenav'));
            M.Parallax.init(document.querySelectorAll('.parallax'));
            M.Carousel.init(document.querySelectorAll('.carousel'));
            M.Tabs.init(document.querySelectorAll('.tabs'));
            M.Modal.init(document.querySelectorAll('.modal'));
          })
        }
      </script>
    </>
  );
}

export default DefaultLanding;
