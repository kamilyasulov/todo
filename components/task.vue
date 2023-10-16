<template>
	<div class="task">
		<button class="delete" @click="deleteTask(props.task.id)">X</button>
		<h3>{{ props.task.task }}</h3>
		<p>{{ props.task.description }}</p>
		<p class="date-value">{{ props.task.deadline }}</p>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	task: {
		type: Object as () => {
			task: string;
			description: string;
			deadline: string;
			id: number;
		},
		required: true,
	},
});
import { useTasks } from '/store/tasks';

const formStore = useTasks();
const deleteTask = (taskId: number) => {
	// Вызываем действие удаления задачи в стейт-менеджере с передачей taskId
	formStore.deleteTask(taskId);
};
</script>

<style scoped>
.task {
	position: relative;
	border: 2px solid #000;
	padding: 10px;
	width: 550px;
	border-radius: 10px;
}

h3 {
	font-weight: 700;
}

.date-value {
	font-weight: 500;
}

.delete {
	border-radius: 4px;
	display: none;
	position: absolute;
	right: -10px;
	top: -10px;
	background: red;
	color: #fff;
	width: 30px;
}

.task:hover .delete {
	display: block;
}
</style>
