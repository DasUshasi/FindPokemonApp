import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                {/* <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div> */}
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../imgs/car_pikachu.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../imgs/car_bulbasaur.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../imgs/car_squirtle.png" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="../imgs/car_charmander.png" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
{/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="../imgs/car_pikachu.png" className="d-block w-100 mx-auto" alt="..." /> */}
{/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
{/* </div>
                    <div className="carousel-item" >
                        <img src="../imgs/car_bulbasaur.png" className="d-block w-100 mx-auto" alt="..." /> */}
{/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
{/* </div>
                    <div className="carousel-item" >
                        <img src="../imgs/car_squirtle.png" className="d-block w-100 mx-auto" alt="..." /> */}
{/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
{/* </div>
                    <div className="carousel-item" >
                        <img src="../imgs/car_charmander.png" className="d-block w-100 mx-auto" alt="..." /> */}
{/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
{/* </div>
                </div>
                <button className="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden sr-only">Previous</span>
                </button>
                <button className="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden sr-only">Next</span>
                </button>
            </div> */}

