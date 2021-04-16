import {connect} from 'react-redux'
import IncrementUI from '../../components/IncrementUI/index'
import {
    createDecrementAction,
    createIncrementAction,
    createAsynccrementAction
} from './../../redux/count_action'

interface stateType {
    [index:string]:object
}

function mapStateToProps (state:stateType) {
    return {count:state.countData}
} 
function mapDispatchToProps (dispatch:Function) {
    return {
        createDecrementAction:(data:number)=>dispatch(createDecrementAction(data)),
        createIncrementAction:(data:number)=>dispatch(createIncrementAction(data)),
        createAsynccrementAction:(data:number,time:number)=>dispatch(createAsynccrementAction(data,time))
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(IncrementUI)