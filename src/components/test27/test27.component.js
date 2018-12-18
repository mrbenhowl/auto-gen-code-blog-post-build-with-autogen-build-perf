import React from 'react'

const Test27 = ({ something, doSomething }) => (
  <form>
    <div>Test component 27: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test27
