const products = [
    {
      id: 1,
      name: 'casBasic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 2,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
      id: 3,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    }, {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },{
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },{
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },{
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },{
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
  ]
/**
 * 
 * @param {*} req ( params => url dinamicas, query => query param,
 *  (POST, PUT, PATCH) body => body param)
 * @param {*} res 
 */
const getAll = async(req,res)=>{
    /** consulta a bd all products */
    let filterP = products;
    if(req.query.name){
        filterP = products.filter((person)=>{
            return person.name.toLowerCase().includes(req.query.name.toLowerCase())
        })
    }
    res.json(filterP)
}

const createUser = async (req,res)=>{
    /** parametros por el body body */
    console.log(req.body);
    res.json({data:'METHOD POST'})
}

const deleteUser =  async (req,res)=>{
    res.json({data:'METHOD DELETE'})
}

const findFilter = async(req,res)=>{
    // consulta por id
    let product = products.filter((product)=>{return product.id == req.params.id });
    //ROUTER DYNAMIC  (params) => object 
    console.log(req.params);
    //Query Param (query) => object
    console.log(req.query)
    res.json({data:'GET FILTER', params:req.params, query:req.query, product})
}

module.exports = {getAll,createUser,deleteUser,findFilter}