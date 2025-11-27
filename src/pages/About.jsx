const About = () => {
  return (
    <div className="hero flex flex-col text-white bg-base-200 min-h-screen bg-linear-to-l from-[#94bdbd] to-[#176c81]">
      <figure>
        <img
          className=" object-cover w-full h-48 sm:h-64 md:h-80 lg:h-[300px] rounded-2xl my-15"
          src="/home-bg.jpg"
          alt="About background"
        />
      </figure>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <h1 className="text-5xl font-bold">About Us!</h1>
          <br />
          <p>
            Welcome to <strong>GlobeTrek Travel Agency</strong>, your trusted
            partner in discovering the world. We believe that every journey
            should be more than just a trip—it should be an unforgettable
            experience filled with culture, adventure, and lasting memories.
          </p>
          <br />
          <p>
            Our team of passionate travel experts is dedicated to crafting
            personalized itineraries that match your interests, budget, and
            dreams. Whether you are seeking a relaxing beach holiday, a cultural
            city escape, or an adventurous mountain trek, we are here to make it
            happen.
          </p>
          <br />
          <p>
            At GlobeTrek, we collaborate with leading airlines, hotels, and
            local guides to ensure that every detail of your journey is
            seamless. From booking flights and accommodations to organizing
            tours and activities, we handle everything so you can focus on
            enjoying your vacation.
          </p>
          <br />
          <p>
            With years of experience and a passion for exploration, our mission
            is simple: to bring the world closer to you. Let us help you create
            stories worth telling and memories worth keeping.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
