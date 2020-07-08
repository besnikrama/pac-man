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
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd9, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    game.over(true)
})
let pac_man = sprites.create(img`
. . 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 . . . . . . . . . 
. 5 5 5 5 5 . . . . . . . . . . 
. 5 5 5 5 5 5 . . . . . . . . . 
. 5 5 5 5 5 5 5 . . . . . . . . 
. 5 5 5 5 5 5 5 5 . . . . . . . 
. . 5 5 5 5 5 5 5 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010606060606060606060606060606020805050505050505050505050505050708050b0505050b0b0b0b0505050b050708050b0b0505050b0b0505050b0b050708050b050505050b0b050505050b05070805050505050505050505050505050708050505050e050505050e050505050708050b0b0505050b0b0505050b0b050708050b050505050b0b050505050b050708050b0505050b0b0b0b0505050b05070805050505050505050505050e050507080505050e050b05050b05050505050708050b0505050b0d0d0b0505050b050708050b0b0b050b0b0b0b050b0b0b05070805050505050505050505050505050704090909090909090909090909090903`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . 2 2 2 2 . . . 2 . 2 
2 . 2 2 . . . 2 2 . . . 2 2 . 2 
2 . 2 . . . . 2 2 . . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 . . . 2 2 . . . 2 2 . 2 
2 . 2 . . . . 2 2 . . . . 2 . 2 
2 . 2 . . . 2 2 2 2 . . . 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . 2 . . . . . 2 
2 . 2 . . . 2 . . 2 . . . 2 . 2 
2 . 2 2 2 . 2 2 2 2 . 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.builtin.crowd9],
            TileScale.Sixteen
        ))
pac_man.setPosition(76, 69)
controller.moveSprite(pac_man)
scene.cameraFollowSprite(pac_man)
info.startCountdown(30)
game.showLongText("welcome to pac-man help him to find his home.", DialogLayout.Bottom)
