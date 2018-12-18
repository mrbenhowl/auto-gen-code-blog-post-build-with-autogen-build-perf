import React from 'react'

const Test20 = ({ something, doSomething }) => (
  <form>
    <div>Test component 20: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test20
