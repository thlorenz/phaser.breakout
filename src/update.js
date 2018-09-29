export default ctx => function update() {
  const ball = ctx.get('sprite:ball')
  ball.x += 1
  ball.y += 1
}
