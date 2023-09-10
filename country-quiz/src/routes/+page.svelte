 
<script lang="ts">  

    import globe from '$lib/assets/undraw_adventure_4hum 1.svg' 
    import quizDoneImage from '$lib/assets/undraw_winners_ao2o 2.svg'
    import Option from '../components/Option.svelte'; 
	import Skeleton from '../components/Skeleton.svelte';
    import { correctAnswers } from './store'; 
    export let data 
    let questions = data
    let answer: string 
    let num = 0  
    let doneAnswering = false  
    let loading = false

    const handleNext = () => {  
        answer = ''
        doneAnswering = false;
        num += 1; 
    }

    const handleTryAgain = async () => {
        loading = true
        num = 0;
        correctAnswers.reset();
        const res = await fetch('/api/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        const newQuestions = await res.json()
        questions = {questions: newQuestions}
        loading = false
    }
 

    const handleChange = (e: Event) => {
        const target = e.currentTarget as HTMLInputElement 
        answer = target.value; 
        if(answer == questions.questions[num].answer) correctAnswers.addCorrectAnswer()
        doneAnswering = true  
    } 
  

</script>
 

<div class="flex flex-col relative gap-y-[10px] "> 
    <div class="z-50 flex">
        <h1 class="text-[#F2F2F2] text-[36px] font-bold not-italic leading-normal">Country Quiz</h1>
        {#if num < 5}
            <img src={globe} alt="globe" class="w-[162px] h-[116px] absolute right-0 top-0 flex-shrink-0 object-contain" />
        {/if}
    </div>
    <div class="w-[464px] pt-[68px] ppb-[68px] pb-[46px] px-[32px] z-[40] min-h-[515px] flex-shrink-0 rounded-[24px] bg-white"> 
        {#if num > 4} 
            <div class="flex flex-col items-center">
                <img src={quizDoneImage} class="w-[238px]  h-[136px] flex-shrink-0" alt="Quiz Done" /> 
                <h1 class="text-[#1D355D] text-[48px]  font-bold leading-normal mt-[72px]">Results</h1>
                <p class="text-[#1D355D] text-[18px]  leading-normal font-normal">
                    You got <span class="text-[36px] text-[#6FCF97] font-bold leading-normal">{$correctAnswers}</span> correct answers
                </p>
                <button on:click={handleTryAgain} class="hover:text-white hover:bg-[#1D355D] text-[#1D355D] border-[#1D355D] border-2 text-[18px] font-semibold leading-normal not-italic px-[61px] py-[18px] mt-[39px] rounded-xl ">
                    Try again
                </button>
            </div>
        {:else}
            {#if questions.questions[num].guess == "flag" && !loading}
                <img src={data.questions[num].flagImg} alt="flag" class="w-[84px] h-[54px] flex-shrink-0 mb-[28px]" />
            {/if}
            {#if loading}
                <Skeleton />
            {:else}
                <h1 class="text-[#2F527B] text-[24px] not-italic leading-normal font-bold ">
                    {questions.questions[num].question}
                </h1>
            {/if}
            <div class="space-y-[30px] mt-[32px]"> 
                
                {#if loading}
                    {#each [1, 2, 3, 4] as item }
                        <Skeleton />
                    {/each}
                {:else}
                    {#each questions.questions[num].options as item, i (i) }
                        <Option    
                            key={i}
                            doneAnswering={doneAnswering} 
                            selected={questions.questions[num].guess == "capital" ? answer == item.capital ? true : false : answer == item.name ? true : false}
                            handleChange={handleChange}
                            answer={questions.questions[num].answer} 
                            value={questions.questions[num].guess == "capital" ? item.capital : item.name} 
                        />   
                    {/each}
                {/if}
            </div>
            <button class:show={doneAnswering} class="next__button" on:click={handleNext}>
                Next
            </button>
        {/if} 
    </div>
</div>