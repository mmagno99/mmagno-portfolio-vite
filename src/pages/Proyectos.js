import React from "react";

import "../styles/Projects.css";
import "../styles/Splide.css";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Proyectos() {
  return (
    <div className="projects">
      <h1 className="projectTitle">Mis proyectos personales</h1>
      <h3>Me hace falta agregar más 😓</h3>

      {/* <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })}
      </div> */}

      <div className="slider-container">
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
           
            pagination: false,
            arrows: true,
            speed: 800, // Duración de la animación en ms (más lento para el efecto)
            easing: 'cubic-bezier(0.25, 1, 0.5, 1)', // Curva de animación personalizada
            breakpoints: {
              900: { 
                perPage: 2,
               
                arrows: true,
              },
              600: { 
                perPage: 1,
                
                arrows: true, // Flechas SIEMPRE activas
              },
            },
          }}
          aria-label="Proyectos personales"
        >
          {ProjectList.map((project, idx) => (
            <SplideSlide key={idx}>
              <div className="slide-inner">
                <ProjectItem 
                  id={idx} name={project.name} image={project.image}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

    </div>
  );
}

export default Proyectos;
