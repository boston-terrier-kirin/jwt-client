import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signup } from '../../actions/user';

const Signup = (props) => {
	const { handleSubmit, handleSignup, history, errorMessage } = props;

	const onSubmit = (formProps) => {
		handleSignup(formProps, () => {
			history.push('/feature');
		});
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<fieldset>
				<label>Email</label>
				<Field
					name="email"
					type="text"
					component="input"
					autoComplete="none"
				/>
			</fieldset>
			<fieldset>
				<label>Password</label>
				<Field
					name="password"
					type="password"
					component="input"
					autoComplete="none"
				/>
			</fieldset>
			<div>{errorMessage}</div>
			<button>Sign Up!</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		errorMessage: state.auth.errorMessage,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleSignup: (formProps, callback) => {
			dispatch(signup(formProps, callback));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({ form: 'signup' })
)(Signup);
