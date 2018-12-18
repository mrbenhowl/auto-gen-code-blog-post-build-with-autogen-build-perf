import React from 'react'

const Test31 = ({ something, doSomething }) => (
  <form>
    <div>Test component 31: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test31
