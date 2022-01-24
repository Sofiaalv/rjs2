

const ItemListContainer = [
    {
        id:0,
        name:"Tazon",
        description: "Tazon ceramica",
        price: 1000
    },
    {
        id:1,
        name:"Maceta",
        description: "Maceta ceramica",
        price: 1000
    },
    {
        id:2,
        name:"Cuadro",
        description: "Cuadro madera",
        price: 1000
    },
    {
        id:3,
        name:"Mesa Ratona",
        description: "Mesa Ratona ceramica",
        price: 1000
    },
];



export function getItemListContainer () {

    return new Promise ((resolve,eject)=>{
        setTimeout(()=> resolve(ItemListContainer), 4000);
    });
    };

export default ItemListContainer;