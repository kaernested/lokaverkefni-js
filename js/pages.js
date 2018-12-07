var templates = {
    frontPageTemplate :`
        <div class="frontpage-filter">
            <h2>Sýningar</h2>
            <i class="fas fa-sliders-h"></i>
        </div>
        <section class="content-container">
            <!-- Cards úr javascript koma hér -->
        </section>
        <section class="offer-container">
            <div class="offer-popcorn">
                <img src="images/popcorn.jpg">
                <div class="offer-text">
                    <h2>Tilboð</h2>
                    <p>Skoðaðu tilboðin okkar hér</p>
                </div>
            </div>
            <div class="offer-groups">
                <div class="offer-groupbookings">
                    <img src="images/group.jpg">
                    <div class="offer-text">
                        <h2>Hópabíó</h2>
                        <p>Dragðu vini þína með þér á næstu mynd</p>
                    </div>
                </div>
                <div class="offer-bdaybookings">
                    <img src="images/bday.jpg">
                    <div class="offer-text">
                        <h2>Afmælisbíó</h2>
                        <p>Pantaðu sal fyrir börnin</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="">
            <div class="news-container">
                <div class="news1">
                    <img src="images/aquaman.jpg">
                    <div class="news-text">
                        <h2>Það styttist í Aquaman</h2>
                        <p>Aquaman sem er nýjasta ævintýramyndin frá DC verður ein af jólamyndum ársins</p>
                        <a href="#"><button id="inspect-btn">Skoða nánar<i class="fas fa-angle-right"></i></button></a>
                    </div>
                </div>
                <div class="news2">
                    <div class="news-text">
                        <h2>Ótrúlegar vinsældir A Star Is Born</h2>
                        <p>U.þ.b. 34.000 manns hafa séð myndina og er lagið "Shallows" úr henni á toppi listans yfir vinsælustu lög landsins.</p>
                        <a href="#"><button id="inspect-btn">Skoða nánar<i class="fas fa-angle-right"></i></button></a>
                    </div>
                    <img src="images/astar.jpg">
                </div>
                <div class="news3">
                    <img src="images/fantasticb.jpg">
                    <div class="news-text">
                        <h2>Fantastic Beasts: The Crimes Of Grindelwald náði toppsætinu</h2>
                        <p>Það var ævintýramyndin Fantastic Beasts: The Crimes of Grindlewald sem að fór beinustu leið á toppinn vestanhafs yfir helgina en myndin þénaði 62.2 milljónir dollara</p>
                        <a href="#"><button id="inspect-btn">Skoða nánar<i class="fas fa-angle-right"></i></button></a>
                    </div>
                </div>
            </div>
        </section>
    `,
    movieInfoTemplate:`
    <div class="trailer"></div>
    <section class="progress-bar-container">
        <div class="progress-bar-wrapper">
            <div class="progress-bar-circles">
                    <div class="circle1"><i class="fas fa-film"></i></div>
                    <div class="circle2"><i class="fas fa-ticket-alt"></i></div>
                    <div class="circle3"><i class="fas fa-check"></i></div>
            </div>
            <div class="progress-bar-line"></div>
            <div class="progress-bar-line2"></div>
        </div>
    </section>
    <section class="movie-info-container">
        <div class="movie-info-wrapper">
            <div class="movie-info-photo">
                <img src="images/fantasticbeasts.jpg">
                <button class="trailer-btn" onclick="openTrailer()">Sýnishorn</button>
            </div>
            <div class="movie-info-description">
                <div class="movie-info-headline">
                    <h2>Fantastic Beasts: The Crimes Of Grindelwald</h2>
                    <div class="age-restriction"><p>L</p></div>
                </div>
                <br>
                <p>Leikstjóri: David Yates</p><br>
                <p>Frumsýnd: 16.11.2018</p><br>
                <p>Einkunn: 7/10</p><br>
                <p>Tegund: Ævintýri, Fantasía </p><br>
                <p>Leikarar: Eddie Redmayne, Katherine Waterston, Dan Fogler, Johnny Depp, Jude Law, Ezra Miller, Zoe Kravitz, Ólafur Darri Ólafsson, Ingvar Eggert Sigurðsson</p><br>
                <p>Þegar galdramaðurinn og ógnvaldurinn Gellert Grindelwald sleppur úr haldi og byrjar að safna liði til að geta komið valdasjúkum áformum sínum í framkvæmd fær Albus Dumbledore Newt Scamander til að fara í málið ásamt vinum sínum því fyrirætlanir Gellerts verður að stöðva – hvað sem það kostar.</p>
            </div>
        </div>
        <section class="movie-times-container">
            <ul>
                <li><div class="times-top-wrapper"><div class="times-header"><h2>Sýningartímar</h2></div><div class="times-days"><i class="fas fa-angle-left"></i><p>9.Desember</p><p id="blue">í dag</p><p>11.Desember</p><i class="fas fa-angle-right"></i></div></div></li>
                <li><div class="times-row1"><h2>20:00</h2><p>2D</p><p>Egilshöll</p><p>Salur 1</p><button class="chosen-movie-btn">Velja sýningu</button></div></li>
                <li><div class="times-row2"><h2>20:30</h2><p>2D</p><p>Álfabakki</p><p>Salur 2</p><button class="chosen-movie-btn">Velja sýningu</button></div></li>
                <li><div class="times-row3"><h2>22:00</h2><p>3D</p><p>Kringlan</p><p>Salur 2</p><button class="chosen-movie-btn">Velja sýningu</button></div></li>
                <li><div class="times-row4"><h2>22:20</h2><p>2D</p><p>Egilshöll</p><p>Salur 1</p><button class="chosen-movie-btn">Velja sýningu</button></div></li>
            </ul>                
        </section>
        <section class="movie-ticket-container">
            <div class="movie-ticket-wrapper">
                <ul>
                    <li>
                        <h2>Miðaverð</h2>
                        <div class="ticket-row1">
                            <p>Almennt verð</p>
                            <p>1500 kr</p>
                            <select class="ticket-select-menu">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="ticket-row2">
                            <p>Barn(11 ára og yngri)</p>
                            <p>990 kr</p>
                            <select class="ticket-select-menu">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="ticket-row3">
                            <p>Eldri borgarar/ öryrkjar</p>
                            <p>1200 kr</p>
                            <select class="ticket-select-menu">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <div class="ticket-row4">
                            <p>Fríðindaklúbbur</p>
                            <p>1200 kr</p>
                            <select class="ticket-select-menu">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </li>
                </ul>
                <div class="buy-ticket">
                    <p>Samtals 1500 kr.</p>
                    <div class="button-container">
                        <a href="#"><img src="images/icons/buy-btn-ticket.svg"><button class="buy-btn">Kaupa miða</button></a> 
                    </div>
                </div>
            </div>
        </section>                
    </section>
    `,
    comingSoonTemplate: `
    <div class="comingsoon-filter">
        <h2>Væntanlegt</h2>
    <i class="fas fa-sliders-h"></i>
    </div>
    <section class="content-container">
     <!-- Cards úr javascript koma hér -->
    </section>
    `,
    aboutUsTemplate:`
    <section class="about-container">
        <div class="about-hero-img">
            <img src="images/hero.jpg">
            <div class="about-hero-text">
                <h1>SAMbíó</h1>
                <p>SAMbíó er kvikmyndasýningarhús sem stofnað var árið 1990 af Árna Samúelssyni.</p>
            </div> 
        </div>
        <div class="about-row1">
            <img src="images/quality.jpg">
            <div class="about-text">
                <h1>Gæði</h1>
                <p>Frá upphafi höfum við lagt gífurlega áherslu á upplifun bíómynda, sætin okkar eru með þeim bestu sem og skjárinn og hljóðið.</p>
            </div>
        </div>
        <div class="about-row2">
            <div class="about-text">
                <h1>Starfsmenn</h1>
                <p>Skemmtilegt starfsfólk með skemmtilegt viðmót og fjölbreytta eiginleika gerir vinnustaðinn ávallt betri.</p>
            </div>
            <img src="images/employee.jpg">
        </div>
        <div class="about-row3">
            <img src="images/services.jpg">
            <div class="about-text">
                <h1>Þjónusta</h1>
                <p>Aðgengi að þjónustu af öllu tagi er mikilvæg og þessvegna erum við alltaf með augu og eyru opin gagnvart öllu.</p>
            </div>
        </div>
        <div class="about-row4">
            <div class="about-text">
                <h1>Teymið</h1>
                <p>Hjá SAMbíóunum vinnur þéttur hópur af fólki sem vinnur saman til þess að komast lengra.</p>
            </div>
            <img src="images/team.jpg">
        </div>
    </section>
    <div class="mapouter"><div class="gmap_canvas"><iframe width="1448" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=samb%C3%AD%C3%B3%20%C3%A1lfabakka&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.crocothemes.net"></a></div><style>.mapouter{text-align:right;height:450px;width:1448px;}.gmap_canvas {overflow:hidden;background:none!important;height:450px;width:1448px;}</style></div>
    `
}

