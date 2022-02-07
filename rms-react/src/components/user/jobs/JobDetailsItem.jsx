import React from "react";
import { Link } from "react-router-dom";

const JobDetailsItem = () => {
  return (
    <section className="details_info">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Job Description</h1>
            <div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              necessitatibus iure dolores nostrum aliquam illo molestias, animi
              magni, excepturi sequi ratione voluptates iusto repellendus
              consequatur perspiciatis eos recusandae error? Exercitationem
              cumque quis optio fugit incidunt? Fugit eaque nulla error atque
              harum adipisci quisquam nemo labore aut! Cum eos laborum, eligendi
              consequuntur tenetur voluptas. Tenetur ducimus ullam cum dolorem
              expedita fuga excepturi consequuntur, reprehenderit nostrum
              numquam nobis blanditiis beatae assumenda harum, nemo totam
              deleniti sequi ex! Possimus magni quae molestiae veniam doloribus
              alias, vel quibusdam quam odio ex porro provident assumenda neque
              maiores nesciunt ducimus labore ipsum, laboriosam natus tenetur
              laudantium tempora cumque? Commodi ut, modi aut doloremque facere
              veritatis et itaque quaerat aperiam illum sapiente eum voluptates
              deleniti laborum voluptatum cupiditate, officiis vitae? Nihil,
              reiciendis quaerat? Nulla unde ipsa voluptate libero,
              exercitationem molestias soluta, eum perferendis architecto omnis
              earum tenetur amet asperiores. Consectetur sapiente fugit eaque
              quam architecto aspernatur placeat blanditiis, reiciendis qui
              molestias dolores ad minima eum tenetur quidem nihil voluptatibus
              error facere vel? Reprehenderit voluptatibus nesciunt repellendus
              odit ullam rerum voluptatem facilis consequuntur et molestiae, at
              cum omnis adipisci obcaecati odio, commodi dolorum reiciendis
              eaque. Eligendi nihil sed est reprehenderit qui temporibus
              voluptatum pariatur, cumque voluptas, ipsum nemo id labore quasi
              consequuntur rem fugit dolorem cum corporis! Ipsam ea voluptatem
              odio molestias reiciendis tempora non dolorum fugit provident eius
              maiores molestiae harum mollitia, error inventore ducimus
              praesentium repudiandae culpa suscipit animi magni. Quisquam,
              eaque veritatis? Voluptatem, necessitatibus magni. Ipsa molestias
              nihil obcaecati veniam magnam voluptate, reiciendis sequi? Culpa?
            </div>
            <Link className="button" to="/">
              Apply Job
            </Link>
          </div>
          <div className="right">
            <h1>Job Location</h1>
            <div className="location-map">Map will be rendered here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetailsItem;
