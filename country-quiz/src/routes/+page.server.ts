

export async function load({fetch}) {

    const res = await fetch('/api/questions', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const questions = await res.json();
 

    return {
        questions
    }

    
}
