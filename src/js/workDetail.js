const productList=[
    {
      id: 1,
      name: "Big and Juicy Wagyu Beef Cheeseburger",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image_drggsn.png",
      date: 30,
      description: "Snack",
      shortDescription:"ngon",
  },
  {
      id: 2,
      name: "Fresh Lime Roasted Salmon",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image4_jndbim.png",
      time: 30,
      type: "Fish",
  },
  {
      id: 3,
      name: "The Best Easy One Pot Chicken and Rice",
      img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image5_zwralv.png",
      time: 30,
      type: "Snack",
  },
  {
    id: 4,
    name: "Fresh and Healthy Mixed Mayonnaise",
    img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695401/images-Lab3/image1_midunz.png",
    time: 30,
    type: "Healthy",
  },
  {
  id: 5,
  name: "The Creamiest Creamy Chicken",
  img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image2_guybjl.png",
  time: 30,
  type: "Noodles",
  },
  {
  id: 6,
  name: "Fruity Pancake with Orange & Blueberry",
  img: "https://res.cloudinary.com/dn3jydehx/image/upload/v1654695402/images-Lab3/image3_hju3rr.png",
  time: 30,
  type: "Sweet",
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
      result +=`
      <h2 class="font-black text-4xl">
       ${product.name}
      </h2>`;
      return result;
  };
  function showImage(products){
    //Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if(!Array.isArray(products) || products.length ==0) return false;
    let result = "";
  
    //Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    //thì trả về object đấy
    const product = products.find((item) => item.id ==id);
    
    //Trả về kết quả là một chuỗi
    result +=`
    <img class="w-full" src="${product.img}" alt="" />`;
    return result;
  };
  
  document.getElementById("detail").innerHTML = showProduct(productList);
  document.getElementById("image").innerHTML = showImage(productList);