import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton } from './ArrowButton';
import React from 'react';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: () => {
		return (
			<>
				<ArrowButton
					isOpen={false}
					toggleSidebar={function (): void {
						throw new Error('Function not implemented.');
					}}
					theRef={React.createRef()}
				/>
			</>
		);
	},
};
