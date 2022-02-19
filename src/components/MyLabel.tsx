import './myLabel.css';

export interface Props {
    /**
    * Este es el mensaje que se mostrará en la etiqueta
    */
    label: string;
    /**
    * Este es el tamaño por defecto del label
    */
    size: 'normal' | 'h1'| 'h2'| 'h3';

    /**
    * Este es el color que tendrá el label
    */
    color: 'primary' | 'secondary' | 'tertiary';

    /**
    * Este es la opción de capizalizar el texto
    */
    allCaps: boolean;
}

export const MyLabel = ({ 
    label = 'No Label', 
    size = 'normal',
    allCaps = false,
    color = 'primary',
}: Props) => {
  return (
    <span className={ `${ size } text-${color}` }>
       { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
