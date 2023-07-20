<script lang="ts">
    import { fly } from 'svelte/transition'
    import { email, phone, name, nameErr, emailErr, phoneErr } from '../stores/index.ts' 
 
  
</script>

<div class="sm:w-[445px]">
    <h1 class="text-marine font-bold text-2xl md:text-3xl">Personal info</h1>
    <h2 class="text-coolGray pr-10 xs:pr-20 my-2 sm:pr-0">
        Plase provide your name, email address, and phone number.
    </h2>
    <div class="form-group">
        <div class="flex justify-between">
            <label for="name" class="form-label">Name</label>
            {#if $nameErr && $name == ""}
                <span class="text-strawberry text-sm font-semibold" >This field is required</span>
            {/if}
        </div>
        <input bind:value={$name} id="name" class="form-input {$nameErr && $name == "" && 'border-strawberry'}" placeholder="e.g. Stephen King"/>
    </div>
    <div class="form-group">
        <div class="flex justify-between">
            <label for="email" class="form-label">Email Address</label>
            {#if $emailErr && $email == ""}
                <span class="text-strawberry text-sm font-semibold" >This field is required</span>
            {/if}
        </div>
        <input bind:value={$email} id="email" class="form-input {$emailErr && $email == "" && 'border-strawberry'}" placeholder="e.g. stephenking@lorem.com"/>
    </div>
    <div class="form-group"> 
        <div class="flex justify-between">
            <label for="phone" class="form-label" class:nameErr={'bg-red-700'}>Phone Number</label> 
            {#if $phoneErr && $phone == ""}
                <span class="text-strawberry text-sm font-semibold" >This field is required</span>
            {/if}
        </div>
        <input bind:value={$phone} id="phone" class="form-input {$phoneErr && $phone == "" && 'border-strawberry'}" placeholder="e.g. + 1 234 567 890"/>
    </div> 
</div>