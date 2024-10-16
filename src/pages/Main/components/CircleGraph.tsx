import CircleProgressBar from './PrgressCircle';
import styled from 'styled-components';

function CircleGraph() {
	return (
		<CircleGraphWrapper>
			<CircleProgressBar progress={350} size={300} />
		</CircleGraphWrapper>
	);
}

export default CircleGraph;

const CircleGraphWrapper = styled.div`
	padding-top: 3.1rem;
`;
