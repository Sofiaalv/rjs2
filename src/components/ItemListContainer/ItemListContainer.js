

const ItemListContainer = [
    {
        id:0,
        img:"https://images.pexels.com/photos/4466209/pexels-photo-4466209.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Tazon",
        description: "Tazon ceramica",
        price: 1000
    },
    {
        id:1,
        img: "https://images.pexels.com/photos/7393994/pexels-photo-7393994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        name:"Maceta",
        description: "Maceta ceramica",
        price: 1000
    },
    {
        id:2,
        img:"https://images.pexels.com/photos/6447391/pexels-photo-6447391.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name:"Cuadro",
        description: "Cuadro madera",
        price: 1000
    },
    {
        id:3,
        img: "https://images.pexels.com/photos/7018406/pexels-photo-7018406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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