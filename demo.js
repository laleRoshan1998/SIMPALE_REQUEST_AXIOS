const axios = require('axios')
const fs = require('fs')
const input = require('readline-sync')


const meraki = () =>{
    if (fs.existsSync('course.json',)){
        let file_data = fs.readFileSync('course.json','utf-8')
        let insert = JSON.parse(file_data)
        // console.log(insert);
        let inteser =1 
        for (let i of insert) {
        let count_add = (inteser+" "+i['id'])
            console.log(count_add);
            inteser +=1
        }
        const find_id = input.question('Enter the id number:- ')
        const number = insert[find_id-1]
        console.log(number);

    }else{
        const api = async() =>{
            res = await axios.get('https://api.merakilearn.org/courses')
            console.log(res);
            fs.writeFileSync('course.json',JSON.stringify((res.data),null,3))
            let file_data = fs.readFileSync('course.json','utf-8')
            let insert = JSON.parse(file_data)
            console.log(insert);
            let inteser = 1
            for (let i of insert){
                let count_add = (inteser+" "+['name'])
                console.log(count_add);
                inteser += 1    
            }
        }
        api()
    }
}
meraki()