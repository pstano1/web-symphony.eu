import m from 'mithril'
import '../styles/footer.css'
import GitHubIcon from '../../public/assets/icons/github.svg'
import GitLabIcon from '../../public/assets/icons/gitlab.svg'
import linkedInIcon from '../../public/assets/icons/linkedin.svg'

var Footer = {
    view: function (vnode) {
        return m('div.footer_wrapper',
            m('img.footer_logo', { src: '../public/assets/gfx/ws_logo.png', alt: 'logo' }),
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

                ),
            ),
            m('span.divider')
        )
    }
}

export default Footer