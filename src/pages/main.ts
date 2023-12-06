import m from 'mithril'
import axios from 'axios'
import '../styles/main.css'
import PixelExplorer from '../components/PixelExplorer'
import SuccessIcon from '../../bin/images/icons/check-circle.svg'
import ErrorIcon from '../../bin/images/icons/alert-circle.svg'

interface IMainView extends m.Component {
    isSent: boolean,
    isSuccess: boolean,
    handleInput: (event: InputEvent) => void,
    handleSubmit: (event: Event) => void,
}

var Main: IMainView = {
    oncreate: function() {
        if (window.location.href.indexOf('#contact') !== -1) {
            var contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },
    handleInput: (event: InputEvent) => {
        const input = event.target as HTMLInputElement
        const label = input.parentNode as HTMLElement

        if (input.value.trim() !== '') {
            label.classList.add('input_filled')
        } else {
            label.classList.remove('input_filled')
        }
    },
    handleSubmit: (event: Event): void => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)
        let jsonData: { [key: string]: string } = {}

        for (let [key, value] of formData.entries()) {
            jsonData[key] = value as string
        }
        jsonData.recipient = process.env.MAIL_RECIPIENT

        axios.post('https://web-symphony-api-production.up.railway.app/contact', 
            jsonData, {
            headers: {
                'Content-Type': 'application/json'
            }})
            .then((response) => {
                if (response.status === 200) {
                    Main.isSuccess = true
                    Main.isSent = true
                } else {
                    Main.isSuccess = false
                    Main.isSent = true
                }
            })
            .then(() => m.redraw())
    },
    view: () => {
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
                m('form', { name: 'contact', onsubmit: (event: Event) => Main.handleSubmit(event) },
                    m('h2', 'contact'),
                    Main.isSent ?
                        Main.isSuccess ? m('img.success', { src: SuccessIcon, alt: 'success' })
                            : m('img.error', { src: ErrorIcon, alt: 'erorr' })
                        : m('div',
                            m('label',
                                m('p.label_style', 'Name & Surname'),
                                m('input.text_field', {
                                    type: 'text',
                                    name: 'full_name',
                                    oninput: Main.handleInput
                                }),
                            ),
                            m('label',
                                m('p.label_style', 'e-mail'),
                                m('input.text_field', {
                                    type: 'text',
                                    name: 'email',
                                    oninput: Main.handleInput
                                }),
                            ),
                            m('label',
                                m('p.label_style', 'Phone'),
                                m('input.text_field', {
                                    type: 'text',
                                    name: 'phone',
                                    oninput: Main.handleInput
                                }),
                            ),
                            m('label',
                                m('p.label_style', 'Drop me a line'),
                                m('input.text_field', {
                                    type: 'text',
                                    name: 'message',
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