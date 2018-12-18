import React from 'react'

const Test49 = ({ something, doSomething }) => (
  <form>
    <div>Test component 49: {something}</div>
    <button onClick={doSomething}>
      Do something
    </button>
  </form>
)

export default Test49
