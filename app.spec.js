var {mount} =require('@vue/test-utils');
// The component to test
const MessageComponent = {
  template: `
  <div>
  <div v-for="item in books">
  <div class="col-5">
                        
  <img v-bind:src="item.img">
  <ul style="list-style-type:none">
      <li>{{item.name}}</li>
      <li>{{item.author}}</li>
  </ul>            
    </div>

<div class="col-2 info-2">
  <span>{{item.format}}</span>
</div>

<div class="col-2 ">
  <div class="qty mt-5">
      <span class="minus bg-dark" id="minus" v-on:click="decrease(item)">-</span>
      <input type="number" class="count" name="qty" v-bind:value="item.quantity">
      <span class="plus bg-dark" v-on:click="increase(item)">+</span>

  </div>
</div>

<div class="col-2 info-2">
  <span>$ <b>{{item.price}}</b></span>
</div>

<div class="col-1 info-2">
  <a href="#" class="secondary" v-on:click="remove(index)"><img src="https://img.icons8.com/material-rounded/24/000000/delete-forever.png"/></a>
</div>
</div>
</div>`,
  props: ['books']
}

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(MessageComponent, {
    propsData: {
      books: [{
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
    }]
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain(`Momo`)
})
