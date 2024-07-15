import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import { SidebarToggleButtonProps } from 'src/types';
import clsx from 'clsx';

export const ArrowButton: React.FC<SidebarToggleButtonProps> = ({
	isOpen,
	toggleSidebar,
	theRef,
}) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			ref={theRef} // Передаем ссылку для изоляции кнопки из outside зоны
			onClick={toggleSidebar} // По клику переключаем состояние сайдбара
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			// В зависимости от состояния сайдбара меняем стили кнопки
			className={clsx(styles.container, isOpen && styles.container_open)}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};
