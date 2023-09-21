import m from 'mithril'
import '../styles/about.css'

var About = {
    view: function(vnode) {
        return m('div.content',
            m('img.avatar', { 
                src: 'https://magda-trans.s3.eu-central-1.amazonaws.com/onitsoft-static/logo_no_text.png', 
                alt: 'profile pricture' 
            }),
            m('h2.header_title', 'Paweł Stano'),
            m('div.sec', 'text')
        )
    }
}

export default About