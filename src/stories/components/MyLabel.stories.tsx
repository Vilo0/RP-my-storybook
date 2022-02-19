import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' }, // por defecto agrega todas las opciones, pero puedes usar el options en el caso de querer seleccionar solo algunas opciones
        color: { control: 'select' },
    }
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel { ...args } />

// .bind() paraperder la referencia y que no muten los componentes
export const Basic = Template.bind({});
Basic.args = {
    label: 'Basic Label',
    size: 'normal',
    allCaps: false // true: capitalizar toda la palabra
};

export const AllCaps = Template.bind({});
AllCaps.args = {
    size: 'normal',
    allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
    size: 'normal',
    color: 'secondary', // primary | secondary | tertiary
    allCaps: false,
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
    allCaps: false,
}