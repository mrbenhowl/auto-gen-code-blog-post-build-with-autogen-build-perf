import React from 'react'

const Test34 = ({ something, doSomething }) => (
  <form>
    <div>Test component 34: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test34
