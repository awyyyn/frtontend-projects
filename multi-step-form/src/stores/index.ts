import type { addsTyps, billing } from "$lib/types.js";
import { writable } from "svelte/store";
 

function stepsFn() {
    const { subscribe, set, update  } = writable(1); 

    return {
        subscribe,  
        next: () => update(n => n + 1),
        back: () => update(n => n - 1),
        update: (num: number) => set(num)
    }
}

export const nameErr = writable(false)
export const emailErr = writable(false)
export const phoneErr = writable(false)
export const planErr = writable(false)
export const addsErr = writable(false)


export const done = writable(false)
export const name = writable('')
export const email = writable('')
export const phone = writable('');
export const plan = writable<billing>({icon: '', id: '', monthly: 0, title: '', yearly: 0});
export const monthlyOrYearly = writable(false)
export const pickedAdds = writable<addsTyps[]>([]) 
export const steps = stepsFn() 