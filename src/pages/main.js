import m from 'mithril'
import '../styles/main.css'
import PixelExplorer from '../components/PixelExplorer'
import SuccessIcon from '../../bin/images/icons/check-circle.svg'
import ErrorIcon from '../../bin/images/icons/alert-circle.svg'

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
    handleSubmit: (event) => {
        event.preventDefault()

        const myForm = event.target
        const formData = new FormData(myForm)

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                Main.isSent = true
                Main.isSuccess = true
            })
            .catch((error) => {
                Main.isSent = true
                Main.isSuccess = false
            })
    },
    view: (vnode) => {
        return m('div.main_content',
            m('section.para',
                m('p', 'Web Symphony Studio is a self-employment venture, therefore you can treat this website as a digital canvas and a personal portfolio of mine. Here, you\'ll witness the a symphony of my design and development skills, a testament of sort to my ongoing journey in the ever-evolving world of the web. So, whether you\'re here for inspiration or collaboration, feel free to explore my work.')
            ),
            m('section.portfolio',
                m(PixelExplorer),
                m('h1', 'Portfolio is coming soon. In the meantime here\'s a little game'),
            ),
            m('section.contact_section#contact',
                m('div',
                    m('h1', 'Want to work together?'),
                    m('h1', 'Shoot me an e-mail')
                ),
                m('form', { dataNetlify: true, netlify: true, method: 'POST', onsubmit: () => Main.handleSubmit(event) },
                    m('h2', 'contact'),
                    Main.isSent ?
                        Main.isSuccess ? m('img.success', { src: SuccessIcon, alt: 'success' })
                            : m('img.error', { src: ErrorIcon, alt: 'erorr' })
                        : m('div',
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
                ),
                m('div.wave_decor',
                    m('div.wave'),
                    m('div.wave'),
                    m('div.wave')
                )
            )
        )
    },
    isSent: false,
    isSuccess: false
}

export default Main