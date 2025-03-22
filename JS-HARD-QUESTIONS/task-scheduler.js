class TaskScheduler {
  constructor(limit) {
    this.concurrency = Number(limit);
    this.runningTasks = 0;
    this.__waitingQueue = [];
  }

  getNextTask() {
    if (
      this.runningTasks < this.concurrency &&
      this.__waitingQueue.length > 0
    ) {
      const nextTask = this.__waitingQueue.shift();
      nextTask();
    }
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      async function __taskRunner(params) {
        this.runningTasks += 1;
        try {
          const result = await task();
          console.log(result);
          resolve();
        } catch (error) {
          console.log("Task Fail");
          reject();
        } finally {
          this.runningTasks -= 1;
          this.getNextTask();
        }
      }
      if (this.runningTasks < this.concurrency) {
        __taskRunner.call(this);
      } else {
        this.__waitingQueue.push(__taskRunner.bind(this));
      }
    });
  }
}

const scheduler = new TaskScheduler(1);

scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 1"), 5000))
);

scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 2"), 5000))
);

scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 3"), 5000))
);

scheduler.addTask(
  () => new Promise((res) => setTimeout(() => res("Task 4"), 5000))
);
