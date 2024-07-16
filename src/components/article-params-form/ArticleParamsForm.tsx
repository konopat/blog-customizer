import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SidebarProps } from 'src/types';
import clsx from 'clsx';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';
import {
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

export const ArticleParamsForm: React.FC<SidebarProps> = ({
	isOpen,
	toggleSidebar,
	sidebarRef,
	toggleButtonRef,
}) => {
	return (
		<>
			<ArrowButton
				isOpen={isOpen} // // Передаем состояние сайдбара
				toggleSidebar={toggleSidebar} // Передаем функцию для переключения состояния сайдбара
				theRef={toggleButtonRef} // Передаем ссылку для изоляции кнопки из outside зоны
			/>
			<aside
				ref={sidebarRef} // Передаем ссылку для определения сайдбара
				// В зависимости от состояния сайдбара меняем стили
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={fontFamilyOptions[0]}
						options={fontFamilyOptions}
					/>
					<RadioGroup
						name={'font-size-field'}
						options={fontSizeOptions}
						selected={fontSizeOptions[0]}
						title={'Размер шрифта'}
					/>
					<Select
						title='Цвет шрифта'
						selected={fontColors[0]}
						options={fontColors}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={backgroundColors[0]}
						options={backgroundColors}
					/>
					<Select
						title='Ширина контента'
						selected={contentWidthArr[0]}
						options={contentWidthArr}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
