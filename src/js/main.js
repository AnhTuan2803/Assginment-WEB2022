const user= {
      name: "Tuan",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654607870/images-Assignment/avata_idfhou.jpg",
      age: 19,
      address: "Tuyen Quang",
      description: "I am a young person passionate about website design. With my acquired knowledge as well as creativity, experience and responsibility at work, I hope to be able to contribute in some way to the development of the company.",
  };
    
    function showUser(product) {
      if (product.length == 0) return false;
      let result = "";
          result +=`<div
          class="text-center md:text-left md:col-span-2 order-2 md:order-1"
        >
          <h2
            class="font-bold text-[32px] text-[#21243D] md:leading-tight md:text-5xl"
          >
            Hi, I am ${product.name},<br />
            Website Designer
          </h2>
          <p class="my-7 text-base font-normal text-[#21243D]">
         I am ${product.age} years old, from ${product.address}, ${product.description}
          </p>
          <a
            href=""
            class="text-[#ffffff] hover:shadow-lg hover:shadow-red-500 bg-[#FF6464] px-5 py-3.5 rounded font-medium text-xl"
          >
            Download Resume
          </a>
        </div>
        <div class="md:col-span-1 order-1 md:order-2">
          <img
            class="bg-[#EDF7FA] w-48 h-48 md:w-60 md:h-60 rounded-full mx-auto md:ml-auto md:mr-0"
            src="${product.img}"
            alt=""
          />
        </div>`;
      
      return result;
    }
    
    document.getElementById("user").innerHTML = showUser(user);
    
    // object works in home
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
      
      function showProductWorks(products) {
        if (!Array.isArray(products) || products.length == 0) return false;
      
        let result = "";
        for (let i = 0; i < 3; i++) {
            const product = products[i];
            result +=` <div
            class="hover:shadow-lg hover:bg-gray-50 duration-300 shadow project-item border-b border-[#E0E0E0] grid md:grid-cols-[246px,auto] gap-4 py-6"
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
                class="text-[#21243D] hover:text-red-500 font-bold text-[24px] md:text-3xl leading-[30px] md:leading-[44px]"
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
      
      document.getElementById("productWorks").innerHTML = showProductWorks(productWorks);

      //object posts in home

      const productPosts=[
        {
          id: 1,
          title: "Making a design system from scratch",
          date: "12 Feb 2021",
          description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
          shortDescription:"Design, Pattern",
      },
      {
        id: 2,
        title: "Creating pixel perfect icons in Figma",
        date: "12 Feb 2021",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        shortDescription:"Figma, Icon Design",
    },
      ];
        
        function showProductPosts(products) {
          if (!Array.isArray(products) || products.length == 0) return false;
        
          let result = "";
          for (let i = 0; i < products.length; i++) {
              const product = products[i];
              result +=`<div class="bg-[#ffffff] rounded p-6 leading-none">
              <h2
                class="leading-9 hover:text-red-500 font-bold text-[22px] md:text-[26px] text-[#21243D]"
              >
              <a href="">${product.title}</a>
              </h2>
              <div class="my-4">
                <span
                  class="text-lg font-normal text-[#21243D] pr-6 border-r border-[#000000]"
                  >${product.date}</span
                ><span class="text-lg font-normal text-[#21243D] pl-6"
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
        
        document.getElementById("productPosts").innerHTML = showProductPosts(productPosts);