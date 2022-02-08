import ServiceCard from "./ServiceCard.js";
import { useSelector } from "react-redux";

/**
 * @author
 * @function ServicesContainer
 **/

const ServicesContainer = (props) => {
  const studio = useSelector((state) => state.studioInfo.studio);
  let count = 0;
  return (
    <section className="services fit dark">
      <div className="container">
        <div className="row">
          {studio.services.map((service) => {
            if (count <= 3) {
              count++;
              return (
                <ServiceCard key={service.id}>
                  <div className="img">
                    <img src={service.img_url} />
                  </div>
                  <a className="title" href="#">
                    {service.name}
                  </a>
                  <p>{service.description}</p>
                </ServiceCard>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
