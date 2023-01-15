import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const playerKey = "videoplayer-current-time";
const iframe = document.querySelector('iframe');   
const player = new Player(iframe);
const lodashTime = 1000;



player.on('timeupdate', throttle( e => {
localStorage.setItem(playerKey, e.seconds)
},lodashTime));

    
player.setCurrentTime(localStorage.getItem(playerKey) || 0)
.catch(function (error) {
console.error(error)
});
