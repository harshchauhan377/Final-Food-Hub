import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import "../styles/body.css"; 

const Body = () => {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate('/cartpage');
  };

  useEffect(() => {
    const productContainers = document.querySelectorAll('.product-container');
    const nxtBtn = document.querySelectorAll('.nxt-btn');
    const preBtn = document.querySelectorAll('.pre-btn');

    productContainers.forEach((item, i) => {
      let containerDimensions = item.getBoundingClientRect();
      let containerWidth = containerDimensions.width;

      const scrollNext = () => item.scrollLeft += containerWidth;
      const scrollPrev = () => item.scrollLeft -= containerWidth;

      nxtBtn[i].addEventListener('click', scrollNext);
      preBtn[i].addEventListener('click', scrollPrev);

      return () => {
        nxtBtn[i].removeEventListener('click', scrollNext);
        preBtn[i].removeEventListener('click', scrollPrev);
      };
    });
  }, []);
// Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <header>
      <nav className="logo-container">
        <img src="foodhub-logo.png" alt="logo" className="logo-1" />
    </nav>
    <nav>
        <ul className="nav-linkss">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Restaurant</a></li>
            <li><a href="#">About</a></li>
            <li><Link to="/auth">Log In</Link></li>
            <li>
              <button onClick={goToCart} className="cart-button">
                <FiShoppingCart size={24} />
              </button>
            </li>

        </ul>
    </nav>
      </header>
        <div className="slider">

    <div className="list">
        
        <div className="item active">
            <img src="./fries.png" />
        </div>
        <div className="item">
            <img src="./pizza.png" />
        </div>
        <div className="item">
            <img src="./momos.png" />
        </div>
        <div className="item">
            <img src="./noodels.png" />
        </div>
        <div className="item">
            <img src="./pasta.png" />
        </div>
        <div className="item">
            <img src="./sandwich.png" />
        </div>
        <div className="item">
            <img src="./ice cream.png" />
        </div>
        <div className="item">
            <img src="./brownie.png" />
        </div>
    </div>
    <div className="circle">
        {/* FOOD-HUB * FOOD-HUB * FOOD-HUB * FOOD-HUB * FOOD-HUB * */}
    </div>
    <div className="content">
         {/* <div>menu</div> 
        <div>restaurant</div>
        <button>See More</button> */}

    </div>
    {/* <div className="arow">
        <button id="prev"><</button>
        <button id="next">></button>
    </div> */}
</div>
{/* <!-- Header -->
<!-- <div className="slidingphotos">
    <h1>Sliding  Photos</h1>
</div> --> */}

{/* <!-- outlet container -->


<!-- trending OUTLET start --> */}


<section className="product"> 
    <h2 className="product-category">Kii Chaidaa !!!</h2>
    <button className="pre-btn"><img src="arrow.png" alt=""/></button>
    <button className="nxt-btn"><img src="arrow.png" alt=""/></button>
    
    <div className="product-container">
        <div className="product-card">
            <div className="product-image">
                <Link to="/barista">
                    <img src="./baristaa.jpg" className="product-thumb" alt=""/>

                </Link>
                
            </div>
            <div className="product-info">
                <Link to="/barista">
                    <h2 className="product-brand">BARISTA</h2>

                </Link>
                <p className="product-short-description">Barista-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <Link to="/la_pinoz">
                    <img src="./la_pinoz.jpg" className="product-thumb" alt=""/>
                </Link>
                
            </div>
            <div className="product-info">
                <Link to="/la_pinoz">
                    <h2 className="product-brand">LA PINO'Z PIZZA</h2>
                </Link>
                <p className="product-short-description">La Pin'z Pizza-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./domino's.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">DOMINO'S</h2>
                <p className="product-short-description">Domino's-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./indian__chaat_bandar.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">INDIAN CHAAT BHANDAR</h2>
                <p className="product-short-description">Indian Chaat Bhandar-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./parantha corner.png" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">PRANTHA CORNER</h2>
                <p className="product-short-description">Prantha Corner-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./chai nagari.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">CHAI NAGARI</h2>
                <p className="product-short-description">Chai Nagari-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./subway.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">SUBWAY</h2>
                <p className="product-short-description">Subway-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./healthy wave.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">THE HEALTHY WAVE</h2>
                <p className="product-short-description">The Healthy Wave-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./chai vyanjan.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">CHAI VYANJAN</h2>
                <p className="product-short-description">Chai Vyanjan-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./china box.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">CHINA BOX</h2>
                <p className="product-short-description">China Box-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./bev cafe.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">BEV CAFE</h2>
                <p className="product-short-description">Bev Cafe-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./gran n go.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">GRAB N GO</h2>
                <p className="product-short-description">Grab N Go-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./holy scoop.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">HOLY SCOOP ICE CREAM</h2>
                <p className="product-short-description">Holy Scoop Ice Cream-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./venky.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">VENKY'S</h2>
                <p className="product-short-description">Venky's-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./baskin_robby.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">BASKIN ROBBIN</h2>
                <p className="product-short-description">Baskin Robbin-CU Punjab</p>
                
            </div>
        </div>
        <div className="product-card">
            <div className="product-image">
                
                <img src="./samosa express.jpg" className="product-thumb" alt=""/>
                
            </div>
            <div className="product-info">
                <h2 className="product-brand">THE SAMOSA EXPRESS</h2>
                <p className="product-short-description">The Samosa Express-CU Punjab</p>
                
            </div>
        </div>
    </div>
</section>

      
      {/* <section>
        <div className="video-container">
          <div className="slogan_className">
            <h1 className="slogan">EAT</h1>
            <h1 className="slogan">AND REPEAT</h1>
          </div>

          <div className="video-box">
            <video autoPlay loop muted className="food_loop" />
          </div>
        </div>
      </section> */}

      {/* Rest of your content */}
    </div>
  );
};

export default Body;
