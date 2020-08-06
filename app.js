


var books=[{
    "img":'https://i.dr.com.tr/cache/500x400-0/originals/0000000726638-1.jpg',
    'name':"Homo Deus",
    'author':"Yuval Noah Harari",
    'format':"Digital",
    'quantity':1,
    'price': 13.5,
},{
    "img":'https://i.dr.com.tr/cache/500x400-0/originals/0000000147956-1.jpg',
    'name':"Filler Sultanı ve Kırmızı Sakallı Topal Karınca",
    'author':"Yaşar Kemal",
    'format':"Digital",
    'price': 4.75,
    'quantity':5,
},
{
    "img":"https://i.dr.com.tr/cache/500x400-0/originals/0001719390001-1.jpg",
    'name':"Momo",
    'author':"Micheal Ende",
    'format':"Paperback",
    'price': 2.75,
    'quantity':1,
}];

var sub_total=subtotal(books);
var _total=total(sub_total);

new Vue({
    el:'#app',
    data:{
        subtotal:sub_total,
        total:_total,
        books:books,
    },
    methods:{
        remove(index){
            this.books.splice(index,1);
            this.subtotal=subtotal(this.books);
            this.total=total(this.subtotal);
        },
        increase: function(item) {
            item.quantity++;
           this.subtotal=subtotal(this.books);
           this.total=total(this.subtotal);
        },
        decrease:  function(item) {
            if(item.quantity>1){
                item.quantity--;
                this.subtotal=subtotal(this.books);
                this.total=total(this.subtotal);
             }

           
        }
    }

})

function subtotal(array){
    var total=0;
    array.forEach(element => {
        total+=element.quantity*element.price;
    });
    return total;
}

function total(subtotal){
    return subtotal+2;
}





