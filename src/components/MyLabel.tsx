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
}

export const MyLabel = ({ 
    label = 'No Label', 
    size = 'normal'
}: Props) => {
  return (
    <span className={ `${ size }` }>
       { label }
    </span>
  )
}
