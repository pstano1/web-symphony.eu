import m from 'mithril'
import '../styles/nav.css'

var Nav = {
    view: function(vnode) {
        return m('nav.wrapper',
            m('img.logo', { src: '../public/assets/gfx/ws_notext.png', alt: 'logo' }), 
            m('div.spacer'),
            m('a.nav_link',{
                href: "#!/about-me"
            }, 'About')
        )
    }
}

export default Nav