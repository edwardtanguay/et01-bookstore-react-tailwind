interface IProps {
	bookId: number;
}

export const BookNotFound = ({ bookId } : IProps) => {
	return (
		<div className="flex flex-col items-center py-6 container px-8 gap-4">
			<p className="text-3xl">Book with id <span className="text-RED">{bookId}</span> not found.</p>
		</div>
	);
};
