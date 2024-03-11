


function searchItems() {
  let items = document.getElementById("search").value;
  fetch(
    "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=" +
      items
  )
    .then(function (value) {
      return value.json();
    })
    .then(function (value) {
      displayinfo(value);
    });
}

function displayinfo(data) {
  let res = data.query.search.map(function (va) {
    return `<div class="item">
        <h3 id="title">${va.title}</h3>
        <p>${va.snippet}</p></div>`;
  })

  document.getElementById("result").innerHTML = res.join("");
}
