<template>
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
                                AYUDA
                            </div>
                            <ul>
                                <li><a href="">Contacto</a></li>
                                <li><a href="">Guía de tallas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="copyright">
                        <p><a href="#">Política de privacidad</a> © 2021 TRIBE. Todos los derechos reservados</p>
                    </div>
</template>

<script>
export default {

}
</script>

<style>

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