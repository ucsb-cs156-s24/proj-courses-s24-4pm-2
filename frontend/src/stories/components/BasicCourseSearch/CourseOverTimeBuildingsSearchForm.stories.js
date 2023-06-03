import React from "react";

import CourseOverTimeSearchBuildingsForm from "main/components/BasicCourseSearch/CourseOverTimeBuildingsSearchForm";
import { systemInfoFixtures } from "fixtures/systemInfoFixtures";


export default {
  title: "components/BasicCourseSearch/CourseOverTimeBuildingsSearch",
  component: CourseOverTimeSearchBuildingsForm,
  parameters: {
    mockData: [
      {
        url: '/api/systemInfo',
        method: 'GET',
        status: 200,
        response: systemInfoFixtures.showingBothStartAndEndQtr
      },
    ],
  },
};

const Template = (args) => {
  return <CourseOverTimeSearchBuildingsForm {...args} />;
};

export const Default = Template.bind({});

Default.args = {
  submitText: "Create",
  fetchJSON: (_event, data) => {
    console.log("Submit was clicked, data=", data);
  }
};
