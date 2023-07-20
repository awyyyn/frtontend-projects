<script>
    import { plan, monthlyOrYearly, planErr } from '../stores/index.ts'
    import { billing } from '../lib/data.ts' 
</script>

<div class="sm:w-[445px] ">
    <h1 class="text-marine font-bold text-2xl md:text-3xl">Select your plan</h1>
    <h2 class="text-coolGray pr-10 xs:pr-20 my-2 sm:pr-0">
        You have the option of monthly or yearly billing.
    </h2> 
    <div class="flex flex-col sm:flex-row sm:justify-between mt-6 sm:gap-x-3 ">
        {#each billing as bill}
        
        <label for={bill.id}>
            <div  class="billing hover:border-purplish cursor-pointer {$plan.id === bill.id ? 'active__bill' : 'inactive__bill'} ">
                <input class="hidden" value={bill} bind:group={$plan} id={bill.id} type="radio" />
                <img src={bill.icon} alt={bill.id} class="sm:h-10 sm:w-10" />  
                <div class="">
                    <div>
                        <h1 class="text-marine font-bold text-lg">{bill.title}</h1>
                        <h2 class="text-coolGray">{$monthlyOrYearly ? `$${bill.yearly}/yr` : `$${bill.monthly}/mo`}</h2>
                    </div>
                    {#if $monthlyOrYearly}
                        <h2 class="text-marine">2 months free</h2>
                    {/if}
                </div>
            </div>
        </label>
        {/each}
    </div>
    {#if $planErr && $plan.id === ""}    
        <span class="text-strawberry">Choose a plan to continue</span>
    {/if}
    <div class="flex gap-5 justify-center sm:mt-5">
        <h1 class="capitalize {!$monthlyOrYearly && 'text-marine'} font-bold text-coolGray">
            monthly 
        </h1> 
        <label for="toggleTwo" class="flex cursor-pointer select-none items-center">
            <div class="relative">
              <input type="checkbox" id="toggleTwo" class="sr-only hidden" value={$monthlyOrYearly} bind:checked={$monthlyOrYearly} />
              <div class="block h-6 sm:h-7 w-10 sm:w-14 rounded-full bg-marine"></div>
              <div 
                class="absolute {!$monthlyOrYearly ? 'left-1' : 'left-5 sm:left-8'}  transition-[left] top-1 sm:h-5 sm:w-5 w-4 h-4 rounded-full bg-white "
              ></div>
            </div>
        </label> 
        <h1 class="capitalize {$monthlyOrYearly && 'text-marine'} font-bold text-coolGray">
            yearly   
        </h1>
    </div>
</div>

<!-- 
<label for="arcade">
    <div  class="billing active__bill">
        <input class="hidden" value="arcade" bind:group={plan} id="arcade" type="radio" />
        <img src={arcadeSvg} alt="arcade" class="" />  
        <div class="-space-y-1">
            <h1 class="text-marine font-bold text-lg">Arcade</h1>
            <h2 class="text-coolGray">$9/mo</h2>
        </div>
    </div>
</label>

<label for="advanced" >
    <div class="billing inactive__bill">
        <input class="hidden" value="advanced" bind:group={plan} id="advanced" type="radio" />
        <img src={advancedSvg} alt="advanced" class="" /> 
    </div>
</label>

<label for="pro" >
    <div class="billing inactive__bill"> 
        <input class="hidden" value="pro" bind:group={plan} id="pro" type="radio" />
        <img src={proSvg} alt="pro" class="" /> 
    </div>
</label> -->