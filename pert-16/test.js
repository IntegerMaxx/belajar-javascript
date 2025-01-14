function checkGrades(grades){
    for(let i = 0; i < grades.length; i++){
         if(isNaN(grades[i])){
            throw new Error('Mohon maaf nilai yang anda masukkan bukan string number ataupun number');
        } else if(grades[i] === true || grades[i] === false){
            const dump = grades[i] ? 1 : 0;
            grades[i] = dump;

        }

        if (typeof grades[i] === 'string' || typeof grades[i] === 'number') {
                const strValue = grades[i];
                const dump = parseInt(strValue);
                grades[i] = dump;
        }

        const grade = grades[i];
        let predicate;

        if(grade >= 90){
            predicate = 'A';
        } else if(grade >= 80){
            predicate = 'B';
        } else if(grade >= 70){
            predicate = 'C';
        } else if(grade >= 60){
            predicate = 'D';
        } else{
            predicate = 'E';
        }

        console.log(`Grade ${i + 1}: ${grade} (${predicate})`);

    }
}

try {
    const studentGrades = [95, 85, 65, 80, 70, 90, 40, '1', '40', 30, true, false, 20];
    checkGrades(studentGrades);
} catch (e){

    console.error(e);
}



