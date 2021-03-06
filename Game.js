function Game() {
    this.row = 20;       // 行数 列数
    this.col = 20;
    this.init()     // 初始化节点
    this.snake = new Snake()        // 实例化蛇
    this.food = new Food(this)
    this.start();
    this.bindEvent();
}

Game.prototype.init = function () {
    this.dom = document.createElement("table");
    var tr, td;
    for (var i = 0; i < this.row; i++) {
        tr = document.createElement("tr")
        for (var j = 0; j < this.col; j++) {
            td = document.createElement('td')
            tr.appendChild(td)
        }


        this.dom.appendChild(tr)
    }
    document.getElementById("app").appendChild(this.dom)
}

Game.prototype.setColor = function (row, col, color) {
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.background = color
}
Game.prototype.setHTML = function(row, col, html) {
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].innerHTML = html
}

Game.prototype.clear = function () {
    for (var i = 0; i < this.row; i++) {
        for (var j = 0; j < this.col; j++) {
            this.dom.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'white'
            this.dom.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].innerHTML = ''
        }
    }
}

Game.prototype.bindEvent = function () {
    var that = this
    document.onkeyup = function (event) {
        switch (event.keyCode) {
            case 37:
                if (that.snake.direction == 'R') return
                that.snake.changDirection('L')
                break
            case 38:
                if (that.snake.direction == 'D') return
                that.snake.changDirection('T')
                break
            case 39:
                if (that.snake.direction == 'L') return
                that.snake.changDirection('R')
                break
            case 40:
                if (that.snake.direction == 'T') return
                that.snake.changDirection('D')
                break
        }
    }
}

Game.prototype.start = function () {
    this.timer = setInterval(function () {
        game.clear()
        game.snake.update()
        game.snake.render()
        game.food.render()
    }, 1000)
}