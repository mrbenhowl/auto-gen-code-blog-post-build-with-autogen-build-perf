import React from 'react'

const Test93 = ({ something, doSomething }) => (
  <form>
    <div>Test component 93: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test93
