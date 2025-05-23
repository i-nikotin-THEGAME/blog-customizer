import { useEffect } from 'react';

type UseOutsideClickClose = {
	rootRef: React.RefObject<HTMLElement>;
	onChange: (newValue: boolean) => void;
};

export const useOutsideClickClose = ({
	rootRef,
	onChange,
}: UseOutsideClickClose) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent) => {
			if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
				onChange?.(false);
			}
		};

		window.addEventListener('mousedown', handleClick);

		return () => window.removeEventListener('mousedown', handleClick);
	}, [onChange]);
};
