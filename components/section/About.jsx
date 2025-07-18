const About = () => {
  return (
    <div id="about" className="w-full bg-dark relative">
      <div className="absolute top-0 w-full bg-gradient-to-b h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="absolute bottom-0 w-full bg-gradient-to-t h-[50px] from-black/10 to-transparent from-50% to-100%"></div>
      <div className="wrap text-center">
        <h2 className="head_text pt-10 lg:pt-20" data-aos="fade-down">
          About <span className="text-orange">Me</span>
        </h2>
        <p
          data-aos="zoom-in-down"
          className="text-white mt-5 pb-5 md:text-lg lg:text-lg md:mt-10 md:pb-10 lg:mt-12 lg:pb-12"
        >
          I am a last-year undergraduate student at UIN Syarif Hidayatullah
          Jakarta, majoring in Information Systems. I have been specializing in
          Web developmenn, proficient in utilizing web stacks such as{" "}
          <span className="emphasize"> Golang</span>,{" "}
          <span className="emphasize"> React Js</span>,
          <span className="emphasize"> Next Js</span>,
          <span className="emphasize"> Express.Js</span>,{" "}
          <span className="emphasize"> MongoDb</span>, and{" "}
          <span className="emphasize"> MySQL</span>. Experienced in team
          management and effectively communicating work results. I have a
          background in completing freelance projects collaboratively with a
          team.
        </p>
      </div>
    </div>
  );
};

export default About;
