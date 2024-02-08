const About = () => {
  return (
    <div className="w-full bg-dark">
      <div className="wrap text-center">
        <h2 className="head_text pt-10 lg:pt-20">
          About <span className="text-orange">Me</span>
        </h2>
        <p className="text-white mt-5 pb-5 md:text-lg lg:text-lg md:mt-10 md:pb-10 lg:mt-12 lg:pb-12">
          I am a third-year undergraduate student at UIN Syarif Hidayatullah
          Jakarta, majoring in Information Systems. I have been specializing in
          Web development for over a year, proficient in utilizing web stacks
          such as <span className="emphasize"> React Js</span>,
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
