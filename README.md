# Lightgrid

### Version 3.0.0

[shash7.github.com/lightgrid](http://shash7.github.com/lightgrid)


A simple no-brainer fluid css grid system to use in your project.
It's aim is to remove the clutter and provide a simple but fluid grid.
This grid borrows heavily from 1140px grid system by andy taylor and boostrap framework's grid system.

It is designed to be as small as possible. It is made to be integrated in your projects.
Best way to use it is via integrating the less files in your build system.

Lightgrid uses a 12 column grid. To create a simple layout, create a .row and name classnames as col-1, col-2, etc inside it.

You can also offset a div to leave space on the left side. To do that, use 'offset-yourValue' as a class name.
Eg: div class='col-6 offset-2'

Adding .limit to .row class will limit the max width of .row to 1440px.

For more information, refer to the index.html provided in the repo.

###3.0.0
- Major rewrite of the grid system
- More control over typography now. Can use ratios in typography now.
- Changes default font stack. Now header font is in georgia and body font is in tahoma
- Used latest normalize.css at the date of commit.
- Added a few mixins
- Other minor changes

###2.0.1
- Added .last class for edge cases
- Some minor changes

###2.0.0
- Almost a whole rewrite of the library
- Added less css support
- Updated to reflect the latest normalize.css changes
- Improved typography
- Removed the need to add .last class for the lsat column
