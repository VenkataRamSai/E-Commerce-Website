const wrapper=document.querySelector(".wrapper")
const items=document.querySelectorAll(".b_item")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
let choosen_product=products[0];
let p_item=document.querySelector(".p_item");
let p_title=document.querySelector(".p_title");
let p_price=document.querySelector(".p_price");
let p_color=document.querySelectorAll(".color")
let p_size=document.querySelectorAll(".size");
  items.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;
        choosen_product=products[index]
        p_title.textContent=choosen_product.title;
        p_price.textContent="$" + choosen_product.price;
        p_item.src=choosen_product.colors[0].img;
        p_color.forEach((color,index)=>{
            color.style.backgroundColor=choosen_product.colors[index].code;
        })
    });
});

p_color.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        p_item.src=choosen_product.colors[index].img;
    })
})
p_size.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        p_size.forEach((size)=>{
            size.style.backgroundColor="white";
        size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    })
})

let buy_now=document.querySelector(".p_button");
let close=document.querySelector(".close");
let payment=document.querySelector(".payment");
buy_now.addEventListener("click",()=>{
  payment.style.display="flex";
})
close.addEventListener("click",()=>{
  payment.style.display="none";
})
