import React from 'react';
import { Col } from "react-bootstrap";
import { ArrowUpRight } from 'react-bootstrap-icons';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a className="project-card" href={link} target="_blank" rel="noreferrer">
        <div className="project-image"><img src={imgUrl} alt="" /></div>
        <div className="project-card-copy">
          <span>Selected work</span>
          <h3>{title}<ArrowUpRight /></h3>
          <p>{description}</p>
        </div>
      </a>
    </Col>
  )
}
