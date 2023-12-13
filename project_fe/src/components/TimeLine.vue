<template>
  <div style="overflow: auto" class="container">
    <div class="header"><h1>Quá trình thực hiện Project<i class="fa-solid fa-arrow-right"></i></h1></div>
 <n-timeline horizontal>
  <n-timeline-item
    title="Start"
    content="Building Vue.js project"
    time="2023-11-21"
  />
  <n-timeline-item
    title="Learning"
    type="warning"
    content="Studying additional knowledge about Vue.js and its operation"
    time="2023-11-25"
  />
  <n-timeline-item
    type="error"
    content="Encountered psychological obstacles due to not fully understanding the project's operation"
    title="Insufficient skills"
    time="2023-11-28"
  />
  <n-timeline-item
    type="warning"
    title="Learning"
    content="Persistence pays off, the brain begins to absorb knowledge"
    time="2023-11-30"
  />
  <n-timeline-item
    type="error"
    title="Encountered error in first project"
    content="Installed dependencies causing compatibility issues with the project"
    time="2023-12-1"
  />
  <n-timeline-item
    type="error"
    title="Learning from experience"
    content="Fall where you may, stand up elsewhere --> Created a new project and started over"
    time="2023-12-1"
  />
  <n-timeline-item
    type="success"
    title="New beginning"
    content="Successfully built the first component"
    time="2023-12-1"
  />
  <n-timeline-item
    type="warning"
    title="Learning"
    content="Studying how to use MockAPI and Axios"
    time="2023-12-2"
  />
  <n-timeline-item
    type="success"
    title="MockAPI integration"
    content="Successfully linked with MockAPI"
    time="2023-12-2"
  />
  <n-timeline-item
    type="success"
    title="Creating additional components"
    content="Building various components and installing libraries"
    time="2023-12-3"
  />
  <n-timeline-item
    type="warning"
    title="Ideas stuck"
    content="Not sure what to do next"
    time="2023-12-3"
  />
  <n-timeline-item
    type="warning"
    title="Realized that..."
    content="Water is rising to the surface --> Keep going"
    time="2023-12-3"
  />
  <n-timeline-item
    type="error"
    title="Data Structures and Algorithms deadline"
    content="Temporarily paused"
    time="2023-12-4"
  />
  <n-timeline-item
    type="success"
    title="Continuously developing the website"
    content="Coding for 10 hours a day"
    time="2023-12-5 -> 2023-12-9"
  />
  <n-timeline-item
    type="success"
    title="Completing the assignment"
    content="Coding and working on the assignment for 12 hours a day"
    time="2023-12-10"
  />
  <n-timeline-item
    type="error"
    title="Loss of mockapi data"
    content="Lost crucial mockapi data and had to recreate it"
    time="2023-12-10"
  />
  <n-timeline-item
    type="success"
    title="Uploading project code to GitHub"
    content="Protecting the codebase before submission"
    time="2023-12-11"
  />
  <n-timeline-item
    type="warning"
    title="Assignment defense"
    content="Hoping for a good grade"
    time="2023-12-12"
  />
</n-timeline>

  </div>
</template>
<style scoped>
.header {
  color: #0cada0ad;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
h1{
    transition: all 0.3s ease;
}
.container{
  margin: 48px auto;
}
.header h1:hover{
  color: black;
}
</style>