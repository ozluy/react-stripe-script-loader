React Stripe Elements Loader
====

<img width="500" src="https://raw.githubusercontent.com/ozluy/react-stripe-script-loader/master/Screenshot%202019-09-10%20at%2022.39.54.png" />


```
<StripeScriptLoader />
```

<a href="http://ozluy.github.io/projects/react-stripe-elements-loader"> Demo </a>

install 
===
Install as a node module

`npm i  react-stripe-script-loader -S`


usage
===
```jsx
import React from 'react'
import StripeScriptLoader from 'react-stripe-script-loader'
import {
  StripeProvider,
  Elements,
  CardNumberElement,
} from 'react-stripe-elements'

const PageWithStripeElements = () => (
  <div>
    <h1>Stripe Elements</h1>
    <StripeScriptLoader
      uniqueId='myUniqueId'
      script='https://js.stripe.com/v3/'
      loader="Loading..."
    >
      <StripeProvider apiKey="stripeApiKey">
        <Elements>
          <CardNumberElement />
        </Elements>
      </StripeProvider>
    </StripeScriptLoader>
  </div>
)

export default PageWithStripeElements
```

props
===
 #### uniqueId `string` 
 unique id for script element
 
 #### script `string` 
 script to load
 
 #### loader `ReactElement`
 string, React elements array, React component
 

Buy me a coffee ☕️
===
[![Buy Me a Coffee](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/ozluy)

Thanks

Yusuf Özlü