// Функция для обработки открытия/закрытия формы
export type OnClick = () => void;

// Интерфейс для пропсов кнопки переключения состояния сайдбара
export interface SidebarToggleButtonProps {
	isOpen: boolean; // Статус сайдбара
	toggleSidebar: OnClick; // Для переключения статуса сайдбара
	theRef: React.RefObject<HTMLDivElement>; // Для изоляции кнопки из outside зоны
}

// Интерфейс для пропсов сайдбара
export interface SidebarProps {
	isOpen: boolean; // Статус сайдбара
	toggleSidebar: OnClick; // Для переключения статуса сайдбара
	sidebarRef: React.RefObject<HTMLDivElement>; // Для определения сайдбара
	toggleButtonRef: React.RefObject<HTMLDivElement>; // Для изоляции кнопки из outside зоны
}
