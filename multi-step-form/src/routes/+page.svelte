<script> 
    import { steps, name, done, email, phone, pickedAdds } from '../stores/index.ts'  
    import Step1 from '../components/Step1.svelte'
    import Step2 from '../components/Step2.svelte'
    import Step3 from '../components/Step3.svelte'
    import Step4 from '../components/Step4.svelte'
    import Thankyou from '../components/Thankyou.svelte'
  
</script>

   

<form> 
    {#if $steps === 1}
        <Step1 /> 
    {/if}
    {#if $steps === 2}
        <Step2 />
    {/if}
    {#if $steps === 3}
        <Step3 />
    {/if}
    {#if $steps === 4}
        {#if $done}
            <Thankyou /> 
        {:else}
            <Step4 />
        {/if}
    {/if} 
</form>
