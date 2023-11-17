import m from 'mithril'
import './styles/globals.css'

import Main from './pages/main'
import About from './pages/about'
import Nav from './components/nav'
import Footer from './components/footer'

const Layout = {
    view: (vnode: m.Vnode<any, any>) => {
        return m('div.main', [
            m(Nav), 
            m(vnode.attrs.contentComponent),
            m(Footer)
        ])
    }
}

m.route(document.body, '/', {
    '/': {
        render: () => {
            return m(Layout, { contentComponent: Main })
        }
    },
    '/about-me': {
        render: () => {
            return m(Layout, { contentComponent: About })
        }
    }
})