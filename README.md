# Tic Tac Toe

This is a simple Tic Tac Toe game built using HTML, CSS, and Javascript.  It is the [Tic Tac Toe Project](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/lessons/tic-tac-toe-javascript) from [The Odin Project's](https://www.theodinproject.com/) [Javascript Course](https://www.theodinproject.com/paths/full-stack-ruby-on-rails/courses/javascript/).

The javascript was organized using the Module and Factory patterns.   

- The EventHandler object takes events (user clicks, form submission) from the page and forwards them to the Game object. 
- The Game object runs the game logic. 
- The GameBoard object stores the board and determines if a winner/tie is present.
- The player objects store player names and marks.
- The DisplayUpdater object is used by the Game object to update the display. 

See it live [here.](https://esteban90-dev.github.io/tic-tac-toe-js/)