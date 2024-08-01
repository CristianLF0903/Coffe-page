import React from 'react';
import '../css/Header.css'; // Asegúrate de que este archivo exista

const Header = () => (
    <header className="header">
        <h1 className="header-title">Bienvenidos al Mundo del Café</h1>
        <p className="header-description">
            El café es una de las bebidas más populares y apreciadas en todo el mundo. Su rica historia, variedad de sabores y efectos energizantes han hecho del café una parte integral de muchas culturas. En esta página, exploraremos todo lo que necesitas saber sobre el café: desde sus orígenes hasta los principales países productores, sus características y mucho más.
        </p>
        <nav className="header-nav">
            <ul className="nav-list">
                <li><a href="#introduction">Introducción</a></li>
                <li><a href="#history">Historia</a></li>
                <li><a href="#countries">Países Productores</a></li>
                <li><a href="#characteristics">Características</a></li>
                <li><a href="#benefits">Beneficios</a></li>
                <li><a href="#preparation">Preparación</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
