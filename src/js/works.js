const productWorks=[
  {
    id: 1,
    name: "Food page Designing",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654873546/images-Assignment/Screenshot_2022-06-10_220447_gebnfd.png",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
    id: 2,
    name: "Shop Authority Pro",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874762/images-Assignment/Screenshot_2022-06-10_222245_ojmkwb.png",
    date: 2022,
    description: "Home and Products",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
  id: 3,
  name: "Assignment JavaScript",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654914787/images-Assignment/Screenshot_2022-06-11_093219_f4twp3.png",
    date: 2022,
    description: "SlideShow Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
    id: 4,
    name: "School Website Design",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874763/images-Assignment/Screenshot_2022-06-10_222530_crswvq.png",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
  id: 5,
  name: "School Website Design Demo",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874762/images-Assignment/Screenshot_2022-06-10_221933_cjj5gc.png",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},  
  ];
    
    function showProducts(products) {
      if (!Array.isArray(products) || products.length == 0) return false;
    
      let result = "";
      for (let i = 0; i < products.length; i++) {
          const product = products[i];
          result +=`<div
          class="hover:shadow hover:bg-gray-50 duration-300 border-b border-[#E0E0E0] grid md:grid-cols-[246px,auto] gap-4 py-6"
        >
          <div>
          <a href="./workDetail.html?id=${product.id}">
            <img
              class="w-full h-full rounded-lg"
              src="${product.img}"
              alt=""
            /></a>
          </div>
          <div>
            <h2
              class="hover:text-red-500 text-[#21243D] font-bold text-[24px] md:text-3xl leading-[30px] md:leading-[44px]"
            >
              <a href="./workDetail.html?id=${product.id}">${product.name}</a>
            </h2>
            <div class="space-x-8 leading-[60px]">
              <span
                class="text-lg inline-block font-black bg-[#142850] text-[#ffffff] rounded-2xl px-2.5"
                >${product.date}</span
              ><span class="text-[#8695A4] font-normal text-xl"
                >${product.description}</span
              >
            </div>
            <p class="font-normal text-base text-[#21243D]">
              ${product.shortDescription}
            </p>
          </div>
        </div>`;
      }
      return result;
    }
    
    document.getElementById("products").innerHTML = showProducts(productWorks);
    