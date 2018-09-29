import Phaser from 'phaser'
import ballURL from '../img/ball.png'

export default ctx => function preload() {
  this.load.image('ball', ballURL)
}
