import React, { useState, useEffect } from 'react'
import loadScript from './loadScript'

const StripeScriptLoader = ({
  children,
  uniqueId,
  script,
  loader = <>Loading...</>,
}) => {
  const [stripeLoaded, setStripeLoaded] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const result = await loadScript(script, uniqueId)
      setStripeLoaded(result)
    }
    fetchData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return stripeLoaded.successful ? children : loader
}
export default StripeScriptLoader
