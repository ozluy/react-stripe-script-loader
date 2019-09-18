import React from 'react'

class StripeScriptLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stripeLoaded: {},
    }
    this.loadScript = this.loadScript.bind(this)
  }

  async componentWillMount() {
    const { script, uniqueId } = this.props
    const stripeLoaded = await this.loadScript(script, uniqueId)
    this.setState({ stripeLoaded })
  }

  loadScript(src, uniqueId) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.getElementById(uniqueId)

      if (!scriptElement) {
        const script = document.createElement('script')
        script.src = src
        script.id = uniqueId

        const handleLoadScriptSuccess = () => resolve({ successful: true })
        const handleLoadScriptFail = event => reject({ error: event })

        script.addEventListener('load', handleLoadScriptSuccess, {
          once: true,
        })
        script.addEventListener('error', handleLoadScriptFail, { once: true })
        document.head.appendChild(script)
      } else {
        resolve({ successful: true })
      }
    })
  }

  render() {
    const { stripeLoaded } = this.state
    const { children, loader } = this.props

    return <div>{stripeLoaded.successful ? children : loader}</div>
  }
}

StripeScriptLoader.defaultProps = {
  loader: 'Loading...',
  uniqueId: 'myUniqueId',
  script: 'https://js.stripe.com/v3/',
}

export default StripeScriptLoader
