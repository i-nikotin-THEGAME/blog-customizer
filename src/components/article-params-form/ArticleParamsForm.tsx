import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';


import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import { Text } from 'src/ui/text';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions } from 'src/constants/articleProps';
import { Separator } from 'src/ui/separator';

export const ArticleParamsForm = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<ArrowButton isOpen={open} onClick={() => setOpen(!open)} />
			<aside className={styles.container + ' ' + (open ? styles.container_open : '')}>
				<form className={styles.form}>
					<Text 
					children='ЗАДАЙТЕ ПАРАМЕТРЫ'
					as='h2'
					size={31}
					weight={800}
					uppercase={true}
					align='center'
					/>
					< Select selected={fontFamilyOptions[0]} options={fontFamilyOptions} title='Шрифт'/>
					< RadioGroup name='font' options={fontSizeOptions} selected={fontSizeOptions[0]} title='рАЗМЕР шрифта'/>
					< Select selected={fontColors[0]}  options={fontColors} title='Цвет шрифта'/>
					<Separator />
					< Select selected={backgroundColors[0]}  options={backgroundColors} title='Цвет фона'/>
					< Select selected={contentWidthArr[0]}  options={contentWidthArr} title='Ширина контента'/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
