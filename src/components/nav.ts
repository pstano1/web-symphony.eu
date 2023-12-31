import m from 'mithril'
import '../styles/nav.css'

var Nav: m.Component = {
    view: () => {
        return m('nav.nav_wrapper',
            m('nav.wrapper',
                m('a', { href: '#!/' },
                    m('img.logo', { src: './images/gfx/ws_notext.png', alt: 'logo' })
                ),
                m('div.spacer'),
                m('a.nav_link', {
                    href: "#!/about-me"
                }, 'About'),
                m('a.nav_link', {
                    href: '#!/#contact',
                    onclick: (event: Event): void => {
                        const contactSection: HTMLElement = document.getElementById('contact')

                        if (contactSection) {
                            event.preventDefault()
                            contactSection.scrollIntoView({ behavior: 'smooth' })
                            return
                        } 
                    }
                }, 'Contact')
            ),
            m('div.top_wave_decor',
                m('div.top_wave'),
                m('div.top_wave'),
                m('div.top_wave')
            )
        )
    }
}

export default Nav