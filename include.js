//onclick = "openArticles()"

document.write('\
    <div id="mySidenav" class="sidenav">\
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>\
        <a href="index.html">Home</a>\
        <a href="https://soundcloud.com/user-770681286">Podcast</a>\
        <a href="javascript:void(0)" onclick="location.href=\'https://www.medium.com/@casualsportstalk\'">Articles</a>\
        <ul id="articles" style="display: none;">\
            <a href="by_sport.html">\
                <li>By Sport</li>\
            </a>\
            <a href="betting.html">\
                <li>Betting</li>\
            </a>\
            <a href="fantasy.html">\
                <li>Fantasy</li>\
            </a>\
        </ul>\
        <a href="https://twitter.com/CasualSportsPod">Twitter</a>\
        <a href="https://www.facebook.com/CasualSportsTalk/">Facebook</a>\
        <a href="https://www.instagram.com/casualsportstalk/">Instagram</a>\
        <a href="https://invoicesherpa.com">Our Sponsor</a>\
        <a href="contact.html">Contact</a>\
    </div>\
\
    <!-- CONTAINER -->\
    <div id="main" class="container">\
        <!-- HEADER -->\
        <header class="flex-container">\
            <div class="menu-button" style="flex-grow: 1;" onclick="openNav()">\
                <span id="three-bars">\
                    <div></div>\
                    <div></div>\
                    <div></div>\
                </span>\
            </div>\
            <div id="filler"></div>\
\
            <div id="cst-top-logo">\
                <a href="index.html">\
                    <img src="./img/cst-logo-long.jpg" alt="CST logo">\
                </a>\
            </div>\
\
            <!-- ////////////////// vvv these items will only show in larger displays ///////////////////// -->\
            <div onclick="location.href=\'index.html\';" class="flex-container-item">\
                Home\
            </div>\
            <div onclick="location.href=\'https://soundcloud.com/user-770681286\';" class="flex-container-item" style="flex-grow: 1;">\
                Podcast\
            </div>\
            <div onclick="location.href=\'https://medium.com/@casualsportstalk\'" class="flex-container-item" style="flex-grow: 1;">\
                Articles\
            </div>\
            <div onclick="location.href=\'https://twitter.com/CasualSportsPod\'" class="flex-container-item" style="flex-grow: 1;">\
                Twitter\
            </div>\
            <div onclick="location.href=\'https://www.facebook.com/CasualSportsTalk/\'" class="flex-container-item" style="flex-grow: 1;">\
                Facebook\
            </div>\
            <div onclick="location.href=\'https://www.instagram.com/casualsportstalk/\'" class="flex-container-item" style="flex-grow: 1;">\
                Instagram\
            </div>\
            <div onclick="location.href=\'https://invoicesherpa.com\'" class="flex-container-item" style="flex-grow: 4;">\
                Our Sponsor\
            </div>\
            <!-- <div class="flex-container-item" style="flex-grow: 1;">\
                    About us\
                </div> -->\
            <div onclick="location.href=\'contact.html\'" class="flex-container-item">\
                Contact\
            </div>\
            <!-- ////////////////// ^^^ these items will only show in larger displays ///////////////////// -->\
\
            <div id="filler"></div>\
        </header>\
    \
\
');
