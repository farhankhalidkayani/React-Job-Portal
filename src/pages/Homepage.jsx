import Hero from "../components/Hero.jsx";
import HomeCards from "../components/HomeCards.jsx";
import JobListings from "../components/JobListings.jsx";
import ViewAllJobs from "../components/ViewAllJobs.jsx";

function Homepage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
}

export default Homepage;
