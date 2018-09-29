'use strict'

import Phaser from 'phaser'
import create from './create.js'

function preload () {
  this.load.image('logo', '../assets/logo.png');
}

function init() {
  const canvas = document.body.getElementsByTagName("canvas").item(0)
  if (canvas != null) canvas.remove()

  const config = {
    type   : Phaser.AUTO,
    parent : 'phaser-example',
    width  : 800,
    height : 480,
    scene  : { preload, create }
  }

  const game = new Phaser.Game(config)
}

if (module.hot) {
  module.hot.accept(init)
}
init()
