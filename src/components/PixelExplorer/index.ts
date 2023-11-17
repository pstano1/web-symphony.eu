import m from 'mithril'
import './mazeStyle.css'
import { Maze } from './elements/Maze'
import Arrow from '../../../bin/images/icons/arrow.svg'
import Close from '../../../bin/images/icons/x.svg'
import Replay from '../../../bin/images/icons/repeat.svg'

interface IPixelExplorer {
    mazeInstance: Maze | null
    view: (vnode: m.Vnode) => m.Vnode
    mobileControlsVisible: boolean
    handleWSADKeys: (e: KeyboardEvent) => void
    controlEnabled: boolean
}

var PixelExplorer: IPixelExplorer = {
    view: (vnode: m.Vnode) => {
        if (!PixelExplorer.mazeInstance) {
            PixelExplorer.mazeInstance = new Maze(10, 10)
            PixelExplorer.mazeInstance.generateMaze()
        }

        return m('section.maze_wrapper',
            m('div.maze', PixelExplorer.mazeInstance.renderMaze(),
                m('div.game_over', {
                    class: PixelExplorer.mazeInstance.isFinished ? 'visible' : ''
                },
                    m('h3', 'You\'ve won'),
                    m('img.replay_button', {
                        onclick: () => {
                            PixelExplorer.mazeInstance = new Maze(10, 10)
                            PixelExplorer.mazeInstance.generateMaze()
                        },
                        src: Replay,
                        alt: 'replay'
                    })
                )
            ),
            m('button.controls_button', {
                onclick: () => {
                    if (window.innerWidth < 1024) {
                        PixelExplorer.mobileControlsVisible = !PixelExplorer.mobileControlsVisible
                    } else {
                        if (!PixelExplorer.controlEnabled) document.addEventListener('keydown', PixelExplorer.handleWSADKeys)
                        else document.removeEventListener('keydown', PixelExplorer.handleWSADKeys)
                    }
                    PixelExplorer.controlEnabled = !PixelExplorer.controlEnabled    
                },
            },
                PixelExplorer.controlEnabled ? 'disable controls' : 'enable controls'
            ),
            m('div.mobile_controls', {
                class: PixelExplorer.mobileControlsVisible && 'visible'
            },
                m('div',
                    m('button.arrow', { className: 'west', onclick: () => PixelExplorer.mazeInstance.movePlayer('west') },
                        m('img', { src: Arrow, alt: 'arrow' })
                    ),
                    m('button.arrow', { className: 'north', onclick: () => PixelExplorer.mazeInstance.movePlayer('north') },
                        m('img', { src: Arrow, alt: 'arrow' })
                    ),
                    m('button.arrow', { className: 'east', onclick: () => PixelExplorer.mazeInstance.movePlayer('east') },
                        m('img', { src: Arrow, alt: 'arrow' })
                    ),
                    m('button.arrow', { className: 'south', onclick: () => PixelExplorer.mazeInstance.movePlayer('south') },
                        m('img', { src: Arrow, alt: 'arrow' })
                    ),
                    m('button.arrow', { className: 'close', onclick: () => {
                        PixelExplorer.mobileControlsVisible = !PixelExplorer.mobileControlsVisible
                        PixelExplorer.controlEnabled = false
                    }},
                        m('img', { src: Close, alt: 'x' })
                    ),
                )
            )
        )
    },
    mazeInstance: null,
    mobileControlsVisible: false,
    handleWSADKeys: (e: KeyboardEvent): void => {
        if (PixelExplorer.mazeInstance.isFinished) return
        switch (e.key) {
            case 'a':
                PixelExplorer.mazeInstance.movePlayer('west')
                break
            case 'w':
                PixelExplorer.mazeInstance.movePlayer('north')
                break
            case 'd':
                PixelExplorer.mazeInstance.movePlayer('east')
                break
            case 's':
                PixelExplorer.mazeInstance.movePlayer('south')
                break
        }

        m.redraw()
    },
    controlEnabled: false,
}

export default PixelExplorer