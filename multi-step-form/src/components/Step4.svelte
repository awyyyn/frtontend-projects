
<script lang="ts">
    import { steps, plan, monthlyOrYearly, pickedAdds } from '../stores/index.ts';

    let total = $monthlyOrYearly ? $plan.yearly : $plan.monthly;
    
    $pickedAdds.map(ads => {
        total += $monthlyOrYearly ? ads.priceYearly : ads.priceMonthly
        console.log(ads)
    });
 
</script>

<div class="sm:w-[445px]">
    <h1 class="text-marine font-bold text-2xl md:text-3xl">Finishing up</h1>
    <h2 class="text-coolGray pr-10 xs:pr-20 my-2 sm:pr-0">
        Double-check everything looks OK before confirming.
    </h2> 
 
    <div class="p-4 bg-magnolia rounded-lg">
        <div class="mb-4 flex justify-between items-center">
            <div class="flex flex-col items-start">
                <h1 class="text-marine font-bold">{$plan.title}{$monthlyOrYearly ? ' (Yearly)' : ' (Monthly)'}</h1>
                <button class="underline text-coolGray text-sm" on:click={() => steps.update(2)}>
                    Change
                </button>
            </div>
            <h1 class="text-marine font-bold text-sm">
                {$monthlyOrYearly ? `${$plan.yearly}/yr` : `$${$plan.monthly}/mo`}
            </h1>
        </div>
        <hr class="text-coolGray" />
        <div class="space-y-3 mt-3">
            {#each $pickedAdds as ads }
                <div class="flex justify-between ">
                    <h1 class="text-coolGray text-sm">{ads.title}</h1>
                    <h2 class="text-sm text-marine">${$monthlyOrYearly ? `${ads.priceYearly}/yr` : `${ads.priceMonthly}/m`}</h2>
                </div> 
            {/each}
        </div>
    </div>
    <div class="flex justify-between items-center p-4">
        <h1 class="text-sm text-coolGray">Total {$monthlyOrYearly ? ' (per year)' : ' (per month)'}</h1>
        <h1 class="text-lg text-purplish font-bold">{$monthlyOrYearly ? `$${total}/yr` : `$${total}/mo`}</h1>
    </div>
</div>