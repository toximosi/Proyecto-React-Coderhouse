//Css
import '../../scss/principal.scss';
//React
import React, { useState, useEffect } from 'react';
//Datos de SCSS
import variables from '../../scss/uikit/color.module.scss'
//componentes propios UiKIt
import CardColor from './element/CardColor/CardColor';
//componentes web
//Card
import CardProducto from '../cards/CardProducto/CardProducto';


function UiKit() {
    const [color, setColor] = useState();
    
   /* useEffect(() => {
        const promesa = new Promise((res, rej) => {
            res(variables);
            //console.log(`variables: ${variables}`);//
            //console.log(color);
        });
        promesa
            .then(data => setColor(data))
            .catch(console.log('error en promesa de UiKit'))
            .finally(console.log(color))
        
    }, [])*/
    
    
    //const [color, setColor] = useState(variables)
  
    //console.log(variables.map(color => color));

    return (
    <>
        <h1>UiKit</h1>
        <section>
            <h2>Colores</h2>
                <div className="elementos">
                    <CardProducto />
                    <CardColor />
            </div>
        </section>
    </>
    )

};
export default UiKit;