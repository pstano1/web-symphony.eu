import m from 'mithril'
import '../styles/nav.css'

var Nav = {
    view: function(vnode) {
        return m('nav.wrapper',
            m('p.logo', 'Logo'), 
            m('div.spacer'),
            m('a.nav_link',{
                href: "#!/about-me"
            }, 'About')
        )
    }
}

export default Nav