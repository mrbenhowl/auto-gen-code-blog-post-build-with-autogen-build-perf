import React from 'react'

const Test26 = ({ something, doSomething }) => (
  <form>
    <div>Test component 26: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test26
