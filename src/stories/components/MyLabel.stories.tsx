import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
    argTypes: {
        size: { control: 'select' }, // por defecto agrega todas las opciones, pero puedes usar el options en el caso de querer seleccionar solo algunas opciones
        color: { control: 'select' },
        // fontColor: { control: 'color' } // por defecto siempre trata de hacer lo mejor posible para identificar que opcion se le esta entregando, en este caso color
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
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac',
}

// CustomFontColor
// fontColor: #5517ac
// size: h1