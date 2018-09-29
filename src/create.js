'use strict'

export default function create () {
  const logo = this.add.image(350, 0, 'logo')

  this.tweens.add({
    targets: logo,
    y: 355,
    duration: 1200,
    ease: 'Power1'
  })
}
