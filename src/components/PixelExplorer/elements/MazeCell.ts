import { IPosition } from './Player'

type MazeCellKey = keyof IMazeCell

interface IMazeCell {
    visited: boolean
    north: boolean
    east: boolean
    south: boolean
    west: boolean
    isFlag: boolean
    cellPosition: IPosition

    getValue<K extends keyof IMazeCell>(field: K): IMazeCell[K]
    setValue<K extends keyof IMazeCell>(field: K, newValue: IMazeCell[K]): void
}

export class MazeCell implements IMazeCell {
    visited: boolean
    north: boolean
    east: boolean
    south: boolean
    west: boolean
    isFlag: boolean
    cellPosition: IPosition

    constructor (x: number, y: number, flag?: boolean) {
        this.visited = false
        this.north = false
        this.east = false
        this.south = false
        this.west = false
        this.isFlag = flag?? false
        this.cellPosition = { x: x, y: y }
    }

    getValue<K extends MazeCellKey>(field: K): IMazeCell[K] {
        return this[field]
    }

    setValue<K extends MazeCellKey>(field: K, newValue: IMazeCell[K]): void {
        this[field] = newValue as this[K]
    }
}