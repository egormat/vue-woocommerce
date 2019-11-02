<template>
  <div class="confirmWindow">
    Вы уверены, что хотите убрать {{item.name}} из корзины?
    <button class="yes" @click="$emit('confirm')">Да</button>
    <button class="cancel" @click="$emit('cancel')">Нет</button>
  </div>
</template>

<script>

export default {
props: ['item']
}


</script>
