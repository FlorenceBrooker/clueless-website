var data = [];

var dataStr = "1.DeathNote<br>\
<br>\
Cher is a sweet, if somewhat dippy, blonde teenager who lives with her father in Beverly Hills, California. Cher often speaks in Valley Girl slang (including new idioms coined by the writers of Clueless). Her role in the film and series is that of the central protagonist; many of the plot lines revolve around, or involve, Cher in some way, although sub-plots, particularly in the TV series, allow the focus to shift from her toward others and back<br>\
<br>\
<br>\
2.Travis<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
3.Christian<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
4.Murray<br>\
<br>\
American Movie<br>\
<br>\
<br>\
5.Tai<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
6.Dion<br>\
<br>\
American Movie<br>\
7.Dion<br>\
<br>\
American Movie<br>\
8.Mel<br>\
<br>\
American Movie<br>\
9.Dion<br>\
<br>\
American Movie<br>\
10.Dion<br>\
<br>\
American Movie<br>\
<br>\
<br>\
11.Josh<br>\
<br>\
Josh is the son of Mel's ex-wife, and thus Cher's former step-brother. He is actually from Seattle, Washington, but goes to college in L.A. He has an apartment of his own near school, but often returns to the Horowitz home, particularly when he is not on good terms with his mother's current husband. He also relishes any opportunity to work alongside Mel, in order to pick up skills for his potential career in environmental law. Mel is clearly close to Josh, stating to Cher in the film, 'You divorce wives, not children',  suggesting he thinks of Josh as a son.<br>\
"

var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

