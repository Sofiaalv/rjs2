import { Fragment } from "react";
import CardProduct from "../CardProduct/CardProduct";


const ItemListContainer = () => {

    return(
    
        <Fragment> 
            <CardProduct product="Tazon" price={1000}/>
            <CardProduct product="Maceta" price={900}/>
            <CardProduct product="Cuadro" price={1500}/>
            <CardProduct product="Mesa Ratona" price={5000}/>
        </Fragment>
    )

}

export default ItemListContainer;