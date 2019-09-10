React Stripe Script Loader
====

<img width="500" src="https://raw.githubusercontent.com/ozluy/react-stripe-script-loader/master/Screenshot%202019-09-10%20at%2022.39.54.png" />


```
<StripeScriptLoader />
```

<a target="_blank" rel="noopener noreferrer" href="http://ozluy.github.io/projects/react-stripe-script-loader"> Demo </a>

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
 


<a href="https://paypal.me/ozluy"> <img src="https://github.com/ozluy/react-stripe-script-loader/blob/master/buy-me-a-coffee-with-paypal.png" /></a>

Thanks

Yusuf Özlü
