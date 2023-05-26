import Hero from "./Enities/Hero.js";
import Platform from "./Enities/Platform.js";

export default class Game {
    #pixiApp
    #hero
    #platform

    constructor(pixiApp) {
        this.#pixiApp = pixiApp

        this.#hero = new Hero()
        this.#hero.x = 200
        this.#hero.y = 200
        this.#pixiApp.stage.addChild(this.#hero)

        this.#platform = new Platform()
        this.#platform.x = 100
        this.#platform.y = 500
        this.#pixiApp.stage.addChild(this.#platform)
    }

    update() {
        this.#hero.update()

        this.isCheckAABB(this.#hero, this.#platform)
    }

    isCheckAABB(entity, area) {
        return (
            entity.x < area.x + area.width &&
            entity.x + entity.width > area.x &&
            entity.y < area.y + area.height &&
            entity.y + entity.height > area.y
        )
    }
}