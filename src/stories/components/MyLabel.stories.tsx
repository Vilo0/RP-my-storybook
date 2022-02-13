import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

// .bind() paraperder la referencia y que no muten los componentes
export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: 'h3',
};

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});