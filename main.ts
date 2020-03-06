scene.onHitTile(SpriteKind.Player, 13, function (sprite2) {
    level += 1
    tileMaps()
    level2()
})
function sprite () {
    spaceShip = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . f f . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . f d d f . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . . . . . . . . . . . 
. . . 2 4 2 . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . 2 4 2 . . . . . . . 
. . . 1 5 1 . . . . . . . . . . . . . f d d d d f . . . . . . . . . . . . . 1 5 1 . . . . . . . 
. . . 1 5 1 . . . . . . . . . . . . . f d b b d f . . . . . . . . . . . . . 1 5 1 . . . . . . . 
. . . . 1 2 4 2 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 2 4 2 1 . . . . . . . . 
. . . . 1 1 5 1 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 1 5 1 1 . . . . . . . . 
. . . . 1 1 5 1 . . . . . . . . . . f d d b b d d f . . . . . . . . . . 1 5 1 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . . f d d b b d d f . . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . . f d b b b b d f . . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . f d d b b b b d d f . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . . f d d b b b b d d f . . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . f d d d b b b b d d d f . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . 1 . . . . . . . . . f d d d d d d d d d d f . . . . . . . . . 1 . 1 . . . . . . . . 
. . . . 1 . f f . . . . . . . . f d d d d d d d d d d f . . . . . . . . f f . 1 . . . . . . . . 
. . . . 1 f d d f f f f f . . . f d d d d 9 9 d d d d f . . . f f f f f d d f 1 . . . . . . . . 
. . . . 1 . f d d d a d d f f f f d d d d 9 9 d d d d f f f f d d a d d d f . 1 . . . . . . . . 
. . . . 1 . . f f f f f f f f f d d d d d d d d d d d d f f f f f f f f f . . 1 . . . . . . . . 
. . . . 1 . f d d d d d d d d f d d d d d d d d d d d d f d d d d d d d d f . 1 . . . . . . . . 
. . . . 1 f d d d f a f a f a f f d d d d d d d d d d f f a f a f a f d d d f 1 . . . . . . . . 
. . . . 1 f d d d f a f a f a f f d d f f d d f f d d f f a f a f a f d d d f 1 . . . . . . . . 
. . . . . . f d d d d d d d d f f f f a a f f a a f f f f d d d d d d d d f . . . . . . . . . . 
. . . . . . . f f f f f f f f f d d f f f a a f f f d d f f f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f f f a a a a a a f f f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . f f f f f f f f . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f d d d f . . . . . . . . . . f d d d f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . . . . f f f f f . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    // makes spaceShip go up no matter what
    spaceShip.ay = -90
    // Allows you to move side to side
    controller.moveSprite(spaceShip, 500, -2500)
    spaceShip.setPosition(80, 4000)
}
function level2 () {
    if (level == 1) {
        // makes spaceShip go up no matter what
        spaceShip.ay = -300
    }
    if (level == 1) {
        secondMessage()
    }
}
function secondMessage () {
    game.splash("// Transmission Begins //")
    game.splash("We finally got in contact ", "with HQ")
    game.splash("They need a Business", "Package transported ASAP")
    game.splash("Get to Planet Johnson", "In the Tennessee system")
    game.splash("// Transmission Ends //")
}
function lifeSystem () {
    info.setLife(10)
}
function camera () {
    scene.cameraFollowSprite(spaceShip)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite2, otherSprite) {
    pause(175)
    info.changeScoreBy(-1)
    pause(175)
    info.changeLifeBy(-1)
    asteroidProjectile.destroy()
    effects.clearParticles(spaceShip)
    scene.cameraShake(4, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    spriteBullet()
})
function tileMaps () {
    list = [img`
d d d d d d d d d f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 2 f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 2 f f f f 
f f f f f 2 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 2 2 f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f 2 f f f 2 f f f f 
f 2 f f 2 f f f f f 
f 2 f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f 2 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f 2 2 f f f f 
f f f f f f f f f f 
2 f f f f 2 f f f f 
2 f f f 2 f f f f f 
f 2 f 2 f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f 2 f f f f f 2 f f 
f f 2 2 2 f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f 2 
f f f 2 f f f f f f 
f f 2 2 f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f 2 2 f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f 2 f f f f f 
f 2 f f f f f f f f 
f 2 f f f f 2 f f f 
f 2 f f f 2 2 f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f 2 f 
f f f f f f f 2 2 f 
f f f f f f f 2 f f 
f 2 2 2 2 2 2 2 2 2 
f f f f 2 f f f f f 
2 2 f f 2 f f f f f 
f 2 f f 2 2 f f f f 
f f 2 f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 2 2 f f f 
f 2 2 2 f 2 f f f f 
2 f 2 2 2 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f 2 2 f f f f f 
f f f 2 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f 2 f f 
f f f f f 2 f f 2 f 
f f f f f 2 f f f 2 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f 2 f f 
f f f 2 f f f 2 f f 
f f f 2 f f f f 2 f 
f f 2 f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f 2 f f f f 2 2 
f 2 2 f f f f f 2 2 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 2 f f 
f f 2 f f f f f 2 2 
f f 2 f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f 2 f f 
f 2 f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f 2 2 f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f 2 2 f f f f f f 
f f 2 f f f f f f f 
f 2 f f f f f f f f 
f 2 f f f f f f f f 
2 f f f f f f f f f 
2 f f f f f f f f f 
2 f f f f f f f f f 
2 2 f f f f f f f f 
f f 2 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f 2 f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
`, img`
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 2 f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 2 f f f f 
f f f f f 2 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f 2 f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f 2 f f f f 
f 2 f f 2 f f f f f 
f 2 f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f 2 2 f f f f 
f f f f f f f f f f 
2 f f f f 2 f f f f 
2 f f f 2 f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f 2 f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f 2 
f f f f f f f f f f 
f f 2 f f 2 f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f 2 f f f f f f f f 
f f 2 f f f f f f f 
f f 2 f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f 2 f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f f f f f f f f 
2 f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f 2 f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f 2 f f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f f 2 f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f 2 f f f f f 
f f f f f f f f f f 
f f f f f f f f f 2 
f f f f f f f f 2 2 
f f f f f f f f 2 2 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f 2 f f 
f f f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f 2 f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f 2 f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
f f f f f f f f f f 
`]
    scene.setTileMap(list[level])
    tiles.placeOnTile(spaceShip, tiles.getTileLocation(3, 248))
}
function startingText () {
    scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f 1 f f 2 f f f f f f f f f f f f f f f f f f 2 f f 1 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b c c c 4 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 4 c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c c c c a c c c c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a a f f a f f a a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c f 4 4 4 4 4 f c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c c f 4 4 4 4 4 f c c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a f 4 4 4 4 4 f a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c a c c c c c a c c c c a a f f f f f a a c c c c c c c c c a c c c c c a c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b c c f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b c c 4 f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b f f b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f 4 b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 5 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    game.splash("// Transmission Begins //", "Welcome Recruit.")
    game.splash("FBLA HQ has urgently ", "requested for assistance.")
    game.splash("We will identify and", "provide details on the way.")
    game.splash("Good Luck Recruit. We are", "all counting on you.")
    game.splash("// Transmission Ends //")
}
function spriteBullet () {
	
}
info.onLifeZero(function () {
    game.over(false)
})
let starProjectile: Sprite = null
let shootingStar: Image = null
let gap2 = 0
let asteroid2: Image = null
let asteroid1: Image = null
let gap = 0
let list: Image[] = []
let asteroidProjectile: Sprite = null
let spaceShip: Sprite = null
let level = 0
level = 0
scene.setTile(13, img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, true)
startingText()
tileMaps()
sprite()
camera()
lifeSystem()
game.onUpdateInterval(1500, function () {
    if (level == 0) {
        info.changeScoreBy(1)
        gap = Math.randomRange(1, 3)
        if (gap == 0) {
            asteroid1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b b b b b b . . . 
. . . . b b b b b b b b b . . . 
. . . b b b b b c b b b b b . . 
. . b b b b b c b b b b b b . . 
. b b b b b b b b b b b b b b . 
. b b b c b b b b b b b b b b . 
. b b b c b b b b c b b b b b . 
. b b b c b b b b b b b b b b . 
. . b b b b b c b b b b b b b b 
. . b b b b b c c b b b b b b b 
. . . b b b b b b b b b b b b b 
. . . . b b b b b b b b b b b . 
. . . . . . . . b b b b b b b . 
. . . . . . . . . b b b b b b . 
`
            asteroid2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . 
. . . . . . b b b b b b b b . . 
. . . . . b b b b b b b b b . . 
. . . . b b c c b b b b b b . . 
. . . b b c c b b b b b b b . . 
. . . b c c b b b b b b b b . . 
. . . b c b b b b b b b b . . . 
. . . b c c b b b b b b . . . . 
. . . . b b c c c c b . . . . . 
. . . . . b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        } else if (gap == 1) {
            asteroid1 = img`
. . . . . . . . . . . . . . . . 
. . . b b . . . . . . . . . . . 
. . b b b b b b . . . . . . . . 
. . b b b b b b b b b . . . . . 
. . b b b b b b b c b . . . . . 
. . b b b b b c c c b . . . . . 
. . b b b b b c c c b . . . . . 
. b b b b b c b c c b b . . . . 
. b b b b b b b c c b b b . . . 
. b b c b b b b c b b b b . . . 
. b c c b b c c c b b b b . . . 
. b b b b b c c c c b b b . . . 
. b b b b b b c c c b b b . . . 
. . b b b b b b c c b b . . . . 
. . . b b b b . b b b . . . . . 
. . . . . . . . . . . . . . . . 
`
            asteroid2 = img`
. . . . . . . . . . . . . . . . 
. . . b b b b b b b b . . . . . 
. . b b b b b b b b b b . . . . 
. . b b b b b b b b b b b . . . 
. . b b b c b b b b b b b . . . 
. . b b c c c b b b b b b b . . 
. . b b b b c c c b b b b b b . 
. b b b c c c c c b b b c c b . 
. b b b b c c c b c c b b b b . 
. b b b b b c c c b b b b b b . 
. b b b b b b b b b b b b b . . 
. . b b b b c c b c b b b b . . 
. . b b b b b c c c b b b . . . 
. . . . . b b b b b b b . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        } else if (gap == 2) {
            asteroid1 = img`
. . . . b b b . . . . . . . . . 
. . . b b c b b b . . . . . . . 
. . b c c c c c c b b . . . . . 
. . b c c c b c c c b b . . . . 
. b c c c b b b c c c b . . . . 
b b c b b c c b c c c b . . . . 
b c c b c c c b b c c c b . . . 
b c b c b c c c c b c c c b . . 
b c b c b b c c c c b c c b . . 
b c c b c b b c c c c b c b . . 
b b b c b b b b c c c b c b . . 
b b b b c c c c b b b b c b . . 
. b b . b b b c c c c c c b . . 
. . . . . . b b b b b b b . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
            asteroid2 = img`
. . . . . . . . b b b b . . . . 
. . . . . b b b b b b b b b . . 
. . . . . b b b b b b b b b . . 
. . . . b b b b b b b b b b . . 
. . . b b b b b b b b b b b . . 
. . b b b b b b b b b b b . . . 
. b b b b b b b b b b b b . . . 
. b b b b c c b b b b b b b . . 
. b b b b c c b b b b f b b . . 
b b b b c c c c b b b b b b . . 
b b b b b b b b b b b . . . . . 
. b b b b b b b b b b . . . . . 
. . b b b b b b b b b . . . . . 
. . . b b b b b b b . . . . . . 
. . . . b b b b b . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        } else {
            asteroid1 = img`
. . . . . b b b b b b . . . . . 
. . b b b b b b b b b b b . . . 
. b b b b b b b b b b b b b . . 
. b b b b b c c b b b b b b . . 
. b b b b b c b c b b b b b . . 
. b b b b c c b c c b b b b . . 
. b b b b b c c c c b b b b . . 
. b b b b b b c c c c b b b . . 
. b b b b b b b b c c b b b . . 
. b b b b c b c b c c b b b . . 
. b b b b c c b b c c b b b . . 
. b b b b b b b b b b b b b . . 
. b b b b b b b b b b b b b . . 
. b b b b b b b b b b b b . . . 
. . . . b b b b b b b . . . . . 
. . . . . . . . . . . . . . . . 
`
            asteroid2 = img`
. . . . . . . . b b b b b . . . 
. . . b b b b b b b b b b b b . 
. . b b b b b c c c c c c c b . 
. b b c c c c b b b b b b c b b 
b b b b b b b b b b b b b c b b 
b b b b b b b b b b b b b c b b 
b b b b c c b b b b b b b c b . 
b b b b b c b c c c c c c c b . 
b b b c b b b c c b b b b b b . 
b b b b b c c c b b b b b b b . 
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b b . . 
b b b b b b b b b b b b b . . . 
. b b b b b b b b b b b . . . . 
. . . b b b b b b . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        }
        asteroidProjectile = sprites.createProjectileFromSide(asteroid1, 0, 25)
        asteroidProjectile.left = Math.randomRange(0, 110)
        asteroidProjectile = sprites.createProjectileFromSide(asteroid1, 0, 25)
        asteroidProjectile.right = Math.randomRange(0, 100)
    } else if (level == 1) {
        info.changeScoreBy(2)
        gap2 = Math.randomRange(1, 3)
        if (gap2 == 0) {
            shootingStar = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 5 5 . . . 
. . . 5 5 5 5 5 c 5 5 5 5 5 . . 
. . 5 5 5 5 5 c 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 c 5 5 5 5 5 . 
. 5 5 5 c 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 c 5 5 5 5 5 5 5 5 
. . 5 5 5 5 5 c c 5 5 5 5 5 5 5 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 
. . . . 5 5 5 5 5 5 5 5 5 5 5 . 
. . . . . . . . 5 5 5 5 5 5 5 . 
. . . . . . . . . 5 5 5 5 5 5 . 
`
        } else if (gap2 == 1) {
            shootingStar = img`
. . . . . . . . . . . . . . . . 
. . . 5 5 . . . . . . . . . . . 
. . 5 5 5 5 5 5 . . . . . . . . 
. . 5 5 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 c 5 . . . . . 
. . 5 5 5 5 5 c c c 5 . . . . . 
. . 5 5 5 5 5 c c c 5 . . . . . 
. 5 5 5 5 5 c 5 c c 5 5 . . . . 
. 5 5 5 5 5 5 5 c c 5 5 5 . . . 
. 5 5 c 5 5 5 5 c 5 5 5 5 . . . 
. 5 c c 5 5 c c c 5 5 5 5 . . . 
. 5 5 5 5 5 c c c c 5 5 5 . . . 
. 5 5 5 5 5 5 c c c 5 5 5 . . . 
. . 5 5 5 5 5 5 c c 5 5 . . . . 
. . . 5 5 5 5 . 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`
        } else if (gap2 == 2) {
            shootingStar = img`
. . . . 5 5 5 . . . . . . . . . 
. . . 5 5 c 5 5 5 . . . . . . . 
. . 5 c c c c c c 5 5 . . . . . 
. . 5 c c c 5 c c c 5 5 . . . . 
. 5 c c c 5 5 5 c c c 5 . . . . 
5 5 c 5 5 c c 5 c c c 5 . . . . 
5 c c 5 c c c 5 5 c c c 5 . . . 
5 c 5 5 5 c c c c 5 c c c 5 . . 
5 c 5 5 5 5 c c c c 5 c c 5 . . 
5 c c 5 c 5 5 c c c c 5 c 5 . . 
5 5 5 c 5 5 5 5 c c c 5 c 5 . . 
5 5 5 5 c c c c 5 5 5 5 c 5 . . 
. 5 5 . 5 5 5 c c c c c c 5 . . 
. . . . . . 5 5 5 5 5 5 5 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
        } else {
            shootingStar = img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 c c 5 5 5 5 5 5 . . 
. 5 5 5 5 5 c b c 5 5 5 5 5 . . 
. 5 5 5 5 c c b c c 5 5 5 5 . . 
. 5 5 5 5 5 c c c c 5 5 5 5 . . 
. 5 5 5 5 5 5 c c c c 5 5 5 . . 
. 5 5 5 5 5 5 5 5 c c 5 5 5 . . 
. 5 5 5 5 c 5 c 5 c c 5 5 5 . . 
. 5 5 5 5 c c 5 5 c c 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`
        }
        starProjectile = sprites.createProjectileFromSide(shootingStar, 0, 25)
        asteroidProjectile.left = Math.randomRange(0, 110)
    }
})
game.onUpdate(function () {
    spaceShip.setFlag(SpriteFlag.StayInScreen, true)
})
