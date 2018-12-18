import React from 'react'

const Test50 = ({ something, doSomething }) => (
  <form>
    <div>Test component 50: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test50
