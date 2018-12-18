import React from 'react'

const Test25 = ({ something, doSomething }) => (
  <form>
    <div>Test component 25: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test25
