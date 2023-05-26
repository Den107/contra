import * as PIXI from '../pixi/pixi.mjs'
import Game from './Game.js'

const _pixiApp = new PIXI.Application({
    width: 1024,
    height: 768
})
const game = new Game(_pixiApp)
_pixiApp.ticker.add(game.update, game)
document.body.appendChild(_pixiApp.view)

