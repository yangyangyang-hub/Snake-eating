function Food (gameSnake) {
    var that = this
    do {
        this.row = parseInt(Math.random() * gameSnake.row)
        this.col = parseInt(Math.random() * gameSnake.col)
    } while((function(){
        for (var i of gameSnake.snake.body) {
            if (i.row == that.row && i.col == that.col) {
                return true
            }
        }
        return false    
    })())
}

Food.prototype.render = function () {
    game.setHTML(this.row, this.col, "❤")
}