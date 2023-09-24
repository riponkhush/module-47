import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id,logo, job_title, company_name,salary,job_type,location,remote_or_onsite } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={logo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-5 py-2 mr-4 font-extrabold border rounded border-red-400">{remote_or_onsite}</button>
                    <button className="px-5 py-2 mr-4 font-extrabold border rounded border-red-400">{job_type}</button>
                </div>
                <div className="mt-4 flex justify-between">
                    <h2 className="flex"><CiLocationOn className="text-2xl mr-2"></CiLocationOn>{location}</h2>
                    <h2 className="flex "><HiOutlineCurrencyDollar className="text-2xl mr-2"></HiOutlineCurrencyDollar>{salary}</h2>
                </div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}>
                    <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Job;