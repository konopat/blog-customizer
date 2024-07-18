import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';
import { useSidebar } from './hooks/use-sidebar.hook';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const { isOpen, toggleSidebar, sidebarRef, toggleButtonRef } = useSidebar();
	const [styleState, setStyleState] = useState(defaultArticleState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': styleState.fontFamilyOption.value,
					'--font-size': styleState.fontSizeOption.value,
					'--font-color': styleState.fontColor.value,
					'--container-width': styleState.contentWidth.value,
					'--bg-color': styleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				toggleSidebar={toggleSidebar}
				sidebarRef={sidebarRef}
				toggleButtonRef={toggleButtonRef}
				defaultStyleState={styleState}
				setStyleState={setStyleState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
