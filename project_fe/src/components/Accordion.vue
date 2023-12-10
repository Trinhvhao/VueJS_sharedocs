<template>
	<div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
		<div class="question">{{ faq.question }}</div>
		<div class="answer">{{ faq.answer }}</div>
	</div>
</template>

<script>
export default {
	name: 'FAQ',
	props: ['faq', 'index', 'open']
}
</script>
<style scoped>
.faq{
    display: block;
    width:100%;
    max-width: 768px;
    margin:15px auto;
    padding:15px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
    background-color: #FFF;
    cursor: pointer;
}
.faq .question{
    position: relative;
    color: #3c3c3c;
    font-size: 20px;
    transition: all 0.4s linear;
}
.faq .question::after{
    content: '';
    position: absolute;
    top:50%;
    right:0px;
    transform: translateY(-50%) rotate(0deg);
      width: 30px;
  height: 30px;
  background-image: url('https://www.svgrepo.com/show/533621/arrow-sm-right.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  
  transition: all 0.2s linear;
}
.faq.open .question {
  margin-bottom: 15px;
}
.faq.open .question::after {
  transform: translateY(-50%) rotate(90deg);
}
.faq .answer {
  color: #00666c;
  font-size: 16px;
  opacity: 0;
  max-height: 0px;
  overflow-y: hidden;
  transition: all 0.4s ease-out;
}
.faq.open .answer {
  opacity: 1;
  max-height: 1000px;
}

</style>