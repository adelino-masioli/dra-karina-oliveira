function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile--logo");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/images/logo-color.svg");
  } else {
    img.setAttribute("src", "../assets/images/logo-white.svg");
  }
}


function DownloadFile() {
  //Set the File URL.
  
  if (document.documentElement.classList.contains("light")) {
    var url = "../download/dra-karina-oliveira-qr-code-pink.pdf";
  }else {
    var url = url = "../download/dra-karina-oliveira-qr-code-back.pdf";
  }
  var fileName = "dra-karina-oliveira-qr-code.pdf";

  //Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
      //Convert the Byte Data to BLOB object.
      var blob = new Blob([req.response], { type: "application/octetstream" });

      //Check the Browser type and download the File.
      var isIE = false || !!document.documentMode;
      if (isIE) {
          window.navigator.msSaveBlob(blob, fileName);
      } else {
          var url = window.URL || window.webkitURL;
          link = url.createObjectURL(blob);
          var a = document.createElement("a");
          a.setAttribute("download", fileName);
          a.setAttribute("href", link);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
      }
  };
  req.send();
};