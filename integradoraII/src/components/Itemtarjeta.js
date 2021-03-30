function Itemtarjeta(props) {
    return(

        <div className="uk-card uk-card-default uk-card-body">
            
                        <div className="uk-card-media-top">
                            <img src={props.image} alt=""/>
                        </div>
                        <div className="uk-card-body">
                            <ul className="uk-list uk-list-striped">
                                <li>{props.name}</li>
                                <li>{props.status}</li>
                                <li>{props.species}</li>
                                <li>{props.origin}</li>
                            </ul>
                        </div>
        </div>


        );
}
export default Itemtarjeta;
