import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS =[
  {id :'p1',price:6 ,
  title:'My First Book' ,
  description:'The first book I read'
 },
 {id :'p2',price:3 ,
 title:'My First1 Book' ,
 description:'The first book I read'
},
{id :'p3',price:8 ,
title:'My First3 Book' ,
description:'The first book I read'
},
{id :'p4',price:9 ,
title:'My First4 Book' ,
description:'The first book I read'
},
{id :'p5',price:7 ,
title:'My First5 Book' ,
description:'The first book I read'
},
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product=> <ProductItem
        key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}
        />)}
       
      </ul>
    </section>
  );
};

export default Products;
