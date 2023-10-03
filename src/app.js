import m from 'mithril'
import './styles/globals.css'

import Main from './pages/main'
import About from './pages/about'
import Nav from './components/nav'
import Footer from './components/footer'

import Placeholder from './pages/placeholder'

const Layout = {
    view: (vnode) => {
        return m('div.main', [
            // m(Nav), 
            m(vnode.attrs.contentComponent),
            // m(Footer)
        ])
    }
}

m.route(document.body, '/', {
    '/': {
        render: () => {
            return m(Layout, { contentComponent: Placeholder })
        }
    },
    // '/about-me': {
    //     render: () => {
    //         return m(Layout, { contentComponent: About })
    //     }
    // }
})