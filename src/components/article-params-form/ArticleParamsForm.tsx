import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';
import { useOutsideClickClose } from './hooks/useClickOutsideClose';

type ArticleParamsFormProps = {
	onStateChange: (newState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	onStateChange,
}: ArticleParamsFormProps) => {
	const [open, setOpen] = useState(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);
	const asideRef = useRef<HTMLElement>(null);

	useOutsideClickClose({
		rootRef: asideRef,
		onChange: setOpen,
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onStateChange(formState);
	};

	const handleReset = () => {
		setFormState(defaultArticleState);
		onStateChange(defaultArticleState);
	};

	const toggleForm = () => {
		setOpen(!open);
	};

	const classNameAside = clsx({
		[styles.container]: true,
		[styles.container_open]: open,
	});

	return (
		<>
			<ArrowButton isOpen={open} onClick={toggleForm} />
			<aside className={classNameAside} ref={asideRef}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} uppercase align='center'>
						{'ЗАДАЙТЕ ПАРАМЕТРЫ'}
					</Text>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						title='Шрифт'
						placeholder='Выбирете шрифт'
						onChange={(option) =>
							setFormState({ ...formState, fontFamilyOption: option })
						}
					/>
					<RadioGroup
						name='font'
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						title='рАЗМЕР шрифта'
						onChange={(option) =>
							setFormState({ ...formState, fontSizeOption: option })
						}
					/>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						placeholder='Выбирете цыет шрифта'
						onChange={(option) =>
							setFormState({ ...formState, fontColor: option })
						}
					/>
					<Separator />
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						placeholder='Выбирете цыет фона'
						onChange={(option) =>
							setFormState({ ...formState, backgroundColor: option })
						}
					/>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						placeholder='Выбирете ширину контента'
						onChange={(option) =>
							setFormState({ ...formState, contentWidth: option })
						}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
