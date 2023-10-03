import m from 'mithril'
import '../styles/placeholder.css'

var Placeholder = {
    view: function(vnode) {
        return m('div.holder_wrapper',
                m('img', { src: './images/gfx/ws_notext.png', alt: 'logo' }),
                m('p', 'Coming soon...')
        )
    }
}

export default Placeholder