<template>
	<page-section>
		<h1>KAMA todo</h1>
		<todo-form/>
		<div class="tasks-list" v-for="task in formStore.tasks">
			<task
				:task="task"
			/>
		</div>
	</page-section>

</template>
<script setup lang="ts">
import TodoForm from "~/components/todo-form.vue";
import Task from "~/components/task.vue";
import { useTasks } from '/store/tasks';
const formStore = useTasks();

console.log(formStore.tasks)

</script>

<style>

h1{
	font-size: 50px;
}

.tasks-list{
	margin-top: 20px;
}
</style>
