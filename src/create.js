export default ctx => function create() {
  const ball = this.physics.add.image(50, 50, 'ball')
  ctx.set('sprite:ball', ball)
  ball
    .setVelocity(350, 350)
    .setBounce(1, 1)
    .setCollideWorldBounds(true)
}
