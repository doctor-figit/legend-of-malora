// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1e001e00010101010101010101010101010101010d0d0d0d0d0d0d2121212121212101020a0a0a0a0a0a0a0a0a0a0a0a09012223232323232221212121212121010403030303030303030303030308010d0d0d0d0d0d0d21272727272721010403030303030303030303030308010d0d0d0d0d0d0d21262727272721010403030303030303030303030308010d0d0d0d0d0d0d2125262727272101040303030b0b0b0b0b0303030308010d0d0d0d240d0d2125262627272101040303030b0b0c0b0b0303030308010d0d0d0d0d0d0d2126262727272101040303030b0b0b0b0b0303030308010d0d0d0d0d0d0d2126272727272101040303030c0b0b0b0b0303030308010d0d0d0d0d0d0d21272727272721010403030303030303030303030308010d0d0f0d0d0d0d212121212121210104030d0d0d0d0d03030303030308010d0d0d0d0d0d0d1e10171717181c0104030d0d0d0d0d03030303030308010d0d0f0d0d0d0d1f14131313121f0104030d0d0d0d0d03030303030308010d0d0d0d0d0d0d1f15111111161f01040303030f030303030303030308010d0d0f0d0d0d0d1f15111111161f010506060606060606060606060607010d0d0d0d0d0d0d1f15111111161f010101010101010101010101010101010d0d0f0d0d0d0d1f15111111161f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0e0d0d0d0d1f15111111161f0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d240d0d0d0d0d0d1f191a1a1a1b1f0d0d0d0e240e0e0e240d0d0d0d0d0d0d0d0d0d0d240d0d201f1f1f1f1f1d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d272727272727270d0d0f0d0d0d0d0d240d0d0d0d0e240d0d0d0d0d0d0d0d272727272727270d0d0f0d0d0d0d0d0d0d0d0d0d0d0e0e0d0d0d0d0d0d0d272727272727270d0d0f0d0d0d0d0d0d0d0d0d0d0d0d0d240d0d0d0d0d0d272727272727270d0d0d0d0d0d0d0d0d0d240d0d0d0d0d0d0d0d0d0d0d0d272727272727270d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d0d27272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727`, img`
222222222222222222222222222222
2......................2.....2
2......................2.....2
2......................2.....2
2............................2
2...................2........2
2......................2.....2
2......................2.....2
2......................2.....2
2.................2....2222222
2............................2
2.................2..........2
2............................2
2....2............2..........2
2............................2
2.................2..........2
2............................2
2...............2............2
2...2...2...........2........2
2............................2
2.2.....2.....2..............2
2.2..........................2
2.2.............2............2
2.........2..................2
2............................2
2............................2
2............................2
2............................2
2............................2
222222222222222222222222222222
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tilePath4,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles11,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles17,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles20,sprites.builtin.forestTiles23,sprites.builtin.forestTiles16,sprites.builtin.forestTiles22,sprites.builtin.forestTiles21,sprites.castle.rock0,sprites.builtin.crowd3,sprites.builtin.crowd0,sprites.castle.saplingPine,myTiles.tile1,sprites.castle.rock1,sprites.castle.rock2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
