import { ItemsArticle } from "./ItemsArticle";
import image1 from "../assets/images/image-retro-pcs.jpg";
import image2 from "../assets/images/image-top-laptops.jpg";
import image3 from "../assets/images/image-gaming-growth.jpg";

export const ItemsContainer = () => {
  return (
    <section className="md:flex md:flex-wrap md:place-content-between md:gap-10 md:justify-center">
      <ItemsArticle
        image={image1}
        num="01"
        title="Reviving Retro PCs"
        text="What happens when old PCs are given modern upgrades?"
      />
      <ItemsArticle
        image={image2}
        num="02"
        title="Top 10 Laptops of 2022"
        text="Our best picks for various needs and budgets."
      />
      <ItemsArticle
        image={image3}
        num="03"
        title="The Growth of Gaming"
        text="How the pandemic has sparked fresh opportunities."
      />
    </section>
  );
};
