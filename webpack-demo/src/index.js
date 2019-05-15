
import _ from 'lodash';
import './index.css'
import print from './print.js'
import mayImage from './Truck.png'

function component() {
    let element = document.createElement('div');
    
    let button = document.createElement('button');

    button.innerHTML = 'Click me and check the console!'


    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    let image =  new Image();
    
    image.src = mayImage

    button.onclick = print

    element.appendChild(button)

    element.appendChild(image)
  
    return element;
  }
  
  document.body.appendChild(component());