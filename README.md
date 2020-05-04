# Front-End Test

# Debrief
#### Missing Features
* Image Lazy Loading
* Remove Button functionality 
* Select button functionality
* Unit tests (Normally I closely follow TDD, but given the short timeframe, and that I was learning vue.js as I went, learning the test framework wasn't a priority)
* css hover style

#### Issues
* Padding Between items is inconsistent
* Padding in header could be improved
* Images who's original aspect ratio wasn't 16:9 appear stretched
* Items with missing image appear broken, should be excluded



## Instructions
* Use Vue.js to create a responsive image gallery
* Use any plugins/packages that you need
* Feel free to choose your project/components folder structure
* Once you finish it, please push it to Github and provide us the URL

## Let's get started
* Use Open Sans from Google Fonts for the entire page

## Header/Navigation
* Create a navigation:<br>
    * About (/)
    * Gallery (/gallery)
* Add a fixed 2-color 45° gradient background color

## Gallery
* Load the JSON data (Vue-x recommended)<br>
/item-list.json
* List each item in rows
    * For viewport >= 1200px, have 4 items per row.
    * For viewport less than 576px, have 1 item per row
* Add a lazy load for the images

## Gallery item
* Try to reproduce item style like concept (public/img/item-sample.png)
* Items must have a 16/9 aspect ratio
* The images are available under the public/img folder
* Use Font Awesome icons<br>
   - Select: check-circle
   - Delete: times-circle
                

## Functionalities (VueX recommended)
* Use a getter to display the total items
* Add functionality on the Remove button to remove item from list (No AJAX necessary)
* Add functionality on Select/Unselect button:
    * On active state, entire item component should be 50% transparent
    * On inactive state, entire item component should be opaque

## Bonus
* Add 5 Jest Unit tests
* Add CSS transitions to any (or all) hover state


# Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run tests
```
npm run test
```
