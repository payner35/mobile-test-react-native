/* @flow */
import {connect} from 'react-redux';
import footerNav from '../components/footerNav';
import { compose } from 'react-apollo';
import { bindActionCreators } from 'redux';



const mapStateToProps = ({core}, ownProps) => ({

});


const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(footerNav);
