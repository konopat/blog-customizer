import { useState, useEffect, useRef } from 'react';

// Универсальный хук для управления сайдбаром
export const useSidebar = () => {
	// Актуальное состояние
	const [isOpen, setIsOpen] = useState<boolean>(false);

	// Ссылка на сайдбар
	const sidebarRef = useRef<HTMLDivElement>(null);

	// Ссылка на кнопку управления сайдбаром (может быть внешней)
	const toggleButtonRef = useRef<HTMLDivElement>(null);

	// Переключить состояние
	const toggleSidebar = () => {
		setIsOpen((prevState) => !prevState);
	};

	// Закрыть (пока используется только внутри хука)
	const closeSidebar = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		// При нажатии на клавишу 'Escape'
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				closeSidebar();
			}
		};

		// При нажатии во вне открытого сайдбара
		const handleClickOutside = (event: MouseEvent) => {
			// Обозначаем зону сайдбара
			if (
				// Собственно сайдбар должен быть открытым
				sidebarRef.current &&
				!sidebarRef.current.contains(event.target as Node) &&
				// Кнопка управления сайдбаром должна также игнорироваться, у нее есть своя функция
				// Изолируем ее из outside зоны, чтобы события кнопки и outside не накладывались друг на друга
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(event.target as Node)
			) {
				closeSidebar();
			}
		};

		// Слушаетели
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return { isOpen, toggleSidebar, sidebarRef, toggleButtonRef };
};
