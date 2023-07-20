
<script>
    import sidebar from '../assets/bg-sidebar-desktop.svg'
    import sidebarMobile from '../assets/bg-sidebar-mobile.svg'
    import { steps } from '../stores/index.ts';

    $:  step1 = $steps === 1 ? 'active__number' : 'inactive__number';
    $:  step2 = $steps === 2 ? 'active__number' : 'inactive__number';
    $:  step3 = $steps === 3 ? 'active__number' : 'inactive__number';
    $:  step4 = $steps === 4 ? 'active__number' : 'inactive__number';
    
</script>

<div class="sidebar bg-mobile sm:bg-desktop">
    <!-- <img alt="sidebar" class="absolute sm:block hidden object-cover" src={sidebar } />
    <img alt="sidebar" class="sm:hidden absolute w-full " src={sidebarMobile} /> -->
    <div class="number__container">
        <div class="flex sm:py-2 sm:items-center sm:gap-x-2 sm:ml-4 md:ml-8">
            <p class="number {step1}" >1</p>
            <div class="step">
                <span>Step 1</span>
                <h2>your info</h2>
            </div>
        </div>
        <div class="flex sm:py-2 sm:items-center sm:gap-x-2 sm:ml-4 md:ml-8">
            <p class="number {step2}">2</p>
            <div class="step">
                <span>Step 2</span>
                <h2>Select plan</h2>
            </div>
        </div>
        <div class="flex sm:py-2 sm:items-center sm:gap-x-2 sm:ml-4 md:ml-8">
            <p class="number {step3}">3</p>
            <div class="step">
                <span>Step 3</span>
                <h2>Add-ons</h2>
            </div>
        </div>
        <div class="flex sm:py-2 sm:items-center sm:gap-x-2 sm:ml-4 md:ml-8">
            <p class="number {step4}">4</p>
            <div class="step">
                <span>Step 4</span>
                <h2>Summary</h2>
            </div>
        </div>
    </div>
</div>