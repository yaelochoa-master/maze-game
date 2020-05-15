namespace SpriteKind {
    export const Key = SpriteKind.create()
    export const Door = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function SetBadGuy2 (x: number, y: number) {
    Bad_Guy_2 = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Enemy)
    Bad_Guy_2.setPosition(x * (16 + 8), y * 16 + 8)
    Bad_Guy_2.setVelocity(10, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Key, function (sprite, otherSprite) {
    Have_Key = 1
    otherSprite.destroy()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e e f . . . 
. . . f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f f d d f 1 4 d 4 f . . 
. . . f d d d e e f f f . . 
. . . f e 4 e d d 4 f . . . 
. . . f 3 3 e d d e f . . . 
. . f f 6 6 f e e f f f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`,img`
. . . . . . . . . . . . . . 
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f c 4 4 c c c f f f f . 
. f f f 4 4 f b f 4 4 f f . 
. . f c d d f 1 4 d 4 f f . 
. . . f d d d d 4 f f f . . 
. . . f e 4 4 4 e d d 4 . . 
. . . f 3 3 3 3 e d d e . . 
. . f f 6 6 6 6 f e e f . . 
. . f f f f f f f f f f . . 
. . . f f f . . . f f . . . 
`],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d 4 e f e . 
. f e f f b b b e d d 4 e . 
. e 4 f b 3 3 3 e d d e . . 
. . . f 6 6 6 6 f e e . . . 
. . . f f f f f f f . . . . 
. . . f f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. e f e 4 d d d d d f f . . 
. e 4 d d e b b b f f e f . 
. . e d d e 3 3 b e f 4 e . 
. . . e e f 6 6 6 6 f . . . 
. . . . f f f f f f f . . . 
. . . . . . . . f f f . . . 
`],
    200,
    true
    )
})
function SetBadGuy3 (x: number, y: number) {
    Bad_Guy_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . c c c c 6 . . . . . 
. . . . c c 6 7 7 5 5 6 6 . . . 
. . c c 6 6 6 6 7 5 5 7 c c . . 
. c 6 6 6 7 7 7 7 7 7 5 6 c c . 
. c 6 6 7 7 7 5 7 6 7 7 7 6 c c 
c 6 6 7 7 6 7 7 7 6 7 7 6 6 6 c 
c c 6 6 6 7 6 7 6 6 6 6 5 7 6 c 
c c c c 6 7 7 6 7 7 7 6 7 6 6 c 
. c c 6 6 6 6 c 6 6 6 6 6 c c c 
. c c 6 6 c 6 6 c 6 c 6 6 c c . 
. . c c f f 6 6 c f f c c f . . 
. . . . c f c c c f c f f . . . 
. . . . . 4 f f f c . e . . . . 
. . . . . . e e e . . 4 . . . . 
. . . . . . . e e . e . . . . . 
`, SpriteKind.Enemy)
    Bad_Guy_3.setPosition(x * (16 + 8), y * 16 + 8)
    Bad_Guy_3.setVelocity(10, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Door, function (sprite, otherSprite) {
    if (Have_Key == 1) {
        otherSprite.destroy()
    } else {
        Player_1.y += 8
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(sprite.vx * -1, sprite.vy * -1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Attack = 1
    animation.runImageAnimation(
    Player_1,
    [img`
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 e f f . 
. f f 4 4 f b f 4 4 e f f . 
. . f 4 d 4 1 f d d f f 5 5 
. . f f f 4 d d d d f . 5 5 
. . . f e e 4 4 4 e f 4 5 . 
. . . 4 d d e 3 3 3 f 4 4 . 
. . . e d d e 3 3 3 f . . . 
. . . f e e f 6 6 6 f . . . 
. . . . f f f f f f . . . . 
. . . . . f f f . . . . . . 
`,img`
. . . . f f f f f . f f f . 
. . . f f c c c c f f f f f 
. . f c c c c c c b f f f f 
. . f c c c c c c 3 c f f f 
. f c c c c c c c c 3 3 f . 
. f c c 4 c c c c c f f f . 
. f f e 4 4 c c c f f f f . 
. f f e 4 4 f b f 4 4 f f . 
5 5 f f d d f 1 4 d 4 f . . 
5 5 . f d d d d 4 f f f . . 
. 5 4 f e 4 4 4 e e f . . . 
. 4 4 f 3 3 3 e d d 4 . . . 
. . . f 3 3 3 e d d e . . . 
. . . f 6 6 6 f e e f . . . 
. . . . f f f f f f . . . . 
. . . . . . f f f . . . . . 
`,img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`],
    500,
    false
    )
    pause(1000)
    Attack = 0
})
function SetBadGuy1 (x: number, y: number) {
    Bad_Guy = sprites.create(img`
. . . . . . . . . . . . . . . . . . . c c . . . 
. . . . . . . . . . . . . . . c c c c 6 3 c . . 
. . . . . . . . . . . . . . c 6 3 3 3 3 6 c . . 
. . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c . 
. . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
. . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
. . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c 
. . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
. . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
. . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c 
. . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
. . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . . 
. . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
. . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
. . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
. . . . . . . . . c c c c c c c c c . . c c c . 
`, SpriteKind.Enemy)
    Bad_Guy.setPosition(x * (16 + 8), y * 16 + 8)
    Bad_Guy.setVelocity(10, 0)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Attack == 1) {
        otherSprite.destroy(effects.fire, 500)
    } else {
        game.over(false)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. f f 4 d 4 1 f d d c f . . 
. . f f f 4 d d d d f . . . 
. . 4 d d e 4 4 4 e f . . . 
. . e d d e 3 3 3 3 f . . . 
. . f e e f 6 6 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 c f f . 
. f f 4 4 f b f 4 4 f f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f e e d d d f . . . 
. . . f 4 d d e 4 e f . . . 
. . . f e d d e 3 3 f . . . 
. . f f f e e f 6 6 f f . . 
. . f f f f f f f f f f . . 
. . . f f . . . f f f . . . 
`,img`
. f f f . f f f f f . . . . 
f f f f f c c c c f f . . . 
f f f f b c c c c c c f . . 
f f f c 3 c c c c c c f . . 
. f 3 3 c c c c c c c c f . 
. f f f c c c c c 4 c c f . 
. f f f f c c c 4 4 e f f . 
. f f 4 4 f b f 4 4 e f f . 
. . f 4 d 4 1 f d d f f . . 
. . f f f 4 d d d d f . . . 
. . . f e e 4 4 4 e f . . . 
. . . 4 d d e 3 3 3 f . . . 
. . . e d d e 3 3 3 f . . . 
. . . f e e f 6 6 6 f . . . 
. . . . f f f f f f . . . . 
. . . . . f f f . . . . . . 
`],
    200,
    true
    )
})
function SetBadGuy4 (x: number, y: number) {
    Bad_Guy_4 = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f f . . . . 
. c d d d d d d e e d d f . . . 
. c d f d d f d e e b d c . . . 
c d d f d d f d e e b d c . f f 
c d e e d d d d e e f c . f e f 
c d d d d c d e e e f . . f e f 
. f c c c d e e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f f . 
. . f f e f e e f e e e e f . . 
. f e f f e e f f f e e e f . . 
f d d b d d c f f f f f f b f . 
f d d c d d d f . . f c d d f . 
. f f f f f f f . . . f f f . . 
`, SpriteKind.Enemy)
    Bad_Guy_4.setPosition(x * (16 + 8), y * 16 + 8)
    Bad_Guy_4.setVelocity(10, 0)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    music.playMelody("D G - A G E F C ", 120)
    Level += 1
    SetLevel(Level)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Player_1,
    [img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c c c c c c c f . 
. f f c c c c c c c c f f . 
. f f f c c c c c c f f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. e 4 f f f f f f f f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c c c c c c f f . 
. f f c c c c c c c c f f . 
. f f c c c c c c f f f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. . e f f f f f f f f 4 e . 
. . 4 f 3 3 3 3 3 e d d 4 . 
. . e f f f f f f e e 4 . . 
. . . f f f . . . . . . . . 
`,img`
. . . . . . . . . . . . . . 
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f f c c c c c c c c c f . 
. f f c c c c c c c c f f . 
. f f f f c c c c c c f f . 
. f f f f f f f f f f f f . 
. . f f f f f f f f f f . . 
. . e f f f f f f f f e . . 
. e 4 f f f f f f f f e . . 
. 4 d d e 3 3 3 3 3 f 4 . . 
. . 4 e e f f f f f f e . . 
. . . . . . . . f f f . . . 
`],
    200,
    true
    )
})
function SetLevel (num: number) {
    if (num == 1) {
        tiles.setTilemap(tiles.createTilemap(
            hex`100010000d121212011212121212121212121212010112010112120101010101120101011201010112121201121212011212011212121201121212011201120112120112121212010101010112011201010101011201010112011212120112120101120112011212010112121212121201121212120112120112120101010101011212121201010101120101121212121212121212121212121201121212011212010101121212011212010101010101010112011201010101011212121212121212120112011212120101010112120101010101120101011212121201010101121212121212120112121212121212010101011212121201141212121212121212120112`,
            img`
. 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
. . 2 . . 2 2 . . . . . 2 . . . 
2 . . . 2 2 2 . 2 2 2 . 2 2 . 2 
2 2 2 . 2 2 2 . 2 . 2 . 2 2 . 2 
2 2 2 . . . . . 2 . 2 . . . . . 
2 . . . 2 . 2 2 2 . 2 2 . . 2 . 
2 . 2 2 . . 2 2 2 . 2 2 . 2 2 2 
2 . 2 2 . 2 2 . . . . . . 2 2 2 
2 . . . . 2 . . 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 . 2 2 2 . 2 2 . . . 
2 2 2 . 2 2 . . . . . . . . 2 . 
2 . . . . . 2 2 2 2 2 2 2 2 2 . 
2 . 2 2 2 . . . . 2 2 . . . . . 
2 . . . 2 2 2 2 . . . . 2 2 2 2 
2 2 2 . 2 2 2 2 2 2 2 . . . . 2 
2 2 2 . . 2 2 2 2 2 2 2 2 2 . 2 
`,
            [myTiles.tile0,sprites.dungeon.collectibleInsignia,sprites.builtin.forestTiles18,sprites.builtin.forestTiles23,sprites.builtin.forestTiles15,sprites.builtin.forestTiles8,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.hazardLava1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorLockedWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.collectibleBlueCrystal],
            TileScale.Sixteen
        ))
        tiles.placeOnRandomTile(Player_1, sprites.dungeon.collectibleRedCrystal)
        SetBadGuy1(5, 4)
        SetBadGuy2(7, 7)
        SetBadGuy3(1, 13)
        SetBadGuy4(3, 11)
        Yellow_Key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. 3 . . . . 3 . . . 3 3 . . 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 . 3 3 . . 3 . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
        Yellow_Key.setPosition(152, 72)
        Have_Key = 0
        Orange_Door = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 3 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
`, SpriteKind.Door)
        Orange_Door.setPosition(88, 184)
        Open_Door = 0
    }
    if (num == 2) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100015151515080808081515080808080815150808080815151515150815151508081515150815150808080808151515081508080808151508151515151515150815081515080808081515151508151508151515151515150808080815081515080d15080808151515151508150815151515150815080808081515080808080808151508151515150808080815151515081515081515151515151515151515150815150815151515151515151508151508150808081508080808081515081515151508150815081515150808080808080815081508080815080808151515151508150815151515151508081508080808081508080808080814151515081515151515`,
            img`
2 2 2 2 . . . . 2 2 . . . . . 2 
2 . . . . 2 2 2 2 2 . 2 2 2 . . 
2 2 2 . 2 2 . . . . . 2 2 2 . 2 
. . . . 2 2 . 2 2 2 2 2 2 2 . 2 
. 2 2 . . . . 2 2 2 2 . 2 2 . 2 
2 2 2 2 2 2 . . . . 2 . 2 2 . . 
2 . . . 2 2 2 2 2 . 2 . 2 2 2 2 
2 . 2 . . . . 2 2 . . . . . . 2 
2 . 2 2 2 2 . . . . 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 2 . 2 
. . . 2 . . . . . 2 2 . 2 2 2 2 
. 2 . 2 . 2 2 2 . . . . . . . 2 
. 2 . . . 2 . . . 2 2 2 2 2 . 2 
. 2 2 2 2 2 2 . . 2 . . . . . . 
. . . . . . . 2 2 2 . 2 2 2 2 . 
`,
            [myTiles.tile0,sprites.dungeon.collectibleInsignia,sprites.builtin.forestTiles18,sprites.builtin.forestTiles23,sprites.builtin.forestTiles15,sprites.builtin.forestTiles8,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.hazardLava1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorLockedWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.collectibleBlueCrystal,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
        tiles.placeOnRandomTile(Player_1, sprites.dungeon.collectibleRedCrystal)
        SetBadGuy1(12, 0)
        SetBadGuy2(1, 7)
        SetBadGuy3(1, 11)
        SetBadGuy4(8, 12)
        Yellow_Key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. 3 . . . . 3 . . . 3 3 . . 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 . 3 3 . . 3 . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
        Yellow_Key.setPosition(248, 248)
        Have_Key = 0
        Orange_Door = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 3 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
`, SpriteKind.Door)
        Orange_Door.setPosition(8, 200)
        Open_Door = 0
    }
    if (num == 3) {
        tiles.setTilemap(tiles.createTilemap(
            hex`1000100027161818180d27272727272727211e20271b2727272727272716181a2723271b271b272727272727271b27232723271b271b181818181818180f272327232727271b2727272727272727272327232727271b27211e1e271e1e20272218221a27160f272327272727271b2727272723271b27272327272727180f2727161823271b2727211e1e2027271b27271b2723271b27272327271b27271b27271b27221a1d1e1e1c27271b27271b27271b2727232727272727271b27271b2714272727232727272727271b27271b2723271e211c1818181818180f27271b272327272327271f272727272727160f27221818181a27221818181818180f27272727272723`,
            img`
2 . . . . . 2 2 2 2 2 2 2 . . . 
2 . 2 2 2 2 2 2 2 . . . 2 . 2 . 
2 . 2 2 2 2 2 2 2 . 2 . 2 . 2 . 
2 . . . . . . . . . 2 . 2 . 2 2 
2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 2 
2 . 2 . . . 2 . . . 2 . . . . 2 
. . 2 . 2 2 2 2 2 . 2 2 2 2 . 2 
. 2 2 . 2 2 2 2 . . . 2 . . . 2 
. 2 2 . . . . 2 2 . . 2 . 2 . 2 
. 2 2 . 2 2 . 2 2 . 2 2 . 2 . . 
. . . . 2 2 . 2 2 . 2 2 . 2 2 . 
2 2 2 2 2 2 . 2 2 . 2 . 2 2 2 . 
2 2 2 2 2 2 . 2 2 . 2 . 2 . . . 
. . . . . . . 2 2 . 2 . 2 2 . 2 
2 . 2 2 2 2 2 2 . . 2 . . . . . 
2 . . . . . . . . 2 2 2 2 2 2 . 
`,
            [myTiles.tile0,sprites.dungeon.collectibleInsignia,sprites.builtin.forestTiles18,sprites.builtin.forestTiles23,sprites.builtin.forestTiles15,sprites.builtin.forestTiles8,sprites.castle.tilePath4,sprites.castle.tileGrass1,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.dungeon.hazardLava1,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorLockedWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest2,sprites.dungeon.collectibleBlueCrystal,sprites.dungeon.hazardWater,sprites.dungeon.greenOuterNorthWest,sprites.builtin.coral2,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouth1,sprites.dungeon.floorLight5,sprites.dungeon.floorDark5,sprites.dungeon.darkGroundNorthWest1],
            TileScale.Sixteen
        ))
        tiles.placeOnRandomTile(Player_1, sprites.dungeon.collectibleRedCrystal)
        SetBadGuy1(0, 10)
        SetBadGuy2(1, 3)
        SetBadGuy3(12, 7)
        SetBadGuy4(13, 12)
        Yellow_Key = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. 3 . . . . 3 . . . 3 3 . . 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 3 3 3 3 3 3 3 3 . 
. 3 . . . . 3 . 3 3 . . 3 . . . 
. 3 3 3 3 3 3 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Key)
        Yellow_Key.setPosition(168, 136)
        Have_Key = 0
        Orange_Door = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 3 5 4 4 4 4 4 4 4 4 4 . . 
. 4 5 5 5 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 . . 
`, SpriteKind.Door)
        Orange_Door.setPosition(232, 120)
        Open_Door = 0
    }
}
let Open_Door = 0
let Orange_Door: Sprite = null
let Yellow_Key: Sprite = null
let Bad_Guy_4: Sprite = null
let Bad_Guy: Sprite = null
let Attack = 0
let Bad_Guy_3: Sprite = null
let Have_Key = 0
let Bad_Guy_2: Sprite = null
let Level = 0
let Player_1: Sprite = null
Player_1 = sprites.create(img`
. f f f . f f f f . f f f . 
f f f f f c c c c f f f f f 
f f f f b c c c c b f f f f 
f f f c 3 c c c c 3 c f f f 
. f 3 3 c c c c c c 3 3 f . 
. f c c c c 4 4 c c c c f . 
. f f c c 4 4 4 4 c c f f . 
. f f f b f 4 4 f b f f f . 
. f f 4 1 f d d f 1 4 f f . 
. . f f d d d d d d f f . . 
. . e f e 4 4 4 4 e f e . . 
. e 4 f b 3 3 3 3 b f 4 e . 
. 4 d f 3 3 3 3 3 3 c d 4 . 
. 4 4 f 6 6 6 6 6 6 f 4 4 . 
. . . . f f f f f f . . . . 
. . . . f f . . f f . . . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`0a001200020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202030303030302020202020300000003020202020203000000030202020202030000000302020202020300000003020202020203000000030202020202030303030302020202020202020202020202020202020202020202020202020202020202020201020202020202020202`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.floorLight5],
            TileScale.Sixteen
        ))
game.showLongText("Welcome to the land of maze. Press A to start your journey.", DialogLayout.Bottom)
controller.moveSprite(Player_1)
scene.cameraFollowSprite(Player_1)
SetLevel(1)
Level = 1
