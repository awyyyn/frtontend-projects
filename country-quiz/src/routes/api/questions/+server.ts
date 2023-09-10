import type { RequestHandler } from "@sveltejs/kit"

export type dataType = {
    flag: string,
    capital: string,
    name: {
        common: string
    },
    continents: string[]
    flags: {
        svg: string
    }
}

interface filteredDataType {
    flag: string,
    capital: string,
    name: string,
    continent: string
    flagImg: string
}

export interface questionType extends filteredDataType {
    options: filteredDataType[], 
    question: string,
    guess: string, 
    answer: string 
}

export const GET: RequestHandler = async ({fetch}) => {
    const res = await fetch('https://restcountries.com/v3.1/all')
     
    const data = await res.json()  
 

    const filteredData = data.filter((item: dataType) => item.name.common != "")?.map((item: dataType) => {
        return {
            name: item.name.common ? item.name.common : "",
            capital: item.capital ? item.capital[0] : "",
            flag: item.flag ? item.flag : "",
            continent: item.continents[0],
            flagImg: item.flags.svg
        }
    });


    function getOptions (answer:filteredDataType, guess: string) {
        let options
        if(guess == "country"){
            options = filteredData.filter((item: filteredDataType) => item.name != answer.name).map((item: filteredDataType) => {
                return {
                    name: item.name,
                    capital: item.capital,
                    flag: item.flag,
                    continent: item.continent,
                    flagImg: item.flagImg
                }
            })
        }else if(guess == "flag"){
            options = filteredData.filter((item: filteredDataType) => item.flag != answer.flag).map((item: filteredDataType) => {
                return {
                    name: item.name,
                    capital: item.capital,
                    flag: item.flag,
                    continent: item.continent,
                    flagImg: item.flagImg, 
                }
            })
        }else if(guess == "capital"){
            options = filteredData.filter((item: filteredDataType) => item.capital != answer.capital).map((item: filteredDataType) => {
                return {
                    name: item.name,
                    capital: item.capital,
                    flag: item.flag,
                    continent: item.continent,
                    flagImg: item.flagImg
                }
            })
        } 
        
        const count = Math.floor(Math.random() * options.length - 10);

        
        options = options.slice(count, count + 3)
        options = [...options, answer]
        
        options = options.sort(() => 0.5 - Math.random())

        return options
    }
    
    const question1 = () => { 
        const question = filteredData[Math.floor(Math.random() * filteredData.length + 1)];
        return {
            ...question,
            question: `${question.capital} is the capital of`,
            guess: 'country',
            options: getOptions(question, "country"),
            answer: question.name
        }
    }

    const question2 = () => { 
        const question = filteredData[Math.floor(Math.random() * filteredData.length + 1)];
        return {
            ...question,
            question: `Which country does this flag belong to?`,
            guess: 'flag', 
            options: getOptions(question, "flag"),
            answer: question.name,
        }
    }

    const question3 = () => { 
        const question = filteredData[Math.floor(Math.random() * filteredData.length + 1)];
        return {
            ...question,
            question: `What is the capital of ${question.name}`,
            guess: 'capital',
            options: getOptions(question, "capital"),
            answer: question.capital
        }
    }

    const question4 = () => { 
        const question = filteredData[Math.floor(Math.random() * filteredData.length + 1)];
        return {
            ...question,
            question: `${question.capital} is the capital of`,
            guess: 'country',
            options: getOptions(question, "country"),
            answer: question.name
        }
    }

    const question5 = () => { 
        const question = filteredData[Math.floor(Math.random() * filteredData.length + 1)];
        return {
            ...question,
            question: `Which country does this flag belong to?`,
            guess: 'flag', 
            options: getOptions(question, "flag"),
            answer: question.name
        }
    }
  

    
    const questions:questionType[] = [
        question1(),
        question2(),
        question3(),
        question4(),
        question5()
    ]

    return new Response(JSON.stringify(questions))
}