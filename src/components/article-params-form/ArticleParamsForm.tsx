import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { SidebarProps } from 'src/types';
import clsx from 'clsx';

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
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
