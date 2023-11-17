import { Maze } from '../src/components/PixelExplorer/elements/Maze'

describe('Maze class tests', () => {
    let maze: Maze

    beforeEach(() => {
        maze = new Maze(10, 10)
    })

    test('Maze initialization', () => {
        expect(maze.isFinished).toBe(false)
    })

    test('Maze generation', () => {
        maze.generateMaze()
        expect(maze.renderMaze()).toHaveLength(100)
    })
})
