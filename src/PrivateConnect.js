import {connect} from 'react-redux';
import PrivateRoute from './PrivateRoute';

function mapStateToProps(state) {
    return {
        usuario: state.userMain.user,
        fetched: state.userMain.user!==null,
        verified: state.verified
    }
}

export default connect(mapStateToProps) (PrivateRoute);