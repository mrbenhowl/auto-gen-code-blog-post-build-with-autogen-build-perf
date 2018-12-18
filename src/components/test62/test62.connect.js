import { connect } from 'react-redux'
import { actions as testActions, selectors as testSelectors } from '../../reducers/test.reducer'

const mapStateToProps = state => ({
  something: testSelectors.getSomething(state)
})

const mapDispatchToProps = dispatch => ({
  doSomething: () =>
    dispatch(testActions.doSomething())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
