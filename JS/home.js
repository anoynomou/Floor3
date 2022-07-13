// Chose Image functions
/*
  <div class="Card" style="background-image: url(./FoodImage//Chiken.jpg);">
            <div class="CardOption" >

                <div class="ordername">
                    <h2>Chiken Fry</h2>
                    <h1 class="orderprise">TK : 399</h1>
                </div>

                <div class="placeorder">
                    <button class="btn">Place Order</button>
                    <h4>beef chees spicial barger with creem chees and naga mayo</h4>
                </div>

            </div> 

            <div class="otherphotobox">
             
                <div    class="otherphoto" style="background-image: url('./FoodImage//Chiken.jpg');"></div>
                <div  class="otherphoto" style="background-image: url('https://img.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg?t=st=1657610228~exp=1657610828~hmac=91bbe2f732f3f54296e4c51e5eae07aaf795a545c113c35a50c27e9ca166a6df&w=1380');"></div>
                <div    class="otherphoto" style="background-image: url('https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?t=st=1657610228~exp=1657610828~hmac=bdbf3a197b87d7318f59795572c5ea06f356278715a7e9e239a459896775c457&w=1380');"></div>
            </div>
        </div>






        
        <div class="Card"  style="background-image: url(./FoodImage//Wings.jpg);">
            <div class="CardOption" >

                <div class="ordername">
                    <h2>Chiken Wings</h2>
                    <h1 class="orderprise">TK : 199</h1>
                </div>

                <div class="placeorder">
                    <button class="btn">Place Order</button>
                    <h4>beef chees spicial barger with creem chees and naga mayo</h4>
                </div>

            </div> 


            <div class="otherphotobox">

                <div class="otherphoto" style="background-image: url('https://img.freepik.com/free-photo/delicious-cheeseburger_1232-503.jpg?t=st=1657610228~exp=1657610828~hmac=91bbe2f732f3f54296e4c51e5eae07aaf795a545c113c35a50c27e9ca166a6df&w=1380');"></div>
                <div class="otherphoto" style="background-image: url('https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg?t=st=1657610228~exp=1657610828~hmac=bdbf3a197b87d7318f59795572c5ea06f356278715a7e9e239a459896775c457&w=1380');"></div>
            </div>

        </div>



*/


function AttachEventToFood(){
    var allfoodcard =document.getElementById('CardBox').childNodes;


    for(var i = 0 ; i < allfoodcard.length;i++){
        if(allfoodcard[i].nodeName =="DIV"){
         Eventseter(allfoodcard[i])
        }
    
    }
    
}
function AttachEventToJuce(){
    var alljucecard =document.getElementById('JuceBox').childNodes;
    for(var i = 0 ; i < alljucecard.length;i++){
        if(alljucecard[i].nodeName =="DIV"){
         Eventseter(alljucecard[i])
        }
    
    }
}



function Eventseter(allcard){
    const childs = allcard.lastElementChild.children
    for(let i = 0 ;i< childs.length;i++){
        if(childs[i].onclick === null){
            childs[i].onclick = ()=>{ 
                allcard.style = `background-image : ${childs[i].style['background-image']}`
                //childs[i].style['background-image'].toString()
                //print(childs[i].style['background-image'])
              }
        }

    }
}

//---print function
function print(x){
    console.log(x)
}

//Genarate Card

var CardMaker = (name,prise,discription,photos=[])=>{
    var CARDMainDiv = document.createElement("div")
    CARDMainDiv.setAttribute("class","Card")
    CARDMainDiv.style.backgroundImage = `url(${photos[0]?photos[0]:"../FoodImage/rice.jpg"})`

    var AllPhotos = ``
    for(let i = 0;i<photos.length;i++){
      AllPhotos+=`<div class="otherphoto" style="background-image: url(${photos[i]?photos[i]:"../FoodImage/rice.jpg"});"></div>`
    }


    CARDMainDiv.innerHTML =`
    <div class="CardOption" >

    <div class="ordername">
        <h2>${name}</h2>
        <h1 class="orderprise">TK : ${prise}</h1>
    </div>

    <div class="placeorder">
        <button onclick="redop('./placeorder.html')" class="btn">Place Order</button>
        <h4>${discription}</h4>
    </div>
</div> 


    <div class="otherphotobox">
        ${
          AllPhotos
        }
    </div>  
      `
return(CARDMainDiv)
}





//Food Datas

var CardPhotos = [

]
//

var allfood={
    Food:[
        {name:"Beef Barger",prise:"199",discription:"Gril beef with spanish chees and barger sauce",photos:[
           'https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-lettuce_2829-16493.jpg?t=st=1657698001~exp=1657698601~hmac=6be74dde4b2b27eb01dfaa1791b4cd49cd80b9144db27b43a3d94af825336903&w=1380',
           'https://img.freepik.com/free-photo/sandwich-with-chicken-burger-tomatoes-cheese-lettuce_2829-16293.jpg?t=st=1657695127~exp=1657695727~hmac=89c80702ad22e16eb2a6784099b1aacf20f13c8b9c6d0bc1bafb60d1e2beb77f&w=1380'
        ]},
        {name:"Chiken Fry",prise:"199",discription:"Farm chiken Fry with crispy flex",photos:[
             'https://img.freepik.com/free-photo/crispy-fried-chicken-plate-with-salad-carrot_1150-20212.jpg?t=st=1657698001~exp=1657698601~hmac=d078cf20a2ce3981057c8eb81aff023ddd751871b9c370c86309be7b235f26ab&w=1380'
        ]},
        {name:"ChikenTandury",prise:"299",discription:"Turky Chiken with indian spices ",photos:[
            'https://img.freepik.com/free-photo/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table_1150-37858.jpg?t=st=1657698001~exp=1657698601~hmac=9d04c3be5916469214747c7ba2d9de8e788c892edf330ea9b3855ab6cdb411fa&w=1380',
            'https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37864.jpg?t=st=1657691440~exp=1657692040~hmac=54a6401b5e3345e25bf40530de9cabcd2e4aa1659ff34dcb2d967743b7eddec8&w=1380'
        ]},
        {name:"Rosted  Chiken",prise:"299",discription:"Turky Chiken roste with apicy tomato sauce",photos:[
            'https://img.freepik.com/free-photo/baked-chicken-wings-asian-style-tomatoes-sauce-plate_2829-10657.jpg?t=st=1657698001~exp=1657698601~hmac=c277c48156e178d5275a4fa69bf7b40afc135940fd1283b1822720ead54d7ed5&w=1380'
        ]},
        {name:"Chef spacial Salad",prise:"199",discription:"Green vegetable  with avocado and olivs",photos:[
            'https://img.freepik.com/free-photo/pasta-colored-farfalle-salad-with-tomatoes-mozzarella-basil_2829-14368.jpg?t=st=1657698001~exp=1657698601~hmac=f3a661c966a53680821abf8074416880e545a7d754eedddc3c9e06abb73459a2&w=1380'
        ]},
        {name:"Pasta",prise:"149",discription:"Pasta cooked with vegetable and chef special sauce",photos:[
            'https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-8727.jpg?t=st=1657698283~exp=1657698883~hmac=e5c1462b5ca4fb6a4c8f29fa74b7056d7f5b1c042061356deded14a715bc3310&w=1380',
            'https://img.freepik.com/free-photo/pasta-fettuccine-bolognese-with-tomato-sauce-white-bowl_2829-20035.jpg?t=st=1657691799~exp=1657692399~hmac=9b54e04992151261fcee25df46410038f1c67ad0edf0afaec481d19827b5cebd&w=1380'
        ]},
        {name:"Chines Rice",prise:"1̶9̶9̶  149",discription:"Basmati rice with vegetable and shrimp",photos:[
            'https://img.freepik.com/free-photo/american-shrimp-fried-rice-served-with-chili-fish-sauce-thai-food_1150-26580.jpg?t=st=1657698001~exp=1657698601~hmac=622fde48b9badd131f71680297947637a92c7db276cc1282e801a515c0bc6682&w=1380',
            'https://img.freepik.com/free-photo/fried-rice-with-eggs-white-plate-wood-surface_1150-20710.jpg?t=st=1657686041~exp=1657686641~hmac=538209911ee63961ede00316790c36323eae5d10127d34402586d92a499b5312&w=1380',
            'https://img.freepik.com/free-photo/fermented-pork-fried-rice-served-with-fresh-cucumber_1150-27382.jpg?t=st=1657686041~exp=1657686641~hmac=89b264b65bb6c26d7cb4636bc6d47d611cf1b7e4f4bf23097847b86099b1bd63&w=1380'
        ]}

    ],
    Juce:[

        {name:"Orange Lemonade",prise:"79",discription:"100% Fresh Orange ,no preservatives added",photos:[
            'https://static.toiimg.com/thumb/53962071.cms?imgsize=50021&width=800&height=800',
    
            'https://img.freepik.com/free-photo/fresh-oranges-falling-juice_144627-18438.jpg?w=1380'
        ]},

        {name:"Fresh Orange Juce",prise:"59",discription:"100% Fresh Orange ,no preservatives added",photos:[    
          
            'https://img.freepik.com/free-photo/orange-juce-glass-cup-jug-with-orange-slices_176474-6151.jpg?t=st=1657695479~exp=1657696079~hmac=21eb0f4e5f1b60d55273b6e57dc983352fbf2fae356a8f3f0a521da00f6578cf&w=740'
            ,'https://www.cookwithkushi.com/wp-content/uploads/2020/07/IMG_4629s.jpg'
        ]},

        {name:"Lemon mojito",prise:"49",discription:"100% Fresh Lemon ,no preservatives added",photos:[
                
            'https://img.freepik.com/free-photo/mojito-drink-with-lime-lemon-mint-wood-table_1150-12269.jpg?t=st=1657695633~exp=1657696233~hmac=e8a48c00d4678b074ec10184c17e6464e60267c4f4fc7a3fc9b6843918383265&w=1380',
               
                'https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/14391865846FIEKPsSpb.jpeg'
        
            ]},

        {name:"Lemon smoothie",prise:"99",discription:"100% Fresh Lemon,no preservatives added",photos:[ 
            'https://www.jessicagavin.com/wp-content/uploads/2017/04/healthy-orange-julius-smoothie-1200.jpg',
                'https://allnutribulletrecipes.com/wp-content/uploads/2019/02/lemon-orange-smoothie.jpg'
            

            ]},
            {name:"Mango juce",prise:"79",discription:"100% Fresh Mango ,no preservatives added",photos:[ 
                'https://www.whiskaffair.com/wp-content/uploads/2021/06/Mango-Juice-2-3.jpg'
                
    
                ]}

    ]
}


var JUCE_BOX = document.getElementById("JuceBox")
var FOOD_BOX = document.getElementById("CardBox")

allfood.Juce.forEach((juce)=>{
    JUCE_BOX.appendChild(CardMaker(juce.name,juce.prise,juce.discription,juce.photos))
})
allfood.Food.forEach((food)=>{
    FOOD_BOX.appendChild(CardMaker(food.name,food.prise,food.discription,food.photos))
})




AttachEventToFood()
AttachEventToJuce()

function redop(url){
    document.location.href = url
}


//document.getElementById("JuceBox").appendChild(CardMaker("apple","500","This is for vip ",CardPhotos))
