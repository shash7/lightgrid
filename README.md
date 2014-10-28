# Lightgrid

### Version 2.0.0

[shash7.github.com/lightgrid](http://shash7.github.com/lightgrid)


A simple no-brainer fluid css grid system to use in your project.
It's aim is to remove the clutter and provide a simple but fluid grid.
This grid borrows heavily from 1140px grid system by andy taylor and boostrap framework's grid system.

It is designed to be as small as possible. It is made to be integrated in your projects.

Lightgrid uses a 12 column grid. To create a simple layout, create a .row and name classnames as col-1, col-2, etc inside it.


You can also offset a div to leave space on the left side. To do that, use 'offset-yourValue' as a class name.
Eg: div class='col-6 offset-2'

Adding .limit to .row class will limit the max width of .row to 1440px.

For more information, refer to the index.html provided in the repo.

###What's new
- Almost a whole rewrite of the library
- Added less css support
- Updated to reflect the latest normalize.css changes
- Improved typography
- Removed the need to add .last class for the lsat column
