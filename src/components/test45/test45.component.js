import React from 'react'

const Test45 = ({ something, doSomething }) => (
  <form>
    <div>Test component 45: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test45
