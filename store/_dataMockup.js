export const dataMockUp = {
  todos: [
    {
      id: 2,
      title: "Code SSR App",
      exp: { day: "16", year: 2020, time: "16:30" },
      completed: true,
      expired: false,
      tasks: [
        { taskTitle: "Learn NuxtJS or NextJS", isDone: true },
        { taskTitle: "Learn basic SEO", isDone: true },
        { taskTitle: "Finish App", isDone: true }
      ]
    },
    {
      id: 2,
      title: "Code VueJS SPA App",
      exp: { day: "16", year: 2020, time: "16:30" },
      completed: true,
      expired: false,
      tasks: [
        { taskTitle: "Learn VueJS", isDone: true },
        { taskTitle: "Learn Vuex", isDone: true },
        { taskTitle: "Finish App", isDone: true }
      ]
    },
    {
      id: 2,
      title: "Code React SPA App",
      exp: { day: "16", year: 2020, time: "16:30" },
      completed: true,
      expired: false,
      tasks: [
        { taskTitle: "Learn React", isDone: true },
        { taskTitle: "Learn Redux", isDone: true },
        { taskTitle: "Finish App", isDone: true }
      ]
    }
  ],
  filter: "all" //all, done, remain
};
