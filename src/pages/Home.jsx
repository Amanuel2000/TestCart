import styled from "styled-components";
import GithubIcon from "/assets/icons/logo-github.svg";

const Home = () => {
  return (
    <div>
      <Heading>
        <h1>Your Favorite Fashion Store</h1>
        <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad numquam, nobis recusandae explicabo fugiat beatae quis facere cumque placeat veniam. Modi eius natus minima ab ipsam iste! Dolor, voluptate cupiditate.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure tenetur esse recusandae qui delectus! Dolore, esse quasi temporibus dicta ex ad quia natus illum ea, officia, numquam ducimus inventore repudiandae?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium saepe, vel autem error mollitia sint nam obcaecati nisi consequuntur possimus velit quasi voluptatum labore recusandae totam ipsa. Eius, veritatis repudiandae.
        </div>
        <div>
        <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa ducimus aspernatur provident ex consectetur ut quia illo optio praesentium. Ducimus atque, similique modi consequuntur laboriosam debitis illum nemo distinctio.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nobis dolores aut, consequatur ipsum minus, amet quidem ex labore libero error dolorem in? Quam ipsa necessitatibus dolorum, veritatis cumque numquam!
        </section>

        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde officia quae in ipsa alias vitae ut facere deserunt esse, est odio magnam saepe vero quam, voluptas delectus corporis explicabo?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis consequatur dicta optio provident voluptates cupiditate tempora voluptatibus libero laborum aliquam ipsum consectetur commodi, voluptas impedit ad. Odit dicta voluptatibus ducimus.
        
        <br />
    
        <br />
         
      </Heading>
    </div>
  );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;

  a:nth-of-type(1) {
    border-bottom: violet solid 2px;
  }
`;

export default Home;