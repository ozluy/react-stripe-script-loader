const loadScript = (src, uniqueId) =>
  new Promise((resolve, reject) => {
    const scriptElement = document.getElementById(uniqueId)

    if (!scriptElement) {
      const script = document.createElement('script')
      script.src = src
      script.id = uniqueId

      const handleLoadScriptSuccess = () => resolve({ successful: true })
      const handleLoadScriptFail = event => reject({ error: event })

      script.addEventListener('load', handleLoadScriptSuccess, { once: true })
      script.addEventListener('error', handleLoadScriptFail, { once: true })
      document.head.appendChild(script)
    } else {
      resolve({ successful: true })
    }
  })

export default loadScript
