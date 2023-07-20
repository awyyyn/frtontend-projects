

<script lang='typescript'>
    import { adds } from '../lib/data.ts'
    import { pickedAdds, monthlyOrYearly, addsErr } from '../stores/index.ts' 
</script>


<div class="sm:w-[445px] ">
    <h1 class="text-marine font-bold text-2xl md:text-3xl">Pick add-ons</h1>
    <h2 class="text-coolGray pr-10 xs:pr-20 my-2 sm:pr-0">
        Add-ons help enhance your gaming experience.
    </h2> 
    <div class="flex flex-col gap-y-4 mt-8 ">
        {#each adds as ad}
            <label for={ad.id}>
                <div class="flex gap-x-4 cursor-pointer {$pickedAdds.find(({id}) => id === ad.id) && 'border-purplish'} justify-between border border-coolGray items-center rounded-lg px-4 py-2">
                    <div class="flex gap-x-4">
                        <input class="bg-purplsih  " type="checkbox" name="adds" id={ad.id} value={ad} bind:group={$pickedAdds} />
                        <div>
                            <h1 class="text-marine text-normal font-semibold">{ad.title}</h1>
                            <h2 class="text-coolGray text-sm">{ad.sub}</h2>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-xs text-purplish ">+${$monthlyOrYearly ? `${ad.priceYearly}/yr` : `${ad.priceMonthly}/mo`}</h3>
                    </div>
                </div>
                
            </label>
        {/each}
        {#if $pickedAdds.length < 1 && $addsErr} 
             <span class="text-strawberry text-sm font-semibold">Choose at least 1 to continue</span>
        {/if}
    </div>

</div>