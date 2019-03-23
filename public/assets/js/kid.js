$(function() {
  let whichPage = window.location.pathname.split("/");
  let whichKid = whichPage[2];
  var progressBars = [].slice.call(document.querySelectorAll(".progressBar"));
  progressBars.forEach(one => {
    var numberProStr = one.dataset.progress;
    var numberItStr = one.dataset.iterations;
    var proWidth = parseFloat(numberProStr / numberItStr).toFixed(2) * 100;
    var pos = 0;
    var timer = setInterval(function() {
      if (pos >= proWidth) {
        clearInterval(timer);
        one.style.width = proWidth + "%";
        setTimeout(function() {
          if (numberItStr === numberProStr) {
            one.classList.add("finished");
          }
        }, 1);
      } else {
        one.style.width = pos + "%";
        pos = pos + 0.5;
      }
    }, 8);
  });

  $.ajax("/api/kid/" + whichKid, {
    type: "GET"
  }).then(result => {
    console.log(result);
    $("#kidName").text(result.kid.name);
  });

  
});
