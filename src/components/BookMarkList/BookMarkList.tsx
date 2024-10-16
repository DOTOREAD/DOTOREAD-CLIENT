import Default from '../common/BookMarkList/Default';
import ListItem from '../common/BookMarkList/ListItem';
import LineBetweenBookmark from '@/assets/LineBetweenBookmark.svg?react';
import React from 'react';
import styled from 'styled-components';

interface Bookmark {
	id: string;
	name: string;
	hashtag: string;
	url: string;
	date: string;
}
interface BookMarkListProps {
	bookmarks: Bookmark[];
}

function BookMarkList({ bookmarks }: BookMarkListProps) {
	return (
		<BookMarkListWrapper>
			{bookmarks.length > 0 ? (
				bookmarks.map((bookmark, index) => (
					<React.Fragment key={bookmark.id}>
						<ListItem name={bookmark.name} hashtag={bookmark.hashtag} url={bookmark.url} date={bookmark.date} />
						{index < bookmarks.length - 1 && (
							<LineWrapper>
								<LineBetweenBookmark />
							</LineWrapper>
						)}
					</React.Fragment>
				))
			) : (
				<DefaultWrapper>
					<Default message="북마크가 없습니다." />
				</DefaultWrapper>
			)}
		</BookMarkListWrapper>
	);
}

export default BookMarkList;

const BookMarkListWrapper = styled.div`
	position: absolute;
	width: 132rem;
	left: 2.8rem;
	top: 14.9rem;
	max-height: 70rem;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 0.7rem;
		height: 19.6rem;
	}

	&::-webkit-scrollbar-track {
		background: none;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 15px;
		width: 0.7rem;
		background: ${({ theme }) => theme.colors.white2};
	}
`;

const LineWrapper = styled.div`
	display: flex;
	align-items: center;
`;
const DefaultWrapper = styled.div`
	position: absolute;
`;
