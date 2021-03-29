import Itemtarjeta from './Itemtarjeta';
import datos from '../rickandmorty.json';

function Tarjetas() {
    return(

        <div className="uk-grid-column-small uk-grid-row-large uk-child-width-1-3@s uk-text-center container" uk-grid="true">
                {datos.map(function (item, idx) {
                    return (
                        < Itemtarjeta name={item.name} status={item.status} species={item.species} origin={"Earth (C-137)"} image={item.image} key={idx} />
                    )
                })} 
        </div>

        );
}
export default Tarjetas;
