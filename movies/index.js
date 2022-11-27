const addMovie = () => {
  let newMovie = new Movie(
    $("#title").val(),
    $("#releaseYear").val(),
    undefined,
    $("#nationality").val(),
    $("#genre").val(),
    $("#director").val(),
    $("#producer").val(),
    $("#writer").val(),
    $("#language").val(),
    $("#platform").val(),
    $("#isMCU").val(),
    $("#mainCharacterName").val(),
    $("#distributor").val(),
    $("#picture").val()
  );
  // $("main").css("min-height", "400vh");
  $("#moviesContainer").append(`
  <div class="col-3">
      <div class="card" style="width: 18rem;" id="card1">
        <img src=${newMovie.picture} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${newMovie.title}</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Release Year: ${newMovie.releaseYear}
            </li>
            <li class="list-group-item">
              Genre: ${newMovie.genre}
            </li>
            <li class="list-group-item">
              Nationality: ${newMovie.nationality}
            </li>
            <li class="list-group-item">
              Director: ${newMovie.director}
            </li>
            <li class="list-group-item">
              Writer: ${newMovie.writer}
            </li>
            <li class="list-group-item">
              Language: ${newMovie.language}
            </li>
            <li class="list-group-item">
              Platform: ${newMovie.platform}
            </li>
            <li class="list-group-item">
              Main Character: ${newMovie.mainCharacterName}
            </li>
            <li class="list-group-item">
              Producer: ${newMovie.producer}
            </li>
            <li class="list-group-item">
              distributor: ${newMovie.distributor}
            </li>
            <li class="list-group-item">
              Is MCU?: ${newMovie.isMCU}
            </li>
          </ul>
        </div>
    </div>
  `);
};
