import React from 'react'

const Test46 = ({ something, doSomething }) => (
  <form>
    <div>Test component 46: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test46
