import React from 'react'

const Test85 = ({ something, doSomething }) => (
  <form>
    <div>Test component 85: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test85
