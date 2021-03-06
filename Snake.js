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

    if(this.body[0].col >game.col-1 || this.body[0].row > game.row - 1 || this.body[0].col < 0 || this.body[0].row < 0) {
        alert('结束游戏')
        this.body.shift()
        clearInterval(game.timer)
    }
    for (var i = 1; i< this.body.length; i++) {
        if (this.body[0].col == this.body[i].col && this.body[0].row == this.body[i].row) {
            alert('结束游戏')
            this.body.shift()
            clearInterval(game.timer)
        }
    }

    if (this.body[0].row == game.food.row &&this.body[0].col == game.food.col) {
        game.clear()
        game.food = new Food(game)
        game.f = 0
        game.score++
    } else {
        this.body.pop()
    }
    
    
}
