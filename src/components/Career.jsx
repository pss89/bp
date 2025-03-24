import PropTypes from 'prop-types';
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

const Career = ({careerList}) => {
  console.log(careerList);
  return (
    <>
      <div className="flex items-center justify-center min-h-290 bg-gray-800 text-white mt-10 mb-10">
        <div className="w-full p-4 sm:w-3/4 sm:p-0 md:w-3/4 md:p-0 lg:w-2/4 lg:p-0 xl:w-2/4 xl:p-0 2xl:w-2/4 2xl:p-0">
          <h2 className="text-2xl font-semibold mb-4">학력</h2>
          {careerList.education.map((edu, index) => (
          <div key={index}>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>{edu.year}</Timeline.Time>
                  <Timeline.Title>{edu.title}</Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          ))}
          <h2 className="text-2xl font-semibold mb-4">경력</h2>
          {careerList.company.map((career, index) => (
          <div key={index}>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  <Timeline.Time>{career.year}</Timeline.Time>
                  <Timeline.Title>{career.title} / {career.position}</Timeline.Title>
                  <Timeline.Body>
                    {career.desc.map((desc, index) => (
                      <p key={index}>- {desc}</p>
                    ))}
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          ))}
          <h2 className="text-2xl font-semibold mb-4">스킬</h2>
          {careerList.skils.map((skil, index) => (
          <div key={index}>
            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiCalendar} />
                <Timeline.Content>
                  {/* <Timeline.Time>February 2022</Timeline.Time> */}
                  <Timeline.Title>{skil.title}</Timeline.Title>
                  <Timeline.Body>{skil.list}</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

// PropTypes 추가
Career.propTypes = {
  careerList: PropTypes.object.isRequired
};

export default Career