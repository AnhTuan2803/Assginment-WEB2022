const productWorks=[
    {
      id: 1,
      name: "Designing Dashboards",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654584687/images-Assignment/Rectangle_30_hazy3s.jpg",
      date: 2020,
      description: "Dashboard",
      shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
      id: 2,
      name: "Vibrant Portraits of 2020",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654584687/images-Assignment/Rectangle_32_mwjpyo.jpg",
      date: 2018,
      description: "Illustration",
      shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
      id: 3,
      name: "36 Days of Malayalam type",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654584687/images-Assignment/Rectangle_34_mqfpiu.jpg",
      date: 2018,
      description: "Typography",
      shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    id: 4,
    name: "Components",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654623762/images-Assignment/Rectangle_40_jz9zhi.png",
      date: 2018,
      description: "Components, Design",
      shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  ];
    
    function showProducts(products) {
      if (!Array.isArray(products) || products.length == 0) return false;
    
      let result = "";
      for (let i = 0; i < products.length; i++) {
          const product = products[i];
          result +=`<div
          class="project-item border-b border-[#E0E0E0] grid md:grid-cols-[246px,auto] gap-4 py-6"
        >
          <div>
          <a href="./workDetail.html?id=${product.id}">
            <img
              class="w-full"
              src="${product.img}"
              alt=""
            /></a>
          </div>
          <div>
            <h2
              class="text-[#21243D] font-bold text-[24px] md:text-3xl leading-[30px] md:leading-[44px]"
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
    