import React from "react";
import Marquee from "react-fast-marquee";
import CompaniesLogo1 from "../../assets/brands/amazon.png";
import CompaniesLogo2 from "../../assets/brands/amazon_vector.png";
import CompaniesLogo3 from "../../assets/brands/casio.png";
import CompaniesLogo4 from "../../assets/brands/moonstar.png";
import CompaniesLogo5 from "../../assets/brands/randstad.png";
import CompaniesLogo6 from "../../assets/brands/start-people.png";
import CompaniesLogo7 from "../../assets/brands/start.png";
function Companines() {
  const companies = [
    CompaniesLogo1,
    CompaniesLogo2,
    CompaniesLogo3,
    CompaniesLogo4,
    CompaniesLogo5,
    CompaniesLogo6,
    CompaniesLogo7,
  ];

  return (
    <div>
      <div>
        <h3 className="primary text-2xl text-center font-bold my-5 ">
          We've helped thousands of sales teams
        </h3>
      </div>
      <Marquee gradient={true} gradientColor="#EAECED">
        <div className="flex  items-center gap-8  my-5 ">
          {companies.map((company, index) => (
            <img src={company} id={index} />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default Companines;
