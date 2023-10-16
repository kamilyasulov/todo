// store.ts
import { defineStore } from 'pinia';

interface Task {
	id: number;
	task: string;
	description: string;
	deadline: string;
}

export const useTasks = defineStore({
	id: 'tasks',
	state: () => ({
		tasks: [] as Task[],
		task: '',
		description: '',
		deadline: '',
	}),
	actions: {
		addTask(this: Task, task: string, description: string, deadline: string) {
			const id = new Date().getTime();
			this.tasks.push({ id, task, description, deadline });
			this.task = '';
			this.description = '';
			this.deadline = '';
		},
		deleteTask(this: Task, taskId: number) {
			const index = this.tasks.findIndex((task) => task.id === taskId);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			}
		},
	},
});

