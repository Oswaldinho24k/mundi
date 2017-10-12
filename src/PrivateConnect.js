import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';

function mapStateToProps(state) {
    return {
        usuario: state.userMain.user,
        fetched: state.userMain.user!==null
    }
}

export default connect(mapStateToProps) (PrivateRoute);