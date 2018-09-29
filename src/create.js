export default ctx => function create() {
  const ball = this.physics.add.image(50, 50, 'ball')
  ctx.set('physics:ball', ball)
  ball
    .setVelocity(350, 350)
    .setBounce(1, 1)
    .setCollideWorldBounds(true)

  // API changed drastically from v2 to v3 which is super annoying, so
  // hardcoding dimensions for now
  const { width, height } = { width: 1000, height: 700 } 
  ctx.set(
      'sprite:paddle'
    , this.add.sprite(width * 0.5, height - 5, 'paddle')
  )
}
