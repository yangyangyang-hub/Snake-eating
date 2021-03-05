function Snake () {
    this.body = [
        {"row": 3, "col": 5 },
        {"row": 3, "col": 4 },
        {"row": 3, "col": 3 },
        {"row": 3, "col": 2 },
    ];
    this.direction ="R";
    this.willDirection ='R'
}

Snake.prototype.render = function() {
    game.setColor(this.body[0].row,this.body[0].col, 'pink')
    ;
    for(var i=1; i < this.body.length; i++) {
        game.setColor(this.body[i].row, this.body[i].col, 'cyan')
    }
}

Snake.prototype.changDirection = function(d) {
    this.willDirection = d
}

Snake.prototype.update =  function () {
    this.direction = this.willDirection
    switch (this.direction) {
        case "R":
            this.body.unshift({"row": this.body[0].row, "col": this.body[0].col + 1 });
            break;
        case "D":
            this.body.unshift({"row": this.body[0].row + 1, "col": this.body[0].col});
            break;
        case "L":
            this.body.unshift({"row": this.body[0].row , "col": this.body[0].col - 1});
            break;
        case "T":
            this.body.unshift({"row": this.body[0].row - 1, "col": this.body[0].col});
            break;

    }
    this.body.pop()
    
}
