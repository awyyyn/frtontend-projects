<script>
    import '../app.css';   
    import Sidebar from '../components/Sidebar.svelte'
    import { 
        email,
        phone,
        done,
        name, 
        steps, 
        pickedAdds, 
        nameErr, 
        emailErr, 
        phoneErr, 
        plan, 
        planErr, 
        addsErr 
} from '../stores/index.ts'
    $: isStep4 = $steps === 4;

    
    const step1Validation = () => {  
        if($name !== "") {
            $nameErr = false
        }else{
            $nameErr = true
        }

        if($email !== "") {
            $emailErr = false
        }else{
            $emailErr = true
        }
        if($phone !== "") {
            $phoneErr = false
        }else{
            $phoneErr = true
        }

        if($name == "" || $email == "" || $phone == "") return
        
        steps.next()
    }

    const step2Validation = () => {
        if($plan.id === ""){ 
            $planErr = true
            return
        }
        $planErr = false
        steps.next()
    }

    const step3Validation = () => {
        if($pickedAdds.length < 1) {
            $addsErr = true;
            return
        }
        $addsErr = false;
        steps.next()
    }

    const handleNextorSubmit = () => {  
        if(isStep4) {
            $done = true 
        }else{ 

            if($steps === 1) {
                step1Validation()
            }else if($steps === 2){
                step2Validation()
            }else if($steps === 3){
                step3Validation()
            }

        }
    }
</script>


<div class="h-screen relative w-screen sm:grid sm:place-content-center bg-lightBlue ">
    <div class=" flex flex-col sm:flex-row w-full sm:h-[450px] md:h-[500px]  sm:w-[700apx]  md:w-[85a0px] sm:bg-white sm:rounded-lg sm:drop-shadow-xl sm:p-4">
        <Sidebar />
        <div 
            class="
                rounded-xl mx-4 drop-shadow-xl -mt-24 xs:-mt-16 z-[5] bg-white p-6
                sm:rounded-none sm:mx-0 sm:drop-shadow-none sm:-mt-0 sm:p-0
                sm:px-8 sm:py-4 md:px-20 flex flex-col justify-between  
            "> 
            <slot />

            

            <!-- SHOW IN LARGE DEVICE -->
            {#if !$done}
                <div class="w-full hidden sm:flex {$steps > 1 ? 'justify-between' : 'justify-end'} sm:mt-10 ">
                    {#if $steps > 1}
                        <button class="text-coolGray font-semibold" on:click={() => steps.back()}>
                            Go back 
                        </button>
                    {/if}

                    <button on:click={handleNextorSubmit} class=" text-alabaster rounded-lg px-6 {isStep4 ? 'bg-purplish' : 'bg-marine'} py-2">
                        {isStep4 ? 'Confirm' : 'Next Step'}
                    </button>
                </div>
            {/if}

        </div>
    </div> 
    
    {#if !$done}
    
        <div class="sm:hidden flex absolute  bottom-0 py-4 w-full px-10 bg-alabaster  {$steps > 1 ? 'justify-between' : 'justify-end'} sm:mt-10 ">
            {#if $steps > 1}
                <button class="text-coolGray font-semibold" on:click={() => steps.back()}>
                    Go back 
                </button>
            {/if}

            <button on:click={handleNextorSubmit} class=" text-alabaster rounded-lg px-6 {isStep4 ? 'bg-purplish' : 'bg-marine'} py-3">
                {isStep4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    {/if} 
</div>