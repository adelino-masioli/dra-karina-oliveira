function toggleMode() {
  const html = document.documentElement;

  html.classList.toggle("light");

  const img = document.querySelector("#profile--logo");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/images/logo-white.svg");
  } else {
    img.setAttribute("src", "../assets/images/logo-color.svg");
  }
}

function download() {
  if (document.documentElement.classList.contains("light")) {
    var url = "../download/dra-karina-oliveira-qr-code-pink.pdf";
  } else {
    var url = (url = "../download/dra-karina-oliveira-qr-code-back.pdf");
  }
  var fileName = "dra-karina-oliveira-qr-code.pdf";

  axios({
    url: url,
    method: "GET",
    responseType: "blob",
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
  });
}