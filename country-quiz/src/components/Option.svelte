
<script lang="ts"> 
    import checkmark from '$lib/assets/Vector.svg'
    import crossmark from '$lib/assets/Vector(1).svg'
    export let answer: string;
    export let selected: boolean
    export let value: string;
    export let handleChange: (event: Event ) => void
    export let doneAnswering: boolean = false
    export let key: number

    // $: console.log()
    
</script>


<div>
    <input disabled={doneAnswering}  bind:group={selected} id={value} type="radio" on:change={(e) => handleChange(e)} class="hidden peer" name="answer" value={value}  />
    <label for={value} class={`group option relative inactive__question ${doneAnswering ? answer == value ? 'correct' : 'hover:bg-none text-[#6066D0B2]' : 'hover:border-[#F9A826] hover:bg-[#F9A826]'} ${selected && answer != value && 'incorrect'}`}>
        <span class={`${doneAnswering ? answer == value ? 'text-white' : selected ? 'text-white': 'default_text ' : 'text-[#6066d0b3] group-hover:text-white'}`}>{key == 0 ? 'A' : key == 1 ? 'B' : key == 2 ? 'C' : 'D'}</span>
        <h3 class={`${doneAnswering ? answer == value ? 'text-white' :  selected ? 'text-white': 'default_text' : 'text-[#6066d0b3] group-hover:text-white'}`}>{value}</h3>
        {#if doneAnswering && answer == value}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" class="absolute right-[18px]"> 
                <path fill="#F2F2F2" d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm3.88-11.71L8 12.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L15.3 7.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0Z"/>
            </svg>
        {:else if doneAnswering && selected && answer != value}
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" class="absolute right-[18px]">
                <path fill="#F2F2F2" d="M11.89 6.7 10 8.59 8.11 6.7A.996.996 0 1 0 6.7 8.11L8.59 10 6.7 11.89a.996.996 0 1 0 1.41 1.41L10 11.41l1.89 1.89a.996.996 0 1 0 1.41-1.41L11.41 10l1.89-1.89a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.38-1.41 0ZM10 0C4.47 0 0 4.47 0 10s4.47 10 10 10 10-4.47 10-10S15.53 0 10 0Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Z"/>
            </svg> 
        {/if}
    </label>
</div>