const items = {
    "16338872427374515044": {
        "id": "16338872427374515044",
        "title": "Wrangler Authentics Men's Long Sleeve Heavyweight Fleece Shirt, Red Buffalo Plaid, Large",
        "price": 499,
        "quantity": 1,
        "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQPj7aOCQEuWBpiDuPPG4EW23RDFYeUuHp3WHkFGpgb6UgdfFV5sRYbWeXhbywizXH6O888xqngD669Tted_6DG4Q_-csiO&usqp=CAE"
    },
    "1362027436337942980": {
        "id": "1362027436337942980",
        "title": "Men's Relaxed Short-Sleeve Pattern Poplin Shirt in Multi Stripe Size Xs from Hollister",
        "price": 499,
        "quantity": 1,
        "image": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTKnxOT2tXmZFSlXnvEEPKtIt4XiR7kNSDbg-FNndBAq-B37cCG7v0hWMUiKHJCkZmcXNObIuxxpE6gO5G3I3mlIYaKOITaOw&usqp=CAE"
    },
    "11612890207943737035": {
        "id": "11612890207943737035",
        "title": "Newshows Women's Solid Long Sleeve Knit Crew Neck Button Stretch Casual Pullover Sweater",
        "price": 499,
        "quantity": 1,
        "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6upk5hg9dlwjUNPVkx7BYYL4YRmM_LrZGe3GeggNT29WCIxSAuf8PRcSrKm23MdUGNLFU9BJA3CGpQx5WeihpOYZMmHJh&usqp=CAE"
    }
}


// iterate over the items object and create a new array of objects

const itemsArray = Object.keys(items).map((key) => {
    console.log(items[key])
})