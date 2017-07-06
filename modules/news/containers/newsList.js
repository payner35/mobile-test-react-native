/* @flow */
import {connect} from 'react-redux';
import newsList from '../components/newsList';
import { compose } from 'react-apollo';
import { bindActionCreators } from 'redux';


const mapStateToProps = ({news}, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(newsList);
