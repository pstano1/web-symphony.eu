import m from 'mithril'
import '../styles/footer.css'

var Footer = {
    view: function (vnode) {
        return m('div.footer_wrapper',
            m('h3.logo', 'Logo'),
            m('div.footer_content',
                m('div', 
                    m('p', 'Web Symphony Studio Paweł Stano'),
                    m('br'),
                    m('p', 'Strzeżów Pierwszy 37'),
                    m('p', '32-200 Miechów'),
                    m('br'),
                    m('p', 'VAT-ID (NIP): 6591555513'),
                    m('p', 'REGON: 526356988'),
                ),
                m('div', 'test2'),
                m('div', 'test3'),
            )
        )
    }
}

export default Footer