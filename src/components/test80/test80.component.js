import React from 'react'

const Test80 = ({ something, doSomething }) => (
  <form>
    <div>Test component 80: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test80
