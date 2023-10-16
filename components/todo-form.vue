<template>
	<form @submit.prevent="addTask">
		<div class="input-wrapper">
			<input class="todo-text" type="text" v-model="formStore.task" placeholder="Задача">
		</div>
		<div class="input-wrapper">
			<input class="todo-text" type="text" v-model="formStore.description" placeholder="Описание">
		</div>
		<p>Срок выполнения</p>
		<input class="date" type="date" v-model="formStore.deadline">
		<div class="button-wrapper">
			<button class="add-task" type="submit">Добавить</button>
		</div>
	</form>
</template>


<script setup lang="ts">
import { useTasks } from '/store/tasks';

const formStore = useTasks();

const addTask = () => {
	formStore.addTask(formStore.task, formStore.description, formStore.deadline);
};
</script>



<style>
form{
	width: 550px;
	padding: 30px;
	margin-top: 50px;
	border: 3px solid rgb(36, 100, 139);
	border-radius: 10px;
}
.input-wrapper{
	margin-bottom: 20px;
}
.todo-text{
	width: 100%;
	border: 2px solid #444444;
	padding: 7px;
	margin-right: 15px ;
	border-radius: 7px;
}
.date{
	width: 150px;
	border: 2px solid #444444;
	padding: 7px;
	border-radius: 7px;
}

.add-task{
	background: #2929b0;
	padding: 10px;
	color: white;
	border-radius: 7px;
}
.button-wrapper{
	margin-top: 20px;
}
</style>

