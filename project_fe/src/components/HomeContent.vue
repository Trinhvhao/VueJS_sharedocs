<template>
  <div id="app">
    <div>
      <div>
        <h2>In summary, here are 10 of our most popular programming courses</h2>
      </div>
      <div>
        <ul class="course-list">
          <li class="course-item">
            <a href="/learn/learn-to-program"
              >Learn to Program: The Fundamentals</a
            >:<span>&nbsp;<!-- -->University of Toronto</span>
          </li>
          <li class="course-item">
            <a href="/professional-certificates/ibm-full-stack-cloud-developer"
              >IBM Full Stack Software Developer</a
            >:<span>&nbsp;<!-- -->IBM</span>
          </li>
          <li class="course-item">
            <a href="/learn/intro-programming"
              >Code Yourself! An Introduction to Programming</a
            >:<span>&nbsp;<!-- -->The University of Edinburgh</span>
          </li>
          <li class="course-item">
            <a href="/learn/cs-programming-java"
              >Computer Science: Programming with a Purpose</a
            >:<span>&nbsp;<!-- -->Princeton University</span>
          </li>
          <li class="course-item">
            <a href="/learn/python-crash-course">Crash Course on Python</a
            >:<span>&nbsp;<!-- -->Google</span>
          </li>
          <li class="course-item">
            <a href="/learn/programming-fundamentals"
              >Programming Fundamentals</a
            >:<span>&nbsp;<!-- -->Duke University</span>
          </li>
          <li class="course-item">
            <a href="/specializations/python">Python for Everybody</a>:<span
              >&nbsp;<!-- -->University of Michigan</span
            >
          </li>
          <li class="course-item">
            <a
              
              href="/specializations/coding-for-everyone"
              >Coding for Everyone: C and C++</a
            >:<span>&nbsp;<!-- -->University of California, Santa Cruz</span>
          </li>
          <li class="course-item">
            <a
              href="/specializations/java-programming"
              >Java Programming and Software Engineering Fundamentals</a
            >:<span>&nbsp;<!-- -->Duke University</span>
          </li>
          <li class="course-item">
            <a
              href="/learn/programming-languages"
              >Programming Languages, Part A</a
            >:<span>&nbsp;<!-- -->University of Washington</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
#app{
    margin-top: 48px;
    display: flex;
    flex-direction: column;;
    background-color: rgb(36, 35, 35);
    color: white;
}
.course-list{
    letter-spacing: 1px;
}
.course-item{
    margin-bottom: 24px;
}
</style>