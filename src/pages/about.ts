import m from 'mithril'
import '../styles/about.css'
import '../styles/main.css'
import GeoTagIcon from '../../bin/images/icons/map-pin.svg'
import CalendarIcon from '../../bin/images/icons/calendar.svg'

import ProgressRing from '../components/ring'

var About: m.Component = {
    view: () => {
        return m('div.content',
            m('img.avatar', {
                src: './images/gfx/profile_pic.jpg',
                alt: 'profile picture'
            }),
            m('h2.header_title', 'Paweł Stano'),
            m('div.icon_row',
                m('div',
                    m('img', { src: GeoTagIcon, alt: 'GeoTag' }),
                    m('p', 'Kraków, PL')
                ),
                m('div',
                    m('img', { src: CalendarIcon, alt: 'Calendar' }),
                    m('p', '2001')
                )
            ),
            m('div.summary', 'As a student in applied computer science actively contributing to various software projects, I\'m thrilled to explore discussions on any exciting new projects and work opportunities that may offer valuable learning experiences. I believe my skills and ongoing education can contribute meaningfully to their success. Let\'s connect and delve into the possibilities.'),
            m('section.vertical_sec',
                m('h2.section_title', 'Experience'),
                m('div',
                    m('h3.element_title',
                        m('a.company_link', {
                            href: 'https://onitsoft.com/en',
                            target: '_blank'
                        },
                            'Onit Soft'
                        ),
                        ' - Co-Founder & Software Engineer'
                    ),
                    m('h4.element_subtitle', 'since 09/2023'),
                    m('div.text_sec', 'Assuming a leading role presented a challenge to me; however, I found fulfillment in dedicating the majority of my time to what I love most about the job - coding. Noteworthy projects I\'ve been building for the company include designing and programming the company page, contributing to Sokar Logistics (a previously mentioned application, for which this company now serves as the product owner) & handling smaller projects such as clients\' websites.'),
                    m('div.chip_row',
                        m('div.chip', 'Web Development'),
                        m('div.chip', 'Full-Stack Development'),
                    )
                ),
                m('div',
                    m('h3.element_title',
                        m('a.company_link', {
                            href: 'https://magda-trans.pl',
                            target: '_blank'
                        },
                            'Magda-Trans'
                        ),
                        ' - IT Specialist'
                    ),
                    m('h4.element_subtitle', '01/2023 - 09/2023'),
                    m('div.text_sec', 'Together with a colleague, using web-based tools, we have built a system that integrates the cargo sales market, manages truck fleet, generates shipping documents and invoices, and provides an interface for employee management. I am currently responsible for the ongoing maintenence of the platform & adding new features.'),
                    m('div.chip_row',
                        m('div.chip', 'Front-End Development'),
                    )
                ),
                m('div',
                    m('h3.element_title',
                        m('a.company_link', {
                            href: 'https://magda-trans.pl',
                            target: '_blank'
                        },
                            'Magda-Trans'
                        ),
                        ' - Truck Dispatcher'
                    ),
                    m('h4.element_subtitle', '10/2021 - 12/2022'),
                    m('div.text_sec', 'I was responsible for a designated group of drivers operating primarily on the east coast of the USA. My tasks included finding optimal assignments, managing transportation documentation, and resolving any issues encountered by them.'),
                    m('div.chip_row',
                        m('div.chip', 'Negotiation'),
                        m('div.chip', 'English'),
                    )
                )
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Education'),
                m('div',
                    m('h3.element_title',
                        m('a.company_link', {
                            href: 'https://wsei.edu.pl',
                            target: '_blank'
                        },
                            'Wyższa Szkoła Ekonomii i Informatyki'
                        ),
                        ' - Applied Computer Science'
                    ),
                    m('h4.element_subtitle', '10/2022 - 03/2026'),
                    m('h4.element_subtitle', 'Specialisation: Programming & Data Analysis')
                ),
                m('br'),
                m('div',
                    m('h3.element_title',
                        m('a.company_link', {
                            href: 'https://tl.krakow.pl',
                            target: '_blank'
                        },
                            'Zespół Szkół Łączności w Krakowie'
                        ),
                        ' - IT Technician'
                    ),
                    m('h4.element_subtitle', '09/2017 - 04/2021'),
                    m('h4.element_subtitle', 'Apprenticeships:'),
                    m('ul.appreticeship_list',
                        m('li',
                            m('h4', 'Help Desk Intern at ',
                                m('a.company_link', {
                                    href: 'https://fideltronik.com/',
                                    target: '_blank'
                                },
                                    'Fideltronik'
                                ),
                                ' (12/2019)'
                            ),
                            m('p', 'I focused on troubleshooting and resolving current employees\' IT issues, ensuring minimal disruption to their workflow. I maintained meticulous records of problem resolutions, managed inventory, and provided timely and effective support to optimize the team\'s productivity.')
                        ),
                        m('li',
                            m('h4', 'Lab Admin Intern at ',
                                m('a.company_link', {
                                    href: 'https://www.nokia.com/',
                                    target: '_blank'
                                },
                                    'Nokia Solutions and Networks'
                                ),
                                ' (04/2019 - 05/2019)'
                            ),
                            m('p', 'During my time in Nokia I managed network devices located in the lab & catalogued them and troubleshooted computers sourced from various company sites.')
                        )
                    )
                ),
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Skills'),
                m('div.sec',
                    m(ProgressRing, { fillLevel: .85, title: 'HTML', subtitle: 'CSS & SCSS' }),
                    m(ProgressRing, { fillLevel: .8, title: 'JavaScript', subtitle: '& TypeScript' }),
                    m(ProgressRing, { fillLevel: .9, title: 'ReactJS' }),
                    m(ProgressRing, { fillLevel: .5, title: 'golang' }),
                    m(ProgressRing, { fillLevel: .6, title: 'GIT' }),
                )
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Languages'),
                m('div.sec',
                    m(ProgressRing, { fillLevel: 1, title: 'Polish', subtitle: 'Native' }),
                    m(ProgressRing, { fillLevel: .9, title: 'English', subtitle: 'C1/C2' })
                ),
            ),
            m('section.vertical_sec',
                m('h2.section_title', 'Certifications'),
                m('ul.appreticeship_list',
                    m('li',
                        m('h4', 'Cambridge Advanced English (CAE) - score 204'),
                    ),
                    m('li',
                        m('a.external_link', {
                            href: 'https://www.credly.com/users/pawel-stano.652a30d0/badges',
                            target: '_blank'
                        },
                            'See more on Credly'
                        )
                    )
                )
            ),
            m('section.decor_sec',
                m('div.wave_decor',
                    m('div.wave'),
                    m('div.wave'),
                    m('div.wave')
                )
            )
        )
    }
}

export default About