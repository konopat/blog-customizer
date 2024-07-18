import { useState, FormEvent } from 'react';
import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import styles from './ArticleParamsForm.module.scss';
import { FormState, OptionType, SidebarProps } from 'src/types';
import clsx from 'clsx';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';
import { Text } from '../text';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';

export const ArticleParamsForm: React.FC<SidebarProps> = ({
	isOpen,
	toggleSidebar,
	sidebarRef,
	toggleButtonRef,
	defaultStyleState,
	setStyleState,
}) => {
	// Исходное состояние формы
	const initialFormState: FormState = {
		fontFamily: defaultStyleState.fontFamilyOption,
		fontSize: defaultStyleState.fontSizeOption,
		fontColor: defaultStyleState.fontColor,
		backgroundColor: defaultStyleState.backgroundColor,
		contentWidth: defaultStyleState.contentWidth,
	};

	// Состояние формы
	const [formState, setFormState] = useState<FormState>(initialFormState);

	// Обработка отправки и сброса формы
	const handleFormAction = (
		evt: FormEvent<HTMLFormElement>,
		resetForm: boolean
	) => {
		evt.preventDefault();
		if (resetForm) {
			// Сброс состояния формы и стилей
			setFormState(initialFormState);
			setStyleState(defaultArticleState);
		} else {
			// Применение выбранных стилей
			setStyleState({
				fontFamilyOption: formState.fontFamily,
				fontColor: formState.fontColor,
				backgroundColor: formState.backgroundColor,
				contentWidth: formState.contentWidth,
				fontSizeOption: formState.fontSize,
			});
		}
	};

	// Обновление состояния формы при изменении полей
	const handleChange = (field: keyof FormState, value: OptionType) => {
		setFormState((prevState) => ({
			...prevState,
			[field]: value,
		}));
	};

	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				toggleSidebar={toggleSidebar}
				theRef={toggleButtonRef}
			/>
			<aside
				ref={sidebarRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={(evt) => handleFormAction(evt, false)}
					onReset={(evt) => handleFormAction(evt, true)}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						title='Шрифт'
						selected={formState.fontFamily}
						options={fontFamilyOptions}
						onChange={(value) => handleChange('fontFamily', value)}
					/>
					<RadioGroup
						name={'font-size-field'}
						options={fontSizeOptions}
						selected={formState.fontSize}
						title={'Размер шрифта'}
						onChange={(value) =>
							handleChange(
								'fontSize',
								fontSizeOptions.find((option) => option === value)!
							)
						}
					/>
					<Select
						title='Цвет шрифта'
						selected={formState.fontColor}
						options={fontColors}
						onChange={(value) => handleChange('fontColor', value)}
					/>
					<Separator />
					<Select
						title='Цвет фона'
						selected={formState.backgroundColor}
						options={backgroundColors}
						onChange={(value) => handleChange('backgroundColor', value)}
					/>
					<Select
						title='Ширина контента'
						selected={formState.contentWidth}
						options={contentWidthArr}
						onChange={(value) => handleChange('contentWidth', value)}
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
