import { useEffect } from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions/user';

const Signout = (props) => {
	const { handleSignout } = props;

	useEffect(() => {
		handleSignout();
	}, [handleSignout]);

	return <div>Sorry to see you go</div>;
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSignout: () => {
			dispatch(signout());
		},
	};
};

export default connect(null, mapDispatchToProps)(Signout);
