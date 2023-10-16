// store.ts
import { defineStore } from 'pinia';

export const useTasks = defineStore('form', {
	state: () => ({
		tasks: [], // Массив задач
		task: '',
		description: '',
		deadline: '',
		id: '',
	}),
	actions: {
		addTask() {
			const { task, description, deadline } = this;
			const id = new Date().getTime();
			this.tasks.push({ id, task, description, deadline });
			// Очистить инпуты после добавления задачи
			this.task = '';
			this.description = '';
			this.deadline = '';
		},
		deleteTask(taskId) {
			const index = this.tasks.findIndex((task) => task.id === taskId);
			if (index !== -1) {
				this.tasks.splice(index, 1);
			}
		},
	},
});
