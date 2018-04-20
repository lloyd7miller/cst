function largeDisplay() {
    if(window.screen.width >= 400){    
        document.write('\
        <!DOCTYPE html>\
        <html>\
        <head>\
            <meta charset="utf-8" />\
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>\
            <link rel="icon" href="./mic-icon-small-nobkrg.png"/>\
            <title>CST</title>\
            <link rel="stylesheet" href="index.css" />\
            <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet"/>\
            <script src="main.js"></script>\
        </head>\
        <body>\
            <div class="wrapper">\
                <div class="container">\
                    <h1>Casual Sports Talk</h1>\
                    <h2>Facts. Fantasy. Opinions.</h2>\
        \
                    <p>*this should be hidden*</p>\
                    \
                    <span id="blog-button" onclick="location.href=\'http://casualsportstalk.blogspot.ca/\'">\
                        <h3><a href="http://casualsportstalk.blogspot.ca/">Click here to go to our blog</a></h3>\
                    </span>\
        \
                    <h3 id="details">Listen to our latest podcast:</h3>\
        \
        \
                    <div class="social">\
                        <div class="soundcloud">\
                            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/402249960&amp;color=%2301a093&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"></iframe>\
                        </div>\
                        <div class="fb">\
                            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCasualSportsTalk&width=122&layout=button&action=like&size=large&show_faces=true&share=true&height=65&appId"\
                                width="122" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>\
                        </div>\
                        <div class="twitter">\
                            <a href="https://twitter.com/CasualSportsPod?ref_src=twsrc%5Etfw" class="twitter-follow-button"data-size="large" data-show-count="false">Follow @CasualSportsPod</a>\
                            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>\
                        </div>\
                        <div class="snap">\
                            <iframe src="https://scbutton.com/src/button.html?username=casualsportspod&invert=false&large=true" frameborder="0" scrolling="no" height="28px" width="160.703125px"></iframe>\
                        </div>\
                    </div>\
                </div>\
                \
                <footer>\
                    <p>Photo by Binyamin Mellish from <a href="https://www.pexels.com/photo/man-holding-football-and-football-uniform-in-black-background-140039/">Pexels</a></p>\
                </footer>\
            </div>\
        </body>\
        </html>\
        ');
    }
    
}    
