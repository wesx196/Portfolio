import { School, Work } from '@mui/icons-material';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2011 - 2015"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bellaire Senior High School, Bellaire, Texas
                    </h3>
                    <p> High School Diploma</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2015 - 2020"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<School />}
                >
                    <h3 className="vertical-timeline-element-title">
                        University of Houston, Houston, Texas
                    </h3>

                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>

                    <p> Computer Information Systems</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2021 - Now"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<Work />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer - TCS (Client: Citi)
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Houston, TX
                    </h4>
                    <p>Developed reconciliaction report and migration reports using Python for ETL process</p>
                </VerticalTimelineElement>

                
            </VerticalTimeline>
        </div>
    )
}

export default Experience