import SearchBar from './SearchBar';
import BellIcon from '@/assets/Bell.svg?react';
import HelpIcon from '@/assets/Help.svg?react';
import InformationIcon from '@/assets/Information.svg?react';
import LogoIcon from '@/assets/Logo.svg?react';
import PlusFileIcon from '@/assets/PlusFile.svg?react';
import styled from 'styled-components';

function Header() {
	return (
		<HeaderWrapper>
			<HeaderLeftContent>
				<LogoIcon />
				<SearchBar />
				<PlusFileIcon />
			</HeaderLeftContent>
			<HeaderRightContent>
				<BellIcon />
				<HelpIcon />
				<InformationIcon />
			</HeaderRightContent>
		</HeaderWrapper>
	);
}

export default Header;

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 17.3rem;
	padding: 7.6rem 16.3rem;
	background-color: ${({ theme }) => theme.colors.background};
`;

const HeaderLeftContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.8rem;
`;

const HeaderRightContent = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.6rem;
`;
