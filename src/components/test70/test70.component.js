import React from 'react'

const Test70 = ({ something, doSomething }) => (
  <form>
    <div>Test component 70: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test70
