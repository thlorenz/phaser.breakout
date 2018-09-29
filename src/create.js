export default ctx => function create() {
  const ball = this.add.sprite(50, 50, 'ball')
  ctx.set('sprite:ball', ball)
}
