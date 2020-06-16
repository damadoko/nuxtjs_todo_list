export const dataMockUp = {
  todos: [
    {
      id: 2,
      title: "Code SSR App",
      exp: { date: "16-06-20", time: "16:30" },
      completed: false,
      expired: false,
      tasks: [
        { taskID: 0, taskTitle: "Learn NuxtJS or NextJS", isDone: true },
        { taskID: 1, taskTitle: "Learn basic SEO", isDone: true },
        { taskID: 2, taskTitle: "Finish App", isDone: true }
      ]
    },
    {
      id: 1,
      title: "Code VueJS SPA App",
      exp: { date: "16-06-20", time: "16:30" },
      completed: true,
      expired: false,
      tasks: [
        { taskID: 0, taskTitle: "Learn VueJS", isDone: true },
        { taskID: 1, taskTitle: "Learn Vuex", isDone: true },
        { taskID: 2, taskTitle: "Finish App", isDone: true }
      ]
    },
    {
      id: 0,
      title: "Code React SPA App",
      exp: { date: "16-06-20", time: "16:30" },
      completed: true,
      expired: false,
      tasks: [
        { taskID: 0, taskTitle: "Learn React", isDone: true },
        { taskID: 1, taskTitle: "Learn Redux", isDone: true },
        { taskID: 2, taskTitle: "Finish App", isDone: true }
      ]
    }
  ],
  filter: "all" //all, done, remain
};
