import React from 'react'

const Test21 = ({ something, doSomething }) => (
  <form>
    <div>Test component 21: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test21
