import m from 'mithril'
import '../styles/about.css'

import ProgressRing from '../components/ring'

var About = {
    view: function (vnode) {
        return m('div.content',
            m('img.avatar', {
                src: '../public/assets/gfx/profile_pic.jpg',
                alt: 'profile pricture'
            }),
            m('h2.header_title', 'Paweł Stano'),
            m('div.summary', 'As an applied computing student and an active contributor to software projects, I\'m eager to discuss this project further in a meeting. I believe my skills and ongoing education can make a meaningful contribution to its success. Let\'s connect and explore the possibilities.'),
            m('section.vertical_sec',
                m('h2.section_title', 'Experience'),
                m('div',
                    m('h3.element_title', 'Onit Soft - Co-Founder & Software Developer'),
                    m('h4.element_subtitle', 'since 09/2023'),
                    m('div.sec', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper odio id nunc luctus tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique felis et quam venenatis, tristique finibus justo ullamcorper. Phasellus mattis dictum laoreet. Aenean sagittis congue leo a mattis. Vestibulum tellus nunc, imperdiet feugiat mauris ut, accumsan sollicitudin dui.'),
                    m('div.chip_row',
                        m('div.chip', 'Web Development'),
                        m('div.chip', 'Mobile Development'),
                    )
                ),
                m('div',
                    m('h3.element_title', 'Magda-Trans - IT Specialist'),
                    m('h4.element_subtitle', '01/2023 - 09/2023'),
                    m('div.sec', 'Together with a colleague, using web-based tools, we have built a system that integrates the cargo sales market, manages truck fleet, generates shipping documents and invoices, and provides an interface for employee management. I am currently responsible for the ongoing maintanence of the platform & adding new features.'),
                    m('div.chip_row',
                        m('div.chip', 'Front-End Development'),
                    )
                ),
                m('div',
                    m('h3.element_title', 'Magda-Trans - Truck Dispatcher'),
                    m('h4.element_subtitle', '10/2021 - 12/2022'),
                    m('div.sec', 'I was responsible for a designated group of drivers operating primarily on the east coast of the USA. My tasks included finding optimal assignments, managing transportation documentation, and resolving any issues encountered by them.'),
                    m('div.chip_row',
                        m('div.chip', 'Negotiation'),
                    )
                )
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Education'),
                m('div',
                    m('h3.element_title', 'Wyższa Szkoła Ekonomii i Informatyki - Applied Computing'),
                    m('h4.element_subtitle', '10/2022 - 03/2026'),
                ),
                m('div',
                    m('h3.element_title', 'Zespół Szkół Łączności w Krakowie - IT Technician'),
                    m('h4.element_subtitle', '09/2017 - 04/2021')
                ),
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Skills'),
                m('div.sec',
                    m(ProgressRing, { fillLevel: .85, title: 'HTML', subtitle: 'CSS & SCSS' }),
                    m(ProgressRing, { fillLevel: .8, title: 'JavaScript', subtitle: '& TypeScript' }),
                    m(ProgressRing, { fillLevel: .9, title: 'ReactJS' }),
                    m(ProgressRing, { fillLevel: .6, title: 'GIT' }),
                )
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Languages'),
                m('div.sec',
                    m(ProgressRing, { fillLevel: 1, title: 'Polish', subtitle: 'Native' }),
                    m(ProgressRing, { fillLevel: .95, title: 'English', subtitle: 'C1/C2' })
                ),
            )
        )
    }
}

export default About