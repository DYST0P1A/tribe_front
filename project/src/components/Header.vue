<template>
    <header>
        <a name="Up"></a>
        <div class="nav">
            <nav>
                <ul>
                    <li> <a class="logo" href="" title="TRIBE - Streetwear Clothes">
                            <img src="logo-tribe.png"  alt="TRIBE - Streetwear Clothes" title="TRIBE - Streetwear Clothes">
                        </a>
                    </li>
                    <li><a href="#" title="Zapatillas">ZAPATILLAS<span class="icon icon-up-dir"></span><i class="fas fa-chevron-down"></i></a>
                        <div class="submenu">
                            <div class="submenu-items">
                                <ul>
                                    <li><a href="producto.html">HOMBRE</a></li>
                                    <li><a href="producto.html">MUJER</a></li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li><a href="#ropa">ROPA<span class="icon icon-up-dir"></span><i class="fas fa-chevron-down"></i></a>
                            <div class="submenu">
                                   <div class="submenu-items">
                                       <p>ROPA HOMBRE</p>
                                       <ul>
                                           <li><a href="producto.html">Chaquetas y abrigos</a></li>
                                           <li><a href="producto.html">Sudaderas</a></li>
                                           <li><a href="producto.html">Camisetas</a></li>
                                           <li><a href="producto.html">Camisas</a></li>
                                           <li><a href="producto.html">Polos</a></li>
                                           <li><a href="producto.html">Pantalones</a></li>
                                       </ul>
                                   </div>
                                   <div class="submenu-items">
                                    <p>ROPA MUJER</p>
                                    <ul>
                                        <li><a href="producto.html">Chaquetas y abrigos</a></li>
                                        <li><a href="producto.html">Sudaderas</a></li>
                                        <li><a href="producto.html">Camisetas</a></li>
                                        <li><a href="producto.html">Pantalones</a></li>
                                    </ul>
                                </div>
                            </div>
                         </li>
                 
                    <li><a href="#" title="Marcas">MARCAS<span class="icon icon-up-dir"></span><i class="fas fa-chevron-down"></i></a>
                        <div class="submenu">
                            <div class="submenu-items">
                                <ul>
                                    <li><a href="producto.html">Adidas</a></li>
                                    <li><a href="producto.html">Nike</a></li>
                                    <li><a href="producto.html">Casablanca</a></li>
                                    <li><a href="producto.html">Comme Des Garçons Shirt</a></li>
                                    <li><a href="producto.html">Heron Preston</a></li>
                                    <li><a href="producto.html">Aries</a></li>
                                    <li><a href="producto.html">Stone Island</a></li>
                                </ul>
                            </div>
                            </div>
                        </li>
                        <li><a href="#" title="Accesorios">ACCESORIOS<span class="icon icon-up-dir"></span><i class="fas fa-chevron-down"></i></a>
                            <div class="submenu">
                                <div class="submenu-items">
                                    <ul>
                                        <li><a href="producto.html">Gafas de sol</a></li>
                                        <li><a href="producto.html">Gorras</a></li>
                                        <li><a href="producto.html">Gorros</a></li>
                                        <li><a href="producto.html">Calcetines</a></li>
                                        <li><a href="producto.html">Riñoneras</a></li>
                                        <li><a href="producto.html">Bolsos y carteras</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <div class="menu-items-right">
                            <a href="#search"><i class="fa fa-search fa-lg"></i></a>
                                <a href="#login"><i class="fa fa-user fa-lg"></i></a>
                                <a href="#cart"><i class="fa fa-shopping-cart fa-lg"></i></a>
                                <a>
                                    <p>Idioma: 
                                        <select name="language">
                                            <option>Español</option>
                                            <option>Inglés</option>
                                        </select>
                                    </p>
                                </a>
                        </div>
                    </ul>
      
                <span class="btn-menu">
                    <i class="fa fa-bars"></i>
                </span>
            </nav>
        </div>
         <p>
            <a href="#Up"><i class="fas fa-chevron-up"></i></a>
        </p>
    </header>
</template>

<script>
export default {

}
</script>

<style>
.nav{
    width: 100%;
    min-width: 200px;
}

.nav nav{
    display: table;
    font-size: 14px;
    float: left;
    width: 100%;
}

.nav nav ul{
    position: relative;
    background: #313131;
}

.menu-items-right{
    position: absolute;
    right: 20px;
    display: flex;
}

.menu-items-right a{
    margin-right: 20px;
}

.nav nav > ul > li{
    display: inline-block;
    vertical-align: middle;
    
}

.nav nav > ul > li > a{
    color: white;
    text-decoration: none;
    display: block;
    padding: 20px 40px;
    font-weight: 600;
}

.nav nav > ul > li > a span{
    font-size: 50px;
    position: absolute;
    bottom: -18px;
    color: #dcdcdc;
    display: none;
}

.nav nav > ul > li > a i{
    position: relative;
    left: 7px;
    width: 15px;
    height: 15px;
}

.nav nav > ul > li > a:hover{
    color: #f5b652;  
}


.nav nav > ul > li:hover span{
    display: block;
}

.nav nav ul li .submenu{
    position: absolute;
    display: none;
    font-size: 17px;
    background: #313131;

}

.nav nav ul li .submenu li img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 15px;
}

.nav nav ul li:hover .submenu{
    display: flex;
    z-index: 90;
}

.nav nav ul li .submenu .submenu-items{
    margin: 20px 40px;
    color: #f5b652;
}

.nav nav ul li .submenu .submenu-items p{
    text-align: center;
    font-weight: 600px;
    width: 180px;
    display: block;
    border-bottom: 1px solid #f5b652;
}

.nav nav ul li .submenu .submenu-items li{
    display: block;
    padding: 10px 0px;
}

.nav nav ul li .submenu .submenu-items a{
    text-decoration: none;
    margin: 0 20px;
    color: white;
}

.nav nav ul li .submenu .submenu-items li:hover{
    vertical-align: middle;
    position: relative;
    text-decoration: underline;
}

.menu-items-right{
    display: flex;
    color: white;
    top: 40%;
}

.fa {
    color: white;
    bottom: 0;
}

.fa:hover {
    color:#f5b652;
}


.categories{
    width: 80%;
    height: 1500px;
    margin: auto;
    position: relative;
}

a {
    text-decoration: none;
}

#box-cta:hover, #box-cta-dark:hover {
    color: #f5b652;
    border-bottom: 1px solid #f5b652;
    text-decoration: none;
}

.box-full-content {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
}

#box-cta {
    text-transform: uppercase;
    letter-spacing: 1px;
    border-bottom: 1px solid #ffffff;
    display: block;
    margin: 0 auto;
    padding-bottom: 5px;
    position: relative;
    width: max-content;
    font-weight: 500;
}

#box-title {
    font-size: 22px;
    line-height: 38px;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 24px;
    font-weight: 600;
}

#box-title, #box-cta {
    color: #ffffff;
    text-align: center;
    font-family: "hco gotham", "Montserrat", Helvetica, sans-serif;
} 
</style>