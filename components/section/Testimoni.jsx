import TestiCard from "../TestiCard";
import DodiImage from "@/public/image/dodi.jpeg";
import SatriaImage from "@/public/image/satria.jpg";

const Testimoni = () => {
  return (
    <div id="testimoni" className="w-full bg-dark-gray py-10 relative">
      <div className="wrap text-center">
        <h2 className="head_text pt-10 lg:pt-20" data-aos="zoom-in">
          What they think <span className="text-orange">about me</span>
        </h2>
        <div className="w-full grid lg:grid-cols-2 grid-cols-1 my-20 lg:gap-5 gap-10">
          <TestiCard
            name="Dodi Prakoso Wibowo"
            img={DodiImage}
            position="CEO"
            company="Eduwork"
            testimoni="Thank you, Faisal, for your contributions as a programmer at Eduwork. You are reliable, disciplined, and have strong technical skills. Good luck in the future, and all the best. Thank you!"
          />
          <TestiCard
            name="Muhammad Satria Putra Trinanda"
            img={SatriaImage}
            position="Product Manager"
            company="Eduwork"
            testimoni="Faisal is a great Programmer, he is professional and willing to provide extra help if anyone needs it
He deeply understands and is able to implement several program languages for organizational as well as company needs. His contribution to the team is invaluable, and as such, any organization would be lucky to have Faisal as their colleague"
          />
        </div>

        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"></div>
      </div>
    </div>
  );
};

export default Testimoni;
