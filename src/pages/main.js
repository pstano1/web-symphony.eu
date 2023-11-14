import m from 'mithril'
import '../styles/main.css'

var Main = {
    handleInput: (event) => {
        const input = event.target
        const label = input.parentNode
    
        if (input.value.trim() !== '') {
            label.classList.add('input_filled')
        } else {
            label.classList.remove('input_filled')
        }
    },

    view: (vnode) => {
        return m('div.main_content',
            m('section.portfolio',
                m('h1', 'Portfolio coming soon...')
            ),
            m('section.contact_section#contact',
                m('div',
                    m('h1', 'Want to work together?'),
                    m('h1', 'Shoot me an e-mail')
                ),
                m('form',
                    m('h2', 'contact'),
                    m('label',
                        m('p.label_style', 'Name & Surname'),
                        m('input.text_field', {
                            type: 'text',
                            oninput: Main.handleInput
                        }),
                    ),
                    m('label',
                        m('p.label_style', 'e-mail'),
                        m('input.text_field', {
                            type: 'text',
                            oninput: Main.handleInput
                        }),
                    ),
                    m('label',
                        m('p.label_style', 'Phone'),
                        m('input.text_field', {
                            type: 'text',
                            oninput: Main.handleInput
                        }),
                    ),
                    m('label',
                        m('p.label_style', 'Drop me a line'),
                        m('input.text_field', {
                            type: 'text',
                            oninput: Main.handleInput
                        }),
                    ),
                    m('button.send_button', 'send now')
                ),
                m('div.wave_decor',
                    m('div.wave'),
                    m('div.wave'),
                    m('div.wave')
                )
            )
        )
    }
}

export default Main