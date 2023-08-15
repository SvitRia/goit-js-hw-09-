
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(fnTime, 1000));
function fnTime(data){
    let time = data.seconds;
    localStorage.setItem('videoplayer-current-time', time)
    console.log(time);
}
const currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);
player.setCurrentTime(currentTime || 0)
//.then(function(seconds) {
    // seconds = the actual time that the player seeked to
//}).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });