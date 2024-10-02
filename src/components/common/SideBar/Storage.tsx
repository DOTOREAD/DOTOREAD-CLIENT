import Acorn from '@/assets/Acorn.svg?react';
import styled from 'styled-components';

function Storage({ current, total }: { current: number; total: number }) {
	return (
		<StorageWrapper>
			<Acorn />
			<StorageCount>
				{current}/{total}
			</StorageCount>
		</StorageWrapper>
	);
}

export default Storage;

const StorageWrapper = styled.div`
	top: 25.3rem;
	position: relative;
`;
const StorageCount = styled.div`
	text-align: center;
	${({ theme }) => theme.fonts.Pretendard_Bold_20px};
	color: ${({ theme }) => theme.colors.orange1};
	top: 0.82rem;
	position: relative;
`;
