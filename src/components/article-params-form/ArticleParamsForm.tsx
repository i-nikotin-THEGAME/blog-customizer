import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';


import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

type ArticleParamsFormProps = {
    state: ArticleStateType;
    onStateChange: (newState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({state, onStateChange}: ArticleParamsFormProps) => {
	const [open, setOpen] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Будет логика при применении изменений
    };

    const handleReset = () => {
        onStateChange(defaultArticleState);
    };

	return (
		<>
			<ArrowButton isOpen={open} onClick={() => setOpen(!open)} />
			<aside className={styles.container + ' ' + (open ? styles.container_open : '')}>
				<form className={styles.form} onSubmit={handleSubmit} onReset={handleReset}>
					<Text 
					children='ЗАДАЙТЕ ПАРАМЕТРЫ'
					as='h2'
					size={31}
					weight={800}
					uppercase={true}
					align='center'
					/>
					<Select 
					selected={state.fontFamilyOption} 
					options={fontFamilyOptions} 
					title='Шрифт'
					placeholder='Выбирете шрифт'
					onChange={(option) => onStateChange({...state, fontFamilyOption: option})}
					/>
					<RadioGroup 
					name='font' 
					options={fontSizeOptions} 
					selected={state.fontSizeOption} 
					title='рАЗМЕР шрифта'
					onChange={(option) => onStateChange({...state, fontSizeOption: option})}
					/>
					<Select 
					selected={state.fontColor}  
					options={fontColors} 
					title='Цвет шрифта'
					placeholder='Выбирете цыет шрифта'
					onChange={(option) => onStateChange({...state, fontColor: option})}
					/>
					<Separator />
					<Select 
					selected={state.backgroundColor}  
					options={backgroundColors} 
					title='Цвет фона'
					placeholder='Выбирете цыет фона'
					onChange={(option) => onStateChange({...state, backgroundColor: option})}
					/>
					<Select 
					selected={state.contentWidth}  
					options={contentWidthArr} 
					title='Ширина контента'
					placeholder='Выбирете ширину контента'
					onChange={(option) => onStateChange({...state, contentWidth: option})}
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
