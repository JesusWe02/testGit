const URL = "https://jsonplaceholder.typicode.com/users";
let users = [];

$(document).ready(function () {
  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    //users = data;
    createUsers(data);
    console.log(data)
  };
  fetchData();

  /*
  fetch(URL)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  */

  /*
  $.ajax({
    url: URL,
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
    error: function (textStatus, errorThrown) {
      console.log("Error:", textStatus, errorThrown);
    },
  });
  */

  /*
  const xhr = new XMLHttpRequest();
  xhr.open("GET", URL, true);
  xhr.onreadystatechange = function(){ 
    if(xhr.readyState === XMLHttpRequest.DONE){
      if(xhr.status === 200){
        const data = JSON.parse(xhr.responseText)
        console.log(data)
      } else {
        console.error("Error:", xhr.statusText)
      }
    }
  }
  xhr.send();
  */

  $("#myButton").click(function () {
    $("#myText").text("Texto cambiado desde el DOM");
    $("#myText").css("color", "red");
  });

  $("#container").append("<p>Creado desde el DOM</p>");

  $("#buttonAlert").click(function () {
    alert("Button Clickeado");
    $("#slideUp").slideUp();
  });

  let newDiv = $("<div></div>").addClass("newDiv");
  let newText = $("<p></p>").text("Parrafo creado desde el DOM");

  newDiv.append(newText);
  $("#container").after(newDiv);
});

function createUsers(users) {
  let newUl = $("<ul></ul>").addClass("ul-container");

  users.forEach((user) => {
    let newLi = $("<li></li>").text(user.address.geo.lat);
    newUl.append(newLi);
  });

  $("#container").append(newUl);
}
