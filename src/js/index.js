import _ from 'lodash';
import '../css/style.css';
import Icon from '../images/heart-red.png';
import Data from '../data.xml';

const component = () => {
    const element = document.createElement('div');
    const arr = ['Hello', 'webpack'];
    element.className = 'hello';
    element.innerHTML = _.join(arr, ' ');

    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const br = document.createElement('br');
    element.appendChild(br);

    const myI = document.createElement('i');
    myI.className = 'icon ion-alert';

    element.appendChild(myI);

    return element;
}
console.log(Data)

document.body.appendChild(component());