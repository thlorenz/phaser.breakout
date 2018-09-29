'use strict'

import Phaser from 'phaser'
import create from './create.js'
import logoURL from '../assets/logo.png'

function preload () {
  this.load.image('logo', logoURL);
}

function init() {
  const canvas = document.body.getElementsByTagName("canvas").item(0)
  if (canvas != null) canvas.remove()

  const config = {
    type   : Phaser.AUTO,
    parent : 'phaser-example',
    width  : 600,
    height : 480,
    scene  : { preload, create }
  }

  const game = new Phaser.Game(config)
}

function teardown() { }

if (module.hot) {
  module.hot.dispose(teardown)
  module.hot.accept(init)
}

init()
