// 
namespace SpriteKind {
    export const crate = SpriteKind.create()
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.crate, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    
    otherSprite.destroy()
    Ammo += 5
    music.powerUp.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    if (!(Ammo <= 0)) {
        if (Appearance == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . 5 5 1 1 1 . . . . . 
                                    . . . . . 4 4 5 5 5 1 . . . . . 
                                    . . . . . . 4 4 4 5 5 . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                `, Dude, -150, 0)
            music.pewPew.play()
            Ammo += -1
        } else {
            projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . 5 5 1 1 1 . . . . . . . 
                                    . . . . 4 5 5 5 1 1 . . . . . . 
                                    . . . . 4 4 4 5 5 . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . .
                `, Dude, 150, 0)
            music.pewPew.play()
            Ammo += -1
        }
        
    } else {
        game.splash("OUT OF AMMO! HOLD OUT", "FOR THE NEXT CRATE!")
    }
    
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function on_left_pressed() {
    
    Dude.setImage(img`
        .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                ................555555555................
                ...............55555555555...............
                ..............5555555555555..............
                .............555555552222255.............
                ............22222222222222222............
                ............ffffffffffffff22f............
                ............f5ffffff5ffffff2f............
                ....f.......55fff1f555fff1f25............
                ...ffffffff.55ff1ff555ff1ff22............
                .ffffffffff.555fff55555fff552............
                ...ffffffff.55555555555555552............
                .......fff..55555555555555555............
                .......fff..555555fffff555555............
                .......fff...5555f55555f5555.............
                .......fff....555555555f555..............
                ........f......55555555555...............
                ................555555555................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
    `)
    Appearance = 2
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    sprite.destroy(effects.spray, 200)
    music.baDing.play()
    info.changeScoreBy(10)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function on_right_pressed() {
    
    Dude.setImage(img`
        .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                ................555555555................
                ...............55555555555...............
                ..............5555555555555..............
                .............555555552222255.............
                ............22222222222222222............
                ............ffffffffffffff22f............
                ............f5ffffff5ffffff2f............
                ............55fff1f555fff1f25.......f....
                ............55ff1ff555ff1ff22.ffffffff...
                ............555fff55555fff552.ffffffffff.
                ............55555555555555552.ffffffff...
                ............55555555555555555..fff.......
                ............555555fffff555555..fff.......
                .............5555f55555f5555...fff.......
                ..............555555555f555....fff.......
                ...............55555555555......f........
                ................555555555................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
                .........................................
    `)
    Appearance = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap3(sprite: Sprite, otherSprite: Sprite) {
    mySprite.destroy()
    info.changeLifeBy(1)
    music.powerUp.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap4(sprite: Sprite, otherSprite: Sprite) {
    otherSprite.destroy()
    music.powerDown.play()
    info.changeLifeBy(-1)
})
let ammo_box : Sprite = null
let Pizza : Sprite = null
let Spawn_location = 0
let mySprite : Sprite = null
let projectile : Sprite = null
let Appearance = 0
let Dude : Sprite = null
let Ammo = 0
scene.setBackgroundColor(11)
info.setLife(3)
Ammo = 10
Dude = sprites.create(img`
        .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            ................555555555................
            ...............55555555555...............
            ..............5555555555555..............
            .............555555552222255.............
            ............22222222222222222............
            ............ffffffffffffff22f............
            ............f5ffffff5ffffff2f............
            ............55fff1f555fff1f25.......f....
            ............55ff1ff555ff1ff22.ffffffff...
            ............555fff55555fff552.ffffffffff.
            ............55555555555555552.ffffffff...
            ............55555555555555555..fff.......
            ............555555fffff555555..fff.......
            .............5555f55555f5555...fff.......
            ..............555555555f555....fff.......
            ...............55555555555......f........
            ................555555555................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
            .........................................
    `, SpriteKind.Player)
Dude.setPosition(6, 80)
Dude.setFlag(SpriteFlag.StayInScreen, false)
controller.moveSprite(Dude, 100, 100)
info.setScore(0)
game.onUpdateInterval(2000, function on_update_interval() {
    
    if (!(info.score() >= 5000)) {
        Spawn_location = randint(1, 4)
        if (Spawn_location == 1) {
            Pizza = sprites.create(img`
                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    ..............eeeeeeeee..................
                                    .............eeeeeeeeeee.................
                                    ............eeeeeeeeeeee.................
                                    ............e25555555555.................
                                    ............e2555ff555ff.................
                                    ............e255f1f55f1f.................
                                    ............e225ff555ff5.................
                                    .............e2555555555.................
                                    .............e25555fff55.................
                                    ..............e255ffff55.................
                                    ..............e2552fff55.................
                                    ...............e2525555..................
                                    ...............e2522555..................
                                    ................e252555..................
                                    ................fe2555f..................
                                    ................ffe255f..................
                                    ................ff.eeff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ..............ffff...ffff................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                `, SpriteKind.Enemy)
            Pizza.setPosition(7, 7)
            Pizza.follow(Dude, 16)
        }
        
        if (Spawn_location == 2) {
            Pizza = sprites.create(img`
                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    ..............eeeeeeeee..................
                                    .............eeeeeeeeeee.................
                                    ............eeeeeeeeeeee.................
                                    ............e25555555555.................
                                    ............e2555ff555ff.................
                                    ............e255f1f55f1f.................
                                    ............e225ff555ff5.................
                                    .............e2555555555.................
                                    .............e25555fff55.................
                                    ..............e255ffff55.................
                                    ..............e2552fff55.................
                                    ...............e2525555..................
                                    ...............e2522555..................
                                    ................e252555..................
                                    ................fe2555f..................
                                    ................ffe255f..................
                                    ................ff.eeff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ..............ffff...ffff................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                `, SpriteKind.Enemy)
            Pizza.setPosition(145, 7)
            Pizza.follow(Dude, 16)
            if (info.life() < 4) {
                mySprite = sprites.create(img`
                        .....................
                                            .....................
                                            .....................
                                            .....................
                                            ...eeeeeeeeeeeeeee...
                                            ...e1111111111111e...
                                            ...e1111111111111e...
                                            ...e1111155511111e...
                                            ...eeeeee555eeeeee...
                                            ...e1111155511111e...
                                            ...e1111111111111e...
                                            ...e1111112111111e...
                                            ...e1111122211111e...
                                            ...e1111112111111e...
                                            ...e1111111111111e...
                                            ...eeeeeeeeeeeeeee...
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                    `, SpriteKind.Food)
                mySprite.destroy()
                mySprite = sprites.create(img`
                        .....................
                                            .....................
                                            .....................
                                            .....................
                                            ...eeeeeeeeeeeeeee...
                                            ...e1111111111111e...
                                            ...e1111111111111e...
                                            ...e1111155511111e...
                                            ...eeeeee555eeeeee...
                                            ...e1111155511111e...
                                            ...e1111111111111e...
                                            ...e1111112111111e...
                                            ...e1111122211111e...
                                            ...e1111112111111e...
                                            ...e1111111111111e...
                                            ...eeeeeeeeeeeeeee...
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                    `, SpriteKind.Food)
            }
            
        }
        
        if (Spawn_location == 3) {
            Pizza = sprites.create(img`
                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    ..............eeeeeeeee..................
                                    .............eeeeeeeeeee.................
                                    ............eeeeeeeeeeee.................
                                    ............e25555555555.................
                                    ............e2555ff555ff.................
                                    ............e255f1f55f1f.................
                                    ............e225ff555ff5.................
                                    .............e2555555555.................
                                    .............e25555fff55.................
                                    ..............e255ffff55.................
                                    ..............e2552fff55.................
                                    ...............e2525555..................
                                    ...............e2522555..................
                                    ................e252555..................
                                    ................fe2555f..................
                                    ................ffe255f..................
                                    ................ff.eeff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ..............ffff...ffff................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                `, SpriteKind.Enemy)
            Pizza.setPosition(6, 107)
            if (Ammo < 4) {
                ammo_box = sprites.create(img`
                        .....................
                                            .....................
                                            .....................
                                            .....................
                                            ...eeeeeeeeeeeeeee...
                                            ...e7777777777777e...
                                            ...e7777777777777e...
                                            ...e7777755577777e...
                                            ...eeeeee555eeeeee...
                                            ...e7777755577777e...
                                            ...e7777777777777e...
                                            ...e7777dddd77777e...
                                            ...e777777df77777e...
                                            ...e7777777f77777e...
                                            ...e7777777777777e...
                                            ...eeeeeeeeeeeeeee...
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                    `, SpriteKind.crate)
                ammo_box.destroy()
                ammo_box = sprites.create(img`
                        .....................
                                            .....................
                                            .....................
                                            .....................
                                            ...eeeeeeeeeeeeeee...
                                            ...e7777777777777e...
                                            ...e7777777777777e...
                                            ...e7777755577777e...
                                            ...eeeeee555eeeeee...
                                            ...e7777755577777e...
                                            ...e7777777777777e...
                                            ...e7777dddd77777e...
                                            ...e777777df77777e...
                                            ...e7777777f77777e...
                                            ...e7777777777777e...
                                            ...eeeeeeeeeeeeeee...
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                                            .....................
                    `, SpriteKind.crate)
            }
            
            Pizza.follow(Dude, 16)
        }
        
        if (Spawn_location == 4) {
            Pizza = sprites.create(img`
                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    ..............eeeeeeeee..................
                                    .............eeeeeeeeeee.................
                                    ............eeeeeeeeeeee.................
                                    ............e25555555555.................
                                    ............e2555ff555ff.................
                                    ............e255f1f55f1f.................
                                    ............e225ff555ff5.................
                                    .............e2555555555.................
                                    .............e25555fff55.................
                                    ..............e255ffff55.................
                                    ..............e2552fff55.................
                                    ...............e2525555..................
                                    ...............e2522555..................
                                    ................e252555..................
                                    ................fe2555f..................
                                    ................ffe255f..................
                                    ................ff.eeff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ................ff...ff..................
                                    ..............ffff...ffff................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                                    .........................................
                `, SpriteKind.Enemy)
            Pizza.setPosition(147, 106)
            Pizza.follow(Dude, 16)
        }
        
    } else {
        game.over(true, effects.melt)
    }
    
})
