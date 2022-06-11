const productWorkDetails=[
  {
    id: 1,
    name: "Food page Designing",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654873546/images-Assignment/Screenshot_2022-06-10_220447_gebnfd.png",
    img1:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654877395/images-Assignment/Screenshot_2022-06-10_230713_npvyya.png",
    img2:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654877396/images-Assignment/Screenshot_2022-06-10_230555_rwrys4.png",
    img3:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654877394/images-Assignment/Screenshot_2022-06-10_230836_qsqq77.png",
    linkWeb:"https://lab3-web2022-seven.vercel.app/",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
    id: 2,
    name: "Shop Authority Pro",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874762/images-Assignment/Screenshot_2022-06-10_222245_ojmkwb.png",
    img1:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654878922/images-Assignment/Screenshot_2022-06-10_233350_j3jdlw.png",
    img2:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654878922/images-Assignment/Screenshot_2022-06-10_233502_kgbay4.png",
    linkWeb:"https://36tvvx.csb.app/",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
  id: 3,
  name: "Assignment JavaScript",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654914787/images-Assignment/Screenshot_2022-06-11_093219_f4twp3.png",
    img1:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916348/images-Assignment/Screenshot_2022-06-11_095635j_xunfva.png",
    img2:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916347/images-Assignment/Screenshot_2022-06-11_095738j_sztwtf.png",
    img3:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916348/images-Assignment/Screenshot_2022-06-11_095835j_llwe6c.png",
    linkWeb:"https://convmx.csb.app/",
    date: 2022,
    description: "SlideShow Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
{
    id: 4,
    name: "School Website Design",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874763/images-Assignment/Screenshot_2022-06-10_222530_crswvq.png",
    img1:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916960/images-Assignment/Screenshot_2022-06-11_100715a_yy9twp.png",
    img2:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916960/images-Assignment/Screenshot_2022-06-11_100812a_oasfd5.png",
    img3:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654916960/images-Assignment/Screenshot_2022-06-11_100859a_zlywgp.png",
    linkWeb:"https://cr74yv.csb.app/",
    date: 2022,
    description: "Home Page",
    shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
},
  {
    id: 5,
    name: "School Website Design Demo",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654874762/images-Assignment/Screenshot_2022-06-10_221933_cjj5gc.png",
      img1:"https://res.cloudinary.com/dn3jydehx/image/upload/v1654879387/images-Assignment/Screenshot_2022-06-10_234229_k63cmp.png",
      linkWeb:"https://hv3l2v.csb.app/",
      date: 2022,
      description: "Home Page",
      shortDescription:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  
  ];
  
  //Lấy ID trên url
  const id = new URLSearchParams(window.location.search).get("id");
  
  function showProduct(products){
      //Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
      if(!Array.isArray(products) || products.length ==0) return false;
      let result = "";
  
      //Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
      //thì trả về object đấy
      const product = products.find((item) => item.id ==id);
      
      //Trả về kết quả là một chuỗi
      result +=`<div>
      <div class="md:mb-4 md:mt-24 mt-8">
        <h2
          class="md:max-w-[506px] md:text-[34px] text-[30px] font-bold leading-[40px] md:leading-[49px] text-[#21243D]"
        >
          ${product.name}
        </h2>
      </div>
      <div class="space-x-4 my-6">
        <span
          class="text-lg inline-block font-black bg-[#FF7C7C] text-[#ffffff] rounded-2xl px-2.5"
          >${product.date}</span
        ><span class="text-[#21243D] font-normal text-[18px] md:text-xl"
          >${product.description}</span
        >
      </div>
      <p class="font-normal text-base leading-[23px]">
        ${product.shortDescription}</br><span class="font-medium">Link Website: </span><a class="font-normal text-base text-red-600 hover:underline hover:decoration-1" href="${product.linkWeb}">${product.linkWeb}</a>
      </p>
    </div>
    <div class="my-8">
      <img
        class="shadow-xl w-full"
        src="${product.img}"
        alt=""
      />
    </div>
    <div class="md:mt-12">
    <h2
      class="text-[26px] my-2 md:text-3xl font-medium leading-[40px] md:leading-[50px] text-[#21243D]"
    >
    Other pages
    </h2>
    <p class="text-[#000000] font-normal text-base leading-[23px]">
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
      sint. Velit officia consequat duis enim velit mollit. Exercitation
      veniam consequat sunt nostrud amet.
    </p>
  </div>
  <div class="shadow-xl my-8">
    <img
      class="w-full"
      src="${product.img1}"
      alt=""
    />
  </div>
  <div class="shadow-xl my-8">
    <img
      class="w-full"
      src="${product.img2}"
      alt=""
    />
  </div>
  <div class="shadow-xl my-8">
    <img
      class="w-full"
      src="${product.img3}"
      alt=""
    />
  </div>`;
      return result;
  };
  
  document.getElementById("detail").innerHTML = showProduct(productWorkDetails);