const productPosts=[
    {
      id: 1,
      title: "UI Interactions of the week",
      date: "12 Feb 2019",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      shortDescription:"Express, Handlebars",
  },
  {
    id: 2,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortDescription:"Express, Handlebars",
},
{
    id: 3,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortDescription:"Express, Handlebars",
},
{
    id: 4,
    title: "UI Interactions of the week",
    date: "12 Feb 2019",
    description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    shortDescription:"Express, Handlebars",
},
  ];
    
    function showProducts(products) {
      if (!Array.isArray(products) || products.length == 0) return false;
    
      let result = "";
      for (let i = 0; i < products.length; i++) {
          const product = products[i];
          result +=` <div class="border-b border-[#E0E0E0] py-6">
          <h2
            class="text-[#21243D] md:text-[30px] text-[26px] font-medium leading-[44px]"
          >
            <a href="">${product.title}</a>
          </h2>
          <div class="md:my-3 my-2 md:text-xl text-[16px]">
            <span
              class="text-xfont-normal text-[#21243D] pr-6 border-r border-[#000000]"
              >${product.date}</span
            ><span class="font-normal text-[#8695A4] pl-6"
              >${product.shortDescription}</span
            >
          </div>
          <p class="font-normal text-base text-[#21243D]">
            ${product.description}
          </p>
        </div>`;
      }
      return result;
    }
    
    document.getElementById("products").innerHTML = showProducts(productPosts);
    