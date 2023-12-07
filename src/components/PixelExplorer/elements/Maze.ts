import m from 'mithril'
import { MazeCell } from './MazeCell'
import { Player, IPosition } from './Player'
import FlagIcon from '../../../../bin/images/icons/flag.svg'

interface IMaze {
    generateMaze(): void
    checkNeighbouringCells(cell: number): number[]
    renderMaze(): m.Vnode<any, any>[]
    movePlayer(direction: string): void
    getCellIndexFromPosition(position: IPosition): number
}

export class Maze implements IMaze {
    private width: number
    private depth: number
    private board: MazeCell[]
    private player: Player
    public isFinished: boolean
    private moveDirection: string

    constructor(x: number, y: number) {
        this.width = x
        this.depth = y
        this.board = []
        this.player = new Player(0, 0, 0)
        this.isFinished = false
        this.moveDirection = ''
    }

    generateMaze(): void {
        for (let i: number = 0; i < this.width; i++) {
            for (let j = 0; j < this.depth; j++) {
                let cell: MazeCell
                if (i === this.width - 1 && j === this.depth - 1) cell = new MazeCell(i, j, true)
                else cell = new MazeCell(i, j)
                this.board.push(cell)
            }
        }

        let currentCell: number = 0
        let path: number[] = []

        let k: number = 0
        while (k < 1000) {
            k++

            this.board[currentCell].setValue('visited', true)
            let neighbours = this.checkNeighbouringCells(currentCell)

            if (neighbours.length === 0) {
                if (path.length === 0) break
                else currentCell = path.pop() as number
            } else {
                path.push(currentCell)
                let newCell = neighbours[Math.floor(Math.random() * neighbours.length)]

                if (newCell > currentCell) {
                    if (newCell - 1 === currentCell) {
                        this.board[currentCell].setValue('east', true)
                        currentCell = newCell
                        this.board[currentCell].setValue('west', true)
                    } else {
                        this.board[currentCell].setValue('south', true)
                        currentCell = newCell
                        this.board[currentCell].setValue('north', true)
                    }
                } else {
                    if (newCell + 1 === currentCell) {
                        this.board[currentCell].setValue('west', true)
                        currentCell = newCell
                        this.board[currentCell].setValue('east', true)
                    } else {
                        this.board[currentCell].setValue('north', true)
                        currentCell = newCell
                        this.board[currentCell].setValue('south', true)
                    }
                }
            }
        }
    }

    checkNeighbouringCells(cell: number): number[] {
        let neighbours: number[] = []

        if (cell - this.width >= 0 && !this.board[cell - this.width].visited) {
            neighbours.push(cell - this.width)
        }

        if (cell + this.width < this.board.length && !this.board[cell + this.width].visited) {
            neighbours.push(cell + this.width)
        }

        if ((cell + 1) % this.width != 0 && !this.board[cell + 1].visited) {
            neighbours.push(cell + 1)
        }

        if (cell % this.width != 0 && !this.board[cell - 1].visited) {
            neighbours.push(cell - 1)
        }

        return neighbours
    }

    renderMaze(): m.Vnode<any, any>[] {
        const maze: m.Vnode<any, any>[] = this.board.map((cell, index) => {
            let classes = [
                'maze_tile',
                !cell.getValue('north') && 'wall_north',
                !cell.getValue('east') && 'wall_east',
                !cell.getValue('south') && 'wall_south',
                !cell.getValue('west') && 'wall_west',
            ].filter(Boolean).join(' ')

            if (cell.cellPosition.x === this.player.getPlayerPosition().x &&
            cell.cellPosition.y === this.player.getPlayerPosition().y) classes += ' current_tile'

            const children: m.Children | null =
                cell.cellPosition.x === this.player.getPlayerPosition().x &&
                    cell.cellPosition.y === this.player.getPlayerPosition().y
                    ? this.moveDirection != '' ? m('div.player', { className: 'to_' + this.moveDirection }) : m('div.player')
                    : cell.isFlag
                        ? m('img.flag', { src: FlagIcon, alt: 'flag' })
                        : null

            return m('div', { key: index, className: classes }, children)
        })
        
        this.moveDirection = ''

        return maze
    }

    movePlayer(direction: string): void {
        let currentCell: MazeCell = this.board[this.player.getValue('currentCell')]
        let newCellsPosition: IPosition
        let hasMoved: boolean = false

        if (direction === 'north' && currentCell.getValue('north')) {
            this.player.setValue('currentX', currentCell.getValue('cellPosition').x - 1)
            hasMoved = true
        }
        if (direction === 'east' && currentCell.getValue('east')) {
            this.player.setValue('currentY', currentCell.getValue('cellPosition').y + 1)
            hasMoved = true
        }
        if (direction === 'south' && currentCell.getValue('south')) {
            this.player.setValue('currentX', currentCell.getValue('cellPosition').x + 1)
            hasMoved = true
        }
        if (direction === 'west' && currentCell.getValue('west')) {
            this.player.setValue('currentY', currentCell.getValue('cellPosition').y - 1)
            hasMoved = true
        }

        newCellsPosition = this.player.getPlayerPosition()
        this.player.setValue('currentCell', this.getCellIndexFromPosition(newCellsPosition))
        if (this.board[this.player.currentCell].getValue('isFlag') === true) this.isFinished = true
        if (hasMoved) this.moveDirection = direction
    }

    getCellIndexFromPosition(position: IPosition): number {
        const index = this.board.findIndex((cell) => {
            const cellPosition = cell.getValue('cellPosition')
            return cellPosition.x === position.x && cellPosition.y === position.y
        })
        
        return index !== -1 ? index : -1
    }
}