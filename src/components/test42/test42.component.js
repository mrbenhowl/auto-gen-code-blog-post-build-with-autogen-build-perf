import React from 'react'

const Test42 = ({ something, doSomething }) => (
  <form>
    <div>Test component 42: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test42
