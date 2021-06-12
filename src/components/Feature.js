import requireAuth from './requireAuth';

const Feature = () => {
	return <div>Feature</div>;
};

export default requireAuth(Feature);
