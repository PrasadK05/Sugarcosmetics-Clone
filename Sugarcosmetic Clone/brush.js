let data=[
  {
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-006Highlighter.jpg?v=1627660002",
  name:"BLEND TREND FACE BRUSH-006 HIGH LIGHTER",
  price: 399,
  rating:"4.7(23)",
  id:"Face Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-003Contour.jpg?v=1627659996",
  name:"BLEND TREND FACE BRUSH-003 CONTOUR",
  price: 399,
  rating:"4.5(23)",
  id:"Face Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-5-min.jpg?v=1627573639",
  name:"BLEND TREND DUAL EYESHADOW BRUSH-412 FLAT+ROUND",
  price: 599,
  rating: "5(2)",
  id:"Eye Shadow Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-13.jpg?v=1627659977",
  name:"BLEND TREND DUAL EYESHADOW BRUSH-413 FLAT+ROUND XL",
  price: 599,
  rating: "5(2)",
  id:"Eye Shadow Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-12-min.jpg?v=1627573647",
  name:"BLEND TREND DUAL FACE BRUSH-075 POWDER+FOUNDATION",
  price: 599,
  rating: "4.8(42)",
  id:"Face Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-2-min.jpg?v=1627573652",
  name:"BLEND TREND DUAL EYESHADOW BRUSH-041 FLAT",
  price: 399,
  rating: "5(3)",
  id:"Eye Shadow Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-3-min.jpg?v=1627573657",
  name:"BLEND TREND DUAL EYESHADOW BRUSH-042 ROUND",
  price: 399,
  rating: "4.4(5)",
  id:"Eye Shadow Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/Blend-Trend-WBG-images-14_1.jpg?v=1627659982",
  name:"BLEND TREND DUAL EYESHADOW BRUSH-043 ROUND XL",
  price: 399,
  rating: "4.8(6)",
  id:"Eye Shadow Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFoundationBrush-052Kabuki.jpg?v=1627573664",
  name:"BLEND TREND FOUNDATION BRUSH-052 KABUKI",
  price: 399,
  rating: "4.8(26)",
  id:"Foundaton Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-007Powder.jpg?v=1627660008",
  name:"BLEND TREND DUAL FACE BRUSH-007 POWDER",
  price: 399,
  rating: "4.9(24)",
  id:"Face Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BlendTrendFaceBrush-001Blush.jpg?v=1627659984",
  name:"BLEND TREND FACE BRUSH-001 BLUSH",
  price: 399,
  rating: "4.9(15)",
  id:"Face Brush"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/BeginnersEssentialsCombo3-WBGimages.jpg?v=1630683820",
  name:"FACE ESSENTIAL COMBO",
  price: 1499,
  rating: "5(1)",
  id:"Brush Combo"
},

{
  image:"https://cdn.shopify.com/s/files/1/0906/2558/products/1_1.jpg?v=1630683833",
  name:"EYE & FACE COMBO",
  price: 649,
  rating: "4.5(6)",
  id:"Brush Combo"
},
]
display(data)

// ------Filter Function-----------
document.querySelector("#filt").addEventListener("change", myFilt)

function myFilt(){
  let x=document.querySelector("#filt").value
  if(x=="remove"){
      display(data)
  }else{
  let m=data.filter(function(el){
      return el.id==x
      })
      display(m)
      }
}
// ------Sort Function-----------
document.querySelector("#srt").addEventListener("change", mySort)

function mySort(){
  let y=document.querySelector("#srt").value
  if(y=="remove"){
      display(data)
  }else if(y=="asc"){
      let n=data.sort(function(a,b){
          return (a.price-b.price)
      })
      display(n)
  }else if(y=="desc"){
      let o=data.sort(function(a,b){
          return (b.price-a.price)
      })
      display(o)
      }
}

// -------display Function-------

function display(data){
  document.querySelector("#mainProd").innerHTML=""
data.map(function(el,i){
  let x=data.length
  document.querySelector("#cnt").innerText=x
  let div=document.createElement("div")
  let img=document.createElement("img")
  img.src=el.image
  let p1=document.createElement("p")
  p1.innerText=el.name
  let p2=document.createElement("p")    
  p2.innerText= "Rs"+" "+el.price
  let p3=document.createElement("p")
  p3.innerText="Rating :-"+" "+el.rating
  let btn=document.createElement("button")
  btn.innerText="ADD TO CART"
  btn.addEventListener("click", function(){
      addTocart(el)
  })
  div.append(img,p1,p2,p3,btn)
  document.querySelector("#mainProd").append(div)
})
}

let aCart=JSON.parse(localStorage.getItem("cart")) || []

function addTocart(el){
aCart.push(el)
localStorage.setItem("cart",JSON.stringify(aCart))
}