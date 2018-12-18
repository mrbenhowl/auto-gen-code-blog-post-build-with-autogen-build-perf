import React from 'react'

const Test35 = ({ something, doSomething }) => (
  <form>
    <div>Test component 35: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test35
