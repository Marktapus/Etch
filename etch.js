function createGrid(x) {
    for(let rows = 0; rows < x; rows++) {
    for(let columns = 0; columns < x; columns++) {
        $("#container").append("<div class='grid'></div>")
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

function refreshGrid(){
    var z = prompt("How many boxes per side?");
    createGrid(z);
};