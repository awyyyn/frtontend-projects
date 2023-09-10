import { writable } from "svelte/store";

 

function answerStore() {
    const { set, subscribe,  update } = writable(0)
    return {
        subscribe,
        addCorrectAnswer: () => update(n => n + 1),
        reset: () => set(0) 
    }
}

export const correctAnswers = answerStore()