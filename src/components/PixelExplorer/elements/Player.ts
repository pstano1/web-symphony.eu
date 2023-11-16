interface IPlayer {
    currentX: number
    currentY: number
    currentCell: number

    generatePosition(): IPosition
    getPlayerPosition(): IPosition
    getValue<K extends keyof Player>(field: K): Player[K]
    setValue<K extends keyof Player>(field: K, newValue: Player[K]): void
}

export interface IPosition {
    x: number,
    y: number
}

export class Player implements IPlayer {
    currentX: number
    currentY: number
    currentCell: number

    constructor(startX: number, startY: number, cell: number) {
        this.currentX = startX
        this.currentY = startY
        this.currentCell = cell
    }

    generatePosition(): IPosition {
        return { x: this.currentX, y: this.currentY }
    }

    getPlayerPosition(): IPosition {
        return this.generatePosition()
    }

    getValue<K extends keyof Player>(field: K): Player[K] {
        return this[field]
    }

    setValue<K extends keyof Player>(field: K, newValue: Player[K]): void {
        this[field] = newValue as this[K]
    }
}