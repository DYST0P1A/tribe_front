<template>
<div>
    <div class="categories">
            <div class="first block box">
                <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/banner-424.jpg" alt="">
                <div class="box-full-content">
                    <a href="#detalle">
                        <p id="box-title">424</p>
                    </a>
                    <a href="" id="box-cta">Comprar</a>
                </div>
            </div>
            <div class="second block">
                <div class="second-first box">
                    <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/box-clarks.jpg" alt="">
                    <div class="box-full-content">
                        <a href="#detalle">
                            <p id="box-title">CLARKS</p>
                        </a>
                        <a href="" id="box-cta">Comprar</a>
                    </div>
                </div>
                <div class="second-second box">
                    <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/box-nemen-24.jpg" alt="">
                    <div class="box-full-content">
                        <a href="#detalle">
                            <p id="box-title">NEMEN</p>
                        </a>
                        <a href="" id="box-cta">Comprar</a>
                    </div>
                </div>
            </div>
            <div class="third block box">
                <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/banner-huf-01.jpg" alt="">
                <div class="box-full-content">
                    <a href="#detalle">
                        <p id="box-title">HUF</p>
                    </a>
                    <a href="" id="box-cta">Comprar</a>
                </div>
            </div>
            <div class="fourth block">
                <div class="fourth-first box box-left">
                    <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/box-porter-1.jpg" alt="">
                    <div class="box-full-content">
                        <a href="#detalle">
                            <p id="box-title">PORTER-YOHSIDA & CO</p>
                        </a>
                        <a href="" id="box-cta">Comprar</a>
                    </div>
                </div>
                <div class="fourth-second box">
                    <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/box-cdg.jpg" alt="">
                    <div class="box-full-content">
                        <a href="#detalle">
                            <p id="box-title">COMME DES GARÇONS SHIRT</p>
                        </a>
                        <a href="" id="box-cta">Comprar</a>
                    </div>
                </div>
                <div class="fourth-third box box-right">
                    <img class="zoom" src="https://footdistrict.com/media/wysiwyg/mayo-21/box-hoka.jpg" alt="">
                    <div class="box-full-content">
                        <a href="#detalle">
                            <p id="box-title">HOKA ONE ONE</p>
                        </a>
                        <a href="" id="box-cta">Comprar</a>
                    </div>
                </div>
                                 <div class="footer block">
                    <div class="footer_menu">
                        <div class="sobre_nosotros">
                            <div class="title">
                                SOBRE NOSOTROS
                            </div>
                            <ul>
                                <li><a href="">¿Quiénes somos?</a></li>
                                <li><a href="">Nuestras ventajas</a></li>
                            </ul>
                        </div>
                        <div class="redes_sociales">
                            <div class="title">
                                REDES SOCIALES
                            </div>
                            <ul>
                                <li><a href="">
                                        <div class="facebook"><i class="fab fa-facebook-f"></i></div>
                                    </a></li>
                                <li><a href="">
                                        <div class="twitter"><i class="fab fa-twitter"></i></div>
                                    </a></li>
                                <li><a href="">
                                        <div class="instagram"><i class="fab fa-instagram"></i></div>
                                    </a></li>
                            </ul>
                        </div>
                        <div class="ayuda">
                            <div class="title">
                                CONTACTO
                            </div>
                            <ul>
                                <li>trib3.com@gmail.com</li>
                                <li><a href="">Guía de tallas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p><a href="#">Política de privacidad</a> © 2021 TRIBE. Todos los derechos reservados</p>
                    </div>
                </div>
            </div>
    </div>
</div>
    
</template>

<script>
export default {

}
</script>

<style>

.categories{
    width: 80%;
    height: 1500px;
    margin: auto;
    position: relative;
}

#box-cta:hover, #box-cta-dark:hover {
    color: #f5b652;
    border-bottom: 1px solid #f5b652;
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
    text-decoration: none;
} 

.first, .second, .third{
    width: 100%;
    height: 30%;
}

.first img, .second img, .third img, .fourth img{
    width: 100%;
    height: 100%;
}

.second-first, .second-second{
    position: relative;
    width: 47%;
    height: 100%;
}

.box-left, .second-first{
    float: left;
}

.box-right, .second-second{
    float: right;
}

.fourth{
    width: 100%;
    height: 30%;
    text-align: center;
}

.fourth-first, .fourth-second, .fourth-third{
    position: relative;
    width: 30%;
    height: 100%;
    display: inline-block;
}

.zoom{
    transition: all .4s ease;
}

.zoom:hover{
    transform: scale(1.1)
}

.block{
    margin-top: 5%;
}

.box{
    overflow: hidden;
    position: relative;
}

.footer{
    color: #dcdcdc;
    background-color: #313131;
    z-index: 1;
}

.footer .footer_menu{
    max-width: 1000px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0px 8%;
}

.footer .footer_menu .title{
    margin: 50px 0px;
    color: #f5b652;
    font-size: 20px;
}

.footer .footer_menu ul li a{
    display: block;
    margin-bottom: 6px;
    color: #dcdcdc;
    text-decoration: none;
}

.footer .footer_menu ul li a:hover{
    text-decoration: underline;
}

.footer .redes_sociales{
    text-align: center;
}

.footer .redes_sociales ul{
    display: flex;
    justify-content: center;
}

.footer .redes_sociales ul li a{
    display: block;
    margin: 0 5px;
    font-size: 24px;
    width: 35px;
    height: 35px;
    color: #3d3d3d;
    background: #dcdcdc;
    border-radius: 50px;
    line-height: 38px;
}

.footer .redes_sociales ul li a:hover{
    color: #f5b652;
}

.footer .copyright{
    display: flex;
    justify-content: center;
    margin-top: 50px;
}

.footer .copyright a{
    color: #dcdcdc;
    text-decoration: none;
}

.footer .copyright p{
    margin-bottom: 20px;
}

.footer .copyright a:hover{
    text-decoration: underline;
}

</style>