'use strict'

import '../css/index.css'

import Phaser from 'phaser'
import ctx from './context'
import create from './create.js'
import preload from './preload.js'
import update from './update.js'

function init() {
  const canvas = document.body.getElementsByTagName("canvas").item(0)
  if (canvas != null) canvas.remove()

  const config = {
    type   : Phaser.AUTO,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 100 }
      }
    },
    scene: { preload: preload(ctx), create: create(ctx), update: update(ctx) }
  }

  const game = new Phaser.Game(config)
}

function teardown() { }

if (module.hot) {
  module.hot.dispose(teardown)
  module.hot.accept(init)
}

init()
