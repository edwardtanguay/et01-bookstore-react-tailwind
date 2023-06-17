export const PageAbout = () => {
	return (
		<div>
			<p className="py-6">
				This site was refactored from{' '}
				<a
					className="text-blue-600 hover:underline"
					href="https://github.com/edwardtanguay/et01-bookstore-react-tailwind-unrefactored"
				>
					this site
				</a>{' '}
				for learning purposes.
			</p>
			<p>
				Thanks to{' '}
				<a
					className="text-blue-600 hover:underline"
					href="https://github.com/adelorosia"
				>
					Adel
				</a>{' '}
				for the original site created with Tailwind.
			</p>
		</div>
	);
};
