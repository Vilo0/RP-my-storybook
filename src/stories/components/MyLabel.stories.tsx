import { MyLabel } from '../../components/MyLabel';

export default {
    title: 'UI/MyLabel',
    component: MyLabel,
}

const Template = () => <MyLabel />

// .bind() paraperder la referencia y que no muten los componentes
export const Basic = Template.bind({});

export const AllCaps = Template.bind({});

export const Secondary = Template.bind({});