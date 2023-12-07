import m from 'mithril'
import '../styles/footer.css'
import SendIcon from '../../bin/images/icons/send.svg'
import MailIcon from '../../bin/images/icons/mail.svg'
import PhoneIcon from '../../bin/images/icons/phone.svg'
import GitHubIcon from '../../bin/images/icons/github.svg'
import GitLabIcon from '../../bin/images/icons/gitlab.svg'
import linkedInIcon from '../../bin/images/icons/linkedin.svg'

interface IFooter extends m.Component {
    getCurrentYear: () => number
}

var Footer: IFooter = {
    getCurrentYear: (): number => {
        let currentYear: number = new Date().getFullYear()
        return currentYear
    },
    view: () => {
        return m('div.footer_wrapper',
            m('img.footer_logo', { src: './images/gfx/ws_logo.png', alt: 'logo' }),
            m('div.footer_content',
                m('div',
                    m('h4.footer_title', 'Web Symphony Studio Paweł Stano'),
                    m('br'),
                    m('p', 'Strzeżów Pierwszy 37'),
                    m('p', '32-200 Miechów'),
                    m('br'),
                    m('p', 'VAT-ID (NIP): 6591555513'),
                    m('p', 'REGON: 526356988'),
                ),
                m('div',
                    m('h4.footer_title', 'Let\'s connect'),
                    m('a', { href: 'https://linkedin.com/in/pstano', target: '_blank' },
                        m('img.footer_icon', { src: linkedInIcon, alt: 'LinkedIn' })
                    ),
                    m('a', { href: 'https://github.com/pstano1', target: '_blank' },
                        m('img.footer_icon', { src: GitHubIcon, alt: 'GitHub' })
                    ),
                    m('a', { href: 'https://gitlab.com/pstano1', target: '_blank' },
                        m('img.footer_icon', { src: GitLabIcon, alt: 'GitLab' })
                    )
                ),
                m('div',
                    m('h4.footer_title', 'Interested in working together? Contact me'),
                    m('a.footer_link', {
                        href: '#contact',
                    }, 
                        m('img.contact_link_icon', { src: SendIcon, alt: 'Phone' }),
                        'via this website'
                    ),
                    m('p', 'or directly at:'),
                    m('a.footer_link', {
                        href: 'mailto:web-symphony@outlook.com'
                    },
                        m('img.contact_link_icon', { src: MailIcon, alt: 'Phone' }),
                        'web-symphony@outlook.com'
                    ),
                    m('a.footer_link', {
                        href: 'tel:+48573943997'
                    },
                        m('img.contact_link_icon', { src: PhoneIcon, alt: 'Phone' }),
                        '+48 573 943 997'
                    )
                ),
            ),
            m('span.divider'),
            m('p.copyright',
                m.trust(`<p>&copy; ${Footer.getCurrentYear()} Paweł Stano. This website is licensed under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT</a> & can be viewed on <a href="https://github.com/pstano1/web-symphony-web" target="_blank">GitHub</a>.</p>`)
            )
        )
    }
}

export default Footer