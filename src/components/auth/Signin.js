import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { signin } from '../../actions/user';

const Signin = (props) => {
	const { handleSubmit, handleSignin, history, errorMessage } = props;

	const onSubmit = (formProps) => {
		handleSignin(formProps, () => {
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
			<button>Sign In!</button>
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
		handleSignin: (formProps, callback) => {
			dispatch(signin(formProps, callback));
		},
	};
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	reduxForm({ form: 'signin' })
)(Signin);
