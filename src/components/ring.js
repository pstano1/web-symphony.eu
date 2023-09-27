import m from 'mithril'
import '../styles/ring.css'

const ProgressRing = {
    view: (vnode) => {
        const fillLevel = vnode.attrs.fillLevel || 0
        const title = vnode.attrs.title || ''
        const subtitle = vnode.attrs.subtitle || ''

        return m('div.ring_container',
            m('canvas', {
                width: 144,
                height: 144,
                oncreate: (canvasNode) => {
                    const canvas = canvasNode.dom
                    const ctx = canvas.getContext('2d')
                    var size = 144
                    canvas.style.width = size + "px"
                    canvas.style.height = size + "px"

                    var scale = window.devicePixelRatio
                    canvas.width = size * scale
                    canvas.height = size * scale

                    const centerX = canvas.width / 2
                    const centerY = canvas.height / 2
                    const radius = canvas.width / 2.2
                    const initialEndAngle = -1.6
                    const targetEndAngle = -1.6 + (vnode.attrs.fillLevel * (Math.PI * 2))

                    ctx.clearRect(0, 0, canvas.width, canvas.height)

                    const animationSteps = 60
                    const animationStep = (targetEndAngle - initialEndAngle) / animationSteps

                    const animateRing = (currentStep) => {
                        ctx.clearRect(0, 0, canvas.width, canvas.height)

                        const currentEndAngle = initialEndAngle + animationStep * currentStep

                        ctx.beginPath()
                        ctx.arc(centerX, centerY, radius, initialEndAngle, currentEndAngle)
                        ctx.lineWidth = 16
                        ctx.strokeStyle = '#70F09A'
                        ctx.lineCap = 'round'
                        ctx.stroke()

                        ctx.setTransform(1, 0, 0, 1, 0, 0)

                        if (currentStep < animationSteps) {
                            requestAnimationFrame(() => animateRing(currentStep + 1))
                        }
                    }

                    animateRing(0)
                }
            }),
            m('div.text_container', 
                m('h4', title),
                m('h4', subtitle)
            )
        )
    },
}

export default ProgressRing