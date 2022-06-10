const productWorkDetails=[
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
        ${product.shortDescription}
      </p>
    </div>
    <div class="my-8">
      <img
        class="w-full"
        src="${product.img}"
        alt=""
      />
    </div>`;
      return result;
  };
  
  document.getElementById("detail").innerHTML = showProduct(productWorkDetails);