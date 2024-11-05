import { useEffect, useState } from "react";
import JobListing from "./JobListing.jsx";

function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
    try {
      const fetchData = async () => {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      };
      fetchData();
    } catch (err) {
      console.log(`Error Fetching Data: ${err}`);
    } finally {
      setLoader(false);
    }
  }, []);
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loader ? (
            <h1>Loading...</h1>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default JobListings;
