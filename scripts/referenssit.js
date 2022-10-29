var lastVW = 0;
var imgheaders = ['<div class="imageHeader">1. Saunamökin uudisrakennus</div>',
                  '<div class="imageHeader">2. Savusauna- Tupa uudisrakennus</div>',
                  '<div class="imageHeader">3. Saunamökin uudisrakennus</div>',
                  '<div class="imageHeader">4. Saunamökin uudisrakennus</div>',
                  '<div class="imageHeader">5. Riiheen sauna ja PH saneeraus</div>'];

var imageElements = ['<img class="referenceImg" src="../media/referenssit/pienkohteet/1_saunamokin_uuudisrakennus.jpg" alt="1. Saunamökin uudisrakennus">',
                     '<img class="referenceImg" src="../media/referenssit/pienkohteet/2_savusauna_tupa_uudisrakennus.jpg" alt="2. Savusauna- Tupa uudisrakennus">',
                     '<img class="referenceImg" src="../media/referenssit/pienkohteet/3_saunamokin_uudisrakennus.jpg" alt="3. Saunamökin uudisrakennus">',
                     '<img class="referenceImg" src="../media/referenssit/pienkohteet/4_saunamokin_uudisrakennus.jpg" alt="4. Saunamökin uudisrakennus">',
                     '<img class="referenceImg" src="../media/referenssit/pienkohteet/5_riiheen_sauna_ja_PH_saneeraus.jpg" alt="5. Riiheen sauna ja PH saneeraus">'];

function setTimer() {
  setInterval(checkViewportSize, 1000);
}

function checkViewportSize() {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  if (vw == lastVW) {
    return 0;
  }
  /*
  var imgs = document.getElementsByClassName("referenceImg");
  var headers = document.getElementsByClassName("imageHeader");
  var arrayLength = imgs.length;
  if (vw < 1000) {
    
    for (var i = 0; i < arrayLength; i++) {
      imgs[i].style.width = "80%";
      imgs[i].style.maxWidth = "80%";
      headers[i].style.width = "80%";
      headers[i].style.maxWidth = "80%";
    }
  } else {
    for (var i = 0; i < arrayLength; i++) {
      imgs[i].style.width = "700px";
      imgs[i].style.maxWidth = "700px";
      headers[i].style.width = "700px";
      headers[i].style.maxWidth = "700px";
    }
  }
  */
  if (vw > 1600) {
    var newHtml = "";
    let arrayLength = imgheaders.length;
    for (var i = 0; i < arrayLength; i++) {
      if (i % 2 == 0) {
        newHtml += "<tr>";
      }
      newHtml += "<td>" + imgheaders[i] + "</td>";
      if ((i + 1) % 2 == 0) {
        newHtml += "</tr><tr>";
        for (var j = i - 1; j < i + 1; j++) {
          newHtml += "<td>" + imageElements[j] + "</td>";

        } 
        newHtml += "</tr>"; 
      }
    }
    if (arrayLength % 2 != 0) {
      newHtml += "</tr><tr>";      
      newHtml += "<td>" + imageElements[arrayLength - 1] + "</td></tr>";
    }
    
    document.getElementById("imageTable").innerHTML = newHtml;
  } 
  else {
    var newHtml = "";
    let arrayLength = imgheaders.length;
    for (var i = 0; i < arrayLength; i++) {
      newHtml += "<tr><td>" + imgheaders[i] + "</td>";
      newHtml += "</tr><tr>";      
      newHtml += "<td>" + imageElements[i] + "</td></tr>";
    }
    document.getElementById("imageTable").innerHTML = newHtml;
  }
  lastVW = vw;
  setModal()
}

function setModal() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var imgs = document.getElementsByClassName("referenceImg");
  console.log(imgs.length);
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  var arrayLength = imgs.length;
  for (var i = 0; i < arrayLength; i++) {
    imgs[i].onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
  }

}

