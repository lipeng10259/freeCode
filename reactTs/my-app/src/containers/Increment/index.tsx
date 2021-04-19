import {connect} from 'react-redux'
import IncrementUI from '../../components/IncrementUI/index'
import {Dispatch} from 'redux'
import {
    createDecrementAction,
    createIncrementAction,
    // createAsyncIncrementAction,
    EnthusiasmAction,
    // AsyncIncremmentEnthusiasm
} from '../../redux/actions/count_action'

interface stateType {
    [index:string]:number
}

function mapStateToProps (state:stateType) {
    return {count:state.countData}
} 
function mapDispatchToProps (dispatch:Dispatch<EnthusiasmAction>) {
    return {
        createDecrementAction:(data:number)=>dispatch(createDecrementAction(data)),
        createIncrementAction:(data:number)=>dispatch(createIncrementAction(data)),
        // createAsyncIncrementAction:(data:number,time:number)=>dispatch(createAsyncIncrementAction(data,time))
    }
} 
export default connect(mapStateToProps,mapDispatchToProps)(IncrementUI)